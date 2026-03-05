import { contactContent } from "../../content/contact";

export function ContactInfoCard() {
  const { info } = contactContent;

  return (
    <div className="px-8 py-8 ">
      <h2 className="font-serif text-2xl text-amber-100">{info.title}</h2>
      <div className="mt-6 flex flex-col gap-4">
        {info.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl border border-slate-700/40 bg-slate-950/60 px-4 py-4"
          >
            <div className="text-2xl">{item.icon}</div>
            <div>
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="text-slate-100"> {item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
