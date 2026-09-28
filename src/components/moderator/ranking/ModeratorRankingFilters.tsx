import { moderatorContent } from "../../../content/moderator";
import { parishFunctionsMock } from "../../../mocks/parishFunctionsMock";

export type PeriodType = "month" | "year";
export type RankingBy = "total" | "service" | "meetings";

type ModeratorRankingFiltersProps = {
  periodType: PeriodType;
  selectedYear: number;
  selectedMonth: number;
  selectedFunction: string;
  rankingBy: RankingBy;
  availableYears: number[];
  onPeriodTypeChange: (periodType: PeriodType) => void;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
  onFunctionChange: (functionCode: string) => void;
  onRankingByChange: (rankingBy: RankingBy) => void;
};

export function ModeratorRankingFilters({
  periodType,
  selectedYear,
  selectedMonth,
  selectedFunction,
  rankingBy,
  availableYears,
  onPeriodTypeChange,
  onYearChange,
  onMonthChange,
  onFunctionChange,
  onRankingByChange,
}: ModeratorRankingFiltersProps) {
  const { ranking } = moderatorContent;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div
        className={`grid gap-4 md:grid-cols-2 ${periodType === "month" ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}
      >
        <div>
          <p className="mb-2 text-sm text-white/60">{ranking.filters.period}</p>
          <div className="flex rounded-xl border border-white/10 bg-black/10 p-1">
            <button
              type="button"
              onClick={() => onPeriodTypeChange("month")}
              className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition-all duration-300 
                                ${
                                  periodType === "month"
                                    ? "flex-4 bg-amber-400 font-medium text-slate-950"
                                    : "flex-1 text-white/60 hover:text-white"
                                }`}
            >
              {ranking.filters.periodMonth}
            </button>
            <button
              type="button"
              onClick={() => onPeriodTypeChange("year")}
              className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition-all duration-300
                            ${
                              periodType === "year"
                                ? "flex-4 bg-amber-400 font-medium text-slate-950"
                                : "flex-1 text-white/60 hover:text-white"
                            }`}
            >
              {ranking.filters.periodYear}
            </button>
          </div>
        </div>
        {periodType === "month" && (
          <div>
            <label className="text-sm text-white/60">
              {ranking.filters.month}
            </label>
            <select
              value={selectedMonth}
              onChange={(event) => onMonthChange(Number(event.target.value))}
              className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
            >
              {ranking.months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className="text-sm text-white/60">
            {ranking.filters.year}
          </label>
          <select
            value={selectedYear}
            onChange={(event) => onYearChange(Number(event.target.value))}
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {ranking.filters.function}
          </label>
          <select
            value={selectedFunction}
            onChange={(event) => onFunctionChange(event.target.value)}
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="all">{ranking.filters.allFunctions}</option>
            {parishFunctionsMock.map((item) => (
              <option key={item.id} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {ranking.filters.rankingBy}
          </label>
          <select
            value={rankingBy}
            onChange={(event) =>
              onRankingByChange(event.target.value as RankingBy)
            }
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="total">{ranking.rankingBy.total}</option>
            <option value="service">{ranking.rankingBy.service}</option>
            <option value="meetings">{ranking.rankingBy.meetings}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
