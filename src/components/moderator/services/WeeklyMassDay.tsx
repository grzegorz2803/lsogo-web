import { Pencil, Trash2 } from "lucide-react";

import type { Weekday, WeeklyMass } from "../../../types/moderatorServices";

import { moderatorContent } from "../../../content/moderator";

type WeeklyMassDayProps = {
  weekday: Weekday;
  masses: WeeklyMass[];
  onEdit: (mass: WeeklyMass, weekday: Weekday) => void;
  onDelete: (mass: WeeklyMass, weekday: Weekday) => void;
};

export function WeeklyMassDay({
  weekday,
  masses,
  onEdit,
  onDelete,
}: WeeklyMassDayProps) {
  const content = moderatorContent.services;

  const sortedMasses = [...masses].sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          {content.weekdays[weekday]}
        </h3>

        <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-white/50">
          {masses.length}
        </span>
      </div>
      {sortedMasses.length === 0 ? (
        <p className="text-sm text-white/40">{content.weeklyMass.empty}</p>
      ) : (
        <div className="space-y-3">
          {sortedMasses.map((mass) => (
            <div
              key={mass.id}
              className="rounded-xl border border-white/10 bg-slate-950/30 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-amber-400">
                    {mass.time}
                  </p>
                  <p className="mt-1 text-sm text-white/80">{mass.name}</p>
                  <p className="mt-1 text-xs text-white/40">
                    {mass.points} {content.weeklyMass.points}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => onEdit(mass, weekday)}
                    title={content.weeklyMass.editMass}
                    aria-label={`${content.weeklyMass.editMass}: ${mass.name}, ${mass.time}`}
                    className="cursor-pointer rounded-lg p-2 text-white/40 transition hover:bg-white/10 hover:text-amber-400"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(mass, weekday)}
                    title={content.weeklyMass.deleteMass}
                    aria-label={`${content.weeklyMass.deleteMass}: ${mass.name}, ${mass.time}`}
                    className="cursor-pointer rounded-lg p-2 text-white/40 transition hover:bg-red-500/10 hover:text-red-400"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
