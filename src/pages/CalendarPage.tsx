import { CalendarView } from "../components/CalendarPage/CalendarView";
import { calendarPageContent } from "../content/calendarPage";

export function CalendarPage() {
  return (
    <div className="relative min-h-screen w-full px-6 pt-20 pb-16">
      <div className="mx-auto max-w-6xl ">
        <div className="text-center ">
          <h1 className="font-serif text-3xl md:text-5xl text-amber-100">
            {calendarPageContent.hero.title}
          </h1>
        </div>
        <div className="mt-10">
          <CalendarView />
        </div>
      </div>
    </div>
  );
}
