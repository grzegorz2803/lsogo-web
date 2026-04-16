import { Link } from "react-router-dom";
import { userDashboardContent } from "../../../content/userDashboard";
import type { UpcomingServiceItem } from "../../../mocks/userDashboardMock";

type Props = {
  services: UpcomingServiceItem[];
};

function getBadgeLabel(status: UpcomingServiceItem["status"]) {
  const { upcomingServices } = userDashboardContent;

  if (status === "today") return upcomingServices.todayBadge;
  if (status === "tomorrow") return upcomingServices.tomorrowBadge;
  return upcomingServices.upcomingBadge;
}

export function UpcomingServicesCard({ services }: Props) {
  const { upcomingServices } = userDashboardContent;
  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-amber-400/10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl text-amber-100">
          {upcomingServices.title}
        </h2>
        <Link
          to="/panel/user/schedule"
          className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
        >
          {upcomingServices.button}
        </Link>
      </div>
      {services.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">{upcomingServices.empty}</p>
      ) : (
        <div className="mt-5 space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-start justify-between gap-4 rounded-2xl border border-slate-700/30 bg-slate-950/40 px-4 py-4"
            >
              <div>
                <p className="text-sm text-slate-300">{service.dateLabel}</p>
                <p className="mt-1 text-2xl font-semibold text-amber-200">
                  {service.time}
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  {service.serviceName}
                </p>
              </div>
              <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-amber-200">
                {getBadgeLabel(service.status)}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
