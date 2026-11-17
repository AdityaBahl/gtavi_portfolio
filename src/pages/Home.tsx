import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Intro } from "@/components/Intro"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Career } from "@/components/Career"
import { Work } from "@/components/Work"
import { GenAi } from "@/components/GenAi"
import { Testimonials } from "@/components/Testimonials"
import { Hobbies } from "@/components/Hobbies"
import { Footer } from "@/components/Footer"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const INTRO_SEEN_KEY = "gta6-portfolio:intro-seen"

function hasSeenIntro() {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) === "true"
  } catch {
    return false
  }
}

function markIntroSeen() {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, "true")
  } catch {
    // The shorter first-visit behavior still works for the current render.
  }
}

export function Home() {
  const location = useLocation()
  // When arriving from a detail page (e.g. "/#career"), skip the intro so the
  // user lands directly on the section they came from.
  const [introDone, setIntroDone] = useState(() => Boolean(location.hash))
  const [firstVisit, setFirstVisit] = useState(() => !hasSeenIntro())
  // Bumped each time the user replays the intro from the header title. Used as
  // a React key so <Intro> remounts and plays again from the start.
  const [introRun, setIntroRun] = useState(0)

  // Re-run reveal wiring once the intro is gone so freshly measurable
  // sections animate in on scroll.
  useScrollReveal([introDone])

  // Scroll to the hash target once the page is interactive.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }, [location.hash])

  const handleIntroFinish = useCallback(() => {
    markIntroSeen()
    setFirstVisit(false)
    setIntroDone(true)
  }, [])

  // Replay the intro welcome screen (triggered by clicking the header title).
  // Deliberate replays always use the full 10-second cinematic timing.
  const replayIntro = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
    markIntroSeen()
    setFirstVisit(false)
    setIntroDone(false)
    setIntroRun((run) => run + 1)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#090614] text-white">
      <Intro
        key={introRun}
        onFinish={handleIntroFinish}
        duration={firstVisit ? 6000 : 10000}
        skip={introRun === 0 && Boolean(location.hash)}
      />
      <Header onTitleClick={replayIntro} />
      <Hero />
      <About />
      <Skills />
      <Career />
      <Work />
      <GenAi />
      <Testimonials />
      <Hobbies />
      <Footer />
    </main>
  )
}
