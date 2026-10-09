export type ModeratorServiceAttendanceOption = {
  id: number;
  name: string;
  date: string;
  time: string;
  points: number;
};

export const moderatorServiceAttendanceMock: ModeratorServiceAttendanceOption[] =
  [
    {
      id: 1,
      name: "Msza Święta",
      date: "2026-10-06",
      time: "08:00",
      points: 5,
    },
    {
      id: 2,
      name: "Msza Święta",
      date: "2026-10-06",
      time: "18:00",
      points: 5,
    },
    {
      id: 3,
      name: "Nabożeństwo różańcowe",
      date: "2026-10-06",
      time: "17:15",
      points: 3,
    },
    {
      id: 4,
      name: "Msza Święta",
      date: "2026-10-07",
      time: "18:00",
      points: 5,
    },
  ];
