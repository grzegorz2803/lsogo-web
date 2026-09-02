import { useMemo, useState } from "react";
import { calendarPageContent } from "../../content/calendarPage";
import { calendarDaysMock, dioceseOptions } from "../../mocks/calendarPageMock";
import { CalendarToolbar } from "./CalendarToolbar";
import { CalendarMonthGrid } from "./CalendarMonthGrid";
import { CalendarDayDetails } from "./CalendarDayDetails";
type CalendarViewProps = {
  compact?: boolean;
};

function formatTodayParts() {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  };
}

function buildDateString(year: number, month: number, day: number) {
  const yyyy = String(year);
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
function isPastDate(dateStr: string) {
  const today = new Date();
  const selected = new Date(dateStr);
  today.setHours(0, 0, 0, 0);
  selected.setHours(0, 0, 0, 0);
  return selected < today;
}
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
export function CalendarView({ compact = false }: CalendarViewProps) {
  const today = formatTodayParts();
  const [selectedYear, setSelectedYear] = useState<number>(today.year);
  const [selectedMonth, setSelectedMonth] = useState<number>(today.month);
  const [selectedDay, setSelectedDay] = useState<number>(today.day);
  const [selectedDiocese, setSelectedDiocese] = useState<string>(
    dioceseOptions[0],
  );
  const selectedDate = useMemo(
    () => buildDateString(selectedYear, selectedMonth, selectedDay),
    [selectedYear, selectedMonth, selectedDay],
  );

  const matchedDay = useMemo(() => {
    return calendarDaysMock.find((item) => item.date === selectedDate) ?? null;
  }, [selectedDate]);
  const emptyMessage = useMemo(() => {
    if (matchedDay) return "";
    if (isPastDate(selectedDate)) {
      return calendarPageContent.dayDetails.noPassDate;
    }
    return calendarPageContent.dayDetails.noFutureData;
  }, [matchedDay, selectedDate]);
  function changeMonthBy(offset: number) {
    const nextDate = new Date(selectedYear, selectedMonth + offset, 1);
    const nextYear = nextDate.getFullYear();
    const nextMonth = nextDate.getMonth();
    const maxDay = getDaysInMonth(nextYear, nextMonth);
    const safeDay = Math.min(selectedDay, maxDay);

    setSelectedYear(nextYear);
    setSelectedMonth(nextMonth);
    setSelectedDay(safeDay);
  }
  return (
    <div
      className={[
        " rounded-3xl border border-slate-700/50 bg-slate-950/60  ring-1 ring-slate-900/80",
        compact
          ? "px-6 py-6"
          : "px-8 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)]",
      ].join(" ")}
    >
      <CalendarToolbar
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        selectedDay={selectedDay}
        selectedDiocese={selectedDiocese}
        dioceseOptions={dioceseOptions}
        onMonthChange={setSelectedMonth}
        onYearChange={setSelectedYear}
        onDayChange={setSelectedDay}
        onDioceseChange={setSelectedDiocese}
      />
      <div
        className={[
          "grid xl:grid-cols-[1.25fr_0.9fr]",
          compact ? "mt-6 gap-6" : "mt-10 gap-8",
        ].join(" ")}
      >
        <CalendarMonthGrid
          compact={compact}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectedDay={selectedDay}
          data={calendarDaysMock}
          onSelectCurrentMonthDay={setSelectedDay}
          onSelectPreviousMonthDay={(day) => {
            changeMonthBy(-1);
            setSelectedDay(day);
          }}
          onSelectNextMonthDay={(day) => {
            changeMonthBy(1);
            setSelectedDay(day);
          }}
          onPreviousMonth={() => changeMonthBy(-1)}
          onNextMonth={() => changeMonthBy(1)}
        />
        <CalendarDayDetails day={matchedDay} emptyMessage={emptyMessage} />
      </div>
    </div>
  );
}
