import { useState, type MouseEvent } from "react"
import { Link } from "react-router-dom"
import { projects } from "@/data/portfolio"
import type { Project } from "@/data/types"
import { ArrowIcon } from "./icons"
import { ProjectPreview } from "./ProjectPreview"

const PREVIEW_WIDTH = 340
const PREVIEW_HEIGHT = 330
// Dead zone on the right edge (~1 inch at 96 DPI). The cursor-follow preview
// won't open while the pointer is within this margin of the viewport's right.
const RIGHT_EDGE_DEAD_ZONE = 96

export function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  /** True when the pointer is far enough from the right edge to show a preview. */
  const inPreviewZone = (event: MouseEvent<HTMLElement>) =>
    event.clientX < window.innerWidth - RIGHT_EDGE_DEAD_ZONE

  const moveProjectPreview = (event: MouseEvent<HTMLElement>) => {
    setCursor({
      x: Math.max(
        18,
        Math.min(event.clientX + 28, window.innerWidth - PREVIEW_WIDTH - 18),
      ),
      y: Math.max(
        18,
        Math.min(event.clientY + 24, window.innerHeight - PREVIEW_HEIGHT - 18),
      ),
    })
  }

  return (
    <section id="work" className="bg-[#090614] py-28">
      <div className="section-number">04</div>
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal-up mb-14 md:flex md:items-end md:justify-between" data-reveal>
          <div>
            <p className="eyebrow">Side missions</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">
              FEATURED <span className="pink-text">WORK</span>
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 md:mt-0">
            A selection of projects I've built on the side — engineered for
            performance and designed to leave a mark.
          </p>
        </div>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="project-row group reveal-up no-underline"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
              onMouseEnter={(event) => {
                if (inPreviewZone(event)) {
                  setActiveProject(project)
                  moveProjectPreview(event)
                } else {
                  setActiveProject(null)
                }
              }}
              onMouseMove={(event) => {
                if (inPreviewZone(event)) {
                  // Re-open if the pointer came back from the dead zone.
                  if (!activeProject) setActiveProject(project)
                  moveProjectPreview(event)
                } else {
                  setActiveProject(null)
                }
              }}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={`project-thumb bg-gradient-to-br ${project.color}`}>
                <img
                  src={project.logo}
                  alt={`${project.title} thumbnail`}
                  className="h-16 w-16 object-contain drop-shadow"
                  loading="lazy"
                />
                <div className="absolute inset-4 border border-white/20" />
              </div>
              <span className="font-mono text-xs text-[#ff67b0]">
                {project.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="display text-3xl tracking-wide sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/35">
                  {project.type}
                </p>
              </div>
              <p className="hidden text-xs text-white/35 md:block">
                {project.stack}
              </p>
              <span className="project-arrow">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <ProjectPreview project={activeProject} position={cursor} />
    </section>
  )
}
