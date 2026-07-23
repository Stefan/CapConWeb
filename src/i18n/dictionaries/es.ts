import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/**
 * Español neutro (ES + LATAM) — terminología de Project Controls / CapEx:
 * costbook, EAC, SOV, ERP, WBS y PMO se conservan como términos de producto/industria.
 * “compromisos” = commitments; “previsiones” = forecasts; “órdenes de cambio” = change orders;
 * “conciliación ERP” = ERP reconciliation; “contratista general (GC)” = general contractor.
 */
const dictionary: SiteDictionary = {
  locale: "es",
  meta: {
    title: `${PRODUCT_NAME} – Controles de proyecto para programas CapEx intensivos en capital`,
    description:
      "Plataforma integrada: costbook, gestión de cambios y gobernanza de portafolio. Para programas de construcción y CapEx complejos a nivel global.",
    keywords: [
      "CapEx",
      "Portafolio de proyectos",
      "EAC",
      "Forecast",
      "Construcción",
      "Life Sciences",
      "PMO",
      "SAP",
      "Conciliación ERP",
    ],
    openGraphLocale: "es_ES",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    footerNav: "Navegación del pie de página",
    home: "Inicio",
    openMenu: "Abrir menú",
  },
  site: {
    description:
      "Plataforma integrada de controles de proyecto y gobernanza financiera para programas intensivos en capital — financials, cambios y portafolio en una sola capa de control.",
  },
  nav: {
    problem: "Reto",
    features: "Funcionalidades",
    solution: "Solución",
    audience: "Para quién",
    enterprise: "Enterprise",
    login: "Iniciar sesión",
    bookDemo: "Solicitar una demo",
    startTrial: "Iniciar prueba",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "Controles de proyecto y gobernanza financiera para programas intensivos en capital",
    subheadline:
      "Un costbook para presupuesto, previsión, cambio y portafolio — especialmente donde el ERP es la fuente de verdad financiera.",
    proofLine:
      "En uso en programas CapEx multi-proyecto de life science e industrial · Conciliación lista para SAP · Aprobaciones auditables",
    primaryCta: "Solicitar una demo",
    secondaryCta: "Ver costbook + cambio en 2 minutos",
  },
  problem: {
    title: "Los proyectos CapEx son complejos. Controlarlos no debería serlo.",
    description:
      "Muchas organizaciones carecen de transparencia de extremo a extremo — incluso cuando los datos ya existen.",
    items: [
      {
        id: "budget-overruns",
        title: "Sobrecostos",
        description:
          "Los desvíos suelen detectarse tarde — cuando las acciones correctivas ya son costosas.",
      },
      {
        id: "opaque-forecasts",
        title: "Cambio aprobado, previsión incorrecta",
        description:
          "El cambio está aprobado — la previsión no se actualiza. El impacto no llega al costbook.",
      },
      {
        id: "excel-processes",
        title: "Procesos manuales en Excel",
        description:
          "Consolidación lenta, alta tasa de error y trazabilidad limitada.",
      },
      {
        id: "portfolio-blind-spots",
        title: "Vista de portafolio ausente",
        description:
          "Los proyectos individuales son visibles — no el impacto en el presupuesto de inversión, techos (caps) y flujo de caja.",
      },
      {
        id: "sap-shadow-ledger",
        title: "ERP ≠ costbook de proyecto",
        description:
          "La importación del ERP no coincide con el costbook de proyecto — los controllers reconstruyen la verdad en Excel en sombra.",
      },
      {
        id: "change-audit-trail",
        title: "SOV facturado, EAC poco claro",
        description:
          "SOV facturado, retainage retenido, EAC poco claro — o evidencia de cambio que los controllers no pueden defender.",
      },
    ],
  },
  solution: {
    eyebrow: "La solución",
    title: `${PRODUCT_NAME} — una capa de control para programas de inversión.`,
    description:
      "En lugar de hojas dispersas e informes de proyecto aislados, CapCon reúne costos, compromisos, impactos de cambio e indicadores de portafolio en un sistema fiable — del costbook de proyecto a la consolidación empresarial.",
    steps: [
      {
        step: "01",
        title: "Financials",
        text: "Costbook, compromisos y previsiones con justificación clara — sin libros Excel paralelos.",
      },
      {
        step: "02",
        title: "Gestión de cambios",
        text: "Órdenes de cambio y aprobaciones con impacto transparente en la previsión de costo total y el portafolio.",
      },
      {
        step: "03",
        title: "Portafolio",
        text: "Consolidación entre proyectos, señales de moneda y riesgo, reporting para la dirección.",
      },
    ],
  },
  features: {
    eyebrow: "Capacidades",
    title: "El toolkit para un control CapEx fiable",
    description:
      "Controles de proyecto del día a día — más conciliación ERP y facturación a proveedores donde su despliegue lo requiera.",
    items: [
      {
        id: "costbook",
        title: "Costbook central y previsiones defendibles",
        description:
          "Presupuesto, previsión, compromisos y reales con explicaciones claras — una base financiera en lugar de hojas paralelas.",
      },
      {
        id: "change-orders",
        title: "Gestión de cambios",
        description:
          "Órdenes de cambio, aprobaciones e impacto en la previsión — documentado de extremo a extremo hasta la vista de portafolio.",
      },
      {
        id: "portfolio-intelligence",
        title: "Inteligencia de portafolio",
        description:
          "Indicadores entre todos los proyectos, drivers de riesgo y efectos de moneda para PMO y comités de dirección.",
      },
      {
        id: "schedule-financials",
        title: "Cronograma y costos",
        description:
          "Cronograma y costbook trabajando juntos — plan vs. real, compromisos e indicadores financieros en una sola vista.",
      },
      {
        id: "workflows",
        title: "Flujos de trabajo y auditoría",
        description:
          "Aprobaciones configurables, contexto de cumplimiento y una pista de auditoría completa para entornos regulados.",
      },
      {
        id: "sap-reconciliation",
        title: "Conciliación SAP / ERP",
        description:
          "Importe reales y compromisos, compare ERP vs. costbook — reduzca libros paralelos en el steering.",
      },
      {
        id: "vendor-portal",
        title: "Portal de proveedores / GC",
        description:
          "Avance SOV y envíos de facturación donde esté habilitado — complementa herramientas de campo, no sustituye el CLM.",
      },
    ],
  },
  productScreens: {
    eyebrow: "Producto",
    title: "Del costbook al cambio y a la vista de portafolio",
    description:
      "CapCon conecta los controles operativos de proyecto con la gobernanza de portafolio — sin consolidación Excel de cierre de mes.",
    panels: [
      {
        id: "costbook",
        title: "Costbook y costo total",
        caption: "Estructura de costos, compromisos y estimación a la finalización (EAC) defendible.",
      },
      {
        id: "co-cc",
        title: "Impacto de cambios",
        caption: "Órdenes de cambio vinculadas a la previsión y a señales de portafolio.",
      },
      {
        id: "portfolio",
        title: "Gobernanza de portafolio",
        caption: "Indicadores de programa, alertas tempranas de desvío y acciones priorizadas.",
      },
      {
        id: "risks",
        title: "Gestión de riesgos",
        caption: "Scoring, desglose por categoría y riesgos top vinculados al steering de portafolio.",
      },
    ],
  },
  socialProof: {
    eyebrow: "Confianza",
    quote:
      "Por fin un sistema donde costbook, cambios y portafolio funcionan como uno — sin consolidación Excel de cierre de mes.",
    attribution: "Controller financiero, programa de manufacturing multi-sede",
    metrics: [
      { value: "1 plataforma", label: "Financials, cambios y portafolio" },
      { value: "Cambio → EAC", label: "Cadena de previsión de extremo a extremo" },
      { value: "Listo para auditoría", label: "Registros y firmas de aprobación" },
    ],
  },
  audience: {
    eyebrow: "Audiencias",
    title: "Para portafolios CapEx complejos — abierto por industria, fuerte en integración",
    description:
      "Ya sea ampliando producción, construyendo infraestructura o ejecutando un programa multi-sede, presupuesto, cronograma y ejecución deben alinearse. CapCon es la capa de control integrada entre equipos de proyecto, entrega en sitio y gobernanza financiera — especialmente donde el ERP concentra los datos financieros.",
    personas: [
      {
        title: "Controllers financieros",
        description:
          "Previsiones fiables, compromisos transparentes y decisiones de inversión defendibles — en construcción, life sciences u otras industrias intensivas en capital.",
      },
      {
        title: "PMO / gestión de programas",
        description:
          "Gobernanza de programa y portafolio con reporting consistente y señales de desvío en todo el portafolio.",
      },
      {
        title: "Controllers de proyecto y calidad",
        description:
          "En industrias reguladas, importan la trazabilidad, las firmas electrónicas y la calidad de datos consistente — de la línea de facturación a la aprobación.",
      },
    ],
  },
  enterprise: {
    eyebrow: "Enterprise",
    title: "Diseñado para entornos enterprise exigentes",
    description: `${PRODUCT_NAME} cumple los requisitos de industrias reguladas e integra con los procesos existentes de finanzas y cumplimiento.`,
    badgeDisclaimer:
      "El alcance de madurez y certificación depende de la implementación — lo detallamos en la demo.",
    signals: [
      {
        id: "security",
        title: "Seguridad y cumplimiento",
        description:
          "Estándares de seguridad enterprise con preparación GxP y 21 CFR Part 11 para entornos regulados (según el alcance del proyecto).",
      },
      {
        id: "signatures",
        title: "Firmas de aprobación y pista de auditoría",
        description:
          "Aprobaciones electrónicas, registros permanentes y cambios trazables en previsiones y datos de registros.",
      },
      {
        id: "sap",
        title: "Integración SAP",
        description:
          "Conexión a procesos ERP y de finanzas — la ruta y el alcance de integración se definen por cliente.",
      },
      {
        id: "gdpr",
        title: "Compatible con RGPD",
        description:
          "Protección de datos y hosting en centros de datos europeos alineados con requisitos de la UE.",
      },
    ],
    badges: [
      "Listo para GxP",
      "Preparación 21 CFR Part 11",
      "Integración SAP",
      "Compatible con RGPD",
    ],
  },
  cta: {
    headline: "La claridad en su portafolio CapEx empieza con una conversación.",
    description: `Conozca ${PRODUCT_NAME} en una demo personalizada — adaptada a su panorama de proyectos y a sus requisitos de control financiero.`,
    primaryCta: "Solicitar una demo",
    contactPrefix: "O contacte a nuestro equipo en",
  },
  demo: {
    metaTitle: "Solicitar una demo",
    title: "Solicitar una demo personalizada",
    description:
      "Cuéntenos brevemente su panorama de proyectos — le propondremos un horario de demo adecuado.",
    nameLabel: "Nombre",
    namePlaceholder: "Nombre y apellidos",
    companyLabel: "Empresa",
    companyPlaceholder: "Organización",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "nombre@empresa.com",
    roleLabel: "Rol",
    rolePlaceholder: "p. ej. controller financiero, líder de PMO",
    messageLabel: "Mensaje (opcional)",
    messagePlaceholder: "Tipo de proyecto, tamaño del programa, panorama ERP, requisitos específicos …",
    submit: "Enviar solicitud",
    consentBefore: "Acepto el tratamiento de mis datos conforme a nuestra",
    consentAfter: ".",
    consentRequired: "Confirme su consentimiento al tratamiento de datos.",
    backHome: "Volver al inicio",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    impressum: "Aviso legal",
    privacy: "Política de privacidad",
  },
  legalPages: {
    impressum: {
      title: "Aviso legal",
      sections: [
        {
          heading: "Proveedor",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
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
          ],
        },
      ],
    },
    privacy: {
      title: "Política de privacidad",
      sections: [
        {
          heading: "1. Responsable",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "Correo: {{email}}",
          ],
        },
        {
          heading: "2. Datos personales que tratamos",
          paragraphs: [
            "Al visitar este sitio se procesan registros de servidor técnicamente necesarios (p. ej. dirección IP, marca temporal, user agent).",
            "Si usa el formulario de demo, tratamos los datos que proporcione (nombre, empresa, correo, rol, mensaje) para gestionar su solicitud.",
          ],
        },
        {
          heading: "3. Base jurídica",
          paragraphs: [
            "El tratamiento se basa en el art. 6(1)(b) RGPD (medidas precontractuales) y el art. 6(1)(f) RGPD (interés legítimo en el funcionamiento seguro del sitio).",
          ],
        },
        {
          heading: "4. Conservación",
          paragraphs: [
            "Las solicitudes de demo se eliminan una vez concluida la consulta y cuando no apliquen obligaciones legales de conservación.",
          ],
        },
        {
          heading: "5. Sus derechos",
          paragraphs: [
            "Tiene derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad. Puede presentar una reclamación ante una autoridad de control.",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "Vista de proyecto – resumen EVM e IA",
    stats: [
      { label: "CapEx total", value: "€101.9M" },
      { label: "Delta EAC", value: "+€2.4M" },
      { label: "Proyectos", value: "12 activos" },
    ],
    columns: { project: "Proyecto", budget: "Presupuesto", eac: "EAC" },
    rows: [
      { name: "Planta A – ampliación", budget: "€42.8M", eac: "€44.1M" },
      { name: "Sala limpia fase 2", budget: "€18.2M", eac: "€17.9M" },
      { name: "Hub logístico norte", budget: "€31.5M", eac: "€33.2M" },
      { name: "Infraestructura IT 2026", budget: "€9.4M", eac: "€9.6M" },
    ],
  },
};

export default dictionary;
