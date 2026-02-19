import { Button } from "../components/Button";
export function HomePage() {
  return (
    <section className="relative min-h-screen w-full">
      {/*Content*/}
      <div className="relative z-10 mx-auto flex min-h-screen  w-full max-w-6xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-6xl md:text-7xl font-bold leading-[1.3] tracking-[0.04em] text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-500 drop-shadow-[0_0_24px_rgba(255,200,120,0.45)] ">
            LSOgo
          </h1>
          <p className="mt-4 font-serif text-xl md:text-2xl  text-amber-100/90 tracking-[0.03em]">
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
