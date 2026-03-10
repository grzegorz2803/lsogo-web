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
function getWeekdayLabel(year: number, month: number, day: number) {
  const date = new Date(year, month, day);
  const days = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  return days[date.getDay()];
}

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
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr]">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.monthLabel}
        </label>
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => onMonthChange(Number(e.target.value))}
            className="appearance-none w-full rounded-xl border border-slate-700 bg-slate-900 px-4 pr-10 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
          >
            {monthOptions.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.yearLabel}
        </label>
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(Number(e.target.value))}
            className="appearance-none w-full rounded-xl border border-slate-700 bg-slate-900 px-4 pr-10 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.dayLabel}
        </label>
        <div className="relative">
          <select
            value={selectedDay}
            onChange={(e) => onDayChange(Number(e.target.value))}
            className="appearance-none w-full rounded-xl border border-slate-700 bg-slate-900 px-4 pr-10 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
          >
            {dayOptions.map((day) => (
              <option key={day} value={day}>
                {day} {getWeekdayLabel(selectedYear, selectedMonth, day)}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
          {toolbar.dioceseLabel}
        </label>
        <div className="relative">
          <select
            value={selectedDiocese}
            onChange={(e) => onDioceseChange(e.target.value)}
            className="appearance-none w-full rounded-xl border border-slate-700 bg-slate-900 px-4 pr-10 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
          >
            {dioceseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
}
