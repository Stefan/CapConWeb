export type CspOptions = {
  isDev?: boolean;
};

export function buildContentSecurityPolicy(
  nonce: string,
  options: CspOptions = {},
): string {
  const isDev = options.isDev ?? process.env.NODE_ENV === "development";
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    // Nonce covers Next/Tailwind style tags; unsafe-inline keeps React style={{}} valid.
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`,
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");
}

export function createCspNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString("base64");
}
