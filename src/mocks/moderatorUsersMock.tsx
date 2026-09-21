export const moderatorFunctionsMock = [
  {
    id: 1,
    code: "MINISTRANT",
    name: "Ministrant",
  },
  {
    id: 2,
    code: "LEKTOR",
    name: "Lektor",
  },
  {
    id: 3,
    code: "ANIMATOR",
    name: "Animator",
  },
] as const;

export const moderatorUsersMock = [
  {
    id: 1,
    name: "Jan Kowalski",
    function: {
      id: 1,
      code: "MINISTRANT",
      name: "Ministrant",
    },
    points: 85,
    attendanceRate: 92,
  },
  {
    id: 2,
    name: "Michał Nowak",
    function: {
      id: 2,
      code: "LEKTOR",
      name: "Lektor",
    },
    points: 112,
    attendanceRate: 88,
  },
  {
    id: 3,
    name: "Jakub Wiśniewski",
    function: {
      id: 3,
      code: "ANIMATOR",
      name: "Animator",
    },
    points: 146,
    attendanceRate: 96,
  },
  {
    id: 4,
    name: "Kacper Wójcik",
    function: {
      id: 1,
      code: "MINISTRANT",
      name: "Ministrant",
    },
    points: 63,
    attendanceRate: 81,
  },
  {
    id: 5,
    name: "Mateusz Zieliński",
    function: {
      id: 2,
      code: "LEKTOR",
      name: "Lektor",
    },
    points: 97,
    attendanceRate: 90,
  },
] as const;
