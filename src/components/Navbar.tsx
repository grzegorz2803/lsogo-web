const navLinks = [
  { label: "Kalendarz", href: "#kalendarz" },
  { label: "O systemie", href: "#o-stystemie" },
  { label: "Dla parafii", href: "#dla-parafii" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 backdrop-blur-md">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-amber-400/40 bg-amber-400/10">
              <span className="text-lg font-bold text-amber-300">✝</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-amber-100">
              LSOgo
            </span>
          </a>
          {/*Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-200/90 transition hover:text-amber-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="hidden rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-amber-500/20 transition hover:bg-amber-400 md:inline-flex"
            >
              Zaloguj się
            </a>
            {/*Mobile menu placeholder */}
            <button
              type="button"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10 md:hidden"
              aria-label="Otwórz menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
