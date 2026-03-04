export type AboutValue = {
  id: "order" | "clarity" | "community" | "automation";
  title: string;
  description: string;
  icon: string;
};
export type AboutStep = {
  id: "setup" | "plan" | "serve";
  title: string;
  description: string;
};

export type AboutFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type AboutContent = {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  sections: {
    values: { title: string; subtitle: string; items: AboutValue[] };
    howItWorks: { title: string; subtitle: string; steps: AboutStep[] };
    faq: { title: string; subtitle: string; items: AboutFaqItem[] };
    finalCta: {
      title: string;
      subtitle: string;
      button: { label: string; href: string };
    };
  };
};
export const aboutContent: AboutContent = {
  hero: {
    title: "O systemie LSOgo",
    subtitle:
      "LSOgo to platforma, która porządkuje grafiki służby, obecności, komunikację i dane liturgiczne. Zbudowana tak, aby była prosta dla ministranta i konkretna dla animatora oraz księdza.",
    primaryCta: { label: "Zobacz kalendarz", href: "/kalendarz" },
    secondaryCta: { label: "Dla parafii", href: "/dla-parafii" },
  },
  sections: {
    values: {
      title: "Dlaczego LSOgo?",
      subtitle: "Cztery filary, które prowadzą ten projekt od początku.",
      items: [
        {
          id: "order",
          title: "Porządek",
          description:
            "Koniec z kartkami i chaosem. Jedno miejsce na grafiki, ogłoszenia i historię służb.",
          icon: "📌",
        },
        {
          id: "clarity",
          title: "Przejrzystość",
          description:
            "Każdy widzi to, co powinien: ministrant swoje służby, animator całą grupę, ksiądz podgląd całości.",
          icon: "🧭",
        },
        {
          id: "community",
          title: "Wspólnota",
          description:
            "Komunikacja i ogłoszenia w jednym miejscu – bez rozproszonych wiadomości po różnych kanałach.",
          icon: "🤝",
        },
        {
          id: "automation",
          title: "Automatyzacja",
          description:
            "RFID, punkty i obecności mogą działać automatycznie. Mniej ręcznej pracy, więcej spokoju.",
          icon: "⚙️",
        },
      ],
    },
    howItWorks: {
      title: "Jak to działa?",
      subtitle: "Prosty proces, który pasuje do realiów parafii.",
      steps: [
        {
          id: "setup",
          title: "Konfiguracja parafii",
          description:
            "Ustalasz podstawy: diecezję, listę ministrantów, zasady punktacji i typy nabożeństw.",
        },
        {
          id: "plan",
          title: "Planowanie służby",
          description:
            "Tworzysz harmonogram na Msze i nabożeństwa. System pilnuje czytelności i spójności.",
        },
        {
          id: "serve",
          title: "Służba i historia",
          description:
            "Ministranci widzą swoje zadania, a obecności i punkty zapisują się w historii (z RFID lub ręcznie).",
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Najczęstsze pytania na start (wersja robocza).",
      items: [
        {
          id: "faq-1",
          question: "Czy LSOgo zadziała bez internetu?",
          answer:
            "Frontend i urządzenie mogą działać offline, a synchronizacja następuje po odzyskaniu połączenia. (Docelowo.)",
        },
        {
          id: "faq-2",
          question: "Czy trzeba mieć urządzenie RFID?",
          answer:
            "Nie. RFID jest opcją. Obecności można też zaznaczać ręcznie przez animatora.",
        },
        {
          id: "faq-3",
          question: "Czy to jest dla jednej czy wielu parafii?",
          answer:
            "System projektowany jest tak, aby obsługiwać wiele parafii, z lokalną moderacją i jedną platformą.",
        },
        {
          id: "faq-4",
          question: "Czy ministranci muszą mieć konta?",
          answer:
            "Tak, ale prosty onboarding i jasne uprawnienia. Docelowo także aplikacja mobilna.",
        },
      ],
    },
    finalCta: {
      title: "Chcesz wdrożyć LSOgo w parafii?",
      subtitle:
        "Zobacz informacje dla parafii lub skontaktuj się – przygotujemy konfigurację pod Twoje potrzeby.",
      button: { label: "Przejdź do strony dla parafii", href: "/dla-parafii" },
    },
  },
};
