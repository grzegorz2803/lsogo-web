import { useState } from "react";
import type { FormEvent } from "react";
import { X } from "lucide-react";
import type { CreateServiceInput } from "../../../types/moderator";
import { moderatorContent } from "../../../content/moderator";

type CreateServiceModalProps = {
  initialDate: string;
  initialTime: string;
  initialPoints: number;
  onClose: () => void;
  onCreate: (service: CreateServiceInput) => void;
};

export function CreateServiceModal({
  initialDate,
  initialTime,
  initialPoints,
  onClose,
  onCreate,
}: CreateServiceModalProps) {
  const content = moderatorContent.createService;

  const [name, setName] = useState("");
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  const [points, setPoints] = useState(initialPoints.toString());
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError(content.errors.name);
      return;
    }
    if (!date) {
      setError(content.errors.date);
      return;
    }
    if (!time) {
      setError(content.errors.time);
      return;
    }
    const parsedPoints = Number(points);

    if (
      points.trim() === "" ||
      !Number.isFinite(parsedPoints) ||
      parsedPoints < 0
    ) {
      setError(content.errors.points);
      return;
    }

    onCreate({
      name: name.trim(),
      date,
      time,
      points: parsedPoints,
    });
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-service-title"
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#080e25] p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2
              id="create-service-title"
              className="text-xl font-semibold text-white"
            >
              {content.title}
            </h2>
            <p className="mt-2 text-sm text-white/50">{content.description}</p>
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="service-name" className="text-sm text-white/60">
              {content.fields.name}
            </label>
            <input
              id="service-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError(null);
              }}
              placeholder={content.placeholders.name}
              autoFocus
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-amber-400/50"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="service-date" className="text-sm text-white/60">
                {content.fields.date}
              </label>
              <input
                id="service-date"
                type="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setError(null);
                }}
                className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none  focus:border-amber-400/50"
              />
            </div>

            <div>
              <label htmlFor="service-time" className="text-sm text-white/60">
                {content.fields.time}
              </label>
              <input
                id="service-time"
                type="time"
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                  setError(null);
                }}
                placeholder={content.placeholders.name}
                autoFocus
                className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-amber-400/50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service-points" className="text-sm text-white/60">
              {content.fields.points}
            </label>
            <input
              id="service-points"
              type="number"
              value={points}
              min="0"
              step="1"
              onChange={(event) => {
                setPoints(event.target.value);
                setError(null);
              }}
              placeholder={content.placeholders.name}
              autoFocus
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-amber-400/50"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}
          <div className="flex justify-end gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-xl border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10"
            >
              {content.actions.cancel}
            </button>
            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-amber-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-amber-300"
            >
              {content.actions.create}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
