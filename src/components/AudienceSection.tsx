import { audienceSectionContent } from "../content/audience";
import { SectionSeparator } from "./SectionSeparator";

export function AudienceSection() {
  const { title, subtitle, cards } = audienceSectionContent;
  return (
    <section className="mt-24 px-6 mx-auto max-w-6xl pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionSeparator />
          <h2 className="font-serif text-3xl md:text-4xl text-amber-50">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-200/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="relative rounded-3xl border border-slate-600/40 bg-slate-950/40 px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] ring-1 ring-slate-900/60 backdrop-blur"
            >
              <div className="mb-4">
                <div className="mb-6 flex justify-center">
                  <div
                    className="inline-flex h-14 w-14
                          items-center justify-center
                          rounded-full
                          bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600
                          shadow-[0_0_45px_rgba(251,191,26,0.75)]"
                  >
                    <span className="text-3xl text-slate-950">{card.icon}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-amber-50">
                  {card.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-amber-300/80 mt-1">
                  {card.roleLabel}
                </p>
              </div>
              <p className="text-sm text-slate-200/90">{card.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200/80">
                {card.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-amber-400/90" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
