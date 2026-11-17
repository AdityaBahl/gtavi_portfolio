import { useEffect, useState, type CSSProperties } from "react"
import { introImages, profile } from "@/data/portfolio"

type IntroStage = "visible" | "leaving" | "hidden"

type IntroProps = {
  /** Called once the intro has fully left, so the app can restore scrolling. */
  onFinish: () => void
  /** When true, the intro is bypassed entirely (e.g. arriving via a hash). */
  skip?: boolean
  /** First visit is shorter; deliberate replay gets the full cinematic duration. */
  duration?: number
}

export function Intro({ onFinish, skip = false, duration = 10000 }: IntroProps) {
  const [stage, setStage] = useState<IntroStage>(skip ? "hidden" : "visible")

  useEffect(() => {
    if (skip) return
    const fadeStart = Math.max(duration - 400, 1)
    const leaveTimer = window.setTimeout(() => setStage("leaving"), fadeStart)
    const hideTimer = window.setTimeout(() => {
      setStage("hidden")
      onFinish()
    }, duration)
    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
    }
  }, [onFinish, skip, duration])

  // Lock scroll while the intro is on screen.
  useEffect(() => {
    document.body.style.overflow = stage === "hidden" ? "" : "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [stage])

  const skipIntro = () => {
    setStage("leaving")
    window.setTimeout(() => {
      setStage("hidden")
      onFinish()
    }, 650)
  }

  if (stage === "hidden") return null

  return (
    <div
      className={`intro-cover ${stage === "leaving" ? "is-leaving" : ""}`}
      style={
        {
          "--intro-load-duration": `${Math.max(duration - 400, 1)}ms`,
        } as CSSProperties
      }
    >
      <div className="intro-noise" />
      <div className="intro-collage" aria-label="Developer portfolio introduction">
        {introImages.map((image) => (
          <figure className={image.className} key={image.src}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
        <div className="intro-graphic intro-graphic-code" aria-hidden="true">
          <span>&lt;/&gt;</span>
          <small>BUILD // SHIP</small>
        </div>
        <div className="intro-graphic intro-graphic-stack" aria-hidden="true">
          <span>JAVA</span>
          <span>REACT</span>
          <span>PY</span>
        </div>
        <div className="intro-brand">
          <p>Full stack developer presents</p>
          <h1>
            <span>{profile.firstName}</span>
            <span>{profile.lastName}&apos;S</span>
            <strong>PORTFOLIO</strong>
          </h1>
          <div className="intro-edition">Developer edition</div>
        </div>
      </div>
      <div className="intro-bottom">
        <span>{profile.tagline}</span>
        <div className="intro-loader">
          <i />
        </div>
        <button type="button" onClick={skipIntro}>
          Skip intro
        </button>
      </div>
      <p className="intro-credit">Dehradun, India · {profile.availability}</p>
    </div>
  )
}
