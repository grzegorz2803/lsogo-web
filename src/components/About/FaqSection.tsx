import { aboutContent } from "../../content/about";

import { SectionSeparator } from "../SectionSeparator";

export function FaqSection() {
  const { sections } = aboutContent;

  return (
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
                <p className="font-semibold text-amber-100">{item.question}</p>
                <p className="mt-2 text-sm text-slate-200/85 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
