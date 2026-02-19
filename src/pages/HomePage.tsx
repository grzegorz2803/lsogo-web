import { Button } from "../components/Button";
export function HomePage() {
  return (
    <section className="relative min-h-screen w-full">
      {/*Content*/}
      <div className="relative z-10 mx-auto flex min-h-screen  w-full max-w-6xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent ">
              LSOgo
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-xl">
            System dla Liturgicznej Słubby Ołtarza. Zarządzaj słuzbą,
            obecnościami i punktami w jednej aplikacji.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm: items-center">
              <Button>Zaloguj się</Button>
              <Button variant="secondary">Przejdź do kalendarza</Button>
            </div>
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
