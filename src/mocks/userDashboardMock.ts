export type UpcomingServiceStatus = "today" | "tomorrow" | "upcoming";

export type UpcomingServiceItem = {
  id: number;
  dateLabel: string;
  time: string;
  serviceName: string;
  status: UpcomingServiceStatus;
  dateISO: string;
};

export type WeeklyScheduleItem = {
  id: number;
  dayOfWeek: number; // 0 niedziela ... 6 sobota
  time: string; // HH:mm
  serviceName: string;
  roleLabel?: string;
};

export type LiturgyTodayItem = {
  dateLabel: string;
  title: string;
  rank: string;
  color: "biały" | "czerwony" | "zielony" | "fioletowy" | "różowy" | "czarny";
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
export const userWeeklyScheduleMock: WeeklyScheduleItem[] = [
  {
    id: 1,
    dayOfWeek: 0,
    time: "09:30",
    serviceName: "Msza święta",
  },
  {
    id: 2,
    dayOfWeek: 3,
    time: "18:00",
    serviceName: "Nabożeństwo",
  },
  {
    id: 3,
    dayOfWeek: 5,
    time: "06:30",
    serviceName: "Msza poranna",
  },
];

function formatPolishDate(date: Date) {
  const weekdays = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  return `${weekdays[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  }`;
}

function getStatus(target: Date): UpcomingServiceStatus {
  const now = new Date();

  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const tomorrowStart = new Date(todayStart);
  tomorrowStart.setDate(todayStart.getDate() + 1);

  const dayAfterTomorrow = new Date(todayStart);
  dayAfterTomorrow.setDate(todayStart.getDate() + 2);

  if (target >= todayStart && target < tomorrowStart) return "today";
  if (target >= tomorrowStart && target < dayAfterTomorrow) return "tomorrow";
  return "upcoming";
}
function getNextOccurrence(dayOfWeek: number, time: string, from = new Date()) {
  const [hours, minutes] = time.split(":").map(Number);
  const candidate = new Date(from);

  const currentDay = candidate.getDay();
  let diff = dayOfWeek - currentDay;

  if (diff < 0) diff += 7;

  candidate.setDate(candidate.getDate() + diff);
  candidate.setHours(hours, minutes, 0, 0);
  if (candidate <= from) {
    candidate.setDate(candidate.getDate() + 7);
  }
  return candidate;
}
export function getUpcomingServices(
  schedule: WeeklyScheduleItem[],
  count = 2,
): UpcomingServiceItem[] {
  return schedule
    .map((item) => {
      const nextDate = getNextOccurrence(item.dayOfWeek, item.time);
      return {
        id: item.id,
        dateLabel: formatPolishDate(nextDate),
        time: item.time,
        serviceName: item.roleLabel
          ? `${item.serviceName} • ${item.roleLabel}`
          : item.serviceName,
        status: getStatus(nextDate),
        dateISO: nextDate.toISOString(),
      };
    })
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO))
    .slice(0, count);
}

export const userDashboardMock = {
  liturgyToday: {
    dateLabel: "Wtorek, 15 kwietnia",
    title: "Wtorek Wielkiego Tygodnia",
    rank: "Dzień powszedni okresu Wielkiego Tygodnia",
    color: "fioletowy",
  } satisfies LiturgyTodayItem,

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
