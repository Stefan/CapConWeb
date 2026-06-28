import type { SiteDictionary } from "@/i18n/types";

/** Shallow-deep merge for variant overlays onto the base dictionary. */
export function mergeDictionary(
  base: SiteDictionary,
  patch: Partial<SiteDictionary>,
): SiteDictionary {
  return {
    ...base,
    ...patch,
    meta: { ...base.meta, ...patch.meta },
    a11y: { ...base.a11y, ...patch.a11y },
    site: { ...base.site, ...patch.site },
    nav: { ...base.nav, ...patch.nav },
    hero: { ...base.hero, ...patch.hero },
    problem: patch.problem
      ? {
          ...base.problem,
          ...patch.problem,
          items: patch.problem.items ?? base.problem.items,
        }
      : base.problem,
    solution: patch.solution
      ? {
          ...base.solution,
          ...patch.solution,
          steps: patch.solution.steps ?? base.solution.steps,
        }
      : base.solution,
    features: patch.features
      ? {
          ...base.features,
          ...patch.features,
          items: patch.features.items ?? base.features.items,
        }
      : base.features,
    productScreens: patch.productScreens
      ? {
          ...base.productScreens,
          ...patch.productScreens,
          panels: patch.productScreens.panels ?? base.productScreens.panels,
        }
      : base.productScreens,
    socialProof: patch.socialProof
      ? {
          ...base.socialProof,
          ...patch.socialProof,
          metrics: patch.socialProof.metrics ?? base.socialProof.metrics,
        }
      : base.socialProof,
    audience: patch.audience
      ? {
          ...base.audience,
          ...patch.audience,
          personas: patch.audience.personas ?? base.audience.personas,
        }
      : base.audience,
    enterprise: patch.enterprise
      ? {
          ...base.enterprise,
          ...patch.enterprise,
          signals: patch.enterprise.signals ?? base.enterprise.signals,
          badges: patch.enterprise.badges ?? base.enterprise.badges,
        }
      : base.enterprise,
    cta: { ...base.cta, ...patch.cta },
    demo: { ...base.demo, ...patch.demo },
    footer: { ...base.footer, ...patch.footer },
    legalPages: base.legalPages,
    dashboard: patch.dashboard
      ? {
          ...base.dashboard,
          ...patch.dashboard,
          stats: patch.dashboard.stats ?? base.dashboard.stats,
          rows: patch.dashboard.rows ?? base.dashboard.rows,
        }
      : base.dashboard,
  };
}
