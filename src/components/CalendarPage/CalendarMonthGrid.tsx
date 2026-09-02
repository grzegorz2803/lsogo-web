import { calendarPageContent } from "../../content/calendarPage";
import type { CalendarDayData } from "../../mocks/calendarPageMock";

type Props = {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  data: CalendarDayData[];
  onSelectCurrentMonthDay: (day: number) => void;
  onSelectPreviousMonthDay: (day: number) => void;
  onSelectNextMonthDay: (day: number) => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  compact?: boolean;
};
function bulidDateString(year: number, month: number, day: number) {
  const yyyy = String(year);
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function getMonthTitle(year: number, month: number) {
  const value = new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));
  return capitalize(value);
}
function getMonthStartOffset(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
}
function isSunday(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay() === 0;
}
export function CalendarMonthGrid({
  selectedYear,
  selectedMonth,
  selectedDay,
  onSelectNextMonthDay,
  onSelectCurrentMonthDay,
  onSelectPreviousMonthDay,
  onPreviousMonth,
  onNextMonth,
  compact = false,
}: Props) {
  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const { monthView } = calendarPageContent;
  const monthStartOffset = getMonthStartOffset(selectedYear, selectedMonth);
  const usedCells = monthStartOffset + daysInMonth;
  const totalCells = usedCells <= 35 ? 35 : 42;
  const trailingDaysCount = totalCells - monthStartOffset - daysInMonth;
  const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
  const prevMonthYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
  const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

  return (
    <div
      className={["rounded-3xl", compact ? "px-3 py-4" : "px-6 py-8"].join(" ")}
    >
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onPreviousMonth}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-amber-200 transition hover:border-amber-400/50 hover:text-amber-100"
          aria-label="Poprzedni miesiąc"
        >
          ‹
        </button>
        <h3
          className={[
            "text-center font-serif text-amber-50",
            compact ? "text-xl" : "text-2xl",
          ].join(" ")}
        >
          {getMonthTitle(selectedYear, selectedMonth)}
        </h3>
        <button
          type="button"
          onClick={onNextMonth}
          className="rounded-full border  border-slate-700 bg-slate-900/80 px-3 py-1 text-amber-200 transition hover:border-amber-400/50 hover:text-amber-100"
          aria-label="Następny miesiąc"
        >
          ›
        </button>
      </div>
      <div
        className={["grid grid-cols-7", compact ? "mt-4" : "mt-6"].join(" ")}
      >
        {monthView.weekLabels.map((label) => (
          <div
            key={label}
            className="pb-2 text-center text-sm font-medium text-amber-200/90"
          >
            {label}
          </div>
        ))}
        {Array.from({ length: monthStartOffset }).map((_, index) => {
          const day = daysInPrevMonth - monthStartOffset + index + 1;
          return (
            <button
              key={`prev-${day}`}
              type="button"
              onClick={() => onSelectPreviousMonthDay(day)}
              className={[
                "relative border border-slate-700 transition hover:bg-slate-800/30",
                compact ? "h-20" : "aspect-square",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute font-medium text-slate-500/50",
                  compact ? "right-2 top-2 text-sm" : "right-3 top-3 text-base",
                ].join(" ")}
              >
                {day}
              </span>
            </button>
          );
        })}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const dayNumber = index + 1;
          const dateString = bulidDateString(
            selectedYear,
            selectedMonth,
            dayNumber,
          );
          const isSelected = dayNumber === selectedDay;
          const sunday = isSunday(selectedYear, selectedMonth, dayNumber);

          return (
            <button
              key={dateString}
              type="button"
              onClick={() => onSelectCurrentMonthDay(dayNumber)}
              className={[
                "flex items-center justify-center",
                compact ? "h-20" : "aspect-square",
                "border border-slate-700 text-sm transition",
                isSelected
                  ? "border-amber-300 bg-amber-500"
                  : "border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800",
              ].join(" ")}
            >
              {isSelected ? (
                <div className="relative flex h-full w-full items-center justify-center">
                  <span
                    className={[
                      "font-serif text-amber-50",
                      compact ? "text-2xl" : "text-3xl",
                    ].join(" ")}
                  >
                    {dayNumber}
                  </span>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  <span
                    className={[
                      compact
                        ? "absolute right-2 top-2 text-sm font-medium"
                        : "absolute right-3 top-3 text-base font-medium",
                      sunday ? "text-red-300" : "text-slate-100",
                    ].join(" ")}
                  >
                    {dayNumber}
                  </span>
                </div>
              )}
            </button>
          );
        })}
        {Array.from({ length: trailingDaysCount }).map((_, index) => {
          const nextMonthDay = index + 1;
          return (
            <button
              key={`next-${nextMonthDay}`}
              type="button"
              onClick={() => onSelectNextMonthDay(nextMonthDay)}
              className={[
                "relative border border-slate-700 transition hover:bg-slate-800/30",
                compact ? "h-20" : "aspect-square",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute font-medium text-slate-500/50",
                  compact ? "right-2 top-2 text-sm" : "right-3 top-3 text-base",
                ].join(" ")}
              >
                {nextMonthDay}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
