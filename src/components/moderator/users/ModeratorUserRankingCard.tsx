import { moderatorContent } from "../../../content/moderator";

type ModeratorUserRankingCardProps = {
  ranking: {
    month: {
      position: number;
      points: number;
    };
    year: {
      position: number;
      points: number;
    };
  };
};

export function ModeratorUserRankingCard({
  ranking,
}: ModeratorUserRankingCardProps) {
  const content = moderatorContent.users.details.ranking;
  const month = ranking.month;
  const year = ranking.year;

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">
        {content.title}
      </h2>
      <div className="mt-5 space-y-3">
        <div className="grid grid-cols-[1fr_80px_80px] items-center">
          <span />

          <span className="text-right text-sm text-white/50">
            {content.points}
          </span>

          <span className="text-right text-sm text-white/50">
            {content.position}
          </span>
        </div>
        <RankingRow
          label={content.month}
          points={month.points}
          position={month.position}
        />
        <RankingRow
          label={content.year}
          points={year.points}
          position={year.position}
        />
      </div>
    </section>
  );
}

function RankingRow({
  label,
  points,
  position,
}: {
  label: string;
  points: number;
  position: number;
}) {
  return (
    <div className="grid grid-cols-[1fr_80px_80px] items-center">
      <span className="font-medium text-white">{label}</span>
      <span className="text-right font-medium text-white">{points}</span>
      <span className="text-right font-medium text-white">{position}</span>
    </div>
  );
}
