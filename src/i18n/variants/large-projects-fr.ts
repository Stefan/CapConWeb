import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/** French overlay for Large Projects edition (ex. Québec). */
export const largeProjectsFrPatch: Partial<SiteDictionary> = {
  meta: {
    title: `${PRODUCT_NAME} – Pilotage projet pour grands programmes campus en Amérique du Nord`,
    description:
      "Gouvernance financière pour maîtres d'ouvrage : costbook, SOV, retainage, conformité master plan et change management pour programmes campus aux États-Unis et au Canada.",
    keywords: [
      "Campus",
      "Master Plan",
      "SOV",
      "Retainage",
      "Life Sciences",
      "General Contractor",
      "Capex",
    ],
    openGraphLocale: "fr_CA",
  },
  hero: {
    eyebrow: "Programmes campus · Amérique du Nord",
    headline: "Piloter de grands campus avec des chiffres défendables.",
    subheadline: `${PRODUCT_NAME} unifie costbook, schedule of values, facturation entreprise générale, retainage et conformité master plan — pour grands programmes campus life science et mega-capex aux États-Unis et au Canada.`,
    primaryCta: "Réserver une démo",
  },
  solution: {
    eyebrow: "Pour maîtres d'ouvrage",
    title: "De la ligne de facturation au master plan campus — un processus continu.",
    description:
      "Quand l'entreprise générale facture sur des dizaines de lignes SOV et chaque approbation de change doit refléter plafonds d'investissement et stage gates, les feuilles Excel échouent. CapCon est la couche de pilotage du maître d'ouvrage entre ERP, facturation GC et chantier.",
    steps: [
      {
        step: "01",
        title: "Financials & facturation GC",
        text: "Costbook central, engagements, SOV, demandes de paiement et retainage avec prévisions de coût total défendables.",
      },
      {
        step: "02",
        title: "Change & master plan",
        text: "Change orders, registres de risques, utilisation des plafonds et vues plan approuvé vs. situation actuelle.",
      },
      {
        step: "03",
        title: "Gouvernance portefeuille",
        text: "Consolidation programme, alertes d'écart et briefs direction pour comités de pilotage campus.",
      },
    ],
  },
  features: {
    eyebrow: "Capacités campus",
    title: "Ce dont les équipes maîtrise d'ouvrage ont besoin chaque mois",
    description:
      "Master plan, SOV et gouvernance de portefeuille dans une seule plateforme — pour les campus nord-américains.",
    items: [
      {
        id: "master-plan",
        title: "Master plan campus",
        description:
          "Utilisation des plafonds d'investissement, zones et écarts entre plan approuvé et portefeuille actuel.",
      },
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
          "Chaque chiffre, des indicateurs portefeuille au détail costbook — prévisions présentables en comité de pilotage.",
      },
      {
        id: "stage-gates",
        title: "Conformité stage gates",
        description:
          "Contrôles obligatoires à l'approbation — conformité dans le processus, pas dans un deck trimestriel.",
      },
      {
        id: "portfolio",
        title: "Pilotage portefeuille",
        description:
          "Indicateurs campus, actions prioritaires et santé financière du programme.",
      },
    ],
  },
  cta: {
    headline: "Voir le workflow campus en direct.",
    description:
      "Nous parcourons pilotage master plan, facturation SOV et mise en œuvre des change orders sur un programme campus de référence.",
    primaryCta: "Réserver une démo",
    contactPrefix: "Ou contactez notre équipe à",
  },
};
