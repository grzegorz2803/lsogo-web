export type ExcuseStatus = "none" | "pending" | "accepted" | "rejected";

export type UserHistoryItem = {
  id: number;
  serviceName: string;
  date: string;
  time: string;
  points: number;
  excuseStatus: ExcuseStatus;
};

export const userHistoryMock: UserHistoryItem[] = [
  {
    id: 1,
    serviceName: "Msza święta",
    date: "08.09.2026",
    time: "18:00",
    points: 2,
    excuseStatus: "none",
  },
  {
    id: 2,
    serviceName: "Msza święta",
    date: "06.09.2026",
    time: "09:30",
    points: 2,
    excuseStatus: "none",
  },
  {
    id: 3,
    serviceName: "Zbiórka LSO",
    date: "04.09.2026",
    time: "19:00",
    points: 1,
    excuseStatus: "none",
  },
  {
    id: 4,
    serviceName: "Nabożeństwo",
    date: "03.09.2026",
    time: "18:00",
    points: -2,
    excuseStatus: "none",
  },
  {
    id: 5,
    serviceName: "Msza święta",
    date: "30.08.2026",
    time: "11:00",
    points: -2,
    excuseStatus: "pending",
  },
  {
    id: 6,
    serviceName: "Msza święta",
    date: "27.08.2026",
    time: "18:00",
    points: 0,
    excuseStatus: "accepted",
  },
  {
    id: 7,
    serviceName: "Nabożeństwo",
    date: "23.08.2026",
    time: "17:00",
    points: -2,
    excuseStatus: "rejected",
  },
];
