import { aboutContent } from "../../content/about";

import { SectionSeparator } from "../SectionSeparator";

export function HowItWorksSection() {
  const { sections } = aboutContent;

  return (
    <section className="mt-20 px-6 ">
      <div className="mx-auto max-w-6xl">
        <div className="px-8 py-10 ">
          <div className="text-center">
            <SectionSeparator />
            <h2 className="font-serif text-2xl md:text-4xl text-amber-100">
              {sections.howItWorks.title}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-200/80">
              {sections.howItWorks.subtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sections.howItWorks.steps.map((step, idx) => (
              <article
                key={step.id}
                className="rounded-3xl border border-slate-700/40 bg-slate-950/60 px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] ring-1 ring-slate-900/70"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-200 font-semibold shadow-[0_0_18px_rgba(251,191,36,0.25)]">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-lg text-amber-50">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-200/85 leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
