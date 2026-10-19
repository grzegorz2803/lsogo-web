import { moderatorContent } from "../../../content/moderator";

import type { Weekday, WeeklyMass } from "../../../types/moderatorServices";

export type MassActionScope = "single" | "all";

type WeeklyMassEditScopeModalProps = {
  mass: WeeklyMass;
  weekday: Weekday;
  onSelect: (scope: MassActionScope) => void;
  onClose: () => void;
};

export function WeeklyMassEditScopeModal({
  mass,
  weekday,
  onSelect,
  onClose,
}: WeeklyMassEditScopeModalProps) {
  const content = moderatorContent.services;
  const editScopeContent = content.weeklyMass.editScope;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mass-edit-scope-title"
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080e25] p-6 shadow-2xl"
      >
        <h2
          id="mass-edit-scope-title"
          className="text-xl font-semibold text-white"
        >
          {editScopeContent.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/60">
          {editScopeContent.descriptionStart} {mass.weekdays.length}{" "}
          {editScopeContent.descriptionEnd}
        </p>
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => onSelect("single")}
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white transition hover:border-amber-400/50 hover:bg-white/10"
          >
            {editScopeContent.single}{" "}
            <span className="font-semibold text-amber-400">
              {content.weekdays[weekday]}
            </span>
          </button>
          <button
            type="button"
            onClick={() => onSelect("all")}
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white transition hover:border-amber-400/50 hover:bg-white/10"
          >
            {editScopeContent.all}
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 cursor-pointer text-sm text-white/50 transition hover:text-white"
        >
          {editScopeContent.cancel}
        </button>
      </div>
    </div>
  );
}
