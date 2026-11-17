import { Link } from "react-router-dom"
import { ArrowIcon } from "@/components/icons"

export function NotFound() {
  return (
    <main className="detail-page flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow justify-center">Wasted</p>
      <h1 className="display mt-4 text-[clamp(5rem,20vw,12rem)] leading-none">
        4<span className="pink-text">0</span>4
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
        This mission doesn&apos;t exist on the map. Let&apos;s get you back to
        familiar streets.
      </p>
      <Link to="/" className="neon-button mt-8 px-6 py-3.5 text-[11px]">
        Back to home <ArrowIcon />
      </Link>
    </main>
  )
}
