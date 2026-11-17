import { Link } from "react-router-dom"
import { games } from "@/data/portfolio"
import { ArrowIcon } from "@/components/icons"
import { useScrollTop } from "@/hooks/useScrollTop"

export function Games() {
  useScrollTop("games")

  return (
    <main className="detail-page games-page">
      <section className="detail-hero games-hero">
        <div className="detail-hero-bg bg-gradient-to-br from-[#ff5ca8] via-[#7134bd] to-[#17102c]" />
        <div className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
          <Link to="/#hobbies" className="back-link">
            <ArrowIcon /> Back to hobbies
          </Link>
          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Player profile · off the clock</p>
              <h1 className="display mt-4 text-7xl leading-[0.82] sm:text-9xl">
                GAME <span className="pink-text">LIBRARY</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                The games that keep me up late, teach me patience, or give me a
                city to disappear into for a few hours.
              </p>
            </div>
            <div className="psn-card">
              <span className="psn-label">PlayStation Network ID</span>
              <strong>ogideology</strong>
              <span className="psn-status">ONLINE / SOMETIMES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Personal rotation</p>
            <h2 className="display mt-2 text-5xl sm:text-7xl">
              ALL <span className="text-outline-small">GAMES</span>
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-white/30 sm:block">
            {games.length.toString().padStart(2, "0")} TITLES
          </span>
        </div>

        <div className="games-library-grid">
          {games.map((game) => (
            <article key={game.title} className="game-library-card">
              <div className={`game-library-art bg-gradient-to-br ${game.color}`}>
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  loading="lazy"
                  decoding="async"
                />
                <span className="game-platform">{game.platform}</span>
              </div>
              <div className="game-library-body">
                <h3 className="display text-2xl leading-tight">{game.title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#ff69b2]">
                  {game.genre}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <Link to="/#hobbies" className="neon-button mx-auto w-fit px-6 py-3.5 text-[11px]">
            Back to downtime <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  )
}
