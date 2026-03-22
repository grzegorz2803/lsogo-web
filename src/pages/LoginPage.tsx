import { LoginForm } from "../components/Auth/LoginForm";
import { loginContent } from "../content/login";

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="relative grid w-full overflow-hidden rounded-4xl border border-slate-700/50 shadow-[0_24px_80px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/80 lg:grid-cols-2">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/login-bg.png" }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/40 to-transparent" />

          <div className="relative z-10 hidden min-h-180 flex-col justify-between px-10 py-10 lg:flex">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-serif text-5xl text-amber-200 drop-shadow-[0_0_18px_rgba(251,191,36,0.35)]">
                {loginContent.title}
              </h1>
              <div className="relative mt-5 w-full max-w-md">
                <div className="h-px w-full bg-linear-to-r from-transparent via-amber-300/70 to-transparent" />
                <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-amber-200 ">
                  ✝
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-200/85">
                {loginContent.subtitle}
              </p>
              <div className="mt-10 w-full max-w-sm items-start text-left">
                <p className="font-serif text-4xl italic leading-tight text-amber-200/95 drop-shadow-[0_0_16px_rgba(251,191,36,0.25)]">
                  {loginContent.quote1}
                </p>
                <p className="ml-12 font-serif text-4xl leading-tight text-amber-200/95 drop-shadow-[0_0_16px_rgba(251,191,36,0.25)]">
                  {loginContent.quote2}
                </p>
                <p className="ml-38 mt-2 text-xl text-amber-100/70">
                  {loginContent.sigla}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex min-h-180 items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="w-full max-w-md rounded-3xl border border-slate-300/20 bg-[linear-gradient(180deg,rgba(255,248,235,0.96),rgba(247,239,224,0.94))] px-6 py-8 shadow-xl backdrop-blur-[2px] bg-white/90 sm:px-8 sm:py-10">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
