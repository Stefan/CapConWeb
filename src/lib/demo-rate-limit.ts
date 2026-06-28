export const DEMO_RATE_LIMIT_MAX = 5;
export const DEMO_RATE_LIMIT_WINDOW_SEC = 60 * 60;

export type RateLimitBackend = {
  increment(key: string, windowSec: number): Promise<number>;
};

const memoryStore = new Map<string, { count: number; resetAt: number }>();

export const memoryRateLimitBackend: RateLimitBackend = {
  async increment(key, windowSec) {
    const now = Date.now();
    const entry = memoryStore.get(key);
    if (!entry || entry.resetAt <= now) {
      memoryStore.set(key, { count: 1, resetAt: now + windowSec * 1000 });
      return 1;
    }
    entry.count += 1;
    return entry.count;
  },
};

type RedisRestConfig = {
  url: string;
  token: string;
};

function readRedisRestConfig(): RedisRestConfig | null {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (upstashUrl && upstashToken) {
    return { url: upstashUrl.replace(/\/$/, ""), token: upstashToken };
  }

  const kvUrl = process.env.KV_REST_API_URL?.trim();
  const kvToken = process.env.KV_REST_API_TOKEN?.trim();
  if (kvUrl && kvToken) {
    return { url: kvUrl.replace(/\/$/, ""), token: kvToken };
  }

  return null;
}

async function upstashPipeline(
  config: RedisRestConfig,
  commands: unknown[][],
): Promise<unknown[]> {
  const response = await fetch(`${config.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
  });

  if (!response.ok) {
    throw new Error(`Redis pipeline failed (${response.status})`);
  }

  const payload = (await response.json()) as { result?: unknown[]; error?: string };
  if (payload.error) {
    throw new Error(payload.error);
  }
  if (!Array.isArray(payload.result)) {
    throw new Error("Redis pipeline returned invalid payload");
  }
  return payload.result;
}

function createUpstashBackend(config: RedisRestConfig): RateLimitBackend {
  return {
    async increment(key, windowSec) {
      const [countResult, ttlResult] = await upstashPipeline(config, [
        ["INCR", key],
        ["TTL", key],
      ]);

      const count = Number(countResult);
      const ttl = Number(ttlResult);
      if (!Number.isFinite(count)) {
        throw new Error("Redis INCR returned invalid count");
      }

      if (count === 1 || ttl === -1) {
        await upstashPipeline(config, [["EXPIRE", key, windowSec]]);
      }

      return count;
    },
  };
}

let redisBackend: RateLimitBackend | null | undefined;

function resolveBackend(): RateLimitBackend {
  if (redisBackend !== undefined) {
    return redisBackend ?? memoryRateLimitBackend;
  }

  const config = readRedisRestConfig();
  redisBackend = config ? createUpstashBackend(config) : null;
  return redisBackend ?? memoryRateLimitBackend;
}

export function sanitizeRateLimitClientKey(clientKey: string): string {
  const trimmed = clientKey.trim() || "unknown";
  return trimmed.replace(/[^a-zA-Z0-9.:_-]/g, "_").slice(0, 64);
}

export function extractDemoRequestClientKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = headers.get("x-real-ip")?.trim();
  return sanitizeRateLimitClientKey(forwarded ?? realIp ?? "unknown");
}

export async function isDemoRateLimited(
  clientKey: string,
  options?: { backend?: RateLimitBackend; max?: number; windowSec?: number },
): Promise<boolean> {
  const backend = options?.backend ?? resolveBackend();
  const max = options?.max ?? DEMO_RATE_LIMIT_MAX;
  const windowSec = options?.windowSec ?? DEMO_RATE_LIMIT_WINDOW_SEC;
  const key = `demo-request:${sanitizeRateLimitClientKey(clientKey)}`;
  const count = await backend.increment(key, windowSec);
  return count > max;
}

/** Test helper — clears in-memory counters between isolated tests. */
export function resetMemoryRateLimitStore(): void {
  memoryStore.clear();
  redisBackend = undefined;
}

export function usesDistributedRateLimitBackend(): boolean {
  return readRedisRestConfig() !== null;
}
