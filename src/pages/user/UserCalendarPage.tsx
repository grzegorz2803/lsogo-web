import { CalendarView } from "../../components/CalendarPage/CalendarView";
import { profileMock } from "../../mocks/profileMock";
export function UserCalendarPage() {
  return (
    <section>
      <h1 className="font-serif text-4xl text-amber-100">
        Kalendarz Liturgiczny
      </h1>
      <p className="mt-2 text-base to-slate-300">
        Sprawdz liturgię i czytania na wybrany dzień
      </p>
      <div className="mt-8">
        <CalendarView
          compact
          fixedDiocese={profileMock.diocese}
          allowDioceseChange={false}
        />
      </div>
    </section>
  );
}
