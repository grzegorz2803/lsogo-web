export type LiturgicalColor =
  | "biały"
  | "czerwony"
  | "zielony"
  | "fioletowy"
  | "różowy"
  | "czarny";

export type OptionalCelebration = {
  id: string;
  title: string;
  color: LiturgicalColor;
  type: "wspomnienie dowolne" | "wspomnienie" | "święto";
};

export type CalendarDayData = {
  date: string; // YYYY-MM-DD
  weekday: string;
  mainTitle: string;
  mainSubtitle?: string;
  rank: string;
  color: LiturgicalColor;
  readings: string[];
  optionalCelebrations?: OptionalCelebration[];
  notes?: string;
};

export const dioceseOptions = [
  "Archidiecezja Krakowska",
  "Archidiecezja Warszawska",
  "Diecezja Tarnowska",
  "Diecezja Bielsko-Żywiecka",
];

export const calendarDaysMock: CalendarDayData[] = [
  {
    date: "2026-06-26",
    weekday: "Piątek",
    mainTitle: "Dzień powszedni",
    mainSubtitle: "13. tydzień zwykły",
    rank: "dzień powszedni",
    color: "zielony",
    readings: [
      "Rdz 17, 1. 9-10. 15-22",
      "Ps 128 (127), 1b-2. 3. 4-5",
      "Mt 8, 1-4",
    ],
    optionalCelebrations: [
      {
        id: "opt-1",
        title: "Świętych męczenników Kosmy i Damiana",
        color: "czerwony",
        type: "wspomnienie dowolne",
      },
      {
        id: "opt-2",
        title: "Świętych męczenników Wawrzyńca Ruiz i Towarzyszy",
        color: "czerwony",
        type: "wspomnienie dowolne",
      },
    ],
    notes:
      "Msza dowolna. Dziś imieniny bpa Damiana oraz rocznice święceń kilku kapłanów.",
  },
  {
    date: "2026-03-19",
    weekday: "Czwartek",
    mainTitle: "Św. Józefa, Oblubieńca Najświętszej Maryi Panny",
    rank: "uroczystość",
    color: "biały",
    readings: [
      "2 Sm 7, 4-5a. 12-14a. 16",
      "Ps 89 (88), 2-3. 4-5. 27 i 29",
      "Rz 4, 13. 16-18. 22",
      "Mt 1, 16. 18-21. 24a",
    ],
  },
  {
    date: "2026-10-18",
    weekday: "Niedziela",
    mainTitle: "29. Niedziela zwykła",
    rank: "niedziela",
    color: "zielony",
    readings: [
      "Iz 45, 1. 4-6",
      "Ps 96 (95), 1 i 3. 4-5. 7-8. 9-10ac",
      "1 Tes 1, 1-5b",
      "Mt 22, 15-21",
    ],
  },
  {
    date: "2026-09-15",
    weekday: "Wtorek",
    mainTitle: "Najświętszej Maryi Panny Bolesnej",
    rank: "wspomnienie",
    color: "biały",
    readings: [
      "Hbr 5, 7-9",
      "Ps 31 (30), 2 i 6. 12-13. 15-16. 20",
      "J 19, 25-27 lub Łk 2, 33-35",
    ],
    notes: "Można po Mszy odprawić nabożeństwo ku czci Matki Bożej Bolesnej.",
  },
];
