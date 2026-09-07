import type { RankingPeriod } from "../../mocks/userRankingMock";
import { Medal, Trophy } from "lucide-react";

type RankingPodiumHeroProps = {
  month: RankingPeriod;
  year: RankingPeriod;
};

function getPodiumConfig(position: number) {
  if (position === 1) {
    return {
      label: "1. miejsce",
      title: "Prowadzisz w rankingu",
      icon: Trophy,
      iconClass: "text-amber-300",
      iconWrapperClass:
        "border-amber-300/30 bg-amber-400/10 shadow-[0_0_30px_rgba(251,191,36,0.18)]",
      positionClass: "text-amber-100",
    };
  }
  if (position === 2) {
    return {
      label: "2. miejsce",
      title: "Jesteś o krok od prowadzenia",
      icon: Medal,
      iconClass: "text-slate-200",
      iconWrapperClass:
        "border-slate-300/20 bg-slate-300/8 shadow-[0_0_25px_rgba(203,213,225,0.10)]",
      positionClass: "text-slate-100",
    };
  }
  return {
    label: "3. miejsce",
    title: "Jesteś na podium",
    icon: Medal,
    iconClass: "text-orange-300",
    iconWrapperClass:
      "border-orange-300/20 bg-orange-400/8 shadow-[0_0_25px_rgba(251,146,60,0.10)]",
    positionClass: "text-orange-200",
  };
}

type PodiumPeriodCardProps = {
  label: string;
  ranking: RankingPeriod;
};

function PodiumPeriodCard({ label, ranking }: PodiumPeriodCardProps) {
  const config = getPodiumConfig(ranking.position);
  const Icon = config.icon;
  return (
    <div className="rounded-2xl border border-white/8 bg-slate-950/20 p-6 text-center">
      <p className="text-sma text-slate-400">{label}</p>

      <div
        className={[
          "mx-auto mt-5 flex size-16 items-center justify-center rounded-full border",
          config.iconWrapperClass,
        ].join(" ")}
      >
        <Icon className={`size-8 ${config.iconClass}`} strokeWidth={1.6} />
      </div>
      <p
        className={`mt-4 font-serif text-3xl font-semibold ${config.positionClass}`}
      >
        {config.label}
      </p>
      <p className="mt-2 text-lg font-medium text-slate-200">
        {ranking.totalPoints}
        <span className="ml-1 text-sm font-normal text-slate-500">pkt</span>
      </p>
    </div>
  );
}

export function RankingPodiumHero({ month, year }: RankingPodiumHeroProps) {
  return (
    <section className="rounded-3xl border border-amber-400/20 bg-linear-to-br from-amber-400/10 via-white/3 to-transparent p-6 shadow-[0_20px_60px_rgba(251,191,36,0.08)] backdrop-blur-sm">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/70">
          Jesteś na podium
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-amber-100">
          Świetny wynik
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Utrzymujesz jedną z najwyższych pozycji w rankingu.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <PodiumPeriodCard label="Miesiąc" ranking={month} />
        <PodiumPeriodCard label="Rok" ranking={year} />
      </div>
    </section>
  );
}
