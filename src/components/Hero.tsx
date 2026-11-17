import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] items-center pt-[72px]">
      <div className="sun" />
      <div className="city city-back" />
      <div className="city city-front" />
      <div className="grid-floor" />
      <div className="pointer-events-none absolute left-[4%] top-[24%] h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-20 pt-16">
        <div className="max-w-[820px]">
          <p className="hero-enter hero-enter-1 mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ff70b9]">
            <span className="h-px w-9 bg-[#ff70b9]" /> Welcome to my digital city
          </p>
          <h1 className="hero-enter hero-enter-2 display text-[clamp(5.2rem,14vw,10.5rem)] leading-[0.72]">
            {profile.firstName}
            <span className="text-outline block pl-[0.2em]">{profile.lastName}</span>
          </h1>
          <div className="hero-enter hero-enter-3 mt-10 flex flex-col gap-7 md:flex-row md:items-end">
            <div>
              <p className="display text-[clamp(2rem,5vw,4.25rem)] leading-none text-white/95">
                FULL STACK <span className="text-[#ff6cad]">DEVELOPER</span>
              </p>
              <p className="mt-4 max-w-[540px] text-sm leading-7 text-white/55">
                {profile.intro}
              </p>
            </div>
            {/* <a href="#work" className="explore-button shrink-0">
              <span>
                Explore
                <br />
                my work
              </span>
              <ArrowIcon />
            </a> */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-white/35 sm:flex">
        Scroll to enter{" "}
        <span className="h-8 w-px bg-gradient-to-b from-[#ff5dad] to-transparent" />
      </div>
    </section>
  )
}
