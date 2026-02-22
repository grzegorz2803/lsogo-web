export type TodayLiturgicalInfo = {
  title: string;
  rank: string;
  color: "biały" | "czerwony" | "zielony" | "fioletowy";
  readings: string[];
};

export const todayLiturgicalInfoMock: TodayLiturgicalInfo = {
  title: "Uroczytość Św. Józefa, Oblubieńca Najświętszej Maryi Panny",
  rank: "Uroczystość",
  color: "biały",
  readings: [
    "2 Sm 7, 4-5a. 12-14a. 16",
    "Ps 89 (88), 2-3. 4-5. 27 i 29",
    "Rz 4, 13. 16-18. 22",
    "Mt 1, 16. 18-21. 24a",
  ],
};
