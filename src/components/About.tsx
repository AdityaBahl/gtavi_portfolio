import { profile, stats } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="relative border-t border-white/8 bg-[#0d0819] py-28">
      <div className="section-number">01</div>
      <div className="mx-auto grid max-w-[1180px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="portrait-card reveal-left" data-reveal>
          <div className="portrait-glow" />
          <div className="portrait-code">&lt;/&gt;</div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/20 pt-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              {profile.location}
            </span>
            <span className="font-mono text-[10px] text-[#ff70b9]">
              {profile.availability}
            </span>
          </div>
        </div>
        <div className="reveal-up" data-reveal>
          <p className="eyebrow">Player profile</p>
          <h2 className="display mt-3 text-6xl leading-[0.9] sm:text-8xl">
            CRAFTING THE
            <br />
            <span className="pink-text">DIGITAL FUTURE</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/58">
            {profile.about}
          </p>
          <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="display text-3xl text-[#ff6ead] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.19em] text-white/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
