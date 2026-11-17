import { Link } from "react-router-dom"
import { experiences } from "@/data/portfolio"
import { ArrowIcon } from "./icons"

export function Career() {
  return (
    <section id="career" className="relative bg-[#0d0819] py-28">
      <div className="section-number">03</div>
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal-up mb-14 md:flex md:items-end md:justify-between" data-reveal>
          <div>
            <p className="eyebrow">Main missions</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">
              CAREER <span className="pink-text">LOG</span>
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 md:mt-0">
            The companies and teams where I've shipped real work — from early-stage
            startups to Accenture.
          </p>
        </div>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Link
              key={exp.slug}
              to={`/experience/${exp.slug}`}
              className="project-row group reveal-up no-underline"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`project-thumb bg-gradient-to-br ${exp.color}`}>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-14 w-14 object-contain drop-shadow"
                  loading="lazy"
                />
                <div className="absolute inset-4 border border-white/20" />
              </div>
              <span className="hidden font-mono text-xs text-[#ff67b0] sm:block">
                {exp.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="display text-2xl tracking-wide sm:text-3xl">
                  {exp.company}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
                  {exp.role}
                </p>
                <p className="mt-1 font-mono text-[10px] text-white/30">
                  {exp.date}
                </p>
              </div>
              <p className="hidden max-w-[220px] text-xs leading-5 text-white/35 lg:block">
                {exp.highlights[0]}
              </p>
              <span className="project-arrow">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
