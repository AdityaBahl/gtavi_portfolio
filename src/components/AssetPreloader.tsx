import { useEffect } from "react"
import { games, introImages } from "@/data/portfolio"

/**
 * Warms only the assets needed immediately during the intro: the intro
 * collage and the four game covers visible on the home page. Remaining game
 * covers stay lazy-loaded on the full /games route.
 */
export function AssetPreloader() {
  useEffect(() => {
    const urls = [
      ...introImages.map((image) => image.src),
      ...games.slice(0, 4).map((game) => game.imageUrl),
    ]

    const images = [...new Set(urls)].map((src) => {
      const image = new Image()
      image.decoding = "async"
      image.src = src
      return image
    })

    // Keep the Image references alive for the app shell's lifetime so the
    // browser can finish these background requests during the intro.
    void images
    return () => undefined
  }, [])

  return null
}
