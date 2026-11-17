import { Link, useParams } from "react-router-dom"
import { getProjectBySlug, profile } from "@/data/portfolio"
import { ArrowIcon } from "@/components/icons"
import { useScrollTop } from "@/hooks/useScrollTop"
import { NotFound } from "./NotFound"

export function ProjectDetail() {
  const { slug } = useParams()
  useScrollTop(slug)

  const project = getProjectBySlug(slug)
  if (!project) return <NotFound />

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className={`detail-hero-bg bg-gradient-to-br ${project.color}`} />
        <div className="relative z-10 mx-auto max-w-[1080px] px-6 pt-10 pb-16">
          <Link to="/#work" className="back-link">
            <ArrowIcon /> Back to work
          </Link>

          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end">
            <div className={`detail-logo bg-gradient-to-br ${project.color}`}>
              <img src={project.logo} alt={`${project.title} logo`} />
            </div>
            <div>
              <p className="font-mono text-xs text-[#ff69b2]">
                SIDE MISSION {project.number}
              </p>
              <h1 className="display mt-2 text-6xl leading-[0.85] sm:text-8xl">
                {project.title}
              </h1>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/45">
                {project.type} · {project.date}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow">Briefing</p>
            <p className="mt-5 text-lg leading-8 text-white/70">{project.summary}</p>

            <p className="eyebrow mt-12">Objectives cleared</p>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-white/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#ff5ca8]" />
                  <span className="leading-7">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-6 py-3.5 text-[11px]"
              >
                View code <ArrowIcon />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-6 py-3.5 text-[11px]"
              >
                {project.liveLabel} <ArrowIcon />
              </a>
            </div>
          </div>

          <aside>
            <div className="detail-card">
              <p className="eyebrow">Mission stats</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Stack
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{project.stack}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Year
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{project.year}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.split(" / ").map((tech) => (
                <span key={tech} className="detail-chip">
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            Want to build something together?{" "}
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
