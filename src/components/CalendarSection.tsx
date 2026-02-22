import { Button } from "./Button";
import { useState } from "react";
import {
  todayLiturgicalInfoMock,
  type TodayLiturgicalInfo,
  diocesesMock,
} from "../mocks/calendarMocks";
import { homeCalendarContent } from "../content/calendar";
import { weekdaysPl } from "../content/i18nWeekdats";
import { SectionSeparator } from "./SectionSeparator";
const dioceses = diocesesMock.dioceses;
function formatTodayISO() {
  const today = new Date();
  // YYY-MM-DD
  return today.toISOString().slice(0, 10);
}
function getWeekdayLabel(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return weekdaysPl[d.getDay()] ?? "";
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
  function getColorStyles(color: TodayLiturgicalInfo["color"]) {
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
  const todayInfo = todayLiturgicalInfoMock;
  const colorStyles = getColorStyles(todayInfo.color);
  return (
    <section
      id="kalendarz"
      className="relative mx-auto mt-28 w-full max-w-6xl px-6 pb-24"
    >
      <SectionSeparator />
      {/*Nagłówki */}
      <div className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-amber-100">
          {homeCalendarContent.heading}
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-200/80">
          {homeCalendarContent.subheading}
        </p>
      </div>
      {/* Karta z wyborem  */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur-md md:px-8 md:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          {/*Diecezja */}
          <div className="flex-1 space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.16em] text-amber-200/90">
              {homeCalendarContent.fields.diocese}
            </label>
            <div className="flex h-[52px] items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 transition hover:border-amber-300/60 hover:bg-slate-900/80">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-500/20 text-amber-300 text-lg">
                {homeCalendarContent.dioceseLogo}
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
              {homeCalendarContent.fields.date}
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
              {homeCalendarContent.fields.weekday}
            </label>
            <div className="flex h-[52px] items-center rounded-2xl border border-white/10 bg-slate-900/40 px-4 text-sm md:text-base font-semibold text-slate-100/90">
              {weekdayLabel || "-"}
            </div>
          </div>
        </div>

        {/*Dziś w liturgii */}
        <div className="mt-6 rounded-2xl border border-amber-300/30 bg-slate-900/50 px-4 py-4 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
          <div className="flex items-baseline justify-between">
            <div className="text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-amber-200">
              {homeCalendarContent.liturgicalTodayTitle}
            </div>
            <div className="text-sm uppercase md:text-base font-semibold text-amber-100">
              {todayInfo.rank}
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-slate-200/80">
                {weekdayLabel} {formatDisplayDate(todayISO)}
              </p>
              <p
                className={`text-sm md:text-base font-semibold ${colorStyles.text}`}
              >
                {homeCalendarContent.liturgicalColorTitle} {todayInfo.color}
              </p>
            </div>
            <p className="font-serif text-lg text-amber-50">
              {todayInfo.title}
            </p>
          </div>

          <div className="mt-4 text-xs md:text-sm text-slate-200/90 space-y-1">
            <p className="font-semibold uppercase tracking-[0.16em] text-slate-300">
              {homeCalendarContent.readingsForToday}
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              {todayInfo.readings.map((reading, index) => (
                <span key={reading}>
                  {index > 0 && (
                    <span className="mx-2 text-amber-400 font-bold">|</span>
                  )}
                  <span>{reading}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
        {/*Przycisk */}
        <div className="mt-8 flex justify-center ">
          <Button>{homeCalendarContent.openCalendarLabel}</Button>
        </div>
      </div>
    </section>
  );
}
