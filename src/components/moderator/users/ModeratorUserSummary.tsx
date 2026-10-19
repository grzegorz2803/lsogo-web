import { moderatorContent } from "../../../content/moderator";

type ModeratorUserSummaryProps = {
  summary: {
    attendanceRate: number;
    points: {
      month: {
        total: number;
      };
    };
    ranking: {
      month: {
        position: number;
      };
    };
  };
};

export function ModeratorUserSummary({ summary }: ModeratorUserSummaryProps) {
  const { summary: content } = moderatorContent.users.details;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        label={content.points}
        period={moderatorContent.users.details.points.month}
        value={summary.points.month.total}
      />
      <StatCard
        label={content.attendance}
        period={moderatorContent.users.details.points.month}
        value={`${summary.attendanceRate}${content.percent}`}
      />
      <StatCard
        label={content.ranking}
        period={moderatorContent.users.details.points.month}
        value={summary.ranking.month.position}
      />
    </div>
  );
}
function StatCard({
  label,
  period,
  value,
}: {
  label: string;
  period: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-white/50">{label}</p>
      <p className="mt-1 text-xs text-white/40">{period}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
