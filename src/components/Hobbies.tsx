import { Link } from "react-router-dom"
import { games, hobbies } from "@/data/portfolio"
import { ArrowIcon } from "./icons"

export function Hobbies() {
  return (
    <section id="hobbies" className="relative bg-[#090614] py-28">
      <div className="section-number">07</div>
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal-up mb-14 md:flex md:items-end md:justify-between" data-reveal>
          <div>
            <p className="eyebrow">Off the clock</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">
              DOWN <span className="pink-text">TIME</span>
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/40 md:mt-0">
            When I step away from the keyboard I make hip-hop music as{" "}
            <span className="text-[#ff6cad]">OG Ideology</span> and grind a few
            open worlds.
          </p>
        </div>

        {/* Music */}
        <div className="mb-10 flex items-center gap-4" data-reveal>
          <span className="eyebrow !text-white/50">Radio Station</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="hobby-grid">
          {hobbies.map((hobby, index) => (
            <a
              key={hobby.title}
              href={hobby.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hobby-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 90}ms` }}
            >
              <div className="hobby-cover">
                <img src={hobby.cover} alt={hobby.title} loading="lazy" />
                <span className="hobby-tag">{hobby.tag}</span>
                <span className="hobby-play" aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className="hobby-body">
                <div className="min-w-0">
                  <h3 className="display text-2xl leading-tight">{hobby.title}</h3>
                  <p className="mt-1 text-xs text-white/45">{hobby.desc}</p>
                </div>
                <span className="project-arrow shrink-0">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Gaming */}
        <div className="mb-10 mt-20 flex items-start gap-4" data-reveal>
          <div className="min-w-0">
            <span className="eyebrow !text-white/50">Arcade</span>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
              The worlds I return to when I need a break from the keyboard — from
              medieval quests and open-world chaos to atmospheric indie adventures.
            </p>
          </div>
          <span className="mt-2 h-px flex-1 bg-white/10" />
          <Link to="/games" className="games-see-all shrink-0">
            See all <ArrowIcon />
          </Link>
        </div>
        <div className="game-grid">
          {games.slice(0, 4).map((game, index) => (
            <div
              key={game.title}
              className="game-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${(index % 4) * 80}ms` }}
            >
              <div className={`game-art bg-gradient-to-br ${game.color}`}>
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="game-image"
                />
                <span className="game-platform">{game.platform}</span>
              </div>
              <div className="game-body">
                <h3 className="display text-xl leading-tight">{game.title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {game.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
