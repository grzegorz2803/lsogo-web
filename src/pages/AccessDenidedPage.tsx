import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function AccessDeniedPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-6 py-2">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
        <div className="w-full rounded-4xl  px-8 py-15 text-center  sm:px-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/30 bg-amber-500/10 text-4xl text-amber-200 shadow-[0_0_35px_rgba(251,191,36,0.18)]">
            ⚠
          </div>

          <h1 className="mt-8 font-serif text-4xl text-amber-100 sm:text-5xl">
            Brak dostępu
          </h1>

          <div className="mx-auto mt-5 h-px w-56 bg-linear-to-r from-transparent via-amber-300/70 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-200/80 sm:text-base">
            Nie masz uprawnień do wyświetlenia tej strony. Zaloguj się na konto
            z odpowiednią rolą lub wróć do strony głównej.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/">
              <Button variant="secondary">Wróć na stronę główną</Button>
            </Link>

            <Link to="/login">
              <Button variant="primary">Przejdź do logowania</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
