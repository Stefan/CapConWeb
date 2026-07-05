import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/** French overlay for Large Projects edition (ex. Québec). */
export const largeProjectsFrPatch: Partial<SiteDictionary> = {
  meta: {
    title: `${PRODUCT_NAME} – Pilotage financier maître d'ouvrage pour programmes capex intensifs (Amérique du Nord)`,
    description:
      "Costbook, SOV, retainage, change et portefeuille sur une plateforme. Pour life science, industriel et campus aux États-Unis et au Canada — avec conformité master plan pour mega-programmes.",
    keywords: [
      "Pilotage projet",
      "SOV",
      "Retainage",
      "Change Management",
      "Costbook",
      "Life Sciences",
      "General Contractor",
      "Capex",
      "Campus",
      "Master Plan",
    ],
    openGraphLocale: "fr_CA",
  },
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence · Amérique du Nord",
    headline: "Pilotage financier maître d'ouvrage pour programmes de construction capex intensifs.",
    subheadline: `${PRODUCT_NAME} unifie costbook, schedule of values, facturation entreprise générale et change management dans une couche audit-ready — avec prévisions explicables, gouvernance retainage et KPI portefeuille. Particulièrement adapté aux programmes life science et campus réglementés nécessitant conformité master plan.`,
    primaryCta: "Demander une démo",
  },
  solution: {
    eyebrow: "Pour maîtres d'ouvrage",
    title: "Du costbook à la facturation GC — une couche de pilotage maître d'ouvrage.",
    description:
      "Extension pharma, capex industriel ou campus multi-bâtiments : quand l'entreprise générale facture sur des lignes SOV et que les change orders impactent la prévision de coût total, les feuilles Excel échouent. CapCon est la couche maître d'ouvrage entre ERP, contrat et chantier.",
    steps: [
      {
        step: "01",
        title: "Financials & contrat",
        text: "Costbook comme SSOT, engagements, SOV et facturation GC avec EAC/ETC explicables — pas des slides de statut.",
      },
      {
        step: "02",
        title: "Change & pilotage",
        text: "Change orders et approbations avec impact transparent sur prévision et portefeuille ; impact master plan / stage gates optionnel pour campus.",
      },
      {
        step: "03",
        title: "Portefeuille & conformité",
        text: "KPI programme, alertes d'écart et approbations audit-ready — surtout pour programmes maître d'ouvrage réglementés.",
      },
    ],
  },
  features: {
    eyebrow: "Capacités maître d'ouvrage",
    title: "Ce dont les équipes capex intensives ont besoin chaque mois",
    description:
      "Costbook, SOV, change et gouvernance portefeuille sur une plateforme — avec master plan campus et conformité stage gates là où les programmes l'exigent.",
    items: [
      {
        id: "sov-retainage",
        title: "SOV & retainage",
        description:
          "Schedule of values de l'entreprise générale, demandes de paiement mensuelles et gouvernance retainage au niveau programme.",
      },
      {
        id: "change-orders",
        title: "Change vers prévision",
        description:
          "Change orders approuvés vers costbook et lignes SOV — avec historique d'approbation complet.",
      },
      {
        id: "explainability",
        title: "Prévisions défendables",
        description:
          "Chaque chiffre, des indicateurs portefeuille au détail costbook — SSOT maître d'ouvrage sans classeurs Excel parallèles.",
      },
      {
        id: "portfolio",
        title: "Pilotage portefeuille",
        description:
          "Indicateurs programme, alertes d'écart et briefs direction pour portefeuilles capex multi-sites.",
      },
      {
        id: "master-plan",
        title: "Master plan campus",
        description:
          "Utilisation des plafonds d'investissement, zones et écarts entre plan approuvé et portefeuille actuel — pour programmes campus.",
      },
      {
        id: "stage-gates",
        title: "Conformité stage gates",
        description:
          "Contrôles obligatoires à l'approbation — conformité master plan dans le processus, pas dans un deck trimestriel.",
      },
    ],
  },
  productScreens: {
    eyebrow: "Workflow maître d'ouvrage",
    title: "Costbook → SOV → trace financière",
    description:
      "Le parcours mensuel maître d'ouvrage : base de facturation, mise en œuvre des change orders et suivi financier — avec pilotage master plan pour campus.",
    panels: [
      {
        id: "steering",
        title: "Pilotage portefeuille & programme",
        caption: "KPI programme, alertes d'écart et santé financière en un coup d'œil.",
      },
      {
        id: "sov",
        title: "SOV & demandes de paiement",
        caption: "PO contrat, facturation par ligne et historique des paiements approuvés.",
      },
      {
        id: "recon",
        title: "Trace financière",
        caption: "Lignes rapprochées et en écart avec détail costbook.",
      },
    ],
  },
  audience: {
    eyebrow: "Amérique du Nord",
    title: "Pour maîtres d'ouvrage de programmes capex intensifs",
    description:
      "Programme management, finance et PMO sur capex à forte composante GC — life science, industriel, commercial et campus multi-sites.",
    personas: [
      {
        title: "Life science & pharma",
        description: "Capex réglementé avec facturation SOV, change control et approbations audit-ready.",
      },
      {
        title: "Industriel & manufacturing",
        description: "Programmes multi-sites avec costbook SSOT, engagements et prévisions défendables.",
      },
      {
        title: "Campus & mega-programmes",
        description: "Conformité master plan, gouvernance retainage et pilotage portefeuille à l'échelle programme.",
      },
    ],
  },
  cta: {
    headline: "Voir le pilotage financier maître d'ouvrage en démo.",
    description:
      "Nous parcourons costbook, facturation SOV et mise en œuvre des change orders — et pilotage master plan pour campus.",
    primaryCta: "Demander une démo",
    contactPrefix: "Ou contactez notre équipe à",
  },
};
