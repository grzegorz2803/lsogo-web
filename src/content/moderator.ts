export const moderatorContent = {
  pages: {
    users: "Użytkownicy",
    ranking: "Ranking",
    attendance: "Obecności",
    schedule: "Harmonogram",
    services: "Nabożeństwa",
    calendar: "Kalendarz",
    messages: "Wiadomości",
    notifications: "Powiadomienia",
    reports: "Raporty",
    profile: "Profil",
  },
  dashboard: {
    title: "Panel moderatora",
    subtitle: "Najważniejsze informacje i sprawy dotyczące Twojej wspólnoty.",

    pending: {
      title: "Do rozpatrzenia",
      excuses: "Usprawiedliwienia",
      appeals: "Sprzeciwy",
      action: "Przejdź do spraw",
    },

    services: {
      title: "Dzisiejsze nabożeństwa",
      attendanceAction: "Sprawdź obecność",
      allAction: "Zobacz wszystkie",
      empty: "Brak nabożeństw na dzisiaj.",
      points: "pkt",
    },

    schedule: {
      title: "Harmonogram",
      current: "Aktualny",
      next: "Następny",
      action: "Przejdź do harmonogramu",
      status: {
        published: "Opublikowany",
        draft: "Szkic",
      },
    },

    assignments: {
      title: "Najbliższe asysty",
      assigned: "Przypisanych",
      empty: "Brak najbliższych asyst.",
      action: "Zobacz harmonogram",
    },

    attendance: {
      title: "Ostatnie obecności",
      allAction: "Zobacz historię",
      empty: "Brak ostatnich obecności.",
      status: {
        present: "Obecny",
        absent: "Nieobecny",
      },
      source: {
        rfid: "RFID",
        manual: "Ręcznie",
      },
      action: "Zobacz historię",
    },

    messages: {
      title: "Wiadomości",
      unread: "Nieprzeczytane",
      action: "Przejdź do wiadomości",
      empty: "Brak nowych wiadomości.",
    },
  },
  users: {
    title: "Użytkownicy",
    subtitle: "Członkowie Liturgicznej Służby Ołtarza w Twojej wspólnocie.",

    search: {
      placeholder: "Szukaj użytkownika...",
    },

    filters: {
      all: "Wszyscy",
      ministrant: "Ministranci",
      lektor: "Lektorzy",
      animator: "Animatorzy",
    },

    table: {
      user: "Użytkownik",
      function: "Funkcja",
      points: "Punkty",
      attendance: "Obecność",
      actions: "Akcje",
    },

    action: {
      details: "Szczegóły",
    },

    empty: "Nie znaleziono użytkowników.",

    functions: {
      ministrant: "Ministrant",
      lektor: "Lektor",
      animator: "Animator",
    },
    details: {
      back: "Wróć do użytkowników",
      title: "Profil użytkownika",

      account: {
        active: "Aktywne",
        inactive: "Nieaktywne",
        pendingActivation: "Oczekuje na aktywację",
      },

      actions: {
        changeFunction: "Zmień funkcję",
        resetPassword: "Resetuj dostęp",
      },

      summary: {
        attendance: "Frekwencja",
        points: "Punkty",
        ranking: "Pozycja w rankingu",
        percent: "%",
      },
      points: {
        title: "Punkty",
        service: "Służba",
        meetings: "Zbiórki",
        other: "Inne",
        total: "Łącznie",
        month: "Wrzesień 2026",
        year: "Rok 2026",
      },

      ranking: {
        title: "Ranking",
        period: "Okres",
        points: "Punkty",
        position: "Pozycja",
        month: "Wrzesień 2026",
        year: "Rok 2026",
      },
      recentAttendance: {
        title: "Ostatnie obecności",
        columns: {
          event: "Wydarzenie",
          date: "Data",
          status: "Status",
          points: "Punkty",
        },
        statuses: {
          PRESENT: "Obecny",
          ABSENT: "Nieobecny",
          EXCUSED: "Usprawiedliwiony",
        },
        sources: {
          RFID: "RFID",
          MANUAL: "Ręcznie",
        },
        showHistory: "Zobacz historię obecności",
      },
      excuses: {
        title: "Usprawiedliwienia",
        pending: "Oczekujące",
        recent: "Ostatnie",
        reason: "Powód",
        review: "Rozpatrz",
        showAll: "Zobacz wszystkie",
        statuses: {
          ACCEPTED: "Zaakceptowane",
          REJECTED: "Odrzucone",
        },
      },
      profile: {
        title: "Dane użytkownika",
        function: "Funckja",
        accountStatus: "Status konta",
        login: "Login",
        email: "E-mail",
        joinedAt: "Data dołączenia",
        active: "Aktywny",
        disActive: "Nieaktywny",
      },
      changeFunctionModal: {
        title: "Zmień funkcję",
        currentFunction: "Obecna funkcja",
        newFunction: "Nowa funkcja",
        selectPlaceholder: "Wybierz funkcję",
        cancel: "Anuluj",
        save: "Zapisz zmianę",
      },
      resetAccessModal: {
        confirm: {
          title: "Resetuj dostęp",
          description:
            "Konto użytkownika zostanie przywrócone do stanu początkowego. Użytkownik będzie musiał ponownie aktywować konto, podać adres e-mail i ustawić nowe hasło.",
          login: "Login użytkownika",
          unchangedData:
            "Punkty, obecności, ranking, funkcja oraz pozostałe dane użytkownika nie zostaną zmienione.",
          cancel: "Anuluj",
          reset: "Resetuj dostęp",
        },

        success: {
          title: "Dostęp został zresetowany",
          description:
            "Przekaż użytkownikowi nowe dane logowania. Przy pierwszym logowaniu będzie musiał ponownie aktywować konto.",
          login: "Login",
          temporaryPassword: "Hasło startowe",
          passwordWarning:
            "Hasło startowe zostanie pokazane tylko teraz. Przekaż je użytkownikowi przed zamknięciem tego okna.",
          done: "Gotowe",
        },
      },
    },
  },
  ranking: {
    title: "Ranking",
    description:
      "Ranking użytkowników na podstawie punktów zdobytych w wybranym okresie.",

    filters: {
      period: "Okres",
      periodMonth: "Miesiąc",
      periodYear: "Rok",
      month: "Miesiąc",
      year: "Rok",
      function: "Funkcja",
      allFunctions: "Wszystkie funkcje",
      rankingBy: "Ranking według",
    },

    rankingBy: {
      total: "Sumy punktów",
      service: "Służby",
      meetings: "Zbiórek",
    },
    months: [
      { value: 1, label: "Styczeń" },
      { value: 2, label: "Luty" },
      { value: 3, label: "Marzec" },
      { value: 4, label: "Kwiecień" },
      { value: 5, label: "Maj" },
      { value: 6, label: "Czerwiec" },
      { value: 7, label: "Lipiec" },
      { value: 8, label: "Sierpień" },
      { value: 9, label: "Wrzesień" },
      { value: 10, label: "Październik" },
      { value: 11, label: "Listopad" },
      { value: 12, label: "Grudzień" },
    ],

    table: {
      position: "Miejsce",
      user: "Imię i nazwisko",
      function: "Funkcja",
      service: "Służba",
      meetings: "Zbiórki",
      total: "Suma",
      actions: "Akcje",
      details: "Szczegóły",
    },

    empty: "Brak danych rankingowych dla wybranego okresu.",
  },
  attendance: {
    title: "Obecności",
    description:
      "Historia obecności użytkowników na nabożeństwach i zbiórkach.",

    history: {
      title: "Historia obecności",

      filters: {
        dateFrom: "Data od",
        dateTo: "Data do",
        user: "Użytkownik",
        allUsers: "Wszyscy użytkownicy",
        event: "Wydarzenie",
        allEvents: "Wszystkie wydarzenia",
        eventType: "Typ wydarzenia",
        allEventTypes: "Wszystkie typy",
        status: "Status",
        allStatuses: "Wszystkie statusy",
        source: "Źródło",
        allSources: "Wszystkie źródła",
        clear: "Wyczyść filtry",
      },

      eventTypes: {
        service: "Nabożeństwo",
        meeting: "Zbiórka",
      },

      statuses: {
        present: "Obecny",
        absent: "Nieobecny",
        excused: "Usprawiedliwiony",
      },

      sources: {
        rfid: "RFID",
        manual: "Ręcznie",
      },

      table: {
        user: "Użytkownik",
        function: "Funkcja",
        event: "Wydarzenie",
        date: "Data",
        time: "Godzina",
        status: "Status",
        source: "Źródło",
        points: "Punkty",
      },

      empty: "Brak wpisów obecności dla wybranych filtrów.",
    },
  },
};
