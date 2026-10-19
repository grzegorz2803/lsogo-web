import { useState } from "react";
import type { FormEvent } from "react";
import { X } from "lucide-react";

import type { Weekday, WeeklyMass } from "../../../types/moderatorServices";

import { moderatorContent } from "../../../content/moderator";

export type WeeklyMassFormValues = Omit<WeeklyMass, "id">;

type WeeklyMassModalProps = {
  mass?: WeeklyMass | null;
  singleWeekday?: Weekday;
  onClose: () => void;
  onSave: (values: WeeklyMassFormValues) => void;
};

const weekdays: Weekday[] = [1, 2, 3, 4, 5, 6, 7];

export function WeeklyMassModal({
  mass,
  singleWeekday,
  onClose,
  onSave,
}: WeeklyMassModalProps) {
  const content = moderatorContent.services.weeklyMass.form;
  const weekdayLabels = moderatorContent.services.weekdays;

  const isEditing = Boolean(mass);

  const [name, setName] = useState(mass?.name ?? "Msza Święta");
  const [time, setTime] = useState(mass?.time ?? "18:00");
  const [points, setPoints] = useState(String(mass?.points ?? 3));

  const [selectedWeekdays, setSelectedWeekdays] = useState<Weekday[]>(
    mass?.weekdays ?? [],
  );

  const [isActive, setIsActive] = useState(mass?.isActive ?? true);

  const [error, setError] = useState<string | null>(null);

  function toogleWeekday(weekday: Weekday) {
    setSelectedWeekdays((current) =>
      current.includes(weekday)
        ? current.filter((day) => day !== weekday)
        : [...current, weekday],
    );
    setError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError(content.errors.name);
      return;
    }

    if (!time) {
      setError(content.errors.time);
      return;
    }

    const parsePoints = Number(points);

    if (
      points.trim() === "" ||
      !Number.isFinite(parsePoints) ||
      !Number.isInteger(parsePoints) ||
      parsePoints < 0
    ) {
      setError(content.errors.points);
      return;
    }

    if (selectedWeekdays.length === 0) {
      setError(content.errors.weekdays);
      return;
    }

    onSave({
      name: name.trim(),
      time,
      points: parsePoints,
      weekdays: [...selectedWeekdays].sort((a, b) => a - b),
      isActive,
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="weekly-mass-modal-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#080e25] p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2
              id="weekly-mass-modal-title"
              className="text-xl font-semibold text-white"
            >
              {isEditing ? content.editTitle : content.addTitle}
            </h2>

            {isEditing && mass && (
              <p className="mt-2 text-sm text-white/50">
                {content.assignedDays} {mass.weekdays.length}{" "}
                {content.daysCount}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={content.actions.cancel}
            className="cursor-pointer rounded-lg p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="weekly-mass-name" className="text-sm text-white/60">
              {content.fields.name}
            </label>
            <input
              id="weekly-mass-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError(null);
              }}
              placeholder={content.placeholders.name}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-amber-400/50"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="weekly-mass-time"
                className="text-sm text-white/60"
              >
                {content.fields.time}
              </label>
              <input
                id="weekly-mass-time"
                type="time"
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                  setError(null);
                }}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-amber-400/50"
              />
            </div>

            <div>
              <label
                htmlFor="weekly-mass-points"
                className="text-sm text-white/60"
              >
                {content.fields.points}
              </label>
              <input
                id="weekly-mass-points"
                type="number"
                min="0"
                step="1"
                value={points}
                onChange={(event) => {
                  setPoints(event.target.value);
                  setError(null);
                }}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-amber-400/50"
              />
            </div>
          </div>
          {singleWeekday !== undefined ? (
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
              <p className="text-sm text-white/60">{content.singleDay.title}</p>
              <p className="mt-1 font-medium text-amber-400">
                {content.singleDay.only} {weekdayLabels[singleWeekday]}
              </p>
              <p className="mt-2 text-xs text-white/50">
                {content.singleDay.description}
              </p>
            </div>
          ) : (
            <fieldset>
              <legend className="mb-3 text-sm text-white/60">
                {content.fields.weekdays}
              </legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {weekdays.map((weekday) => {
                  const selected = selectedWeekdays.includes(weekday);

                  return (
                    <label
                      key={weekday}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-3 text-sm transition ${
                        selected
                          ? "border-amber-400/50 bg-amber-400/10 text-amber-300"
                          : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toogleWeekday(weekday)}
                        className="accent-amber-400"
                      />
                      <span>{weekdayLabels[weekday]}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          )}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(event) => setIsActive(event.target.checked)}
              className="accent-amber-400"
            />
            <span className="text-sm text-white/80">
              {content.fields.isActive}
            </span>
          </label>
          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}
          <div className="flex justify-end gap-3 border-t  border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-xl border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10"
            >
              {content.actions.cancel}
            </button>
            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              {isEditing ? content.actions.save : content.actions.add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
