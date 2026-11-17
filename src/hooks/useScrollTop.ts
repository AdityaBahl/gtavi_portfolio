import { useEffect } from "react"

/** Scrolls the window to the top whenever `key` changes (e.g. on route change). */
export function useScrollTop(key: unknown) {
  useEffect(() => {
    window.scrollTo(0, 0)
    // Detail pages mount with body scroll possibly locked by the intro; clear it.
    document.body.style.overflow = ""
  }, [key])
}
