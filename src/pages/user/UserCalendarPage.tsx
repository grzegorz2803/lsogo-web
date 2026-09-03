import { CalendarView } from "../../components/CalendarPage/CalendarView";
import { profileMock } from "../../mocks/profileMock";
import { userCalendarContent } from "../../content/userCalendarContent";
import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
export function UserCalendarPage() {
  return (
    <section>
      <PanelPageHeader
        title={userCalendarContent.title}
        subtitle={userCalendarContent.subtitle}
      />
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
