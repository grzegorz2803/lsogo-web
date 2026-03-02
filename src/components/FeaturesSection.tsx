import { featuresSectionContent } from "../content/features";
import { SectionSeparator } from "./SectionSeparator";

export function FeaturesSection() {
  const { title, subtitle, cards } = featuresSectionContent;

  return (
    <section className="mt-24 px-6 mb-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionSeparator />
          <h2 className="font-serif text-3xl md:text-4xl text-amber-100">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-200/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group relative flex flex-col
                          rounded-3xl border border-slate-700/40
                          bg-slate-950/60 px-5 py-5
                          shadow-[0_18px_40px_rgba(15,23,42,0.9)]
                          ring-1 ring-slate-900/70
                          transition 
                          hover:-translate-y-1
                          hover:border-amber-400/80
                          hover:shadow-[0_24px_70px_rgba(251,191,26,0.35)]"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_32px_rgba(251,191,36,0.7)]">
                  <span className="text-2xl text-slate-950">{card.icon}</span>
                </div>
                {card.tag && (
                  <span className="rounded-full border border-amber-400/60 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                    {card.tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg text-amber-50">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-200/90 leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
