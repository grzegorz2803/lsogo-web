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

export type Dioceses = {
  dioceses: string[];
};

export const diocesesMock: Dioceses = {
  dioceses: [
    "Archidiecezja Białostocka",
    "Diecezja Bielsko-Żywiecka",
    "Diecezja Bydgoska",
    "Archidiecezja Częstochowska",
    "Diecezja Drohiczyńska",
    "Diecezja Elbląska",
    "Diecezja Ełcka",
    "Archidiecezja Gdańska",
    "Diecezja Gliwicka",
    "Archidiecezja Gnieźnieńska",
    "Diecezja Kaliska",
    "Archidiecezja Katowicka",
    "Diecezja Kielecka",
    "Diecezja Koszalińsko-Kołobrzeska",
    "Archidiecezja Krakowska",
    "Diecezja Legnicka",
    "Archidiecezja Lubelska",
    "Diecezja Łomżyńska",
    "Diecezja Łowicka",
    "Archidiecezja Łódzka",
    "Eparchia Olsztyńsko-Gdańska",
    "Diecezja Opolska",
    "Diecezja Pelplińska",
    "Diecezja Płocka",
    "Archidiecezja Poznańska",
    "Archidiecezja Przemyska",
    "Archieparchia Przemysko-Warszawska",
    "Diecezja Radomska",
    "Diecezja Rzeszowska",
    "Diecezja Sandomierska",
    "Diecezja Siedlecka",
    "Diecezja Sosnowiecka",
    "Archidiecezja Szczecińsko-Kamieńska",
    "Diecezja Świdnicka",
    "Diecezja Tarnowska",
    "Diecezja Toruńska",
    "Archidiecezja Warmińska",
    "Archidiecezja Warszawska",
    "Diecezja Warszawsko-Praska",
    "Diecezja Włocławska",
    "Archidiecezja Wrocławska",
    "Eparchia Wrocławsko-Koszalińska",
    "Diecezja Zamojsko-Lubaczowska",
    "Diecezja Zielonogórsko-Gorzowska",
  ],
};
