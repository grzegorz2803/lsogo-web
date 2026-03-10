import { calendarPageContent } from "../../content/calendarPage";

import type {
  CalendarDayData,
  LiturgicalColor,
} from "../../mocks/calendarPageMock";

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year};`;
}
function getColorTextClass(color: LiturgicalColor) {
  switch (color) {
    case "biały":
      return "text-slate-50";
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
      return "text-slate-100";
  }
}
type Props = {
  day: CalendarDayData | null;
  emptyMessage?: string;
};

export function CalendarDayDetails({ day, emptyMessage }: Props) {
  const { dayDetails } = calendarPageContent;

  if (!day) {
    return (
      <div className="rounded-3xl border border-amber-400/20 bg-slate-950/80 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80">
        <p className="text-base text-slate-200/90">
          {emptyMessage || "Brak danych dla wybranego dnia."}
        </p>
      </div>
    );
  }
  const colorClass = getColorTextClass(day.color);
  return (
    <div className="rounded-3xl border border-amber-400/20 bg-slate-950/60 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80">
      <p className="text-sm uppercase trecking-[0.08em] text-slate-300/80">
        {day.weekday}, {formatDisplayDate(day.date)}
      </p>
      <h2 className="mt-3 font-serif text-2xl text-amber-50">
        {day.mainTitle}
      </h2>
      {day.mainSubtitle && (
        <p className="mt-2 text-sm text-slate-300/80">{day.mainSubtitle}</p>
      )}
      <div className="mt-5 flex flex-col gap-2">
        <p className="text-lg font-semibold text-amber-100">{day.rank}</p>
        <p className={`text-sm font-semibold ${colorClass}`}>
          {dayDetails.colorLabel}: {day.color}
        </p>
      </div>
      {day.optionalCelebrations && day.optionalCelebrations.length > 0 && (
        <div className="mt-8 rounded-2xl border border-slate-700/40 bg-slate-950/40 px-4 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            {dayDetails.optionalCelebrationsTitle}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {day.optionalCelebrations.map((celebration) => (
              <div
                key={celebration.id}
                className="rounded-xl border border-slate-700/30 bg-slate-900/50 px-4 py-3"
              >
                <p className="text-sm text-slate-300/80">{celebration.type}</p>
                <p className="mt-1 text-base text-slate-100">
                  {celebration.title}
                </p>
                <p
                  className={`mt-1 text-sm font-medium ${getColorTextClass(celebration.color)}`}
                >
                  {dayDetails.colorLabel}: {celebration.color}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
          {dayDetails.readingsTitle}
        </p>
        <div className="mt-4 text-sm leading-relaxed text-slate-200/90">
          {day.readings.map((reading, index) => (
            <span key={reading}>
              {index > 0 && (
                <span className="mt-2 font-bold text-amber-400">|</span>
              )}
              {reading}
            </span>
          ))}
        </div>
      </div>
      {day.notes && (
        <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-500/5 px-4 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
            {dayDetails.notesTitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
            {day.notes}
          </p>
        </div>
      )}
    </div>
  );
}
