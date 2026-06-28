import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "fr",
  meta: {
    title: `${PRODUCT_NAME} – Capex et pilotage de portefeuille projets`,
    description:
      "Plateforme intégrée : costbook, change management et gouvernance de portefeuille. Pour programmes capex et construction complexes.",
    keywords: [
      "Capex",
      "Portefeuille projets",
      "EAC",
      "Forecast",
      "Construction",
      "Life Sciences",
      "PMO",
      "SOV",
      "Master Plan",
    ],
    openGraphLocale: "fr_FR",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    mainNav: "Navigation principale",
    footerNav: "Navigation pied de page",
    home: "Accueil",
    openMenu: "Ouvrir le menu",
  },
  site: {
    description:
      "Plateforme intégrée de pilotage projet et gouvernance financière pour programmes capital-intensifs — financials, change et portefeuille dans une couche de pilotage unique.",
  },
  nav: {
    problem: "Enjeu",
    features: "Fonctionnalités",
    solution: "Solution",
    audience: "Pour qui",
    enterprise: "Enterprise",
    login: "Connexion",
    bookDemo: "Demander une démo",
    startTrial: "Essai gratuit",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "Pilotage projet et gouvernance financière pour programmes capital-intensifs",
    subheadline: `${PRODUCT_NAME} unifie costbook, change management, alignement planning-coûts et gouvernance de portefeuille sur une plateforme — avec prévisions défendables, approbations de bout en bout et indicateurs fiables pour programmes capex complexes.`,
    primaryCta: "Demander une démo",
    secondaryCta: "Découvrir la plateforme",
  },
  problem: {
    title: "Les projets capex sont complexes. Les piloter ne devrait pas l'être.",
    description:
      "De nombreuses organisations manquent de transparence de bout en bout — même lorsque les données existent déjà.",
    items: [
      {
        id: "budget-overruns",
        title: "Dépassements budgétaires",
        description:
          "Les écarts sont souvent détectés tard — lorsque les actions correctives coûtent déjà cher.",
      },
      {
        id: "opaque-forecasts",
        title: "Prévisions opaques",
        description:
          "Versions et hypothèses multiples rendent les décisions de planification peu fiables.",
      },
      {
        id: "excel-processes",
        title: "Processus Excel manuels",
        description:
          "Consolidation chronophage, taux d'erreur élevé et traçabilité limitée.",
      },
      {
        id: "portfolio-blind-spots",
        title: "Vue portefeuille manquante",
        description:
          "Les projets individuels sont visibles — pas l'impact sur le budget d'investissement, les plafonds et la trésorerie.",
      },
      {
        id: "change-audit-trail",
        title: "Changements sans preuve",
        description:
          "Variations et changements de périmètre difficiles à justifier face au plan initial et au master plan.",
      },
    ],
  },
  solution: {
    eyebrow: "La solution",
    title: `${PRODUCT_NAME} apporte de la clarté là où d'autres ne voient que des données.`,
    description:
      "Au lieu de feuilles dispersées et de rapports projet isolés, CapCon réunit coûts, engagements, impacts de change et indicateurs portefeuille dans un système fiable — du costbook projet à la consolidation groupe.",
    steps: [
      {
        step: "01",
        title: "Financials",
        text: "Costbook, engagements et prévisions avec justification claire — sans classeurs Excel parallèles.",
      },
      {
        step: "02",
        title: "Change management",
        text: "Change orders et approbations avec impact transparent sur coût total et portefeuille.",
      },
      {
        step: "03",
        title: "Portefeuille",
        text: "Consolidation multi-projets, signaux devise et risque, reporting direction.",
      },
    ],
  },
  features: {
    eyebrow: "Capacités",
    title: "La boîte à outils pour un pilotage capex fiable",
    description:
      "Centré sur ce dont les contrôleurs capex et les PMO ont besoin au quotidien : chiffres fiables, écarts clairs et vue portefeuille continue.",
    items: [
      {
        id: "costbook",
        title: "Costbook central & coûts défendables",
        description:
          "Budget, forecast, engagements et actuals avec explications claires — une base financière unique, pas des feuilles parallèles.",
      },
      {
        id: "change-orders",
        title: "Change management",
        description:
          "Change orders, approbations et impact prévisionnel — documentés de la demande à la vue portefeuille.",
      },
      {
        id: "portfolio-intelligence",
        title: "Intelligence portefeuille",
        description:
          "Indicateurs multi-projets, facteurs de risque et effets de change pour PMO et comités de pilotage.",
      },
      {
        id: "schedule-financials",
        title: "Planning & coûts",
        description:
          "Planning et costbook réunis — plan vs. réel, engagements et indicateurs financiers dans une même vue.",
      },
      {
        id: "registers",
        title: "Risques, issues & décisions",
        description:
          "Registres avec historique d'impact et processus d'approbation liés.",
      },
      {
        id: "workflows",
        title: "Workflows & audit",
        description:
          "Approbations configurables, contexte conformité et piste d'audit complète pour environnements régulés.",
      },
    ],
  },
  productScreens: {
    eyebrow: "Produit",
    title: "Du costbook au change, jusqu'à la vue portefeuille",
    description:
      "CapCon relie pilotage projet opérationnel et gouvernance portefeuille — sans consolidation Excel de fin de mois.",
    panels: [
      {
        id: "costbook",
        title: "Costbook & coût total",
        caption: "Structure de coûts, engagements et estimation à l'achèvement défendable.",
      },
      {
        id: "co-cc",
        title: "Impact change",
        caption: "Change orders liés à la prévision et aux signaux portefeuille.",
      },
      {
        id: "portfolio",
        title: "Pilotage portefeuille",
        caption: "Indicateurs programme, alertes d'écart et actions priorisées.",
      },
      {
        id: "risks",
        title: "Gestion des risques",
        caption: "Scores, catégories et principaux risques liés au pilotage portefeuille.",
      },
    ],
  },
  socialProof: {
    eyebrow: "Confiance",
    quote:
      "Enfin un système où costbook, change et portefeuille convergent — sans consolidation Excel de fin de mois.",
    attribution: "Contrôleur financier, programme manufacturing multi-sites",
    metrics: [
      { value: "1 plateforme", label: "Financials, change & portefeuille" },
      { value: "Change → EAC", label: "Chaîne prévisionnelle bout en bout" },
      { value: "Audit-ready", label: "Enregistrements & signatures d'approbation" },
    ],
  },
  audience: {
    eyebrow: "Publics",
    title: "Pour portefeuilles capex complexes — ouvert secteur, fort en intégration",
    description:
      "Extension de production, infrastructure ou programme multi-sites : quand budget, planning et exécution projet doivent s'aligner, un outil de tâches ne suffit pas. CapCon est la couche de pilotage intégrée entre équipes projet, chantier et gouvernance financière — surtout lorsque l'ERP détient les données financières.",
    personas: [
      {
        title: "Contrôleurs financiers",
        description:
          "Prévisions fiables, engagements transparents et décisions d'investissement défendables — construction, life sciences ou autres secteurs capital-intensifs.",
      },
      {
        title: "PMO / management de programme",
        description:
          "Gouvernance programme et portefeuille avec reporting cohérent, master plan et écarts sur l'ensemble du portefeuille.",
      },
      {
        title: "Contrôleurs projet & qualité",
        description:
          "Dans les industries régulées : traçabilité, signatures électroniques et qualité des données — de la ligne de facturation à l'approbation.",
      },
    ],
  },
  enterprise: {
    eyebrow: "Enterprise",
    title: "Conçu pour les environnements enterprise exigeants",
    description: `${PRODUCT_NAME} répond aux exigences des industries régulées et s'intègre aux processus finance et conformité existants.`,
    badgeDisclaimer:
      "Maturité et périmètre de certification selon l'implémentation — détails en démo.",
    signals: [
      {
        id: "security",
        title: "Sécurité & conformité",
        description:
          "Standards sécurité enterprise avec readiness GxP et 21 CFR Part 11 pour environnements régulés (selon périmètre projet).",
      },
      {
        id: "signatures",
        title: "Signatures d'approbation & piste d'audit",
        description:
          "Approbations électroniques, enregistrements permanents et modifications traçables des prévisions et registres.",
      },
      {
        id: "sap",
        title: "Intégration SAP",
        description:
          "Connexion aux processus ERP et finance — parcours et périmètre d'intégration définis par client.",
      },
      {
        id: "gdpr",
        title: "Conforme RGPD",
        description:
          "Protection des données et hébergement dans des datacenters européens alignés sur les exigences UE.",
      },
    ],
    badges: ["GxP ready", "21 CFR Part 11 readiness", "Intégration SAP", "Conforme RGPD"],
  },
  cta: {
    headline: "La clarté dans votre portefeuille capex commence par une conversation.",
    description: `Découvrez ${PRODUCT_NAME} lors d'une démo personnalisée — adaptée à votre paysage projet et à vos exigences de contrôle financier.`,
    primaryCta: "Demander une démo",
    contactPrefix: "Ou contactez notre équipe à",
  },
  demo: {
    metaTitle: "Demander une démo",
    title: "Demander une démo personnalisée",
    description:
      "Décrivez brièvement votre paysage projet — nous vous proposerons un créneau adapté.",
    nameLabel: "Nom",
    namePlaceholder: "Prénom et nom",
    companyLabel: "Entreprise",
    companyPlaceholder: "Organisation",
    emailLabel: "E-mail",
    emailPlaceholder: "nom@entreprise.com",
    roleLabel: "Fonction",
    rolePlaceholder: "ex. contrôleur capex, PMO",
    messageLabel: "Message (optionnel)",
    messagePlaceholder: "Type de projet, taille campus, exigences spécifiques …",
    submit: "Envoyer la demande",
    consentBefore: "J'accepte le traitement de mes données conformément à notre",
    consentAfter: ".",
    consentRequired: "Veuillez confirmer votre consentement au traitement des données.",
    backHome: "Retour à l'accueil",
  },
  footer: {
    rights: "Tous droits réservés.",
    impressum: "Mentions légales",
    privacy: "Confidentialité",
  },
  legalPages: {
    impressum: {
      title: "Mentions légales",
      sections: [
        {
          heading: "Éditeur",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["E-mail : {{email}}", "{{phoneLine}}"],
        },
        {
          heading: "Responsable du contenu",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "Avertissement",
          paragraphs: [
            "Nous rédigeons ce site avec soin mais ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité de l'ensemble du contenu.",
          ],
        },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      sections: [
        {
          heading: "1. Responsable du traitement",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "E-mail : {{email}}",
          ],
        },
        {
          heading: "2. Données personnelles traitées",
          paragraphs: [
            "Lors de votre visite, des journaux serveur techniquement nécessaires sont traités (ex. adresse IP, horodatage, user agent).",
            "Si vous utilisez le formulaire démo, nous traitons les informations fournies (nom, entreprise, e-mail, fonction, message) pour traiter votre demande.",
          ],
        },
        {
          heading: "3. Base légale",
          paragraphs: [
            "Le traitement repose sur l'art. 6(1)(b) RGPD (mesures précontractuelles) et l'art. 6(1)(f) RGPD (intérêt légitime au fonctionnement sécurisé du site).",
          ],
        },
        {
          heading: "4. Conservation",
          paragraphs: [
            "Les demandes démo sont supprimées une fois la demande traitée et sans obligation légale de conservation.",
          ],
        },
        {
          heading: "5. Vos droits",
          paragraphs: [
            "Vous disposez des droits d'accès, rectification, effacement, limitation, opposition et portabilité. Vous pouvez introduire une réclamation auprès d'une autorité de contrôle.",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "Portefeuille capex – T2 2026",
    stats: [
      { label: "Capex total", value: "101,9 M€" },
      { label: "Écart EAC", value: "+2,4 M€" },
      { label: "Projets", value: "12 actifs" },
    ],
    columns: { project: "Projet", budget: "Budget", eac: "EAC" },
    rows: [
      { name: "Site A – extension", budget: "42,8 M€", eac: "44,1 M€" },
      { name: "Salle blanche phase 2", budget: "18,2 M€", eac: "17,9 M€" },
      { name: "Hub logistique nord", budget: "31,5 M€", eac: "33,2 M€" },
      { name: "Infrastructure IT 2026", budget: "9,4 M€", eac: "9,6 M€" },
    ],
  },
};

export default dictionary;
