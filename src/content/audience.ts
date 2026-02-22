export type AudienceCardId = "altarServer" | "animator" | "priest";
export type AudienceCard = {
  id: AudienceCardId;
  title: string;
  roleLabel: string;
  description: string;
  bullets: string[];
  icon: string;
};
export type AudienceSectionContent = {
  title: string;
  subtitle: string;
  cards: AudienceCard[];
};

export const audienceSectionContent: AudienceSectionContent = {
  title: "Dla kogo jest LSOgo?",
  subtitle:
    "Jedna aplikacja, trzy perspektywy: ministranta, animatora i księdza. Każdy widzi dokładnie to, czego potrzebuje.",
  cards: [
    {
      id: "altarServer",
      title: "Dla ministranta",
      roleLabel: "Ministrant / lektor",
      description:
        "Widzę swoje służby, punkty i ogłoszenia bez szukania kartek na tablicy ogłoszeń.",
      bullets: [
        "podgląd swoich służb na Msze i nabożeństwa",
        "aktualny stan punktów i rankingu",
        "wiadomości od animatora i księdza",
      ],
      icon: "🕯️",
    },
    {
      id: "animator",
      title: "Dla animatora",
      roleLabel: "Animator / opiekun LSO",
      description:
        "Mam kontrolę nad grupą, obecnościami i grafikami służby w jednym miejscu.",
      bullets: [
        "układanie grafików i planu służby",
        "sprawdzanie obecności i punktów",
        "szybka komunikacja z ministrantami",
      ],
      icon: "🔔",
    },
    {
      id: "priest",
      title: "Dla księdza",
      roleLabel: "Ksiądz opiekun",
      description:
        "Widzę, kto służy, ile jest osób i jaki jest porządek w całej służbie.",
      bullets: [
        "wgląd w grafik służby na Mszach",
        "informacje o frekwencji i zaangażowaniu",
        "wsparcie w organizacji większych wydarzeń",
      ],
      icon: "⛪",
    },
  ],
};
