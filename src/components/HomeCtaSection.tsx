import { homeCta } from "../content/home";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { SectionSeparator } from "./SectionSeparator";

export function HomeCtaSection() {
  const { title, subtitle, primaryButton, secondaryButton } = homeCta;

  return (
    <section className="mt-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionSeparator />
        <div className="mt-10 text-center px-8 py-12 ">
          <h2 className="font-serif text-2xl md:text-4xl text-amber-100">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-200/80">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to={primaryButton.href}>
              <Button variant="primary">{primaryButton.label}</Button>
            </Link>
            <Link to={secondaryButton.href}>
              <Button variant="secondary">{secondaryButton.label}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
