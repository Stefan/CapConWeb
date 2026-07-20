import type { ExtendedLegalPages } from "@/i18n/legal/types";
import type { LegalSection } from "@/i18n/types";

const impressum: LegalSection[] = [
  {
    heading: "Proveedor",
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
    heading: "Representado por",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "Contacto",
    paragraphs: ["Correo: {{email}}", "{{phoneLine}}"],
  },
  {
    heading: "Responsable del contenido",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "Descargo de responsabilidad",
    paragraphs: [
      "Creamos este sitio con cuidado, pero no podemos garantizar la exactitud, integridad o actualidad de todo el contenido.",
      "Las capturas de producto ilustran flujos de demostración y pueden diferir de su despliegue.",
    ],
  },
];

const privacy: LegalSection[] = [
  {
    heading: "1. Responsable del tratamiento",
    paragraphs: [
      "{{companyName}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "Correo: {{email}}",
      "Contacto de privacidad: {{dpoEmail}}",
    ],
  },
  {
    heading: "2. Hosting y registros de servidor",
    paragraphs: [
      "Este sitio está alojado por {{hostingProvider}} ({{hostingRegion}}). Al visitarlo se procesan registros técnicos necesarios (dirección IP, marca temporal, URL, user-agent, referrer).",
      "Base jurídica (UE/EEE): art. 6(1)(f) RGPD — interés legítimo en un funcionamiento seguro. Conservación típica de hasta 30 días, salvo incidentes de seguridad.",
    ],
  },
  {
    heading: "3. Idioma y edición regional (Geo-IP)",
    paragraphs: [
      "Derivamos un país aproximado a partir de cabeceras de plataforma (p. ej. Vercel/Cloudflare) para sugerir idioma y edición de marketing.",
      "Base jurídica: art. 6(1)(f) RGPD. Con su consentimiento podemos guardar una cookie de edición regional hasta 90 días (véase la política de cookies).",
    ],
  },
  {
    heading: "4. Cookies",
    paragraphs: [
      "Usamos una cookie de consentimiento y, con su acuerdo, una cookie de edición regional. Detalles: /es/cookies.",
    ],
  },
  {
    heading: "5. Analítica web (Google Tag Manager, GA4 y LinkedIn Insight)",
    paragraphs: [
      "Si acepta todas las cookies, cargamos Google Tag Manager (Google Ireland Ltd.) para gestionar etiquetas de marketing y usamos Google Analytics 4 para medir visitas agregadas y orígenes de referencia. Las direcciones IP se anonimizan. También cargamos el LinkedIn Insight Tag (LinkedIn Ireland Unlimited Company) para medición de campañas y conversiones. Base jurídica (UE/EEE): art. 6(1)(a) RGPD — consentimiento. Puede retirar el consentimiento en la configuración de cookies.",
    ],
  },
  {
    heading: "6. Formulario de solicitud de demo",
    paragraphs: [
      "Si envía el formulario de demo, tratamos nombre, empresa, correo, rol, mensaje y locale para responder a su consulta.",
      "Los datos se transmiten por HTTPS a nuestro endpoint o, si no está disponible, se abren en su cliente de correo local (mailto). No vendemos datos de demo a terceros.",
      "Base jurídica (UE/EEE): art. 6(1)(b) RGPD (medidas precontractuales) y art. 6(1)(f) RGPD (gestión de consultas comerciales).",
      "Conservación: hasta concluir la consulta y cuando no apliquen obligaciones legales (típicamente hasta 24 meses de correspondencia comercial, salvo solicitud de eliminación anticipada).",
    ],
  },
  {
    heading: "7. Enlaces a la aplicación CapCon",
    paragraphs: [
      "Los enlaces a app.capconhq.com (inicio de sesión / registro) están sujetos a la política de privacidad del operador de la aplicación. El sitio de marketing no le autentica en el producto.",
    ],
  },
  {
    heading: "8. Transferencias internacionales",
    paragraphs: [
      "Cuando el hosting o las herramientas de soporte impliquen encargados fuera de la UE/EEE, aplicamos garantías adecuadas (p. ej. cláusulas contractuales tipo de la UE) cuando sea necesario.",
    ],
  },
  {
    heading: "9. Sus derechos",
    paragraphs: [
      "Puede solicitar acceso, rectificación, supresión, limitación, oposición y portabilidad. Contacto: {{dpoEmail}}.",
      "UE/EEE: puede presentar una reclamación ante su autoridad de control. España: Agencia Española de Protección de Datos (AEPD).",
    ],
  },
];

