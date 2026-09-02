import { useState } from "react";
import { profileContent } from "../../content/profileContent";
export function ChangePasswordCard() {
  const { security } = profileContent;

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (newPassword !== repeatPassword) {
      setMessage(security.passwordNotMatch);
      return;
    }

    setMessage(security.successMessage);

    setCurrentPassword("");
    setNewPassword("");
    setRepeatPassword("");
  }
  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <h2 className="font-serif text-2xl text-amber-100">{security.title}</h2>
      <p className="mt-2 text-sm text-slate-400">{security.subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-2xl space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            {security.currentPasswordLabel}
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder={security.currentPasswordPlaceholder}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            {security.newPasswordLabel}
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder={security.newPasswordPlaceholder}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            {security.repeatPasswordLabel}
          </label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder={security.repeatPasswordPlaceholder}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30"
          />
        </div>
        {message && <p className="text-sm text-amber-200">{message}</p>}

        <button
          type="submit"
          className="cursor-pointer rounded-2xl bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_24px_rgba(180,120,20,0.35)] transition hover:from-amber-300 hover:via-amber-400 hover:to-amber-500"
        >
          {security.button}
        </button>
      </form>
    </section>
  );
}
