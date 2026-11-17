import type { Project } from "@/data/types"

type ProjectPreviewProps = {
  project: Project | null
  position: { x: number; y: number }
}

/** Floating card that follows the cursor while a project row is hovered. */
export function ProjectPreview({ project, position }: ProjectPreviewProps) {
  return (
    <div
      className={`project-preview ${project ? "is-active" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    >
      {project && (
        <>
          <div className={`preview-visual bg-gradient-to-br ${project.color}`}>
            <span>{project.number}</span>
            <div className="preview-window">
              <i />
              <i />
              <i />
              <b />
              <b />
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#ff69b2]">
                {project.role}
              </p>
              <p className="font-mono text-[9px] text-white/35">{project.year}</p>
            </div>
            <h4 className="display mt-2 text-3xl">{project.title}</h4>
            <p className="mt-2 text-xs leading-5 text-white/55">
              {project.description}
            </p>
            <p className="mt-4 border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
              {project.stack}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
