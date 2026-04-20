import { useState } from "react";
import type { UserSchedule } from "../../mocks/scheduleMock";
import { scheduleContent } from "../../content/scheduleContent";

export function ScheduleNextAccordion({
  schedule,
}: {
  schedule: UserSchedule;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-serif text-amber-200">
            {scheduleContent.next.title}
          </h2>
          <p className="text-xs text-slate-400">
            {schedule.validFrom} - {schedule.validTo}
          </p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer rounded-full border border-amber-400/15 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-500/10"
        >
          {open ? scheduleContent.next.hide : scheduleContent.next.show}
        </button>
      </div>
      {open && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 opacity-80">
          {schedule.weeklyDuties.map((duty) => (
            <div
              key={duty.id}
              className="rounded-xl border border-white/10 px-4 py-3 bg-slate-900/60"
            >
              <p className="text-sm text-slate-400">{duty.dayLabel}</p>
              <p className="text-lg text-amber-200">{duty.time}</p>
              <p className="text-xs text-slate-400">{duty.serviceName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
