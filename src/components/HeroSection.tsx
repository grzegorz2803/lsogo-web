import { Button } from "./Button";
import { homeHeroContent } from "../content/home";
export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      {/*Content*/}
      <div className="relative z-10 mx-auto flex min-h-screen  w-full max-w-6xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-6xl md:text-7xl font-bold leading-[1.3] tracking-[0.04em] text-transparent bg-clip-text bg-linear-to-b from-amber-100 to-amber-500 drop-shadow-[0_0_24px_rgba(255,200,120,0.45)] ">
            {homeHeroContent.title}
          </h1>
          <p className="mt-4 font-serif text-xl md:text-2xl  text-amber-100/90 tracking-[0.03em]">
            {homeHeroContent.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm: items-center">
              <Button>{homeHeroContent.primaryCta}</Button>
              <Button variant="secondary">
                {homeHeroContent.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-30 -right-30 h-130 w-130 rounded-full bg-amber-400/20 blur-3xl" />
      {/*Church Image */}
      <img
        src="/images/church.png"
        alt="Kościół"
        className="pointer-events-none absolute bottom-0 right-0 w-130 max-w-none opacity-90 md:w-170 lg:w-190"
      />
    </section>
  );
}
