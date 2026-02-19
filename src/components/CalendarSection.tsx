import { Button } from "./Button";
import { useState } from "react";

const dioceses = [
  "Archidiecezja Krakowska",
  "Diecezja Bielsko-Żywiecka",
  "Diecezja Tarnowska",
];
function formatTodayISO() {
  const today = new Date();
  // YYY-MM-DD
  return today.toISOString().slice(0, 10);
}
function getWeekdayLabel(dateStr: string): string {
  if (!dateStr) return "";
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

export function CalendarSection() {
  const [selectDiocese, setSelectDiocese] = useState(dioceses[0]);
  const [selectedDate, setSelectedDate] = useState(formatTodayISO());

  const weekdayLabel = getWeekdayLabel(selectedDate);

  return (
    <section
      id="kalendarz"
      className="relative mx-auto mt-28 w-full max-w-5xl px-6 pb-24"
    >
      {/* separator */}
      <div className="mb-12 flex justify-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70  to-transparent" />
          <span className="h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
        </div>
      </div>
      {/*Nagłówki */}
      <div className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-amber-100">
          Kalendarz liturgiczny
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-200/80">
          Zobacz rangi dni, kolory szat i czytania w swojej diecezji.
        </p>
      </div>
      {/* Karta z wyborem  */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur-md md:px-8 md:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          {/*Diecezja */}
          <div className="flex-1 space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              Diecezja
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 transition hover:border-amber-300/60 hover:bg-slate-900/80">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-500/20 text-amber-300 text-lg">
                ⛪
              </div>
              <select
                className="w-full bg-transparent text-sm md:text-base font-medium text-slate-50 outline-none"
                value={selectDiocese}
                onChange={(e) => setSelectDiocese(e.target.value)}
              >
                {dioceses.map((d) => (
                  <option
                    key={d}
                    value={d}
                    className="bg-slate-900 text-slate-100"
                  >
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/*Data*/}
          <div className="flex-1 space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              Data
            </label>
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 transition hover:border-amber-300/60 hover:bg-slate-900/80">
              <input
                type="date"
                className="w-full bg-transparent text-sm md:text-base font-medium text-slate-50 outline-none [color-scheme:dark]"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
          {/*Dzień tygodnia  */}
          <div className="flex-1 space-y-2 md:max-w-[180px]">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              Dzień tygodnia
            </label>
            <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-slate-900/40 px-4 text-sm md:text-base font-semibold text-slate-100/90">
              {weekdayLabel || "-"}
            </div>
          </div>
        </div>
        {/*Przycisk */}
        <div className="mt-8 flex justify-center ">
          <Button>Otwórz kalendarz</Button>
        </div>
      </div>
    </section>
  );
}
