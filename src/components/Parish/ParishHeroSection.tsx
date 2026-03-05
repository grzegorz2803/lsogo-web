import { parishContent } from "../../content/parish";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function ParishHeroSection() {
  const { hero } = parishContent;

  return (
    <section className="relative px-6 pt-20 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="px-8 py-10 ">
          <h1 className="font-serif text-3xl md:text-5xl text-amber-100">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-200/80">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={hero.primaryCta.href}>
              <Button variant="primary">{hero.primaryCta.label}</Button>
            </Link>
            <Link to={hero.secondaryCta.href}>
              <Button variant="secondary">{hero.secondaryCta.label}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
