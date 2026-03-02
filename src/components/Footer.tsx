import { footerContent } from "../content/footer";

export function Footer() {
  const { brand, columns, bottomNote } = footerContent;

  return (
    <footer className="mt-32 border-t border-slate-700/50 ">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.25)]">
              {brand.name}
            </h3>
            <p className="mt-3 text-sm text-slate-300/80">{brand.tagline}</p>
          </div>
          {columns.map((colmun) => (
            <div key={colmun.title}>
              <h4 className="font-semibold text-slate-200">{colmun.title}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {colmun.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-slate-300/80 hover:text-amber-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-700/40  py-6">
        <p className="text-center text-xs text-slate-400">{bottomNote}</p>
      </div>
    </footer>
  );
}
