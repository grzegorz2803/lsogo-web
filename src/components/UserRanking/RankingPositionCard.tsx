import type { RankingPeriod } from "../../mocks/userRankingMock";

type RankingPositionCardProps = {
  month: RankingPeriod;
  year: RankingPeriod;
};

export function RankingPositionCard({ month, year }: RankingPositionCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/70">
          Twoja pozycja
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/8 bg-slate-950/20 p-6 text-center">
          <p className="text-sm font-medium text-slate-400">Miesiąc</p>
          <p className="mt-3 font-serif text-5xl font-semibold text-amber-100">
            #{month.position}
          </p>
          <p className="mt-1 text-sm text-slate-500">z {month.participants}</p>

          <div className="mt-5 border-t border-white/8 pt-4">
            <p className="text-2xl font-semibold text-slate-100">
              {month.totalPoints}

              <span className="ml-1 text-sm font-medium text-slate-500">
                pkt
              </span>
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/8 bg-slate-950/20 p-6 text-center">
          <p className="text-sm font-medium text-slate-400">Rok</p>
          <p className="mt-3 font-serif text-5xl font-semibold text-amber-100">
            #{year.position}
          </p>
          <p className="mt-1 text-sm text-slate-500">z {year.participants}</p>
          <div className="mt-5 border-t border-white/8 pt-4">
            <p className="text-2xl font-semibold text-slate-100">
              {year.totalPoints}
              <span className="ml-1 text-sm font-medium text-slate-500">
                pkt
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
