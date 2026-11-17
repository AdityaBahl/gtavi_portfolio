import { profile, socialLinks } from "@/data/portfolio"
import { ArrowIcon } from "./icons"

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#13091e] py-24 text-center"
    >
      <div className="footer-orb" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 reveal-up" data-reveal>
        <p className="eyebrow justify-center">Start a mission</p>
        <h2 className="display mt-4 text-[clamp(4rem,10vw,8rem)] leading-[0.8]">
          LET&apos;S BUILD
          <br />
          <span className="text-outline-small">SOMETHING WILD</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="neon-button w-fit px-7 py-4"
          >
            Get in touch <ArrowIcon />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button w-fit px-7 py-4"
          >
            View résumé <ArrowIcon />
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-white/40">{profile.email}</p>
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row">
          <p>© 2026 Aditya Bahl</p>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#ff6bb3]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p>Built with code + caffeine</p>
        </div>
      </div>
    </footer>
  )
}
