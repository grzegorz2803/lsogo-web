export function SectionSeparator() {
  return (
    <div className="mb-12">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <span className="h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/60 to-transparent" />
      </div>
    </div>
  );
}
