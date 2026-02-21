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
function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
}
export function CalendarSection() {
  const [selectedDiocese, setSelectedDiocese] = useState(dioceses[0]);
  const todayISO = formatTodayISO();

  const weekdayLabel = getWeekdayLabel(todayISO);
  type LiturgicalColor = "biały" | "czerwony" | "zielony" | "fioletowy";
  const todayInfoMock = {
    title: "Uroczytość Św. Józefa, Oblubieńca Najświętszej Maryi Panny",
    rank: "Uroczystość",
    color: "biały" as LiturgicalColor,
    readings: [
      "2 Sm 7, 4-5a. 12-14a. 16",
      "Ps 89 (88), 2-3. 4-5. 27 i 29",
      "Rz 4, 13. 16-18. 22",
      "Mt 1, 16. 18-21. 24a",
    ],
  };
  function getColorStyles(color: LiturgicalColor) {
    switch (color) {
      case "biały":
        return {
          text: "text-slate-50",
          badge: "bg-slate-100 text-slate-900",
        };
      case "czerwony":
        return {
          text: "text-red-300",
          badge: "bg-red-600/80 text-red-50",
        };
      case "zielony":
        return {
          text: "text-emerald-300",
          badge: "bg-emerald-600/80 text-emerald-50",
        };
      case "fioletowy":
        return {
          text: "text-violet-300",
          badge: "bg-violet-600/80 text-violet-50",
        };
      default:
        return {
          text: "text-slate-100",
          badge: "bg-slate-600/80 text-slate-50",
        };
    }
  }
  const colorStyles = getColorStyles(todayInfoMock.color);
  return (
    <section
      id="kalendarz"
      className="relative mx-auto mt-28 w-full max-w-6xl px-6 pb-24"
    >
      {/* separator */}
      <div className="mb-12">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <span className="h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/60 to-transparent" />
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
            <div className="flex h-[52px] items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 transition hover:border-amber-300/60 hover:bg-slate-900/80">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-500/20 text-amber-300 text-lg">
                ⛪
              </div>
              <select
                className="w-full bg-transparent text-sm md:text-base font-medium text-slate-50 outline-none"
                value={selectedDiocese}
                onChange={(e) => setSelectedDiocese(e.target.value)}
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
            <div className="flex h-[52px] items-center rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3">
              <div className="text-sm md:text-base font-medium text-slate-50">
                {formatDisplayDate(todayISO)}
              </div>
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

        {/*Dziś w liturgii */}
        <div className="mt-6 rounded-2xl border border-amber-300/30 bg-slate-900/50 px-4 py-4 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
          <div className="text-xs md:text-base font-semibold uppercase tracking-[0.22em] text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            DZIŚ W LITURGII
          </div>
          <div className="mt-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-lg text-amber-50">
                Św. Józefa, Oblubieńca Najświętsszej Maryi Panny
              </p>
              <p className="text-sm text-slate-200/80">
                {weekdayLabel}, {formatDisplayDate(todayISO)}
              </p>
            </div>
            <div className="mt-3 flex flex-col items-start gap-2 text-sm md:mt-0 md:items-end">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-amber-500/20 text-amber-100 shadow-[0_0_14px_rgba(251,191,36,0.45)]">
                {todayInfoMock.rank}
              </span>
              <span className={`text-sm font-semibold ${colorStyles.text}`}>
                Kolor szat: {todayInfoMock.color}
              </span>
            </div>
            <div className="mt-4 text-xs md:text-sm text-slate-200/90 space-y-1">
              {todayInfoMock.readings.map((reading) => (
                <p key={reading}>{reading}</p>
              ))}
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
