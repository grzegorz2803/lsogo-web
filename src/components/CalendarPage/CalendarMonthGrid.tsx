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
}: Props) {
  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const { monthView } = calendarPageContent;
  const monthStartOffset = getMonthStartOffset(selectedYear, selectedMonth);
  const totalCells = 42;
  const trailingDaysCount = totalCells - monthStartOffset - daysInMonth;
  const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
  const prevMonthYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
  const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

  return (
    <div className="rounded-3xl px-6 py-8 s">
      <h3 className="text-center font-serif text-2xl text-amber-50">
        {getMonthTitle(selectedYear, selectedMonth)}
      </h3>
      <div className="mt-6 grid grid-cols-7 ">
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
              className="relative aspect-square border border-slate-700 transition"
            >
              <span className="absolute right-3 top-3 text-base font-medium text-slate-500/50">
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
                "aspect-square flex items-center justify-center",
                "border border-slate-700 text-sm transition",
                isSelected
                  ? "border-amber-300 bg-amber-500"
                  : "border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800",
              ].join(" ")}
            >
              {isSelected ? (
                <div className="relative flex h-full w-full items-center justify-center">
                  <span className="text-3xl font-serif text-amber-50 ">
                    {dayNumber}
                  </span>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  <span
                    className={[
                      "absolute right-3 top-3 text-base font-medium",
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
              className="relative aspect-square border border-slate-700 transitio hover:bg-slate-900"
            >
              <span className="absolute right-3 top-3 text-base font-medium text-slate-500/50">
                {nextMonthDay}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
