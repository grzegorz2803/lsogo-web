import React, { useState } from "react";
import { Button } from "../Button";
import { mockLogin } from "../../mocks/authMock";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await mockLogin(email, password);
      console.log("Zalogowany", user);
      //TODO
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
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-700/50 bg-slate-950/60 px-8 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.95)]"
    >
      <h1 className="text-2xl font-serif text-amber-100 text-center">
        Logowanie
      </h1>
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
        />
      </div>
      {error && (
        <p className="mt-4 text-sm text-red-400 text-center">{error}</p>
      )}
      <div className="mt-6">
        <Button variant="primary" disabled={loading}>
          {loading ? "Logowanie..." : "Zaloguj się"}
        </Button>
      </div>
    </form>
  );
}
