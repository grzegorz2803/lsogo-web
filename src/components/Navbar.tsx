import { Logo } from "./Logo";
import { navbarContent } from "../content/navbar";
import { branding } from "../content/branding";
import { useState } from "react";
import { Link } from "react-router-dom";
const navLinks = navbarContent.links;
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
              <span className="font-serif text-3xl font-semibold tracking-[0.14em] text-transparent bg-clip-text bg-linear-to-b from-amber-200 to-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                {branding.logoText}
              </span>
            </span>
          </a>
          {/*Desktop nav */}
          <nav className="hidden items-center gap-8 font-serif text-base text-slate-200/90 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="group relative text-md font-medium text-slate-200/90 transition hover:text-amber-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="hidden rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-amber-500/20 transition hover:bg-amber-400 md:inline-flex"
            >
              {navbarContent.loginButton}
            </a>
            {/*Mobile menu placeholder */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="md:hidden px-4 py-2 border border-amber-300/60 rounded-xl text-amber-200"
              aria-label="Otwórz menu"
            >
              {navbarContent.menuButton}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div
            className="md:hidden mt-3 w-full rounded-2xl border border-white/10
               bg-slate-950/95 backdrop-blur-xl
               shadow-[0_18px_40px_rgba(15,23,42,0.9)]
               px-4 py-3 space-y-3 animate-fadeIn"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-200 text-lg font-medium hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/login"
              className="block w-full text-center mt-2
             bg-amber-500/90 hover:bg-amber-400
             text-slate-900 font-semibold text-sm
             py-2 rounded-lg
             shadow-[0_0_14px_rgba(248,191,60,0.35)]
             transition-colors"
            >
              {navbarContent.loginButton}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
