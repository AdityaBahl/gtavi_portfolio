import { Link, useParams } from "react-router-dom"
import { getExperienceBySlug, profile } from "@/data/portfolio"
import { ArrowIcon } from "@/components/icons"
import { useScrollTop } from "@/hooks/useScrollTop"
import { NotFound } from "./NotFound"

export function ExperienceDetail() {
  const { slug } = useParams()
  useScrollTop(slug)

  const exp = getExperienceBySlug(slug)
  if (!exp) return <NotFound />

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className={`detail-hero-bg bg-gradient-to-br ${exp.color}`} />
        <div className="relative z-10 mx-auto max-w-[1080px] px-6 pt-10 pb-16">
          <Link to="/#career" className="back-link">
            <ArrowIcon /> Back to career
          </Link>

          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end">
            <div className={`detail-logo bg-gradient-to-br ${exp.color}`}>
              <img src={exp.logo} alt={`${exp.company} logo`} />
            </div>
            <div>
              <p className="font-mono text-xs text-[#ff69b2]">
                MAIN MISSION {exp.number}
              </p>
              <h1 className="display mt-2 text-5xl leading-[0.9] sm:text-7xl">
                {exp.company}
              </h1>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/45">
                {exp.role}
              </p>
              <p className="mt-1 font-mono text-xs text-white/35">{exp.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow">The role</p>
            <p className="mt-5 text-lg leading-8 text-white/70">{exp.summary}</p>

            <p className="eyebrow mt-12">Highlights</p>
            <ul className="mt-5 space-y-3">
              {exp.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-white/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#ff5ca8]" />
                  <span className="leading-7">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-6 py-3.5 text-[11px]"
              >
                Visit company <ArrowIcon />
              </a>
              <a
                href={exp.workUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-6 py-3.5 text-[11px]"
              >
                {exp.workLabel} <ArrowIcon />
              </a>
            </div>
          </div>

          <aside>
            <div className="detail-card">
              <p className="eyebrow">Deployment</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Company
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{exp.company}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{exp.role}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Timeline
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{exp.date}</dd>
                </div>
                {exp.location && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-white/80">{exp.location}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            Curious about the details?{" "}
            <a
              href={`mailto:${profile.email}`}
              className="pink-text underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
