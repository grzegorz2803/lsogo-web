import { moderatorContent } from "../../../content/moderator";

type ModeratorUserPointsCardProps = {
  points: {
    month: {
      service: number;
      meetings: number;
      other: number;
      total: number;
    };
    year: {
      service: number;
      meetings: number;
      other: number;
      total: number;
    };
  };
};

export function ModeratorUserPointsCard({
  points,
}: ModeratorUserPointsCardProps) {
  const content = moderatorContent.users.details.points;
  const month = points.month;
  const year = points.year;

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">
        {content.title}
      </h2>
      <div className="mt-5 space-y-3">
        <div className="grid grid-cols-[1fr_120px_120px] items-center">
          <span />

          <span className="text-right text-sm text-white/50">
            {content.month}
          </span>

          <span className="text-right text-sm text-white/50">
            {content.year}
          </span>
        </div>
        <PointRow
          label={content.service}
          month={month.service}
          year={year.service}
        />
        <PointRow
          label={content.meetings}
          month={month.meetings}
          year={year.meetings}
        />
        <PointRow label={content.other} month={month.other} year={year.other} />
        <div className="border-t border-white/10 pt-3">
          <PointRow
            label={content.total}
            month={month.total}
            year={year.total}
            strong
          />
        </div>
      </div>
    </section>
  );
}
function PointRow({
  label,
  month,
  year,
  strong = false,
}: {
  label: string;
  month: number;
  year: number;
  strong?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_120px_120px] items-center">
      <span className={strong ? "font-medium text-white" : "text-white/60"}>
        {label}
      </span>
      <span
        className={`text-right && ${strong ? "font-semibold text-white" : "text-white/80"}`}
      >
        {month}
      </span>
      <span
        className={`text-right && ${strong ? "font-semibold text-white" : "text-white/80"}`}
      >
        {year}
      </span>
    </div>
  );
}
