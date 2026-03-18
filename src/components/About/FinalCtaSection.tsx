import { aboutContent } from "../../content/about";

import { SectionSeparator } from "../SectionSeparator";

import { Button } from "../Button";

export function FinalCtaSection() {
  const { sections } = aboutContent;
  return (
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
  );
}
