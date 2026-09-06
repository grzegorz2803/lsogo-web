import { userRankingContent } from "../../content/userRanking";
import type { RankingPeriod } from "../../mocks/userRankingMock";

type RankingDetailsCardProps = {
  title: string;
  ranking: RankingPeriod;
};

export function RankingDetailsCard({
  title,
  ranking,
}: RankingDetailsCardProps) {
  const { details } = userRankingContent;
  return (
    <section className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <h2 className="font-serif text-2xl font-medium text-amber-100">
        {title}
      </h2>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {details.subtitle}
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">{details.service}</span>
            <span className="font-medium text-slate-200">
              {ranking.servicePoints} {userRankingContent.position.points}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">{details.meetings}</span>
            <span className="font-medium text-slate-200">
              {ranking.meetingPoints} {userRankingContent.position.points}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-white/8 pt-3">
            <span className="font-medium text-slate-300">{details.total}</span>
            <span className="text-lg font-semibold text-amber-100">
              {ranking.totalPoints} {userRankingContent.position.points}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-7 border-t border-white/8 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/70">
          {details.situationTitle}
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">{details.toFirst}</span>
            <span className="font-medium text-slate-200">
              {ranking.pointsToFirst} {userRankingContent.position.points}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">{details.toPodium}</span>
            <span className="font-medium text-slate-200">
              {ranking.pointsToPodium} {userRankingContent.position.points}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">{details.toPrevious}</span>
            <span className="font-medium text-slate-200">
              {ranking.pointsToPrevious} {userRankingContent.position.points}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3">
            <span className="text-sm text-slate-300">
              {details.advantageOverNext}
            </span>
            <span className="font-medium text-emerald-300 ">
              +{ranking.advantageOverNext} {userRankingContent.position.points}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
