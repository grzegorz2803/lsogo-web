import { X } from "lucide-react";
import { useState, useEffect } from "react";
import type { UserHistoryItem } from "../../mocks/userHistoryMock";

type ExcuseModalProps = {
  item: UserHistoryItem;
  onClose: () => void;
  onSubmit: (reason: string) => void;
};

export function ExcuseModal({ item, onClose, onSubmit }: ExcuseModalProps) {
  const [reason, setReason] = useState("");
  const MIN_REASON_LENGHT = 20;
  const MAX_REASON_LENGHT = 500;
  const trimedReason = reason.trim();
  const canSubmit =
    trimedReason.length >= MIN_REASON_LENGHT &&
    trimedReason.length <= MAX_REASON_LENGHT;

  function handleSubmit() {
    if (!canSubmit) return;
    onSubmit(trimedReason);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-medium text-amber-100">
              Wyślij usprawiedliwienie
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Podaj powód spojej nieobecności.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
            aria-label="Zamknij"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="mt-6 rounded-2xl border border-white/8 bg-white/3 px-4 py-3">
          <p className="font-medium text-slate-100">{item.serviceName}</p>
          <p className="mt-1 text-sm text-slate-500">
            {item.date} • {item.time}
          </p>
        </div>
        <div className="mt-6">
          <label
            htmlFor="excuse-reason"
            className="tetx-sm font-medium text-slate-300"
          >
            Powód usprawiedliwienia
          </label>
          <textarea
            id="excuse-reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            rows={5}
            maxLength={MAX_REASON_LENGHT}
            placeholder="Wpisz krótko powód swojej nieobecności..."
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 tetx-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-amber-400/30"
          />
          <div className="mt-1 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Minimum {MIN_REASON_LENGHT} znaków
            </p>
            <p className="mt-1 text-right text-xs text-slate-500">
              {reason.length}/{MAX_REASON_LENGHT}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/5"
          >
            Anuluj
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="cursor-pointer rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Wyślij
          </button>
        </div>
      </div>
    </div>
  );
}
