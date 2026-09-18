import { ModeratorDashboardCard } from "./ModeratorDashboardCard";
import { moderatorContent } from "../../../content/moderator";
import { moderatorDashboardMock } from "../../../mocks/moderatorDashboardMock";

export function PendingCasesCard() {
  const { pending } = moderatorContent.dashboard;
  const { pending: data } = moderatorDashboardMock;

  return (
    <ModeratorDashboardCard title={pending.title}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-white/60">{pending.excuses}</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            {data.excuses}
          </p>
        </div>
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-white/60">{pending.appeals}</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            {data.appeals}
          </p>
        </div>
      </div>
    </ModeratorDashboardCard>
  );
}
