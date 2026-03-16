import { calendarPageContent } from "../../content/calendarPage";

import type {
  CalendarDayData,
  LiturgicalColor,
} from "../../mocks/calendarPageMock";

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year};`;
}
function getColorBarClass(color: LiturgicalColor) {
  switch (color) {
    case "biały":
      return "bg-slate-100/20 text-slate-50";
    case "czerwony":
      return "bg-red-500/20 text-red-200";
    case "zielony":
      return "bg-emerald-500/20 text-emerald-200";
    case "fioletowy":
      return "bg-violet-500/20 text-violet-200";
    case "różowy":
      return "bg-pink-500/20 text-pink-200";
    case "czarny":
      return "bg-slate-700/40 text-slate-300";
    default:
      return "bg-slate-700/30 text-slate-100";
  }
}
type Props = {
  day: CalendarDayData | null;
  emptyMessage?: string;
};
function DaySectionSeparator() {
  return (
    <div className="my-6 flex items-center justify-center">
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-300/50 to-transparent" />
    </div>
  );
}
export function CalendarDayDetails({ day, emptyMessage }: Props) {
  const { dayDetails } = calendarPageContent;

  if (!day) {
    return (
      <div className=" flex h-full min-h-105 items-center justify-center rounded-3xl  px-10 py-10 text-center ">
        <p className="max-w-md text-xl leading-relaxed text-slate-300/80">
          {emptyMessage || "Brak danych dla wybranego dnia."}
        </p>
      </div>
    );
  }
  const colorBarCLass = getColorBarClass(day.color);
  return (
    <div className="rounded-3xl px-6 py-8  ">
      <DaySectionSeparator />
      <p className="text-sm uppercase trecking-[0.08em] text-slate-300/80">
        {day.weekday}, {formatDisplayDate(day.date)}
      </p>
      <div className="mt-4 border-t border-slate-700/40 pt-4">
        <h2 className="leading-tight font-serif text-2xl text-amber-50">
          {day.mainTitle}
        </h2>

        {day.mainSubtitle && (
          <p className="mt-2 text-sm text-slate-300/80">{day.mainSubtitle}</p>
        )}
      </div>

      <div className="mt-5">
        <p className="text-xl font-semibold text-amber-100">{day.rank}</p>
        <div
          className={`mt-3 rounded-lg px-4 py-2 text-sm font-medium ${colorBarCLass}`}
        >
          {dayDetails.colorLabel}: {day.color}
        </div>
      </div>
      <DaySectionSeparator />
      <div className="space-y-4">
        {day.readings.firstReading && (
          <div className="border-b border-slate-700/30 pb-3">
            <p className="text-base font-semibold uppercase tracking-[0.08em] text-amber-100">
              {dayDetails.firstReadingTitle}
            </p>
            <p className="mt-2 text-base text-slate-200/90">
              {day.readings.firstReading}
            </p>
          </div>
        )}
        {day.readings.psalm && (
          <div className="border-b border-slate-700/30 pb-3">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber-100">
              {dayDetails.psalmTitle}
            </p>
            <p className="mt-2 text-base text-slate-200/90">
              {day.readings.psalm}
            </p>
          </div>
        )}
        {day.readings.secondReading && (
          <div className="border-b border-slate-700/30 pb-3">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber-100">
              {dayDetails.secondReadingTitle}
            </p>
            <p className="mt-2 text-base text-slate-200/90">
              {day.readings.secondReading}
            </p>
          </div>
        )}

        {day.readings.gospel && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber-100">
              {dayDetails.gospelTitle}
            </p>
            <p className="mt-2 text-base text-slate-200/90">
              {day.readings.gospel}
            </p>
          </div>
        )}
      </div>
      {day.optionalCelebrations && day.optionalCelebrations.length > 0 && (
        <>
          <DaySectionSeparator />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              {dayDetails.optionalCelebrationsTitle}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {day.optionalCelebrations.map((celebration) => (
                <div key={celebration.id} className="rounded-xl py-3">
                  <p className="mt-1 text-base text-slate-100">
                    {celebration.title}
                  </p>
                  <div
                    className={`mt-3 rounded-lg px-4 py-2 text-sm font-medium ${getColorBarClass(celebration.color)}`}
                  >
                    {dayDetails.colorLabel}: {celebration.color}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {day.notes && (
        <>
          <DaySectionSeparator />
          <div className="rounded-2xl ">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
              {dayDetails.notesTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
              {day.notes}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
