export type NextService = {
  dateLabel: string;
  time: string;
  serviceName: string;
  status: "today" | "tomorrow" | "upcoming";
};
export type RankingStats = {
  monthly: {
    position: number;
    totalUsers: number;
    servicePoints: number;
    meetingPoints: number;
    totalPoints: number;
    missingToLeader: number;
    missingToPodium: number;
    missingToPrevious: number;
    leadOverNext: number;
  };
  yearly: {
    position: number;
    totalUsers: number;
    servicePoints: number;
    meetingPoints: number;
    totalPoints: number;
    missingToLeader: number;
    missingToPodium: number;
    missingToPrevious: number;
    leadOverNext: number;
  };
};

export type RecentServiceItem = {
  id: number;
  dateLabel: string;
  time: string;
  serviceName: string;
  points: number;
};
export type NotificationItem = {
  id: number;
  type: "message" | "schedule" | "justification" | "info";
  title: string;
  dateLabel: string;
};

export const userDashboardMock = {
  nextService: {
    dateLabel: "Niedziela, 12 maja",
    time: "9:30",
    serviceName: "Msza święta",
    status: "tomorrow",
  } satisfies NextService,

  ranking: {
    monthly: {
      position: 5,
      totalUsers: 42,
      servicePoints: 40,
      meetingPoints: 16,
      totalPoints: 56,
      missingToLeader: 12,
      missingToPodium: 6,
      missingToPrevious: 2,
      leadOverNext: 4,
    },
    yearly: {
      position: 7,
      totalUsers: 42,
      servicePoints: 180,
      meetingPoints: 42,
      totalPoints: 222,
      missingToLeader: 21,
      missingToPodium: 9,
      missingToPrevious: 3,
      leadOverNext: 5,
    },
  } satisfies RankingStats,

  recentServices: [
    {
      id: 1,
      dateLabel: "12 maja",
      time: "9:30",
      serviceName: "Msza święta",
      points: 2,
    },
    {
      id: 2,
      dateLabel: "10 maja",
      time: "16:00",
      serviceName: "Zbiórka",
      points: 1,
    },
    {
      id: 3,
      dateLabel: "8 maja",
      time: "18:00",
      serviceName: "Nabożeństwo majowe",
      points: 0,
    },
    {
      id: 4,
      dateLabel: "5 maja",
      time: "7:00",
      serviceName: "Msza poranna",
      points: -2,
    },
    {
      id: 5,
      dateLabel: "3 maja",
      time: "11:00",
      serviceName: "Uroczystość parafialna",
      points: 3,
    },
  ] satisfies RecentServiceItem[],

  notifications: [
    {
      id: 1,
      type: "schedule",
      title: "Przydzielono Ci nową służbę na 12 maja.",
      dateLabel: "Dzisiaj",
    },
    {
      id: 2,
      type: "justification",
      title: "Twoje usprawiedliwienie zostało zaakceptowane.",
      dateLabel: "Wczoraj",
    },
    {
      id: 3,
      type: "message",
      title: "Nowa wiadomość od moderatora.",
      dateLabel: "2 dni temu",
    },
  ] satisfies NotificationItem[],
};
