type Props = {
  selectedDate: string;
  onSelectedDate: (date: string) => void;
};
function getDaysInMonth(dateStr: string) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
}
function bulidDate(year: number, month: number, day: number) {
  return new Date(year, month, day).toISOString().slice(0, 10);
}

function formatMonthTitle(dateStr: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function CalendarMonthMiniView({ selectedDate, onSelectedDate }: Props) {
  const date = new Date(selectedDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysCount = getDaysInMonth(selectedDate);

  return (
    <section className="mt-8 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-700/50 bg-slate-950/60 px-8 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80">
          <h3 className="font-serif text-2xl text-amber-50">
            {formatMonthTitle(selectedDate)}
          </h3>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {Array.from({ length: daysCount }, (_, index) => {
              const day = index + 1;
              const dateString = bulidDate(year, month, day);
              const isSelected = dateString === selectedDate;
              return (
                <button
                  key={dateString}
                  type="button"
                  onClick={() => onSelectedDate(dateString)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm transition",
                    isSelected
                      ? "bg-amber-500 text-slate-950 font-semibold shadow-[0_0_18px_rgba(251,191,36,0.35)]"
                      : "bg-slate-900 text-slate-100 hover:border-amber-400/40 hover:text-amber-200 border border-slate-700",
                  ].join(" ")}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
