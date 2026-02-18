export function HomePage() {
  return (
    <section className="relative min-h-screen w-full">
      {/*Content*/}
      <div className="relative z-10 mx-auto flex min-h-screen  w-full max-w-6xl items-center px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            LSOgo
          </h1>
          <p className="mt-6 text-lg text-slate-300 md:text-xl">
            System dla Liturgicznej Słubby Ołtarza. Zarządzaj słuzbą,
            obecnościami i punktami w jednej aplikacji.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-amber-500 px-8 py-3 text-lg font-semibold text-black shadow-md shadow-amber-500/20 transition hover:bg-amber-400">
              Zaloguj się
            </button>
            <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              Przejdź do kalendarza
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-amber-400/20 blur-3xl" />
      {/*Church Image */}
      <img
        src="/images/church.png"
        alt="Kościół"
        className="pointer-events-none absolute bottom-0 right-0 w-[520px] max-w-none opacity-90 md:w-[680px] lg:w-[760px]"
      />
    </section>
  );
}
