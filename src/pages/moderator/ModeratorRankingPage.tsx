import { useState } from "react";
import { moderatorContent } from "../../content/moderator";
import {
  type RankingBy,
  type PeriodType,
  ModeratorRankingFilters,
} from "../../components/moderator/ranking/ModeratorRankingFilters";
import { moderatorRankingMock } from "../../mocks/moderatorRankingMock";
import { ModeratorRankingTable } from "../../components/moderator/ranking/ModeratorRankingTable";
import { getModeratorRanking } from "../../utils/moderatorRanking";

export function ModeratorRankingPage() {
  const { ranking } = moderatorContent;
  const now = new Date();

  const [periodType, setPeriodType] = useState<PeriodType>("month");
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1);
  const [selectedFunction, setSelectedFunction] = useState("all");
  const [rankingBy, setRankingBy] = useState<RankingBy>("total");

  const availableYears = [
    ...new Set(moderatorRankingMock.map((item) => item.year)),
  ].sort((a, b) => b - a);

  const rankingUsers = getModeratorRanking({
    data: moderatorRankingMock,
    periodType,
    year: selectedYear,
    month: selectedMonth,
    functionCode: selectedFunction,
    rankingBy,
  });
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl text-amber-100">{ranking.title}</h1>
        <p className="mt-2 text-sm text-white/60">{ranking.description}</p>
      </div>
      <ModeratorRankingFilters
        periodType={periodType}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedFunction={selectedFunction}
        rankingBy={rankingBy}
        availableYears={availableYears}
        onPeriodTypeChange={setPeriodType}
        onYearChange={setSelectedYear}
        onMonthChange={setSelectedMonth}
        onFunctionChange={setSelectedFunction}
        onRankingByChange={setRankingBy}
      />
      <ModeratorRankingTable users={rankingUsers} rankingBy={rankingBy} />
    </div>
  );
}
