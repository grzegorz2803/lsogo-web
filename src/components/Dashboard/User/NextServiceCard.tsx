import { userDashboardContent } from "../../../content/userDashboard";
import type { NextService } from "../../../mocks/userDashboardMock";

type Props = {
  service: NextService | null;
};

export function NextServiceCard({ service }: Props) {
  const { nextService } = userDashboardContent;
  const badge =
    service?.status === "today"
      ? nextService.todayBadge
      : service?.status === "tomorrow"
        ? nextService.tomorrowBadge
        : null;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-amber-100">
            {nextService.title}
          </h2>
          {service ? (
            <>
              <p className="mt-4 text-sm text-slate-300">{service.dateLabel}</p>
              <p className="mt-1 text-3xl font-semibold text-amber-200">
                {service.time}
              </p>
              <p className="mt-2 text-base text-slate-200">
                {service.serviceName}
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm text-slate-400">{nextService.empty}</p>
          )}
        </div>
        {badge && (
          <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-amber-200">
            {badge}
          </span>
        )}
      </div>
    </section>
  );
}
