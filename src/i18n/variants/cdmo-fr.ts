import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/** French overlay for CDMO edition (Suisse romande, etc.). */
export const cdmoFrPatch: Partial<SiteDictionary> = {
  meta: {
    title: `${PRODUCT_NAME} – Project controls CDMO & GMP pour l'Europe`,
    description:
      "Reliez capex, qualification équipement et change control GMP dans une couche audit-ready — en complément du QMS et du MES pour CDMO et pharma en Europe et en Suisse.",
    keywords: [
      "CDMO",
      "GMP",
      "IQ OQ PQ",
      "Change Control",
      "Validation",
      "Europe",
      "Suisse",
      "Pharma",
      "Capex",
    ],
    openGraphLocale: "fr_CH",
  },
  hero: {
    eyebrow: "CapEx & GMP · Europe",
    headline: "Pilotage capex maître d'ouvrage de la construction à la qualification équipement.",
    subheadline: `${PRODUCT_NAME} relie costbook, programmes construction, qualification équipement et change control GMP dans une couche audit-ready — en complément de votre QMS et MES, sans les remplacer.`,
    primaryCta: "Demander une démo",
  },
  problem: {
    title: "Le capex CDMO doit être lié à la qualification — pas seulement aux lignes WBS.",
    description:
      "Lorsque release équipement, validation et change control vivent hors des project controls, les audits révèlent des écarts entre construction et QA.",
    items: [
      {
        id: "equipment-gap",
        title: "Lacunes de traçabilité équipement",
        description:
          "Les dépenses capex sont difficiles à relier au statut de qualification et aux décisions de release.",
      },
      {
        id: "co-cc-split",
        title: "Construction vs. change GMP",
        description:
          "Change orders construction et change controls GMP dans des outils séparés sans pont.",
      },
      {
        id: "validation-pack",
        title: "Friction dossier validation",
        description:
          "Preuves IQ/OQ/PQ dispersées quand projet et QA ne partagent pas le contexte.",
      },
      {
        id: "audit-export",
        title: "Préparation audit",
        description:
          "La QA a besoin d'un historique exportable — pas de captures d'écran de trackers construction.",
      },
    ],
  },
  solution: {
    eyebrow: "Construction ↔ GMP",
    title: "Un hub du capex à l'équipement qualifié.",
    description:
      "CapCon fait le pont entre change orders construction, liens forecast/SOV équipement et workflows change control GMP — avec analyse d'impact et approbations e-sign.",
    steps: [
      {
        step: "01",
        title: "Capex & équipement",
        text: "Investissements reliés au master équipement, salles blanches et matrice de qualification.",
      },
      {
        step: "02",
        title: "Change control GMP",
        text: "Analyse d'impact, workflow d'approbation et export audit — limites compatibles QMS.",
      },
      {
        step: "03",
        title: "Qualité & validation",
        text: "Miroir déviation/CAPA, rapports GMP et périmètre clair vs. Veeva/MasterControl/TrackWise.",
      },
    ],
  },
  features: {
    eyebrow: "Capacités CDMO",
    title: "Du capex maître d'ouvrage à la signature GMP",
    description:
      "Contrôle construction et costbook en premier — change control GMP, qualification et pont QMS là où la fabrication réglementée l'exige.",
    items: [
      {
        id: "costbook-capex",
        title: "Capex maître d'ouvrage & costbook",
        description:
          "Budget, engagements et prévisions pour programmes construction — traçables jusqu'aux lignes équipement et actifs.",
      },
      {
        id: "construction-co",
        title: "Change orders construction",
        description:
          "CO approuvés avec impact prévision et liens équipement — documentés de la demande à la vue portefeuille.",
      },
      {
        id: "equipment",
        title: "Release équipement",
        description:
          "États release et quarantaine avec événements auditables sur l'actif.",
      },
      {
        id: "gmp-cc",
        title: "Change control GMP",
        description:
          "Soumission → analyse d'impact → approbation e-sign → export CSV audit.",
      },
      {
        id: "co-bridge",
        title: "Pont Construction ↔ GMP",
        description:
          "Change controls GMP liés depuis le détail CO construction — navigation bidirectionnelle.",
      },
      {
        id: "iqoq",
        title: "Matrice IQ / OQ / PQ",
        description:
          "Statut de qualification par ligne équipement — aligné sur les enregistrements validation.",
      },
      {
        id: "deviation",
        title: "Miroir déviation & CAPA",
        description:
          "Sync lecture depuis QMS — miroir uniquement, pas de remplacement QMS complet.",
      },
      {
        id: "gmp-reports",
        title: "Rapports GMP",
        description: "Exports CSV/texte pour dossiers validation et revue QA.",
      },
    ],
  },
  cta: {
    headline: "Voir le pilotage capex maître d'ouvrage jusqu'à la boucle GMP en direct.",
    description:
      "Démo costbook, pont CO construction et approbation GMP sur le pack référence CDMO.",
    primaryCta: "Demander une démo",
    contactPrefix: "Ou contactez notre équipe à",
  },
};
