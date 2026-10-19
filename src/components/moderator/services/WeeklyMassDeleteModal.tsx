import { moderatorContent } from "../../../content/moderator";

import type { Weekday, WeeklyMass } from "../../../types/moderatorServices";

import type { MassActionScope } from "./WeeklyMassEditScopeModal";

type WeeklyMassDeleteModalProps = {
  mass: WeeklyMass;
  weekday: Weekday;
  onConfirm: (scope: MassActionScope) => void;
  onClose: () => void;
};

export function WeeklyMassDeleteModal({
  mass,
  weekday,
  onConfirm,
  onClose,
}: WeeklyMassDeleteModalProps) {
  const content = moderatorContent.services;
  const deleteContent = content.weeklyMass.deleteConfirmation;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-mass-title"
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080e25] p-6 shadow-2xl"
      >
        <h2 id="delete-mass-title" className="text-xl font-semibold text-white">
          {deleteContent.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/60">
          {deleteContent.description}{" "}
          <span className="font-semibold text-white">{mass.time}</span>?
        </p>
        <p className="mt-3 text-sm text-amber-400">
          {deleteContent.warning} ({mass.weekdays.length}
          ).
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onConfirm("single")}
            className="cursor-pointer rounded-xl border border-red-500/40 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            {deleteContent.single} {mass && content.weekdays[weekday]}
          </button>

          {mass.weekdays.length > 1 && (
            <button
              type="button"
              onClick={() => onConfirm("all")}
              className="cursor-pointer rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              {deleteContent.all}
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl px-5 py-3 text-sm text-white/60 transition hover:text-white"
          >
            {deleteContent.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
