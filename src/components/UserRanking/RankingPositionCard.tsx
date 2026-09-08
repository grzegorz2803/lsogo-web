import { userRankingContent } from "../../content/userRanking";
import type { RankingPeriod } from "../../mocks/userRankingMock";
import { RankingPeriodPositionCard } from "./RankingPeriodPositionCard";

type RankingPositionCardProps = {
  month: RankingPeriod;
  year: RankingPeriod;
};

export function RankingPositionCard({ month, year }: RankingPositionCardProps) {
  const { position } = userRankingContent;
  return (
    <section className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/70">
          {position.title}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <RankingPeriodPositionCard label="Miesiąc" ranking={month} />
        <RankingPeriodPositionCard label="Rok" ranking={year} />
      </div>
    </section>
  );
}
