import { Medal, Trophy } from "lucide-react";
import type { RankingPeriod } from "../../mocks/userRankingMock";
import { userRankingContent } from "../../content/userRanking";

type RankingPeriodPositionCardProps = {
  label: string;
  ranking: RankingPeriod;
};

function getPodiumConfig(position: number) {
  const { podium } = userRankingContent;
  if (position === 1) {
    return {
      label: podium.first.label,
      message: podium.first.message,
      icon: Trophy,
      iconClass: "text-amber-300",
      iconWrapperClass:
        "border-amber-300/30 bg-amber-400/10 shadow-[0_0_30px_rgba(251,191,36,0.18)]",
      positionClass: "text-amber-100",
    };
  }
  if (position === 2) {
    return {
      label: podium.second.label,
      message: podium.second.message,
      icon: Medal,
      iconClass: "text-slate-200",
      iconWrapperClass:
        "border-slate-300/20 bg-slate-300/8 shadow-[0_0_25px_rgba(203,213,225,0.10)]",
      positionClass: "text-slate-100",
    };
  }
  return {
    label: podium.third.label,
    message: podium.third.message,
    icon: Medal,
    iconClass: "text-orange-300",
    iconWrapperClass:
      "border-orange-300/20 bg-orange-400/8 shadow-[0_0_25px_rgba(251,146,60,0.10)]",
    positionClass: "text-orange-200",
  };
}

export function RankingPeriodPositionCard({
  label,
  ranking,
}: RankingPeriodPositionCardProps) {
  const isOnPodium = ranking.position >= 1 && ranking.position <= 3;
  const { position } = userRankingContent;
  if (isOnPodium) {
    const config = getPodiumConfig(ranking.position);
    const Icon = config.icon;
    return (
      <div className="rounded-2xl min-h-63 border border-white/8 bg-slate-950/20 p-6 text-center">
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
          <span className="ml-1 text-sm font-normal text-slate-500">
            {position.points}
          </span>
        </p>
        <p className="mt-3 text-sm text-slate-400">{config.message}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-63 flex-col justify-center rounded-2xl border border-white/8 bg-slate-950/20 p-6 text-center">
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <p className="mt-3 font-serif text-5xl font-semibold text-amber-100">
        {position.hash}
        {ranking.position}
      </p>
      <p className="mt-1 text-sm text-slate-500">
        {position.participantsPrefix} {ranking.participants}
      </p>
      <div className="mt-5 border-t border-white/8 pt-4">
        <p className="text-2xl font-semibold text-slate-100">
          {ranking.totalPoints}
          <span className="ml-1 text-sm font-medium text-slate-500">
            {position.points}
          </span>
        </p>
      </div>
    </div>
  );
}
