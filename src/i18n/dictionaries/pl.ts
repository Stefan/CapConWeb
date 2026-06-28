import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "pl",
  meta: {
    title: `${PRODUCT_NAME} – Kontrola projektów dla kapitałochłonnych programów inwestycyjnych`,
    description:
      "Zintegrowana platforma: costbook, zarządzanie zmianami i nadzór portfelowy. Dla złożonych programów budowlanych i inwestycji CAPEX w Polsce, UE i regionie CEE.",
    keywords: [
      "Capex",
      "Portfel projektów",
      "EAC",
      "Prognozowanie",
      "Budownictwo przemysłowe",
      "Life Sciences",
      "PMO",
      "SOV",
      "Master Plan",
    ],
    openGraphLocale: "pl_PL",
  },
  a11y: {
    skipToContent: "Przejdź do treści",
    mainNav: "Nawigacja główna",
    footerNav: "Nawigacja w stopce",
    home: "Strona główna",
    openMenu: "Otwórz menu",
  },
  site: {
    description:
      "Zintegrowana platforma do kontroli projektów i nadzoru finansowego w programach kapitałochłonnych — finanse, zmiany i portfel w jednej warstwie kontrolnej.",
  },
  nav: {
    problem: "Wyzwanie",
    features: "Funkcje",
    solution: "Rozwiązanie",
    audience: "Dla kogo",
    enterprise: "Enterprise",
    login: "Zaloguj się",
    bookDemo: "Umów demo",
    startTrial: "Rozpocznij trial",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "Kontrola projektów i nadzór finansowy dla programów kapitałochłonnych",
    subheadline: `${PRODUCT_NAME} łączy costbook, zarządzanie zmianami, harmonogram i nadzór portfelowy na jednej platformie — z weryfikowalnymi prognozami, spójnymi zatwierdzeniami i wiarygodnymi wskaźnikami dla złożonych programów CAPEX.`,
    primaryCta: "Poproś o demo",
    secondaryCta: "Poznaj platformę",
  },
  problem: {
    title: "Projekty CAPEX są złożone. Ich kontrola nie musi taka być.",
    description:
      "W wielu organizacjach brakuje pełnej przejrzystości — mimo że dane często już istnieją.",
    items: [
      {
        id: "budget-overruns",
        title: "Przekroczenia budżetu",
        description:
          "Odchylenia są często wykrywane z opóźnieniem — gdy działania korygujące są już kosztowne.",
      },
      {
        id: "opaque-forecasts",
        title: "Nieprzejrzyste prognozy",
        description:
          "Różne wersje i założenia utrudniają podejmowanie wiarygodnych decyzji planistycznych.",
      },
      {
        id: "excel-processes",
        title: "Ręczne procesy w Excelu",
        description:
          "Czasochłonna konsolidacja, wysokie ryzyko błędów i ograniczona identyfikowalność.",
      },
      {
        id: "portfolio-blind-spots",
        title: "Brak widoku portfelowego",
        description:
          "Pojedyncze projekty są widoczne — wpływ na budżet inwestycyjny, limity i przepływy pieniężne już nie.",
      },
      {
        id: "change-audit-trail",
        title: "Zmiany bez dowodów",
        description:
          "Warianty i zmiany zakresu trudno uzasadnić względem pierwotnego planu i master planu.",
      },
    ],
  },
  solution: {
    eyebrow: "Rozwiązanie",
    title: `${PRODUCT_NAME} wprowadza przejrzystość tam, gdzie inni widzą tylko dane.`,
    description:
      "Zamiast rozproszonych arkuszy i odizolowanych raportów projektowych CapCon łączy koszty, zobowiązania, skutki zmian i wskaźniki portfelowe w jednym wiarygodnym systemie — od costbooku projektu po konsolidację na poziomie grupy.",
    steps: [
      {
        step: "01",
        title: "Finanse",
        text: "Costbook, zobowiązania i prognozy z jasnym uzasadnieniem — bez równoległych skoroszytów Excel.",
      },
      {
        step: "02",
        title: "Zarządzanie zmianami",
        text: "Zlecenia zmiany i zatwierdzenia z przejrzystym wpływem na całkowitą prognozę kosztów i portfel.",
      },
      {
        step: "03",
        title: "Portfel",
        text: "Konsolidacja między projektami, sygnały walutowe i ryzykowe, raportowanie dla kierownictwa.",
      },
    ],
  },
  features: {
    eyebrow: "Możliwości",
    title: "Narzędzia do wiarygodnej kontroli CAPEX",
    description:
      "To, czego kontrolerzy finansowi i liderzy PMO potrzebują na co dzień: wiarygodne liczby, jasne odchylenia i ciągły widok portfelowy.",
    items: [
      {
        id: "costbook",
        title: "Centralny costbook i weryfikowalne prognozy",
        description:
          "Budżet, prognoza, zobowiązania i wartości rzeczywiste z jasnymi wyjaśnieniami — jedna podstawa finansowa zamiast równoległych arkuszy.",
      },
      {
        id: "change-orders",
        title: "Zarządzanie zmianami",
        description:
          "Zlecenia zmiany, zatwierdzenia i wpływ na prognozę — w pełni udokumentowane od wniosku do widoku portfelowego.",
      },
      {
        id: "portfolio-intelligence",
        title: "Analityka portfelowa",
        description:
          "Wskaźniki we wszystkich projektach, czynniki ryzyka i skutki walutowe dla PMO i komitetów sterujących.",
      },
      {
        id: "schedule-financials",
        title: "Harmonogram i koszty",
        description:
          "Harmonogram i costbook w jednym — plan vs. wykonanie, zobowiązania i wskaźniki finansowe w jednym widoku.",
      },
      {
        id: "registers",
        title: "Ryzyka, problemy i decyzje",
        description:
          "Rejestry z historią wpływu i powiązanymi procesami zatwierdzania.",
      },
      {
        id: "workflows",
        title: "Workflow i audyt",
        description:
          "Konfigurowalne zatwierdzenia, kontekst zgodności i pełny ślad audytowy dla środowisk regulowanych.",
      },
    ],
  },
  productScreens: {
    eyebrow: "Produkt",
    title: "Od costbooku przez zmiany do przeglądu portfela",
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
  socialProof: {
    eyebrow: "Zaufanie",
    quote:
      "Wreszcie system, w którym costbook, zmiany i portfel działają jako całość — bez miesięcznej konsolidacji w Excelu.",
    attribution: "Kontroler finansowy, wielolokalizacyjny program produkcyjny",
    metrics: [
      { value: "1 platforma", label: "Finanse, zmiany i portfel" },
      { value: "Zmiana → EAC", label: "Pełny łańcuch prognozy" },
      { value: "Gotowość audytowa", label: "Rejestry i podpisy zatwierdzeń" },
    ],
  },
  audience: {
    eyebrow: "Odbiorcy",
    title: "Dla złożonych portfeli CAPEX — branżowo otwarte, silne w integracji",
    description:
      "Niezależnie od tego, czy rozbudowują Państwo produkcję, realizują infrastrukturę czy prowadzą program wielolokalizacyjny — budżet, harmonogram i wykonanie projektu muszą być zsynchronizowane. CapCon to zintegrowana warstwa kontrolna między zespołami projektowymi, realizacją na placu budowy a nadzorem finansowym — szczególnie tam, gdzie ERP przechowuje dane finansowe.",
    personas: [
      {
        title: "Kontrolerzy finansowi",
        description:
          "Wiarygodne prognozy, przejrzyste zobowiązania i uzasadnione decyzje inwestycyjne — w budownictwie przemysłowym, life sciences lub innych branżach kapitałochłonnych.",
      },
      {
        title: "PMO / zarządzanie programami",
        description:
          "Nadzór programowy i portfelowy ze spójnym raportowaniem, master planem i odchyleniami w całym portfelu.",
      },
      {
        title: "Kontrolerzy projektów i jakość",
        description:
          "W branżach regulowanych liczy się identyfikowalność, podpisy elektroniczne i spójna jakość danych — od pozycji rozliczeniowej po zatwierdzenie.",
      },
    ],
  },
  enterprise: {
    eyebrow: "Enterprise",
    title: "Stworzone dla wymagających środowisk enterprise",
    description: `${PRODUCT_NAME} spełnia wymagania branż regulowanych i integruje się z istniejącymi procesami finansowymi i zgodności — w Polsce, UE i przy ekspansji w regionie CEE.`,
    badgeDisclaimer:
      "Poziom dojrzałości i zakres certyfikacji zależą od wdrożenia — szczegóły omawiamy na demo.",
    signals: [
      {
        id: "security",
        title: "Bezpieczeństwo i zgodność",
        description:
          "Standardy bezpieczeństwa enterprise z gotowością GxP i 21 CFR Part 11 dla środowisk regulowanych (w zależności od zakresu projektu).",
      },
      {
        id: "signatures",
        title: "Podpisy zatwierdzeń i ślad audytowy",
        description:
          "Elektroniczne zatwierdzenia, trwałe rejestry i identyfikowalne zmiany prognoz i danych rejestrowych.",
      },
      {
        id: "sap",
        title: "Integracja z SAP",
        description:
          "Połączenie z ERP i procesami finansowymi — ścieżka integracji i zakres definiowane indywidualnie dla każdego klienta.",
      },
      {
        id: "gdpr",
        title: "Zgodność z RODO",
        description:
          "Ochrona danych i hosting w europejskich centrach danych zgodnie z wymogami RODO/GDPR — kluczowe dla organizacji w Polsce i UE.",
      },
    ],
    badges: ["Gotowość GxP", "21 CFR Part 11 readiness", "Integracja SAP", "Zgodność z RODO"],
  },
  cta: {
    headline: "Przejrzystość w Państwa portfelu CAPEX zaczyna się od rozmowy.",
    description: `Poznaj ${PRODUCT_NAME} podczas osobistego demo — dopasowanego do Państwa krajobrazu projektowego i wymagań kontroli finansowej.`,
    primaryCta: "Umów demo",
    contactPrefix: "Lub skontaktuj się z naszym zespołem pod adresem",
  },
  demo: {
    metaTitle: "Umów demo",
    title: "Poproś o osobiste demo",
    description:
      "Opisz krótko Państwa krajobraz projektowy — skontaktujemy się z proponowanym terminem demo.",
    nameLabel: "Imię i nazwisko",
    namePlaceholder: "Imię i nazwisko",
    companyLabel: "Firma",
    companyPlaceholder: "Organizacja",
    emailLabel: "E-mail",
    emailPlaceholder: "nazwisko@firma.pl",
    roleLabel: "Stanowisko",
    rolePlaceholder: "np. kontroler finansowy, lider PMO",
    messageLabel: "Wiadomość (opcjonalnie)",
    messagePlaceholder: "Typ projektu, skala obiektu, szczególne wymagania …",
    submit: "Wyślij zapytanie",
    consentBefore: "Wyrażam zgodę na przetwarzanie moich danych zgodnie z",
    consentAfter: ".",
    consentRequired: "Prosimy o potwierdzenie zgody na przetwarzanie danych.",
    backHome: "Powrót do strony głównej",
  },
  footer: {
    rights: "Wszelkie prawa zastrzeżone.",
    impressum: "Informacje prawne",
    privacy: "Polityka prywatności",
  },
  legalPages: {
    impressum: {
      title: "Informacje prawne",
      sections: [
        {
          heading: "Dostawca",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "Kontakt",
          paragraphs: [
            "E-mail: {{email}}",
            "{{phoneLine}}",
          ],
        },
        {
          heading: "Odpowiedzialny za treść",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "Wyłączenie odpowiedzialności",
          paragraphs: [
            "Tworzymy tę stronę z należytą starannością, jednak nie możemy gwarantować dokładności, kompletności ani aktualności wszystkich treści.",
          ],
        },
      ],
    },
    privacy: {
      title: "Polityka prywatności",
      sections: [
        {
          heading: "1. Administrator danych",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "E-mail: {{email}}",
          ],
        },
        {
          heading: "2. Przetwarzane dane osobowe",
          paragraphs: [
            "Podczas odwiedzania tej strony przetwarzane są technicznie niezbędne logi serwera (np. adres IP, znacznik czasu, user agent).",
            "Jeśli korzystają Państwo z formularza demo, przetwarzamy podane dane (imię i nazwisko, firma, e-mail, stanowisko, wiadomość) w celu obsługi zapytania.",
          ],
        },
        {
          heading: "3. Podstawa prawna",
          paragraphs: [
            "Przetwarzanie odbywa się na podstawie art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes w bezpiecznym działaniu strony).",
          ],
        },
        {
          heading: "4. Okres przechowywania",
          paragraphs: [
            "Zapytania demo są usuwane po zakończeniu obsługi sprawy, o ile nie obowiązują ustawowe obowiązki przechowywania.",
          ],
        },
        {
          heading: "5. Państwa prawa",
          paragraphs: [
            "Przysługuje Państwu prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu i przenoszenia danych. Mogą Państwo złożyć skargę do organu nadzorczego.",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "Portfel CAPEX – Q2 2026",
    stats: [
      { label: "Całkowity CAPEX", value: "101,9 mln €" },
      { label: "Delta EAC", value: "+2,4 mln €" },
      { label: "Projekty", value: "12 aktywnych" },
    ],
    columns: { project: "Projekt", budget: "Budżet", eac: "EAC" },
    rows: [
      { name: "Zakład A – rozbudowa", budget: "42,8 mln €", eac: "44,1 mln €" },
      { name: "Clean room – faza 2", budget: "18,2 mln €", eac: "17,9 mln €" },
      { name: "Centrum logistyczne północ", budget: "31,5 mln €", eac: "33,2 mln €" },
      { name: "Infrastruktura IT 2026", budget: "9,4 mln €", eac: "9,6 mln €" },
    ],
  },
};

export default dictionary;
