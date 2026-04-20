import { ScheduleAssistsCard } from "../../components/schedule/ScheduleAssistsCard";
import { ScheduleCurrentCard } from "../../components/schedule/ScheduleCurrentCard";
import { ScheduleNextAccordion } from "../../components/schedule/ScheduleNexAccordion";
import { scheduleContent } from "../../content/scheduleContent";
import { currentSchedule, nextSchedule } from "../../mocks/scheduleMock";

export function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-amber-200">
          {scheduleContent.title}
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          {scheduleContent.subtitle}
        </p>
      </div>
      <ScheduleCurrentCard schedule={currentSchedule} />
      <ScheduleAssistsCard assists={currentSchedule.assists} />
      <ScheduleNextAccordion schedule={nextSchedule} />
    </div>
  );
}
