import { useMemo, useState } from "react";
import { CalendarPageHero } from "../components/CalendarPage/CalendarPageHero";
import { calendarDaysMock, dioceseOptions } from "../mocks/calendarPageMock";
import { CalendarDayCard } from "../components/CalendarPage/CalendarDayCard";
import { CalendarDayNavigation } from "../components/CalendarPage/CalendarDayNavigation";
import { calendarPageContent } from "../content/calendarPage";
function formatTodayISO() {
  return new Date().toISOString().slice(0, 10);
}
// function getWeekdayLabel(dateStr: string): string {
//   const d = new Date(dateStr);
//   const days = [
//     "Niedziela",
//     "Poniedziałek",
//     "Wtorek",
//     "Środa",
//     "Czwartek",
//     "Piątek",
//     "Sobota",
//   ];
//   return days[d.getDay()] ?? "";
// }
function addDays(dateStr: string, amount: number) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + amount);
  return d.toISOString().slice(0, 10);
}
export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<string>(
    calendarDaysMock[0]?.date || formatTodayISO(),
  );

  const [selectedDiocese, setSelectedDiocese] = useState(dioceseOptions[0]);
  function isPastDate(dateStr: string) {
    const today = new Date();
    const selected = new Date(dateStr);

    today.setHours(0, 0, 0, 0);
    selected.setHours(0, 0, 0, 0);
    return selected < today;
  }
  const matchedDay = useMemo(() => {
    return calendarDaysMock.find((item) => item.date === selectedDate) ?? null;
  }, [selectedDate]);
  const emptyMessage = useMemo(() => {
    if (matchedDay) return "";

    if (isPastDate(selectedDate)) {
      return calendarPageContent.dayCard.noPastDate;
    }

    return calendarPageContent.dayCard.noFutureData;
  }, [matchedDay, selectedDate]);
  return (
    <div className="relative min-h-screen w-full">
      <CalendarPageHero
        selectedDate={selectedDate}
        selectedDiocese={selectedDiocese}
        dioceseOptions={dioceseOptions}
        onDateChange={setSelectedDate}
        onDioceseChange={setSelectedDiocese}
        onTodayClick={() => setSelectedDate(formatTodayISO())}
      />

      <CalendarDayCard day={matchedDay} emptyMessage={emptyMessage} />
      <CalendarDayNavigation
        onPrevious={() => setSelectedDate((prev) => addDays(prev, -1))}
        onNext={() => setSelectedDate((prev) => addDays(prev, 1))}
      />
    </div>
  );
}
