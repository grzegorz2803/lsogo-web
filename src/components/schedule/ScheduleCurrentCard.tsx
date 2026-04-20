import type { UserSchedule } from "../../mocks/scheduleMock";
import { scheduleContent } from "../../content/scheduleContent";

export function ScheduleCurrentCard({ schedule }: { schedule: UserSchedule }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-serif text-amber-200">
            {scheduleContent.current.title}
          </h2>
          <p className="text-xs text-slate-400">
            {schedule.validFrom} - {schedule.validTo}
          </p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full border border-amber-400/30 text-amber-300">
          {scheduleContent.current.badge}
        </span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {schedule.weeklyDuties.map((duty) => (
          <div
            key={duty.id}
            className="rounded-xl border border-white/10 p-4 bg-slate-900/60"
          >
            <p className="text-sm text-slate-400">{duty.dayLabel}</p>
            <p className="text-xl font-semibold text-amber-200">{duty.time}</p>
            <p className="text-xs text-slate-400">{duty.serviceName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
