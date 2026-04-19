import { userDashboardContent } from "../../../content/userDashboard";
import type { RankingStats } from "../../../mocks/userDashboardMock";
import { Link } from "react-router-dom";

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
    <div className="rounded-2xl border border-slate-700/30 bg-slate-950/45 p-5 transition-all duration-300 hover:border-amber-400/20 hover:shadow-[0_0_25px_rgba(251,191,36,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            {ranking.position}
          </p>
          <p className="mt-2 text-3xl font-semibold text-amber-300">
            #{data.position}
          </p>
          <p className="text-sm text-slate-400">z {data.totalUsers}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            {ranking.totalPoints}
          </p>
          <p className="mt-2 text-3xl font-semibold text-amber-300">
            {data.totalPoints}
          </p>
          <p className="text-sm text-slate-400">{ranking.pointsSuffix}</p>
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-slate-700/70 to-transparent" />
      <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-400">{ranking.servicePoints}</p>
          <p className="mt-1 text-base font-medium text-slate-100">
            {data.servicePoints}
          </p>
        </div>
        <div>
          <p className="text-slate-400">{ranking.meetingPoints}</p>
          <p className="mt-1 text-base font-medium text-slate-100">
            {data.meetingPoints}
          </p>
        </div>
      </div>
    </div>
  );
}
export function RankingCard({ ranking }: Props) {
  const { ranking: content } = userDashboardContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl text-amber-100">{content.title}</h2>
        <Link
          to="/panel/user/ranking"
          className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
        >
          {content.button}
        </Link>
      </div>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        <RankingBlock label={content.monthlyTitle} data={ranking.monthly} />
        <RankingBlock label={content.yearlyTitle} data={ranking.yearly} />
      </div>
    </section>
  );
}
