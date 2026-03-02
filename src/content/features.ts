export type FeatureCardId =
  | "liturgicalCalendar"
  | "serviceSchedule"
  | "rfidPresence"
  | "attendancePoints"
  | "notifications"
  | "multiParish";

export type FeatureCard = {
  id: FeatureCardId;
  title: string;
  description: string;
  icon: string;
  tag?: string;
};

export type FeaturesSectionContent = {
  title: string;
  subtitle: string;
  cards: FeatureCard[];
};

export const featuresSectionContent: FeaturesSectionContent = {
  title: "Najważniejsze funkcje LSOgo",
  subtitle:
    "Jedno narzędzie, które ogarnia kalendarz liturgiczny, grafiki służby, obecności i komunikację z całą LSO.",
  cards: [
    {
      id: "liturgicalCalendar",
      title: "Kalendarz liturgiczny",
      description:
        "Rangi dni, kolory szat i czytania dla wybranej diecezji – zawsze aktualne i pod ręką, także dla ministrantów.",
      icon: "📅",
      tag: "Core",
    },
    {
      id: "serviceSchedule",
      title: "Harmonogram służby",
      description:
        "Przejrzysty plan służby na Msze i nabożeństwa. Każdy wie, kiedy ma służyć, bez szukania kartek w zakrystii.",
      icon: "📜",
    },
    {
      id: "rfidPresence",
      title: "Rejestracja przez RFID",
      description:
        "Wejście na służbę jednym odbiciem breloka. Brak podpisów w zeszycie, brak przepisywania obecności.",
      icon: "🔐",
      tag: "LSOgo device",
    },
    {
      id: "attendancePoints",
      title: "Obecności i punkty",
      description:
        "Automatyczne naliczanie punktów za obecność i nabożeństwa. Ranking motywuje, a zasady są jasne dla wszystkich.",
      icon: "🎯",
    },
    {
      id: "notifications",
      title: "Ogłoszenia i wiadomości",
      description:
        "Szybka komunikacja z ministrantami i rodzicami: ogłoszenia, zmiany w grafiku, prośby o zastępstwo.",
      icon: "📣",
    },
    {
      id: "multiParish",
      title: "Obsługa wielu parafii",
      description:
        "System gotowy na więcej niż jedną parafię – moderacja lokalna, ale jedna, spójna platforma.",
      icon: "⛪",
      tag: "Dla dekanatu",
    },
  ],
};
