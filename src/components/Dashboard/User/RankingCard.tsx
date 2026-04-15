import { userDashboardContent } from "../../../content/userDashboard";
import type { RankingStats } from "../../../mocks/userDashboardMock";

type Props = {
  ranking: RankingStats;
};
function RankingBlock({
  label,
  data,
}: {
  label: string;
  data: RankingStats["monthly"];
}) {
  const { ranking } = userDashboardContent;

  return (
    <div className="rounded-2xl border border-slate-700/30 bg-slate-950/45 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-slate-400">{ranking.position}</p>
          <p className="mt-1 text-amber-200">
            #{data.position} / {data.totalUsers}
          </p>
        </div>
        <div>
          <p className="text-slate-400">{ranking.totalPoints}</p>
          <p className="mt-1 text-amber-200">
            {data.totalPoints} {ranking.pointsSuffix}
          </p>
        </div>
        <div>
          <p className="text-slate-400">{ranking.servicePoints}</p>
          <p className="mt-1 text-amber-200">{data.servicePoints}</p>
        </div>
        <div>
          <p className="text-slate-400">{ranking.meetingPoints}</p>
          <p className="mt-1 text-amber-200">{data.meetingPoints}</p>
        </div>
      </div>
      <div className="mt-4 spacy-y-2 text-sm">
        <p className="text-slate-300">
          {ranking.missingToLeader}:{" "}
          <span className="text-amber-200">
            {data.missingToLeader} {ranking.pointsSuffix}
          </span>
        </p>
        <p className="text-slate-300">
          {ranking.missingToPodium}:{" "}
          <span className="text-amber-200">
            {data.missingToPodium} {ranking.pointsSuffix}
          </span>
        </p>
        <p className="text-slate-300">
          {ranking.missingToPrevious}:{" "}
          <span className="text-amber-200">
            {data.missingToPrevious} {ranking.pointsSuffix}
          </span>
        </p>
        <p className="text-slate-300">
          {ranking.leadOverNext}:{" "}
          <span className="text-amber-200">
            {data.leadOverNext} {ranking.pointsSuffix}
          </span>
        </p>
      </div>
    </div>
  );
}
export function RankingCard({ ranking }: Props) {
  const { ranking: content } = userDashboardContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <h2 className="font-serif text-2xl text-amber-100">{content.title}</h2>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        <RankingBlock label={content.monthlyTitle} data={ranking.monthly} />
        <RankingBlock label={content.yearlyTitle} data={ranking.yearly} />
      </div>
    </section>
  );
}
