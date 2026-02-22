import { Logo } from "./Logo";
import { navbarContent } from "../content/navbar";
import { branding } from "../content/branding";
const navLinks = navbarContent.links;
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 backdrop-blur-md">
          {/* Brand */}
          <a href="#" className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full">
              <Logo className="h-14 w-14" />
            </div>
            <span className="text-3xl font-semibold tracking-[0.08em]">
              <span className="font-serif text-3xl font-semibold tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                {branding.logoText}
              </span>
            </span>
          </a>
          {/*Desktop nav */}
          <nav className="hidden items-center gap-8 font-serif text-base text-slate-200/90 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-md font-medium text-slate-200/90 transition hover:text-amber-200"
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-2 left-0 h-px w-0 bg-amber-300/70 transition-all duration-300 group-hover:w-full" />
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
