import { ContactFormSection } from "../components/Contact/ContactFormSection";
import { contactContent } from "../content/contact";

export function ContactPage() {
  const { hero } = contactContent;
  return (
    <div className="relative min-h-screen w-full">
      <section className="px-6 pt-20 pb-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-3xl md:text-5xl text-amber-100">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-200/80">
            {hero.subtitle}
          </p>
        </div>
      </section>
      <ContactFormSection />
    </div>
  );
}
