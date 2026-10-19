export const moderatorUserDetailsMock = [
  {
    id: 2,

    profile: {
      name: "Michał Nowak",
      email: "michal.nowak@example.com",
      function: {
        id: 2,
        code: "LEKTOR",
        name: "Lektor",
      },
      login: "mnowak",
      accountStatus: "ACTIVE",
      joinedAt: "2024-09-01",
    },

    summary: {
      attendanceRate: 88,

      points: {
        month: {
          service: 45,
          meetings: 12,
          other: 5,
          total: 62,
        },

        year: {
          service: 245,
          meetings: 48,
          other: 19,
          total: 312,
        },
      },

      ranking: {
        month: {
          position: 3,
          points: 62,
        },
        year: {
          position: 5,
          points: 312,
        },
      },
    },

    recentAttendance: [
      {
        id: 1,
        name: "Msza Święta",
        date: "2026-09-18",
        time: "18:00",
        status: "PRESENT",
        source: "RFID",
        points: 5,
      },
      {
        id: 2,
        name: "Zbiórka LSO",
        date: "2026-09-16",
        time: "19:00",
        status: "PRESENT",
        source: "MANUAL",
        points: 3,
      },
      {
        id: 3,
        name: "Msza Święta",
        date: "2026-09-13",
        time: "11:00",
        status: "ABSENT",
        source: null,
        points: -5,
      },
      {
        id: 4,
        name: "Msza Święta",
        date: "2026-09-11",
        time: "18:00",
        status: "EXCUSED",
        source: null,
        points: 0,
      },
      {
        id: 5,
        name: "Msza Święta",
        date: "2026-09-06",
        time: "09:30",
        status: "PRESENT",
        source: "RFID",
        points: 5,
      },
    ],

    excuseRequests: [
      {
        id: 1,
        date: "2026-09-20",
        serviceName: "Msza Święta",
        serviceTime: "18:00",
        reason: "Choroba",
        status: "PENDING",
      },
    ],
    excuses: {
      pending: [
        {
          id: 1,
          eventName: "Msza Święta",
          date: "2026-09-18",
          time: "18:00",
          reason: "Choroba",
        },
      ],

      recent: [
        {
          id: 2,
          eventName: "Msza Święta",
          date: "2026-09-11",
          time: "18:00",
          status: "ACCEPTED",
        },
        {
          id: 3,
          eventName: "Msza Święta",
          date: "2026-09-04",
          time: "18:00",
          status: "REJECTED",
        },
      ],
    },
  },
] as const;
