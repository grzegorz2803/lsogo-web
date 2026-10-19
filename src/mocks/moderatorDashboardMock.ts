export const moderatorDashboardMock = {
  pending: {
    excuses: 3,
    appeals: 1,
  },

  todayServices: [
    {
      id: 1,
      name: "Msza Święta",
      time: "08:00",
      points: 5,
    },
    {
      id: 2,
      name: "Msza Święta",
      time: "18:00",
      points: 5,
    },
  ],

  schedule: {
    current: {
      name: "Wrzesień 2026",
      status: "PUBLISHED",
    },
    next: {
      name: "Październik 2026",
      status: "DRAFT",
    },
  },

  upcomingAssignments: [
    {
      id: 1,
      name: "Msza Święta niedzielna",
      date: "2026-09-20",
      time: "11:00",
      assignedCount: 8,
    },
    {
      id: 2,
      name: "Nabożeństwo",
      date: "2026-09-20",
      time: "17:00",
      assignedCount: 6,
    },
  ],

  recentAttendance: [
    {
      id: 1,
      userName: "Jan Kowalski",
      serviceName: "Msza Święta",
      date: "2026-09-18",
      time: "18:00",
      status: "PRESENT",
      source: "RFID",
    },
    {
      id: 2,
      userName: "Michał Nowak",
      serviceName: "Msza Święta",
      date: "2026-09-18",
      time: "18:00",
      status: "ABSENT",
      source: "MANUAL",
    },
    {
      id: 3,
      userName: "Jakub Wiśniewski",
      serviceName: "Msza Święta",
      date: "2026-09-18",
      time: "08:00",
      status: "PRESENT",
      source: "RFID",
    },
  ],

  messages: {
    unreadCount: 2,
  },
} as const;
