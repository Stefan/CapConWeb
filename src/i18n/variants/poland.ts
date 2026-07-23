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
      eyebrow: "CapEx & Portfolio Intelligence · Polska",
      headline: "Steruj programami CapEx liczbami, które można obronić przed zarządem.",
      subheadline:
        "Jeden costbook dla budżetu, prognozy, zmian i portfela — zwłaszcza tam, gdzie ERP jest źródłem prawdy finansowej.",
      boundaryNote:
        "To nie PPM zadań — CapCon to właścicielska kontrola finansowa z costbookiem i zmianami.",
      primaryCta: "Poproś o demo",
    },
    problem: {
      title: "Złożone programy. Rozproszona kontrola.",
      description:
        "Inwestycje CapEx w Polsce i regionie CEE obejmują wiele lokalizacji i wykonawców — a wiele zespołów nadal uzgadnia dane w Excelu.",
      items: [
        {
          id: "budget-overruns",
          title: "Późno wykrywane odchylenia",
          description:
            "Presja kosztowa ujawnia się po spotkaniach sterujących — gdy opcje naprawcze są ograniczone.",
        },
        {
          id: "excel-processes",
          title: "Konsolidacja w arkuszach",
          description:
            "Zespoły PMO tracą dni co miesiąc na łączenie danych wykonawców, logów zmian i widoków portfelowych.",
        },
        {
          id: "sap-shadow-ledger",
          title: "ERP ≠ costbook projektu",
          description:
            "Import z ERP ≠ costbook projektu — kontrolerzy odbudowują prawdę w cieniu Excela.",
        },
      ],
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
    features: {
      eyebrow: "Dla programów w Polsce",
      title: "Kontrola, której zespoły CapEx potrzebują co miesiąc",
      description:
        "Wiarygodne liczby, audytowalne zatwierdzenia i uzgodnienie z ERP — dla produkcji i infrastruktury w Polsce i CEE.",
      items: [
        {
          id: "costbook",
          title: "Costbook i prognozy",
          description: "Budżet, zobowiązania i weryfikowalna prognoza ukończenia w jednym systemie.",
        },
        {
          id: "change-orders",
          title: "Zarządzanie zmianami",
          description: "Zlecenia zmiany, zatwierdzenia i wpływ na prognozę — w pełni udokumentowane.",
        },
        {
          id: "workflows",
          title: "Workflow i audyt",
          description: "Procesy zatwierdzania zgodne z RODO i wymogami wewnętrznej kontroli.",
        },
        {
          id: "portfolio-intelligence",
          title: "Nadzór portfelowy",
          description: "Zunifikowany widok inwestycji wielolokalizacyjnych i wczesne sygnały odchyleń.",
        },
        {
          id: "sap-reconciliation",
          title: "Uzgodnienie SAP / ERP",
          description: "Porównanie ERP z costbookiem — mniej równoległych skoroszytów na spotkaniach sterujących.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Produkt",
      title: "Od costbooku przez zmiany do widoku portfela",
      description:
        "CapCon łączy operacyjną kontrolę projektów z nadzorem portfelowym — bez miesięcznej konsolidacji w Excelu.",
      panels: [
        {
          id: "costbook",
          title: "Costbook i całkowity koszt",
          caption: "Struktura kosztów, zobowiązania i weryfikowalna prognoza ukończenia.",
        },
        {
          id: "co-cc",
          title: "Wpływ zmian",
          caption: "Zlecenia zmiany powiązane z prognozą i sygnałami portfelowymi.",
        },
        {
          id: "portfolio",
          title: "Nadzór portfelowy",
          caption: "Wskaźniki programu, wczesne ostrzeżenia o odchyleniach i priorytetowe działania.",
        },
        {
          id: "risks",
          title: "Zarządzanie ryzykiem",
          caption: "Ocena, kategorie i kluczowe ryzyka powiązane z nadzorem portfelowym.",
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
