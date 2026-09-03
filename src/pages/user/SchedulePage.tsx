import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
import { ScheduleAssistsCard } from "../../components/schedule/ScheduleAssistsCard";
import { ScheduleCurrentCard } from "../../components/schedule/ScheduleCurrentCard";
import { ScheduleNextAccordion } from "../../components/schedule/ScheduleNexAccordion";
import { scheduleContent } from "../../content/scheduleContent";
import { currentSchedule, nextSchedule } from "../../mocks/scheduleMock";

export function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <PanelPageHeader
          title={scheduleContent.title}
          subtitle={scheduleContent.subtitle}
        />
      </div>
      <ScheduleCurrentCard schedule={currentSchedule} />
      <ScheduleAssistsCard assists={currentSchedule.assists} />
      <ScheduleNextAccordion schedule={nextSchedule} />
    </div>
  );
}
