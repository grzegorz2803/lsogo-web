import { calendarPageContent } from "../../content/calendarPage";

type Props = {
  selectedMonth: number;
  selectedYear: number;
  selectedDay: number;
  selectedDiocese: string;
  dioceseOptions: string[];
  onMonthChange: (value: number) => void;
  onYearChange: (value: number) => void;
  onDayChange: (value: number) => void;
  onDioceseChange: (vlaue: string) => void;
};

const monthOptions = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];
export function CalendarToolbar({
  selectedMonth,
  selectedYear,
  selectedDay,
  selectedDiocese,
  dioceseOptions,
  onMonthChange,
  onYearChange,
  onDayChange,
  onDioceseChange,
}: Props) {
  const { toolbar } = calendarPageContent;
  const yearOptions = Array.from({ length: 6 }, (_, i) => 2025 + i);
  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr,1fr,1fr,1.5fr]">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.monthLabel}
        </label>
        <select
          value={selectedMonth}
          onChange={(e) => onMonthChange(Number(e.target.value))}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
        >
          {monthOptions.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.yearLabel}
        </label>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.dayLabel}
        </label>
        <select
          value={selectedDay}
          onChange={(e) => onDayChange(Number(e.target.value))}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
        >
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.dioceseLabel}
        </label>
        <select
          value={selectedDiocese}
          onChange={(e) => onDioceseChange(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
        >
          {dioceseOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
