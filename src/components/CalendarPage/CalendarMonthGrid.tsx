import { calendarPageContent } from "../../content/calendarPage";
import type { CalendarDayData } from "../../mocks/calendarPageMock";

type Props = {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  data: CalendarDayData[];
  onSelectDay: (day: number) => void;
};
function bulidDateString(year: number, month: number, day: number) {
  const date = new Date(year, month, day);
  return date.toISOString().slice(0, 10);
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthTitle(year: number, month: number) {
  return new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));
}

export function CalendarMonthGrid({
  selectedYear,
  selectedMonth,
  selectedDay,
  data,
  onSelectDay,
}: Props) {
  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const { monthView } = calendarPageContent;

  return (
    <div className="rounded-3xl border border-slate-700/50 bg-slate-950/60 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80">
      <h3 className="text-center font-serif text-2xl text-amber-50">
        {getMonthTitle(selectedYear, selectedMonth)}
      </h3>
      <div className="mt-6 grid grid-cols-7 gap-2">
        {monthView.weekLabels.map((label) => (
          <div
            key={label}
            className="pb-2 text-center text-sm font-medium text-amber-200/90"
          >
            {label}
          </div>
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const dayNumber = index + 1;
          const dateString = bulidDateString(
            selectedYear,
            selectedMonth,
            dayNumber,
          );
          const hasData = data.some((item) => item.date === dateString);
          const isSelected = dayNumber === selectedDay;
          return (
            <button
              key={dateString}
              type="button"
              onClick={() => onSelectDay(dayNumber)}
              className={[
                "aspect-square rounded-xl border text-sm transition",
                isSelected
                  ? "border-amber-400 bg-amber-500/20 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                  : "border-amber-700 bg-slate-900 text-slate-100 hover:border-amber-400/40 hover:text-amber-200",
              ].join(" ")}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-base font-medium">{dayNumber}</span>
                {hasData && (
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
