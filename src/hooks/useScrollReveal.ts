import { useEffect } from "react"

/**
 * Observes every element carrying a `data-reveal` attribute and adds the
 * `is-visible` class when it scrolls into view. Mirrors the reveal behaviour
 * from the original wireframe. Runs once after mount; re-run when `deps`
 * change (e.g. after the intro overlay is removed and content is measurable).
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px" },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
