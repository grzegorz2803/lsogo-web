import { contactContent } from "../../content/contact";
import { SectionSeparator } from "../SectionSeparator";
import { Button } from "../Button";
import { ContactInfoCard } from "./ContactInfoCard";

export function ContactFormSection() {
  const { form } = contactContent;

  return (
    <section className="mt-10 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionSeparator />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="px-8 py-8 ">
            <h2 className="font-serif text-2xl text-amber-100">{form.title}</h2>
            <div className="mt-6 flex flex-col gap-4">
              <input
                placeholder={form.fields.name}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
              />
              <input
                placeholder={form.fields.email}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
              />
              <input
                placeholder={form.fields.parish}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
              />
              <textarea
                placeholder={form.fields.message}
                rows={5}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400"
              />
              <Button variant="primary">{form.button}</Button>
            </div>
          </div>
          <ContactInfoCard />
        </div>
      </div>
    </section>
  );
}
