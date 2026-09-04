export type RankingPeriod = {
  position: number;
  participants: number;
  servicePoints: number;
  meetingPoints: number;
  totalPoints: number;
  pointsToFirst: number;
  pointsToPodium: number;
  pointsToPrevious: number;
  advantageOverNext: number;
};

export type UserRankingMock = {
  month: RankingPeriod;
  year: RankingPeriod;
};

export const userRankingMock: UserRankingMock = {
  month: {
    position: 5,
    participants: 42,
    servicePoints: 40,
    meetingPoints: 16,
    totalPoints: 56,
    pointsToFirst: 12,
    pointsToPodium: 6,
    pointsToPrevious: 2,
    advantageOverNext: 4,
  },
  year: {
    position: 7,
    participants: 42,
    servicePoints: 180,
    meetingPoints: 42,
    totalPoints: 222,
    pointsToFirst: 21,
    pointsToPodium: 9,
    pointsToPrevious: 3,
    advantageOverNext: 5,
  },
};
