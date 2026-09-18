import { ModeratorDashboardCard } from "./ModeratorDashboardCard";
import { moderatorContent } from "../../../content/moderator";
import { moderatorDashboardMock } from "../../../mocks/moderatorDashboardMock";

export function TodayServicesCard() {
  const { services } = moderatorContent.dashboard;
  const { todayServices: data } = moderatorDashboardMock;

  return (
    <ModeratorDashboardCard title={services.title}>
      <div className="space-y-3">
        {data.length > 0 ? (
          data.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-white/5 p-4"
            >
              <div>
                <p className="font-medium text-white">{service.name}</p>
                <p className="mt-1 text-sm text-white/60">{service.time}</p>
              </div>
              <span className="text-sm text-amber-300">
                {service.points} {services.points}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-white/60">{services.empty}</p>
        )}
      </div>
    </ModeratorDashboardCard>
  );
}
