type PanelPageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PanelPageHeader({ title, subtitle }: PanelPageHeaderProps) {
  return (
    <header>
      <h1 className="font-serif text-4xl font-medium text-amber-100">
        {title}
      </h1>

      <p className="mt-1 text-base text-slate-400">{subtitle}</p>
    </header>
  );
}
