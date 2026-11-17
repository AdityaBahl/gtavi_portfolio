import { genAi } from "@/data/portfolio"

export function GenAi() {
  return (
    <section id="genai" className="relative bg-[#0d0819] py-28">
      <div className="section-number">05</div>
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal-up mb-14 md:flex md:items-end md:justify-between" data-reveal>
          <div>
            <p className="eyebrow">Cheat codes</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">
              GEN <span className="pink-text">AI</span>
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 md:mt-0">
            How I use generative AI to build better and faster — from AI-paired
            coding to shipping LLM features in production.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
          {genAi.map((item, index) => (
            <div
              key={item.title}
              className="genai-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="genai-tag">{item.tag}</span>
                <span className="font-mono text-xs text-white/25">
                  0{index + 1}
                </span>
              </div>
              <h3 className="display mt-5 text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{item.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span key={tool} className="genai-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
