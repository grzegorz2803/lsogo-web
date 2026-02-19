import { Button } from "./Button";
import { useState } from "react";

const dioceses = [
  "Archidiecezja Krakowska",
  "Diecezja Bielsko-Żywiecka",
  "Diecezja Tarnowska",
];

const months = [
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
const weekdays = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

export function CalendarSection() {
  const [selectDiocese, setSelectDiocese] = useState(dioceses[0]);
  const [selectMonth, setSelectMonth] = useState(months[4]);
  const [selectWeekday, setSelectWeekday] = useState(weekdays[2]);
  return (
    <section
      id="kalendarz"
      className="relative mx-auto mt-28 w-full max-w-5xl px-6 pb-24"
    >
      {/* separator */}
      <div className="mb-10 flex justify-center">
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
        <div className="grid gap-4 md:grid-cols-[2fr,1.2fr,1.2fr] md:items-end">
          {/*Diecezja */}
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              Diecezja
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-amber-500/20 text-amber-300">
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
          {/*Miesiąc*/}
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              Miesiąc
            </label>
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3">
              <select
                className="w-full bg-transparent text-sm md:text-base font-medium text-slate-50 outline-none"
                value={selectMonth}
                onChange={(e) => setSelectMonth(e.target.value)}
              >
                {months.map((m) => (
                  <option
                    key={m}
                    value={m}
                    className="bg-slate-900 text-slate-100"
                  >
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/*Dzień tygodnia  */}
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              Dzień tygodnia
            </label>
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3">
              <select
                className="w-full bg-transparent text-sm md:text-base font-medium text-slate-50 outline-none"
                value={selectWeekday}
                onChange={(e) => setSelectWeekday(e.target.value)}
              >
                {weekdays.map((w) => (
                  <option
                    key={w}
                    value={w}
                    className="bg-slate-900 text-slate-100"
                  >
                    {w}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/*Przycisk */}
        <div className="mt-8 flex justify-center md:justify-end">
          <Button>Otwórz kalendarz</Button>
        </div>
      </div>
    </section>
  );
}
