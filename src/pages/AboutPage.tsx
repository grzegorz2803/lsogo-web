import { aboutContent } from "../content/about";
import { SectionSeparator } from "../components/SectionSeparator";
import { Button } from "../components/Button";

export function AboutPage() {
  const { hero, sections } = aboutContent;

  return (
    <div className="relative min-h-screen w-full">
      <section className="relative px-6 pt-20 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="px-8 py-10 ">
            <h1 className="font-serif text-3xl md:text-5xl text-amber-100">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-200/80">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col  gap-3 sm:flex-row">
              <a href={hero.primaryCta.href}>
                <Button variant="primary">{hero.primaryCta.label}</Button>
              </a>
              <a href={hero.secondaryCta.href}>
                <Button variant="secondary">{hero.secondaryCta.label}</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className=" px-8 py-10">
            <div className="text-center">
              <SectionSeparator />
              <h2 className="font-serif text-2xl md:text-4xl text-amber-100">
                {sections.values.title}
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-200/80">
                {sections.values.subtitle}
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sections.values.items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-slate-700/40 bg-slate-950/60 px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] ring-1 ring-slate-900/70"
                >
                  <div className="mb-5 flex justify-center">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_45px_rgba(251,191,36,0.75)]">
                      <span className="text-3xl text-slate-950">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-center font-serif text-lg text-amber-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-center text-sm text-slate-200/85 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className="mt-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="px-8 py-10 ">
            <div className="text-center">
              <SectionSeparator />
              <h2 className="font-serif text-2xl md:text-4xl text-amber-100">
                {sections.faq.title}
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-200/80">
                {sections.faq.subtitle}
              </p>
            </div>
            <div className="mt-10 grid gap-4">
              {sections.faq.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-700/40 bg-slate-950/60 px-6 py-5 ring-1 ring-slate-900/70"
                >
                  <p className="font-semibold text-amber-100">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm text-slate-200/85 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="px-8 py-10 ">
            <div className="text-center">
              <SectionSeparator />
              <h2 className="font-serif text-2xl md:text-4xl text-amber-100">
                {sections.finalCta.title}
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-200/80">
                {sections.finalCta.subtitle}
              </p>
              <div className="mt-8 flex justify-center">
                <a href={sections.finalCta.button.href}>
                  <Button variant="primary">
                    {sections.finalCta.button.label}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
