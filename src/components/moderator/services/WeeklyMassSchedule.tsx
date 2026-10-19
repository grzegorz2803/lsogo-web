import { Plus } from "lucide-react";

import type { Weekday, WeeklyMass } from "../../../types/moderatorServices";

import { moderatorContent } from "../../../content/moderator";

import { WeeklyMassDay } from "./WeeklyMassDay";

type WeeklyMassScheduleProps = {
  masses: WeeklyMass[];
  onAdd: () => void;
  onEdit: (mass: WeeklyMass, weekday: Weekday) => void;
  onDelete: (mass: WeeklyMass, weekday: Weekday) => void;
};

const weekdays: Weekday[] = [1, 2, 3, 4, 5, 6, 7];

export function WeeklyMassSchedule({
  masses,
  onAdd,
  onEdit,
  onDelete,
}: WeeklyMassScheduleProps) {
  const content = moderatorContent.services.weeklyMass;

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{content.title}</h2>
          <p className="mt-2 text-sm text-white/50">{content.description}</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          <Plus size={18} />
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {weekdays.map((weekday) => (
          <WeeklyMassDay
            key={weekday}
            weekday={weekday}
            masses={masses.filter(
              (mass) => mass.weekdays.includes(weekday) && mass.isActive,
            )}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}
