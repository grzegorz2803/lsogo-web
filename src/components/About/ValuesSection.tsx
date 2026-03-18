import { aboutContent } from "../../content/about";
import { SectionSeparator } from "../SectionSeparator";

export function ValuesSection() {
  const { sections } = aboutContent;

  return (
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
                    <span className="text-3xl text-slate-950">{item.icon}</span>
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
  );
}
