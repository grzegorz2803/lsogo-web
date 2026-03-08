import { calendarPageContent } from "../../content/calendarPage";

type Props = {
  onPrevious: () => void;
  onNext: () => void;
};

export function CalendarDayNavigation({ onPrevious, onNext }: Props) {
  const { navigation } = calendarPageContent;

  return (
    <section className="mt-8 px-6 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-sm text-slate-100 transition hover:border-amber-400/50 hover:text-amber-200"
        >
          ← {navigation.previousDay}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-sm text-slate-100 transition hover:border-amber-400/50 hover:text-amber-200"
        >
          {navigation.nexDay} →
        </button>
      </div>
    </section>
  );
}
