import { ModeratorDashboardCard } from "./ModeratorDashboardCard";
import { moderatorContent } from "../../../content/moderator";
import { moderatorDashboardMock } from "../../../mocks/moderatorDashboardMock";

export function SchedulesStatusCard() {
  const { schedule } = moderatorContent.dashboard;
  const { schedule: data } = moderatorDashboardMock;

  return (
    <ModeratorDashboardCard title={schedule.title}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-white/60">{schedule.current}</p>
          <p className="mt-1 font-medium text-white">{data.current.name}</p>
          <p className="mt-2 text-sm text-emerald-300">
            {schedule.status.published}
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-white/60">{schedule.next}</p>
          <p className="mt-1 font-medium text-white">{data.next.name}</p>
          <p className="mt-2 text-sm text-amber-300">{schedule.status.draft}</p>
        </div>
      </div>
    </ModeratorDashboardCard>
  );
}
