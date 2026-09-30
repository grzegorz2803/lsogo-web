import type { ModeratorAttendanceEntry } from "../../../mocks/moderatorAttendanceMock";
import { moderatorContent } from "../../../content/moderator";
import { formatDate } from "../../../utils/date";

type ExcuseAttendanceModalProps = {
  entry: ModeratorAttendanceEntry;
  excuseAt: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function ExcuseAttendanceModal({
  entry,
  excuseAt,
  onClose,
  onConfirm,
}: ExcuseAttendanceModalProps) {
  const { excuseModal } = moderatorContent.attendance.history;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-2xl">
        <h2 className="text-xl font-semibold text-white">
          {excuseModal.title}
        </h2>
        <p className="mt-2 text-sm text-white/60">{excuseModal.description}</p>

        <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex justify-between gap-4">
            <span className="text-sm text-white/50">{excuseModal.user}</span>
            <span className="text-sm text-white">{entry.user.name}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-sm text-white/50">{excuseModal.event}</span>
            <span className="text-right text-sm text-white">
              {entry.event.name}
            </span>
          </div>
          <div className="flex justify-between gap-4 ">
            <span className="text-sm text-white/50">
              {excuseModal.absenceDate}
            </span>
            <span className="text-sm text-white">{formatDate(entry.date)}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-sm text-white/50">
              {excuseModal.excusedAt}
            </span>
            <span className="text-sm text-white">{formatDate(excuseAt)}</span>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-200">
          {excuseModal.pointsInfo}
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white/5"
          >
            {excuseModal.cancel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="cursor-pointer rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-amber-300"
          >
            {excuseModal.confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
