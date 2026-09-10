import { PanelPageHeader } from "../../components/Panel/PanelPageHeader";
import { ScheduleAssistsCard } from "../../components/Schedule/ScheduleAssistsCard";
import { ScheduleCurrentCard } from "../../components/Schedule/ScheduleCurrentCard";
import { ScheduleNextAccordion } from "../../components/Schedule/ScheduleNextAccordion";
import { scheduleContent } from "../../content/schedule";
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
