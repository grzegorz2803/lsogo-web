export type ModeratorRankingEntry = {
  userId: number;
  name: string;
  function: {
    id: number;
    code: string;
    name: string;
  };
  points: {
    service: number;
    meetings: number;
    other: number;
    total: number;
  };
};

export type ModeratorMonthlyRanking = {
  year: number;
  month: number;
  users: ModeratorRankingEntry[];
};

export const moderatorRankingMock: ModeratorMonthlyRanking[] = [
  {
    year: 2026,
    month: 9,
    users: [
      {
        userId: 1,
        name: "Jan Kowalski",
        function: {
          id: 1,
          code: "MINISTRANT",
          name: "Ministrant",
        },
        points: {
          service: 55,
          meetings: 15,
          other: 5,
          total: 75,
        },
      },
      {
        userId: 2,
        name: "Michał Nowak",
        function: {
          id: 2,
          code: "LEKTOR",
          name: "Lektor",
        },
        points: {
          service: 45,
          meetings: 12,
          other: 5,
          total: 62,
        },
      },
      {
        userId: 3,
        name: "Jakub Wiśniewski",
        function: {
          id: 2,
          code: "LEKTOR",
          name: "Lektor",
        },
        points: {
          service: 38,
          meetings: 14,
          other: 4,
          total: 56,
        },
      },
      {
        userId: 4,
        name: "Kacper Wójcik",
        function: {
          id: 1,
          code: "MINISTRANT",
          name: "Ministrant",
        },
        points: {
          service: 42,
          meetings: 8,
          other: 2,
          total: 52,
        },
      },
      {
        userId: 5,
        name: "Mateusz Zieliński",
        function: {
          id: 3,
          code: "ANIMATOR",
          name: "Animator",
        },
        points: {
          service: 30,
          meetings: 18,
          other: 2,
          total: 50,
        },
      },
    ],
  },

  {
    year: 2026,
    month: 8,
    users: [
      {
        userId: 1,
        name: "Jan Kowalski",
        function: {
          id: 1,
          code: "MINISTRANT",
          name: "Ministrant",
        },
        points: {
          service: 48,
          meetings: 10,
          other: 3,
          total: 61,
        },
      },
      {
        userId: 2,
        name: "Michał Nowak",
        function: {
          id: 2,
          code: "LEKTOR",
          name: "Lektor",
        },
        points: {
          service: 52,
          meetings: 8,
          other: 0,
          total: 60,
        },
      },
      {
        userId: 3,
        name: "Jakub Wiśniewski",
        function: {
          id: 2,
          code: "LEKTOR",
          name: "Lektor",
        },
        points: {
          service: 40,
          meetings: 12,
          other: 2,
          total: 54,
        },
      },
      {
        userId: 4,
        name: "Kacper Wójcik",
        function: {
          id: 1,
          code: "MINISTRANT",
          name: "Ministrant",
        },
        points: {
          service: 35,
          meetings: 14,
          other: 1,
          total: 50,
        },
      },
      {
        userId: 5,
        name: "Mateusz Zieliński",
        function: {
          id: 3,
          code: "ANIMATOR",
          name: "Animator",
        },
        points: {
          service: 28,
          meetings: 16,
          other: 3,
          total: 47,
        },
      },
    ],
  },
];
