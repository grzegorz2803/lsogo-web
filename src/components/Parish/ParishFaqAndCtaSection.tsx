import { parishContent } from "../../content/parish";
import { SectionSeparator } from "../SectionSeparator";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function ParishFaqAndCtaSection() {
  const { faq, finalCta } = parishContent;

  return (
    <section className="mt-10 px-6 pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionSeparator />
        <div className="mt-10 px-8 py-10 ">
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-4xl text-amber-100">
              {faq.title}
            </h2>
            <p className="mt-4 mx-auto max-w-3xl text-sm md:text-base text-slate-200/80">
              {faq.subtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-4">
            {faq.items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-700/40 bg-slate-950/60 px-6 py-5 ring-1 ring-slate-900/70 "
              >
                <p className="font-semibold text-amber-100">{item.question}</p>
                <p className="mt-2 text-sm text-slate-200/85 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10  px-8 py-10 text-center ">
            <h3 className="font-serif text-xl md:text-3xl text-amber-50">
              {finalCta.title}
            </h3>
            <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-slate-200/90">
              {finalCta.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <Link to={finalCta.button.href}>
                <Button variant="primary">{finalCta.button.label}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
