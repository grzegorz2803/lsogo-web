import { useMemo, useState } from "react";
import { CalendarPageHero } from "../components/CalendarPage/CalendarPageHero";
import { calendarDayMock } from "../mocks/calendarPageMock";
import { CalendarDayCard } from "../components/CalendarPage/CalendarDayCard";
import { CalendarDayNavigation } from "../components/CalendarPage/CalendarDayNavigation";
function formatTodayISO() {
  return new Date().toISOString().slice(0, 10);
}
function getWeekdayLabel(dateStr: string): string {
  const d = new Date(dateStr);
  const days = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  return days[d.getDay()] ?? "";
}
function addDays(dateStr: string, amount: number) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + amount);
  return d.toISOString().slice(0, 10);
}
export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(
    calendarDayMock.date || formatTodayISO(),
  );
  const dayDate = useMemo(() => {
    return {
      ...calendarDayMock,
      date: selectedDate,
      weekday: getWeekdayLabel(selectedDate),
    };
  }, [selectedDate]);
  return (
    <div className="relative min-h-screen w-full">
      <CalendarPageHero
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onTodayClick={() => setSelectedDate(formatTodayISO())}
      />
      <CalendarDayCard day={dayDate} />
      <CalendarDayNavigation
        onPrevious={() => setSelectedDate((prev) => addDays(prev, -1))}
        onNext={() => setSelectedDate((prev) => addDays(prev, 1))}
      />
    </div>
  );
}
