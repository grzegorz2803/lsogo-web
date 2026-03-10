import { calendarPageContent } from "../../content/calendarPage";

type Props = {
  selectedDate: string;
  selectedDiocese: string;
  dioceseOptions: string[];
  onDateChange: (value: string) => void;
  onDioceseChange: (value: string) => void;
  onTodayClick: () => void;
};

export function CalendarPageHero({
  selectedDate,
  selectedDiocese,
  dioceseOptions,
  onDateChange,
  onDioceseChange,
  onTodayClick,
}: Props) {
  const { hero } = calendarPageContent;

  return (
    <section className="px-6 pt-20 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="px-8 py-10">
          <h1 className="font-serif text-3xl md:text-5xl text-amber-100">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-200/80">
            {hero.subtitle}
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-[1.4fr,1fr,auto]">
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

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400 scheme-dark"
            />

            <button
              type="button"
              onClick={onTodayClick}
              className="rounded-xl border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-500/20"
            >
              {/* {hero.todayButton} */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
