import type { ExtendedLegalPages } from "@/i18n/legal/types";
import type { LegalSection } from "@/i18n/types";

const impressum: LegalSection[] = [
  {
    heading: "Éditeur",
    paragraphs: [
      "{{companyName}}",
      "{{legalForm}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "{{registerLine}}",
      "{{vatLine}}",
    ],
  },
  {
    heading: "Représenté par",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "Contact",
    paragraphs: ["E-mail : {{email}}", "{{phoneLine}}"],
  },
  {
    heading: "Responsable de la publication",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "Avertissement",
    paragraphs: [
      "Nous créons ce site avec soin, sans garantir l'exactitude ou l'actualité de l'ensemble des contenus.",
      "Les captures d'écran illustrent des workflows de démonstration et peuvent différer de votre déploiement.",
    ],
  },
];

const privacy: LegalSection[] = [
  {
    heading: "1. Responsable du traitement",
    paragraphs: [
      "{{companyName}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "E-mail : {{email}}",
      "Contact confidentialité : {{dpoEmail}}",
    ],
  },
  {
    heading: "2. Hébergement et journaux serveur",
    paragraphs: [
      "Ce site est hébergé par {{hostingProvider}} ({{hostingRegion}}). Lors de votre visite, des journaux techniques nécessaires sont traités (adresse IP, horodatage, URL, user-agent, referrer).",
      "Base légale (UE/EEE) : art. 6(1)(f) RGPD — intérêt légitime à un fonctionnement sûr. Conservation en principe 30 jours, sauf incident de sécurité.",
    ],
  },
  {
    heading: "3. Langue et édition régionale (Geo-IP)",
    paragraphs: [
      "Nous déduisons un pays approximatif via les en-têtes plateforme (Vercel/Cloudflare) pour proposer la langue et l'édition marketing.",
      "Base légale : art. 6(1)(f) RGPD. Avec votre consentement, un cookie d'édition peut être conservé 90 jours (voir politique cookies).",
    ],
  },
  {
    heading: "4. Cookies",
    paragraphs: [
      "Cookie de consentement et, avec accord, cookie d'édition régionale. Détails : /fr/cookies.",
    ],
  },
  {
    heading: "5. Formulaire de démo",
    paragraphs: [
      "Nom, entreprise, e-mail, rôle, message et locale sont traités pour répondre à votre demande.",
      "Transmission HTTPS vers notre serveur ou ouverture mailto si indisponible. Pas de revente des données.",
      "Base légale : art. 6(1)(b) et (f) RGPD. Conservation : jusqu'à clôture de la demande, typiquement 24 mois pour la correspondance commerciale.",
    ],
  },
  {
    heading: "6. Liens vers l'application CapCon",
    paragraphs: [
      "Les liens vers app.capcon.io relèvent de la politique de confidentialité du produit.",
    ],
  },
  {
    heading: "7. Transferts internationaux",
    paragraphs: [
      "En cas d'hébergement ou d'outils hors UE/EEE, nous utilisons des garanties appropriées (clauses contractuelles types, etc.).",
    ],
  },
  {
    heading: "8. Vos droits",
    paragraphs: [
      "Accès, rectification, effacement, limitation, opposition, portabilité : {{dpoEmail}}.",
      "Réclamation auprès de la CNIL ou de l'autorité compétente.",
    ],
  },
];

const cookies: LegalSection[] = [
  {
    heading: "1. Qu'est-ce qu'un cookie ?",
    paragraphs: [
      "Petits fichiers texte sur votre appareil. Nous n'utilisons que des cookies nécessaires à ce site marketing.",
    ],
  },
  {
    heading: "2. Cookies utilisés",
    paragraphs: [
      "capcon-cookie-consent — choix de consentement (essential / all). Durée : 12 mois.",
      "capcon-site-variant — édition marketing régionale. Durée : 90 jours si « Tout accepter », sinon session.",
    ],
  },
  {
    heading: "3. Gestion",
    paragraphs: [
      "Modifiez votre choix via « Paramètres cookies » dans le pied de page ou supprimez les cookies dans le navigateur.",
    ],
  },
];

const terms: LegalSection[] = [
  {
    heading: "1. Champ d'application",
    paragraphs: [
      "Ces conditions régissent capcon.io (site marketing). Le produit CapCon est soumis à des conditions séparées.",
    ],
  },
  {
    heading: "2. Contenu",
    paragraphs: [
      "Informations marketing sans garantie. Les captures peuvent montrer des données de démo.",
    ],
  },
  {
    heading: "3. Pas de contrat",
    paragraphs: ["La navigation ou une demande de démo ne crée pas de contrat contraignant."],
  },
  {
    heading: "4. Propriété intellectuelle",
    paragraphs: ["Contenus protégés. Reproduction interdite sans autorisation écrite."],
  },
  {
    heading: "5. Responsabilité",
    paragraphs: ["Responsabilité limitée dans les limites permises par la loi applicable."],
  },
  {
    heading: "6. Droit applicable",
    paragraphs: ["Droit allemand et juridiction au siège du prestataire, sauf règles impératives contraires."],
  },
];

const accessibility: LegalSection[] = [
  {
    heading: "1. Engagement",
    paragraphs: ["Objectif WCAG 2.1 niveau AA pour capcon.io, dans la mesure du raisonnable."],
  },
  {
    heading: "2. Mesures",
    paragraphs: ["Liens d'évitement, titres sémantiques, navigation clavier, contraste sur l'UI principale."],
  },
  {
    heading: "3. Limites",
    paragraphs: ["Certaines captures produit sont des images sans métadonnées d'accessibilité complètes."],
  },
  {
    heading: "4. Retour",
    paragraphs: ["Signalez les obstacles à {{email}}."],
  },
];

export const frPages: ExtendedLegalPages = {
  impressum: { title: "Mentions légales", sections: impressum },
  privacy: { title: "Politique de confidentialité", sections: privacy },
  cookies: { title: "Politique cookies", sections: cookies },
  terms: { title: "Conditions d'utilisation", sections: terms },
  accessibility: { title: "Accessibilité", sections: accessibility },
};
