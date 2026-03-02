export type FooterLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterContent = {
  brand: {
    name: string;
    tagline: string;
  };
  columns: {
    title: string;
    links: FooterLink[];
  }[];
  bottomNote: string;
};

export const footerContent = {
  brand: {
    name: "LSOgo",
    tagline: "Aplikacja dla Liturgicznej Słuzby Ołtarza",
  },
  columns: [
    {
      title: "Nawigacja",
      links: [
        { id: "calendar", label: "Kalendarz liturgiczny", href: "/kalendarz" },
        { id: "features", label: "Funkcje", href: "#funkcje" },
        { id: "pricing", label: "Dla parafii", href: "/dla-parafii" },
        { id: "contact", label: "Kontakt", href: "/kontakt" },
      ],
    },
    {
      title: "Dokumenty",
      links: [
        { id: "privacy", label: "Polityka prywatności", href: "/privacy" },
        { id: "terms", label: "Regulamin", href: "/terms" },
      ],
    },
    {
      title: "Wsparcie",
      links: [
        { id: "support", label: "Pomoc techniczna", href: "/support" },
        { id: "faq", label: "FAQ", href: "/faq" },
      ],
    },
  ],
  bottomNote: "© 2026 LSOgo. Wszelkie prawa zastrzeżone.",
};
