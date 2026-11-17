import { skillGroups, skills } from "@/data/portfolio"
import { CodeIcon } from "./icons"

export function Skills() {
  return (
    <section id="skills" className="relative bg-[#120a20] py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal-up mb-14 flex items-end justify-between" data-reveal>
          <div>
            <p className="eyebrow">Loadout</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">
              MY <span className="text-outline-small">ARSENAL</span>
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-white/25 sm:block">
            02 — SKILL SET
          </span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group bg-[#0d0818] p-7"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#ff5fac]/35 text-[#ff66b0]">
                    <CodeIcon />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.16em]">
                    {skill.name}
                  </span>
                </span>
                <span className="font-mono text-xs text-white/30">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-8 h-1 overflow-hidden bg-white/8">
                <div className="skill-bar h-full" style={{ width: `${skill.value}%` }} />
              </div>
              <p className="mt-2 text-right font-mono text-[9px] text-[#ff69b2]">
                {skill.value} XP
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              data-reveal
              className="reveal-up"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                {group.category}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-white/12 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-[#ff5ca8]/50 hover:text-white"
                  >
                    {item}
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
