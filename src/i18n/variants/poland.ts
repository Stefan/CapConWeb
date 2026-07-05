import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/** Poland — EU manufacturing, CEE expansion, FDI capex. */
export const polandVariant: Partial<Record<"pl" | "en" | "de", Partial<SiteDictionary>>> = {
  pl: {
    meta: {
      title: `${PRODUCT_NAME} – Kontrola CapEx dla programów w Polsce`,
      description:
        "Zintegrowana platforma kontroli projektów CapEx: costbook, zarządzanie zmianami i governance portfela — dla produkcji, infrastruktury i inwestycji kapitałowych w Polsce i regionie CEE.",
      keywords: [
        "CapEx",
        "Polska",
        "CEE",
        "Produkcja",
        "Costbook",
        "Zarządzanie zmianami",
        "Portfel",
      ],
      openGraphLocale: "pl_PL",
    },
    hero: {
      eyebrow: "CapEx · Polska",
      headline: "Steruj programami CapEx liczbami, które można obronić przed zarządem.",
      subheadline: `${PRODUCT_NAME} łączy costbook, zatwierdzanie zmian i metryki portfela w jednej platformie — dla wieloletnich inwestycji produkcyjnych i infrastrukturalnych w Polsce, bez miesięcznej konsolidacji w Excelu. Szczególnie skuteczny, gdy ERP przechowuje dane finansowe i programy wielolokalizacyjne potrzebują jednej prawdy costbook.`,
      primaryCta: "Poproś o demo",
    },
    solution: {
      eyebrow: "Dla właścicieli programów",
      title: "Jedna warstwa kontroli od realizacji do portfela inwestycyjnego.",
      description:
        "Rozproszone arkusze i raporty projektowe utrudniają decyzje inwestycyjne. CapCon integruje koszty, zobowiązania i zmiany w jednym audytowalnym systemie — zgodnie z wymogami RODO i procesami ERP.",
      steps: [
        {
          step: "01",
          title: "Finanse",
          text: "Costbook, zobowiązania i prognozy z jasnym uzasadnieniem.",
        },
        {
          step: "02",
          title: "Zarządzanie zmianami",
          text: "Zlecenia zmian i zatwierdzenia z wpływem na prognozę całkowitego kosztu.",
        },
        {
          step: "03",
          title: "Portfel",
          text: "Konsolidacja programów, sygnały ryzyka i raportowanie dla zarządu.",
        },
      ],
    },
    audience: {
      eyebrow: "Polska / CEE",
      title: "Dla zespołów CapEx w produkcji i infrastrukturze",
      description:
        "Finanse, PMO i kontroling projektowy prowadzący wieloletnie programy inwestycyjne w Polsce i regionie Europy Środkowo-Wschodniej.",
      personas: [
        {
          title: "Finanse / controlling",
          description: "Wiarygodne prognozy, kontrola zobowiązań i raporty dla zarządu.",
        },
        {
          title: "PMO / zarządzanie programem",
          description: "Spójne raportowanie i governance portfela między lokalizacjami.",
        },
        {
          title: "Kontroling projektowy",
          description: "Ścieżka audytu od faktury wykonawcy do zatwierdzonej zmiany.",
        },
      ],
    },
    cta: {
      headline: "Przejrzystość w portfelu CapEx zaczyna się od rozmowy.",
      description: `Zobacz ${PRODUCT_NAME} w demo dopasowanym do Państwa programu inwestycyjnego.`,
      primaryCta: "Poproś o demo",
      contactPrefix: "Lub skontaktuj się z nami:",
    },
  },
};
