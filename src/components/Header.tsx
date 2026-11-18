import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { navItems, profile } from "@/data/portfolio"
import { ArrowIcon } from "./icons"

type HeaderProps = {
  /** Replays the intro welcome screen when the title is clicked. */
  onTitleClick?: () => void
}

export function Header({ onTitleClick }: HeaderProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(location.hash || "#home")

  useEffect(() => {
    setActiveHash(location.hash || "#home")
  }, [location.hash])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))

    const updateActiveSection = () => {
      if (window.location.pathname !== "/") return
      const marker = window.scrollY + window.innerHeight * 0.28
      let current = "#home"
      for (const section of sections) {
        if ((section as HTMLElement).offsetTop <= marker) {
          current = `#${section.id}`
        }
      }
      setActiveHash(current)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleTitleClick = () => {
    closeMenu()
    onTitleClick?.()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090614]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6">
        <button
          type="button"
          onClick={handleTitleClick}
          className="flex items-center gap-3 bg-transparent"
          aria-label={`${profile.firstName} ${profile.lastName} — replay intro`}
        >
          <span className="logo-mark">AB</span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.18em] sm:block">
            Aditya Bahl
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link ${activeHash === item.href ? "active" : ""}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-link"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#contact" className="neon-button px-5 py-2.5 text-[11px]">
            Let&apos;s talk <ArrowIcon />
          </a>
        </div>

        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={activeHash === item.href ? "active" : ""}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
                <ArrowIcon />
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Résumé ↗
              <ArrowIcon />
            </a>
            <a href="#contact" className="mobile-menu-cta" onClick={closeMenu}>
              Let&apos;s talk <ArrowIcon />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
