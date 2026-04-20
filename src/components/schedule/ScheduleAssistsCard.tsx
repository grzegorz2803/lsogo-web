import type { AssistDuty } from "../../mocks/scheduleMock";
import { scheduleContent } from "../../content/scheduleContent";

export function ScheduleAssistsCard({ assists }: { assists: AssistDuty[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
      <h2 className="text-lg font-serif text-amber-200 mb-4">
        {scheduleContent.assists.title}
      </h2>
      {assists.length === 0 ? (
        <p className="text-sm text-slate-400">
          {scheduleContent.assists.empty}
        </p>
      ) : (
        <div className="space-y-3">
          {assists.map((a) => (
            <div
              key={a.id}
              className="rounded-xl border border-white/10 p-4 bg-slate-900/60"
            >
              <p className="text-xs text-slate-400">
                {a.date} • {a.time}
              </p>
              <p className="text-sm text-slate-200 font-medium">
                {a.celebrationName}
              </p>
              <p className="text-xs text-amber-300 mt-1">
                Funkcja: {a.functionName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
