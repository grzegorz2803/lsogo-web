export type ServiceCategory =
  | "weekly_mass"
  | "weekly"
  | "monthly"
  | "seasonal"
  | "yearly"
  | "on_time";

export type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type WeeklyMass = {
  id: number;
  name: string;
  time: string;
  weekdays: Weekday[];
  points: number;
  isActive: boolean;
};
