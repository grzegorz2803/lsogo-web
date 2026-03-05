export const parishContent = {
  hero: {
    title: "Dla parafii",
    subtitle:
      "Wdrożenie LSOgo porządkuje grafik służby, obecności, komunikację i dokumentację — bez chaosu w zakrystii.",
    primaryCta: { label: "Zapytaj o wdrożenie", href: "/kontakt" },
    secondaryCta: { label: "Zobacz funkcje", href: "/#funkcje" },
  },

  benefits: {
    title: "Co zyskuje parafia?",
    subtitle:
      "Jedno narzędzie dla proboszcza, animatorów i ministrantów — z jasnymi zasadami i danymi pod ręką.",
    items: [
      {
        id: "order",
        title: "Porządek i przejrzystość",
        description:
          "Wiesz kto służy, kto nie przyszedł i jak wygląda zaangażowanie grupy w dłuższym czasie.",
        icon: "📋",
      },
      {
        id: "time",
        title: "Oszczędność czasu",
        description:
          "Koniec ręcznych list i przepisywania obecności. Grafik i punkty liczą się automatycznie.",
        icon: "⏱️",
      },
      {
        id: "communication",
        title: "Lepsza komunikacja",
        description:
          "Ogłoszenia, wiadomości i usprawiedliwienia w jednym miejscu — mniej chaosu na grupach.",
        icon: "💬",
      },
      {
        id: "security",
        title: "Bezpieczeństwo i kontrola",
        description:
          "Uprawnienia ról, historia zmian i czytelne logi. Moderator widzi tylko swoją parafię.",
        icon: "🛡️",
      },
    ],
  },

  implementation: {
    title: "Jak wygląda wdrożenie?",
    subtitle:
      "Prosto, krok po kroku — bez stresu i bez „informatyki” po stronie parafii.",
    steps: [
      {
        id: "step1",
        title: "Kontakt i potrzeby",
        description:
          "Ustalamy liczebność LSO, zasady punktów i typy nabożeństw.",
      },
      {
        id: "step2",
        title: "Konfiguracja parafii",
        description:
          "Tworzymy strukturę ról, ustawiamy grafik, uprawnienia i dane startowe.",
      },
      {
        id: "step3",
        title: "Urządzenie i testy",
        description:
          "Konfigurujemy RFID (jeśli używacie) i robimy próbę działania na żywo.",
      },
      {
        id: "step4",
        title: "Start i wsparcie",
        description:
          "Wdrożenie + krótkie szkolenie moderatorów. Potem wsparcie techniczne.",
      },
    ],
  },

  faq: {
    title: "Najczęstsze pytania",
    subtitle: "Jeśli czegoś nie ma — napisz, dopasujemy pod Waszą parafię.",
    items: [
      {
        id: "q1",
        question: "Czy parafia musi mieć sprzęt?",
        answer:
          "Nie. LSOgo może działać bez RFID. Sprzęt to opcja, która ułatwia szybkie odnotowanie obecności.",
      },
      {
        id: "q2",
        question: "Kto ma dostęp do danych?",
        answer:
          "Moderatorzy w parafii widzą dane swojej parafii. Administrator systemu widzi tylko to, co potrzebne do utrzymania usługi.",
      },
      {
        id: "q3",
        question: "Czy można zmienić zasady punktów?",
        answer:
          "Tak — konfiguracja punktów i typów nabożeństw jest elastyczna i dopasowana do parafii.",
      },
    ],
  },

  finalCta: {
    title: "Chcesz wdrożyć LSOgo w parafii?",
    subtitle:
      "Napisz — przygotujemy konfigurację pod Wasze potrzeby i pokażemy demo.",
    button: { label: "Skontaktuj się", href: "/kontakt" },
  },
};
