export type AttendanceStatus = "PRESENT" | "ABSENT" | "EXCUSED";

export type AttendanceSource = "RFID" | "MANUAL";

export type AttendanceEventType = "SERVICE" | "MEETING";

export type ModeratorAttendanceEntry = {
  id: number;

  user: {
    id: number;
    name: string;
    function: {
      code: string;
      name: string;
    };
  };

  event: {
    id: number;
    name: string;
    type: AttendanceEventType;
  };

  date: string;
  time: string;

  status: AttendanceStatus;
  source: AttendanceSource;

  points: number;
};

export const moderatorAttendanceMock: ModeratorAttendanceEntry[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Jan Kowalski",
      function: {
        code: "MINISTRANT",
        name: "Ministrant",
      },
    },
    event: {
      id: 101,
      name: "Msza Święta",
      type: "SERVICE",
    },
    date: "2026-09-28",
    time: "09:30",
    status: "PRESENT",
    source: "RFID",
    points: 5,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Michał Nowak",
      function: {
        code: "LEKTOR",
        name: "Lektor",
      },
    },
    event: {
      id: 101,
      name: "Msza Święta",
      type: "SERVICE",
    },
    date: "2026-09-28",
    time: "09:30",
    status: "PRESENT",
    source: "MANUAL",
    points: 5,
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Jakub Wiśniewski",
      function: {
        code: "LEKTOR",
        name: "Lektor",
      },
    },
    event: {
      id: 102,
      name: "Msza Święta",
      type: "SERVICE",
    },
    date: "2026-09-27",
    time: "18:00",
    status: "ABSENT",
    source: "MANUAL",
    points: -5,
  },
  {
    id: 4,
    user: {
      id: 4,
      name: "Kacper Wójcik",
      function: {
        code: "MINISTRANT",
        name: "Ministrant",
      },
    },
    event: {
      id: 103,
      name: "Zbiórka LSO",
      type: "MEETING",
    },
    date: "2026-09-26",
    time: "19:00",
    status: "PRESENT",
    source: "MANUAL",
    points: 3,
  },
  {
    id: 5,
    user: {
      id: 5,
      name: "Mateusz Zieliński",
      function: {
        code: "ANIMATOR",
        name: "Animator",
      },
    },
    event: {
      id: 104,
      name: "Msza Święta",
      type: "SERVICE",
    },
    date: "2026-09-25",
    time: "18:00",
    status: "EXCUSED",
    source: "MANUAL",
    points: 0,
  },
];
