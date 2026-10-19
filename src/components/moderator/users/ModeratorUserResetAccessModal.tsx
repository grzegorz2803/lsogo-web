import { X } from "lucide-react";
import { moderatorContent } from "../../../content/moderator";
type ResetAccessResult = {
  login: string;
  temporaryPassword: string;
};
type ModeratorUserResetAccessModalProps = {
  userName: string;
  login: string;
  resetResult: ResetAccessResult | null;
  onClose: () => void;
  onReset: () => void;
};

export function ModeratorUserResetAccessModal({
  userName,
  login,
  resetResult,
  onClose,
  onReset,
}: ModeratorUserResetAccessModalProps) {
  const { resetAccessModal: content } = moderatorContent.users.details;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#101a38] p-6 shadow-2xl">
        {resetResult ? (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl font-semibold text-white">
                  {content.success.title}
                </h2>
                <p className="mt-1 text-sm text-white/50">{userName}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer text-white/50 transition hover:text-white"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/70">
              {content.success.description}
            </p>
            <div className="mt-5 space-y-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
              <div>
                <p className="text-sm text-white/50">{content.success.login}</p>
                <p className="mt-1 font-medium text-white">
                  {resetResult.login}
                </p>
              </div>
              <div>
                <p className="text-sm text-white/50">
                  {content.success.temporaryPassword}
                </p>
                <p className="mt-1 font-medium text-white">
                  {resetResult.temporaryPassword}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/40">
              {content.success.passwordWarning}
            </p>
            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                {content.success.done}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl font-semibold text-white">
                  {content.confirm.title}
                </h2>
                <p className="mt-1 text-sm text-white/50">{userName}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer text-white/50 transition hover:text-white"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-6">
              <p className="text-sm leading-6 text-white/70">
                {content.confirm.description}
              </p>
            </div>
            <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
              <p className="text-sm text-white/50">{content.confirm.login}</p>
              <p className="mt-1 font-medium text-white">{login}</p>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/40">
              {content.confirm.unchangedData}
            </p>
            <div className="mt-7 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
              >
                {content.confirm.cancel}
              </button>
              <button
                type="button"
                onClick={onReset}
                className="cursor-pointer rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                {content.confirm.reset}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
