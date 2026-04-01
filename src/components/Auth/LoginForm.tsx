import React, { useState } from "react";
import { loginContent } from "../../content/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const loggedUser = await login(email, password, rememberMe);

      console.log("Zalogowany", loggedUser);
      if (loggedUser.role === "user") {
        navigate("/panel/user");
      } else if (loggedUser.role === "moderator") {
        navigate("/panel/moderator");
      } else if (loggedUser.role === "admin") {
        navigate("/panel/admin");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Wystąpił błąd");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-4xl font-serif text-slate-800">
        {loginContent.form.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-700/80">
        {loginContent.form.subtitle}
      </p>
      <div className="mt-5 h-px w-full bg-linear-to-r from-amber-300/80 via-amber-200/50 to-transparent" />
      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            {loginContent.form.emailLabel}
          </label>
          <input
            type="email"
            placeholder="np. animator@parafia.pl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-amber-900/10 bg-white/85 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500/70  focus:ring-2 focus:ring-amber-300/35"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            {loginContent.form.passwordLabel}
          </label>
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-amber-900/10 bg-white/85 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500/70  focus:ring-2 focus:ring-amber-300/35"
          />
          <label className="mt-2 flex items-center gap-3 text-sm text-slate-700/80">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 border-slate-300 rounded text-amber-600 focus:ring-amber-400"
            />
            Zapamiętaj mnie
          </label>
        </div>
      </div>
      {error && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-b from-amber-500 via-amber-600 to-amber-700 px-5 py-3.5 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(180,120,20,0.35)] transition hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Logowanie..." : "Zaloguj się"}
      </button>
      <button
        type="button"
        className="mt-4 w-full text-center text-sm font-medium text-slate-700 transition hover:text-amber-700"
      >
        {loginContent.form.secondaryCta}
      </button>
    </form>
  );
}
