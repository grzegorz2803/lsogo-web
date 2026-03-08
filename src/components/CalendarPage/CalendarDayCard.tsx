import { calendarPageContent } from "../../content/calendarPage";
import type {
  CalendarDayData,
  LiturgicalColor,
} from "../../mocks/calendarPageMock";

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
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
  day: CalendarDayData;
};

export function CalendarDayCard({ day }: Props) {
  const { dayCard } = calendarPageContent;
  const colorClass = getColorTextClass(day.color);
  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-amber-400/25 bg-slate-950/60 px-8 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-slate-300/80">
                {day.weekday}, {formatDisplayDate(day.date)}
              </p>
              <h2 className="mt-2 font-serif text-2xl md:text-4xl text-amber-50">
                {day.title}
              </h2>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <p className="text-lg font-semibold text-amber-100">{day.rank}</p>
              <p className={`text-sm md:text-base font-semibold ${colorClass}`}>
                {dayCard.colorLabel}: {day.color}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-amber-200">
              {dayCard.readingsTitle}
            </p>
            <div className="mt-4 text-sm md:text-base leading-relaxed text-slate-200/90">
              {day.readings.map((reading, index) => (
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
      </div>
    </section>
  );
}
