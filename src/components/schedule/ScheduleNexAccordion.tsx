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
          className="text-xs text-amber-300 hover:underline cursor-pointer"
        >
          {open ? scheduleContent.next.hide : scheduleContent.next.show}
        </button>
      </div>
      {open && (
        <div className="space-y-3 mt-4">
          {schedule.weeklyDuties.map((duty) => (
            <div
              key={duty.id}
              className="rounded-xl border border-white/10 p-4 bg-slate-900/60"
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
