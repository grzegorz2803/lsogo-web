import { useMemo, useState } from "react";
import { calendarPageContent } from "../content/calendarPage";
import { calendarDaysMock, dioceseOptions } from "../mocks/calendarPageMock";
import { CalendarToolbar } from "../components/CalendarPage/CalendarToolbar";
import { CalendarMonthGrid } from "../components/CalendarPage/CalendarMonthGrid";
import { CalendarDayDetails } from "../components/CalendarPage/CalendarDayDetails";

function formatTodayParts() {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  };
}

function bulidDateString(year: number, month: number, day: number) {
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

export function CalendarPage() {
  const today = formatTodayParts();
  const [selectedYear, setSelectedYear] = useState<number>(today.year);
  const [selectedMonth, setSelectedMonth] = useState<number>(today.month);
  const [selectedDay, setSelectedDay] = useState<number>(today.day);
  const [selectedDiocese, setSelectedDiocese] = useState<string>(
    dioceseOptions[0],
  );
  const selectedDate = useMemo(
    () => bulidDateString(selectedYear, selectedMonth, selectedDay),
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
    const date = new Date(selectedYear, selectedMonth + offset, 1);
    setSelectedYear(date.getFullYear());
    setSelectedMonth(date.getMonth());
  }
  return (
    <div className="relative min-h-screen w-full px-6 pt-20 pb-16">
      <div className="mx-auto max-w-6xl ">
        <div className="text-center ">
          <h1 className="font-serif text-3xl md:text-5xl text-amber-100">
            {calendarPageContent.hero.title}
          </h1>
        </div>
        <div className="mt-10 rounded-3xl border border-slate-700/50 bg-slate-950/60 px-8 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80">
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
          <div className="mt-10 grid gap-8 xl:grid-cols-[1.25fr_0.9fr]">
            <CalendarMonthGrid
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
            />
            <CalendarDayDetails day={matchedDay} emptyMessage={emptyMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
