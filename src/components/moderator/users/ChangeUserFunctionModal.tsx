import { X } from "lucide-react";
import { moderatorContent } from "../../../content/moderator";
type ParishFunction = {
  id: number;
  code: string;
  name: string;
};

type ChangeUserFunctionModalProps = {
  userName: string;
  currentFunction: string;
  functions: readonly ParishFunction[];
  selectedFunctionId: number | null;
  onFunctionChange: (functionId: number) => void;
  onClose: () => void;
  onSave: () => void;
};

export function ChangeUserFunctionModal({
  userName,
  currentFunction,
  functions,
  selectedFunctionId,
  onFunctionChange,
  onClose,
  onSave,
}: ChangeUserFunctionModalProps) {
  const { changeFunctionModal: content } = moderatorContent.users.details;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#101a38] p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl font-semibold text-white">
              {content.title}
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
          <p className="text-sm text-white/50">{content.currentFunction}</p>
          <p className="mt-1 font-medium text-white">{currentFunction}</p>
        </div>
        <div className="mt-5">
          <label htmlFor="user-function" className="text-sm text-white/60">
            {content.newFunction}
          </label>
          <select
            id="user-function"
            value={selectedFunctionId ?? ""}
            onChange={(event) => onFunctionChange(Number(event.target.value))}
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          >
            <option value="" disabled>
              {content.selectPlaceholder}
            </option>
            {functions
              .filter((item) => item.name !== currentFunction)
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mt-7 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
          >
            {content.cancel}
          </button>
          <button
            type="button"
            onClick={onSave}
            disabled={selectedFunctionId === null}
            className="cursor-pointer rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {content.save}
          </button>
        </div>
      </div>
    </div>
  );
}