const cookies: LegalSection[] = [
  {
    heading: "1. ¿Qué son las cookies?",
    paragraphs: [
      "Las cookies son pequeños archivos de texto almacenados en su dispositivo. Solo usamos cookies necesarias para este sitio de marketing.",
    ],
  },
  {
    heading: "2. Cookies que utilizamos",
    paragraphs: [
      "capcon-cookie-consent — guarda su elección de consentimiento (essential / all). Duración: 12 meses. Finalidad: cumplimiento legal.",
      "capcon-site-variant — guarda su edición de marketing regional (p. ej. APAC, Japón). Duración: 90 días solo si acepta todas las cookies; en caso contrario, solo sesión. Finalidad: contenido regional coherente.",
      "Google Tag Manager (solo si acepta todas las cookies): carga y gestiona etiquetas de marketing (incluido Google Analytics). Proveedor: Google Ireland Ltd. Privacidad: https://policies.google.com/privacy",
      "Google Analytics (solo si acepta todas las cookies): _ga, _ga_* — estadísticas agregadas de visitas vía Google Analytics 4. Duración: hasta 24 meses. Proveedor: Google Ireland Ltd. Privacidad: https://policies.google.com/privacy",
      "LinkedIn Insight Tag (solo si acepta todas las cookies): li_sugr y cookies/píxeles relacionados de LinkedIn — medición de campañas y conversiones. Proveedor: LinkedIn Ireland Unlimited Company. Privacidad: https://www.linkedin.com/legal/privacy-policy",
    ],
  },
  {
    heading: "3. Gestión de cookies",
    paragraphs: [
      "Puede cambiar su elección mediante el enlace de configuración de cookies en el pie de página. También puede eliminar cookies en la configuración de su navegador.",
    ],
  },
];

const terms: LegalSection[] = [
  {
    heading: "1. Ámbito",
    paragraphs: [
      "Estas condiciones rigen el uso del sitio de marketing de CapCon (capconhq.com). No rigen el producto de software CapCon ni la prueba — aplican condiciones separadas en la aplicación.",
    ],
  },
  {
    heading: "2. Contenido y disponibilidad",
    paragraphs: [
      "La información de este sitio se ofrece con fines generales de marketing. Funcionalidades, certificaciones e integraciones descritas pueden variar según el despliegue. Las capturas pueden mostrar datos de demostración.",
    ],
  },
  {
    heading: "3. Sin contrato",
    paragraphs: [
      "Navegar por este sitio o enviar una solicitud de demo no crea un contrato vinculante. Cualquier engagement queda sujeto a un acuerdo comercial separado.",
    ],
  },
  {
    heading: "4. Propiedad intelectual",
    paragraphs: [
      "La marca CapCon, textos e imágenes están protegidos. No puede copiar ni reutilizar el contenido sin autorización escrita.",
    ],
  },
  {
    heading: "5. Responsabilidad",
    paragraphs: [
      "Procuramos contenido preciso, pero no garantizamos integridad ni idoneidad para una decisión concreta. La responsabilidad se limita en la medida permitida por la ley aplicable.",
    ],
  },
  {
    heading: "6. Derecho aplicable",
    paragraphs: [
      "Salvo normas imperativas de protección al consumidor, rige el derecho alemán con jurisdicción en el domicilio del proveedor (véase el aviso legal).",
    ],
  },
];

const accessibility: LegalSection[] = [
  {
    heading: "1. Compromiso",
    paragraphs: [
      "Buscamos que capconhq.com sea accesible según WCAG 2.1 Nivel AA en la medida razonablemente practicable para un sitio de marketing.",
    ],
  },
  {
    heading: "2. Medidas",
    paragraphs: [
      "Enlaces de salto, encabezados semánticos, componentes navegables por teclado, contraste suficiente en la UI principal y texto de enlace descriptivo.",
    ],
  },
  {
    heading: "3. Limitaciones conocidas",
    paragraphs: [
      "Algunas capturas de marketing son imágenes de la UI del producto y pueden no exponer metadatos de accesibilidad completos. Las secciones animadas respetan prefers-reduced-motion cuando está soportado.",
    ],
  },
  {
    heading: "4. Comentarios",
    paragraphs: [
      "Reporte barreras a {{email}} — responderemos en un plazo razonable.",
    ],
  },
];

export const esPages: ExtendedLegalPages = {
  impressum: { title: "Aviso legal", sections: impressum },
  privacy: { title: "Política de privacidad", sections: privacy },
  cookies: { title: "Política de cookies", sections: cookies },
  terms: { title: "Condiciones de uso", sections: terms },
  accessibility: { title: "Accesibilidad", sections: accessibility },
};
