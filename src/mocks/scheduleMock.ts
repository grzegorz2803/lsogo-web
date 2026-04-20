export type WeeklyDuty = {
  id: number;
  dayLabel: string;
  time: string;
  serviceName: string;
};

export type AssistDuty = {
  id: number;
  date: string;
  time: string;
  celebrationName: string;
  functionName: string;
};

export type UserSchedule = {
  id: number;
  validFrom: string;
  validTo: string;
  status: "active" | "upcoming";
  weeklyDuties: WeeklyDuty[];
  assists: AssistDuty[];
};

export const currentSchedule: UserSchedule = {
  id: 1,

  validFrom: "01.04.2026",

  validTo: "30.04.2026",

  status: "active",

  weeklyDuties: [
    {
      id: 1,
      dayLabel: "Poniedziałek",
      time: "6:30",
      serviceName: "Msza święta",
    },

    { id: 2, dayLabel: "Czwartek", time: "18:00", serviceName: "Nabożeństwo" },

    { id: 3, dayLabel: "Niedziela", time: "9:30", serviceName: "Msza święta" },
  ],

  assists: [
    {
      id: 1,

      date: "03.04.2026",

      time: "18:00",

      celebrationName: "Wielki Czwartek – Msza Wieczerzy Pańskiej",

      functionName: "Kadzidło",
    },
  ],
};

export const nextSchedule: UserSchedule = {
  id: 2,

  validFrom: "01.05.2026",

  validTo: "31.05.2026",

  status: "upcoming",

  weeklyDuties: [
    { id: 1, dayLabel: "Wtorek", time: "6:30", serviceName: "Msza święta" },

    { id: 2, dayLabel: "Piątek", time: "18:00", serviceName: "Nabożeństwo" },

    { id: 3, dayLabel: "Niedziela", time: "11:00", serviceName: "Msza święta" },
  ],

  assists: [],
};
