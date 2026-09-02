import { Link } from "react-router-dom";
import { userDashboardContent } from "../../../content/userDashboard";
import type { LiturgyTodayItem } from "../../../mocks/userDashboardMock";

type Props = {
  liturgy: LiturgyTodayItem | null;
};

function getColorClass(color: LiturgyTodayItem["color"]) {
  switch (color) {
    case "biały":
      return "text-slate-100 bg-slate-100/10 border-slate-300/20";

    case "czerwony":
      return "text-red-300 bg-red-400/10 border-red-400/20";

    case "zielony":
      return "text-emerald-300 bg-emerald-400/10 border-emerald-400/20";

    case "fioletowy":
      return "text-violet-300 bg-violet-400/10 border-violet-400/20";

    case "różowy":
      return "text-pink-300 bg-pink-400/10 border-pink-400/20";

    case "czarny":
      return "text-slate-400 bg-slate-400/10 border-slate-400/20";

    default:
      return "text-slate-200 bg-slate-500/10 border-slate-500/20";
  }
}
function getAccentBarClass(color: LiturgyTodayItem["color"]) {
  switch (color) {
    case "biały":
      return "bg-slate-200";

    case "czerwony":
      return "bg-red-400";

    case "zielony":
      return "bg-emerald-400";

    case "fioletowy":
      return "bg-violet-400";

    case "różowy":
      return "bg-pink-400";

    case "czarny":
      return "bg-slate-500";

    default:
      return "bg-slate-400";
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
          to="/panel/user/calendar"
          className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
        >
          {liturgyToday.button}
        </Link>
      </div>
      {!liturgy ? (
        <p className="mt-4 text-sm text-slate-400">{liturgyToday.empty}</p>
      ) : (
        <div className="mt-5 rounded-2xl border border-slate-700/30 bg-slate-950/40 px-5 py-5 transition-all duration-300 hover:border-amber-400/10">
          <div
            className={`mb-4 h-1.5 w-24 rounded-full ${getAccentBarClass(liturgy.color)}`}
          />
          <p className="text-sm text-slate-300">{liturgy.dateLabel}</p>
          <p className="mt-3 font-serif text-3xl text-amber-100">
            {liturgy.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {liturgy.rank}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm text-slate-400">
              {liturgyToday.colorLabel}
            </span>
            <span
              className={`rounded-full border border-slate-700/40 bg-slate-900/60 px-3 py-1 text-sm font-semibold ${getColorClass(liturgy.color)}`}
            >
              {liturgy.color}
            </span>
          </div>
          <div className="mt-5 rounded-xl border border-slate-700/20 bg-slate-950/35 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              {liturgyToday.readingsLabel}
            </p>
            <div className="mt-3 text-sm leading-relaxed text-slate-200">
              {liturgy.readings.map((reading, index) => (
                <span key={reading}>
                  {index > 0 && (
                    <span className="mx-2 font-bold text-amber-400">|</span>
                  )}
                  {reading}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
