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
export function CalendarMonthGrid({
  selectedYear,
  selectedMonth,
  selectedDay,
  data,
  onSelectDay,
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
            <div
              key={`prev-${day}`}
              className="aspect-square border border-slate-700 flex items-center justify-center text-slate-500"
            >
              <span className="text-base font-medium opacity-50">{day}</span>
            </div>
          );
        })}
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
                "aspect-square flex items-center justify-center",
                "border border-slate-700 text-sm transition",
                isSelected
                  ? "bg-amber-500/20 text-amber-100"
                  : "bg-slate-900 text-slate-100 hover:bg-slate-800",
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
        {Array.from({ length: trailingDaysCount }).map((_, index) => {
          const nextMonthDay = index + 1;
          return (
            <div
              key={`next-${nextMonthDay}`}
              className="aspect-square border border-slate-700 flex items-center justify-center text-slate-500"
            >
              <span className="text-base font-medium opacity-50">
                {nextMonthDay}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
