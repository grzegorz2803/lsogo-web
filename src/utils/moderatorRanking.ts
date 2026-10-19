import type {
  ModeratorMonthlyRanking,
  ModeratorRankingEntry,
} from "../mocks/moderatorRankingMock";
import type { ModeratorRankingRow } from "../components/moderator/ranking/ModeratorRankingTable";
import type {
  RankingBy,
  PeriodType,
} from "../components/moderator/ranking/ModeratorRankingFilters";

type GetModeratorRankingParams = {
  data: ModeratorMonthlyRanking[];
  periodType: PeriodType;
  year: number;
  month: number;
  functionCode: string;
  rankingBy: RankingBy;
};
export function getModeratorRanking({
  data,
  periodType,
  year,
  month,
  functionCode,
  rankingBy,
}: GetModeratorRankingParams): ModeratorRankingRow[] {
  const users =
    periodType === "month"
      ? getMonthlyUsers(data, year, month)
      : getYearlyUsers(data, year);

  const filteredUsers = users.filter(
    (user) => functionCode === "all" || user.function.code === functionCode,
  );
  const sortedUsers = [...filteredUsers].sort(
    (a, b) => b.points[rankingBy] - a.points[rankingBy],
  );
  return sortedUsers.map((user, index) => {
    const previousUser = sortedUsers[index - 1];
    const position =
      index > 0 && previousUser.points[rankingBy] === user.points[rankingBy]
        ? sortedUsers
            .slice(0, index)
            .findIndex(
              (item) => item.points[rankingBy] === user.points[rankingBy],
            ) + 1
        : index + 1;
    return {
      position,
      userId: user.userId,
      name: user.name,
      functionName: user.function.name,
      points: user.points,
    };
  });
}
function getMonthlyUsers(
  data: ModeratorMonthlyRanking[],
  year: number,
  month: number,
): ModeratorRankingEntry[] {
  return (
    data.find((item) => item.year === year && item.month === month)?.users ?? []
  );
}
function getYearlyUsers(
  data: ModeratorMonthlyRanking[],
  year: number,
): ModeratorRankingEntry[] {
  const yearlyData = data.filter((item) => item.year === year);

  const users = new Map<number, ModeratorRankingEntry>();

  yearlyData.forEach((month) => {
    month.users.forEach((user) => {
      const existingUser = users.get(user.userId);

      if (!existingUser) {
        users.set(user.userId, {
          ...user,
          points: {
            ...user.points,
          },
        });
        return;
      }
      existingUser.points.service += user.points.service;
      existingUser.points.meetings += user.points.meetings;
      existingUser.points.other += user.points.other;
      existingUser.points.total += user.points.total;
    });
  });
  return Array.from(users.values());
}
