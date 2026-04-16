import { Link } from "react-router-dom";
import { userDashboardContent } from "../../../content/userDashboard";
import type { LiturgyTodayItem } from "../../../mocks/userDashboardMock";

type Props = {
  liturgy: LiturgyTodayItem | null;
};

function getColorClass(color: LiturgyTodayItem["color"]) {
  switch (color) {
    case "biały":
      return "text-slate-100";
    case "czerwony":
      return "text-red-300";
    case "zielony":
      return "text-emerald-300";
    case "fioletowy":
      return "text-violet-300";
    case "różowy":
      return "text-pink-300";
    case "czarny":
      return "text-slate-400";
    default:
      return "text-slate-200";
  }
}
export function LiturgyTodayCard({ liturgy }: Props) {
  const { liturgyToday } = userDashboardContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-amber-400/10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl text-amber-100">
          {liturgyToday.title}
        </h2>
        <Link
          to="/kalendarz"
          className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
        >
          {liturgyToday.button}
        </Link>
      </div>
      {!liturgy ? (
        <p className="mt-4 text-sm text-slate-400">{liturgyToday.empty}</p>
      ) : (
        <div className="mt-5 rounded-2xl border border-slate-700/30 bg-slate-950/40 px-4 py-4">
          <p className="text-sm text-slate-300">{liturgy.dateLabel}</p>
          <p className="mt-2 font-serif text-xl text-amber-100">
            {liturgy.title}
          </p>
          <p className="mt-3 text-sm text-slate-300">{liturgy.rank}</p>
          <p
            className={`mt-3 text-sm font-semibold ${getColorClass(liturgy.color)}`}
          >
            {liturgyToday.colorLabel}: {liturgy.color}
          </p>
        </div>
      )}
    </section>
  );
}
