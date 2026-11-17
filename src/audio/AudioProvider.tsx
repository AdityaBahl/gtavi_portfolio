import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

const MUSIC_SRC = "/assets/portfolio_music.mp3"
const CLICK_SRC = "/assets/menu_sound.mp3"
const DEFAULT_MUSIC_VOLUME = 0.4
const CLICK_VOLUME = 0.6
const MUTE_KEY = "gta6-portfolio:music-muted"
const VOLUME_KEY = "gta6-portfolio:music-volume"

/** Whether the user previously chose to mute. Defaults to not muted. */
function readMuted(): boolean {
  try {
    return localStorage.getItem(MUTE_KEY) === "true"
  } catch {
    return false
  }
}

function saveMuted(muted: boolean) {
  try {
    localStorage.setItem(MUTE_KEY, String(muted))
  } catch {
    // Ignore storage failures (private mode, etc.) — audio still works.
  }
}

/** Restore the saved music volume (0–1), falling back to the default. */
function readVolume(): number {
  try {
    const raw = localStorage.getItem(VOLUME_KEY)
    if (raw === null) return DEFAULT_MUSIC_VOLUME
    const parsed = Number(raw)
    if (Number.isFinite(parsed)) return Math.min(1, Math.max(0, parsed))
  } catch {
    // fall through
  }
  return DEFAULT_MUSIC_VOLUME
}

function saveVolume(volume: number) {
  try {
    localStorage.setItem(VOLUME_KEY, String(volume))
  } catch {
    // Ignore storage failures.
  }
}

type AudioContextValue = {
  musicPlaying: boolean
  toggleMusic: () => void
  playClick: () => void
  volume: number
  setVolume: (volume: number) => void
}

const AudioCtx = createContext<AudioContextValue | null>(null)

/**
 * App-wide audio. Lives above the router so background music keeps playing
 * across route changes, and so a single document-level listener can play the
 * GTA menu "click" sound on every button in the app.
 */
export function AudioProvider({ children }: { children: ReactNode }) {
  const musicRef = useRef<HTMLAudioElement | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [volume, setVolumeState] = useState(() => readVolume())
  // Mirror volume in a ref so callbacks/effects always read the latest value
  // without needing it in their dependency arrays.
  const volumeRef = useRef(volume)

  const setVolume = useCallback((next: number) => {
    const clamped = Math.min(1, Math.max(0, next))
    volumeRef.current = clamped
    setVolumeState(clamped)
    if (musicRef.current) musicRef.current.volume = clamped
    saveVolume(clamped)
  }, [])

  // Web Audio pieces for the click SFX. Decoding the buffer once lets us fire
  // the sound instantly (and overlapping) on every click without <audio> lag.
  const audioCtxRef = useRef<AudioContext | null>(null)
  const clickBufferRef = useRef<AudioBuffer | null>(null)

  // Lazily create the AudioContext (must happen after a user gesture) and
  // fetch + decode the click sound once.
  const ensureClickReady = useCallback(async () => {
    if (!audioCtxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      audioCtxRef.current = new Ctor()
    }
    const ctx = audioCtxRef.current
    if (ctx.state === "suspended") {
      void ctx.resume()
    }
    if (!clickBufferRef.current) {
      const res = await fetch(CLICK_SRC)
      const arrayBuffer = await res.arrayBuffer()
      clickBufferRef.current = await ctx.decodeAudioData(arrayBuffer)
    }
  }, [])

  const playClick = useCallback(() => {
    const ctx = audioCtxRef.current
    const buffer = clickBufferRef.current
    if (!ctx || !buffer) {
      // Not decoded yet — kick off loading so the next click works.
      void ensureClickReady()
      return
    }
    if (ctx.state === "suspended") void ctx.resume()
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const gain = ctx.createGain()
    gain.gain.value = CLICK_VOLUME
    source.connect(gain).connect(ctx.destination)
    source.start(0)
  }, [ensureClickReady])

  const toggleMusic = useCallback(() => {
    const audio = musicRef.current
    if (!audio) return
    if (audio.paused) {
      audio.volume = volumeRef.current
      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false))
      saveMuted(false)
    } else {
      audio.pause()
      setMusicPlaying(false)
      saveMuted(true)
    }
  }, [])

  // Try to autostart music; prepare the click sound once the user interacts
  // (required by browser autoplay / AudioContext policies). The user's last
  // mute choice is restored from localStorage so navigating to / reloading on
  // any page (e.g. /experience/accenture-analyst) keeps their preference.
  useEffect(() => {
    const muted = readMuted()
    const audio = musicRef.current
    if (audio) {
      // Preload the full track during the intro. Playback can still be blocked
      // by browser autoplay policy, but the bytes are ready for first gesture.
      audio.load()
      audio.volume = volumeRef.current
    }
    if (audio && !muted) {
      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false))
    }

    // Decode the short click effect in the background so the first button
    // interaction does not have to wait for a network request.
    void ensureClickReady().catch(() => {})

    const unlock = () => {
      void ensureClickReady()
      // If autoplay was blocked (and the user hasn't muted), start music on the
      // first interaction.
      const el = musicRef.current
      if (el && el.paused && !readMuted()) {
        el.volume = volumeRef.current
        el.play().then(() => setMusicPlaying(true)).catch(() => {})
      }
    }
    window.addEventListener("pointerdown", unlock, { once: true })
    return () => window.removeEventListener("pointerdown", unlock)
  }, [ensureClickReady])

  // Global button-click SFX: one listener for the whole app. Fires the GTA
  // menu sound for every interactive control. This app renders most "buttons"
  // as <a>/<Link> elements (nav, CTA buttons, project/experience/hobby cards),
  // so we match any anchor or button. Opt out via [data-no-click-sound].
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return
      if (target.closest("[data-no-click-sound]")) return
      const trigger = target.closest(
        'a, button, [role="button"], [data-click-sound]',
      )
      if (trigger) playClick()
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [playClick])

  const value = useMemo(
    () => ({ musicPlaying, toggleMusic, playClick, volume, setVolume }),
    [musicPlaying, toggleMusic, playClick, volume, setVolume],
  )

  return (
    <AudioCtx.Provider value={value}>
      {/* Preload during the intro so the first user gesture starts instantly. */}
      <audio ref={musicRef} src={MUSIC_SRC} loop preload="auto" />
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error("useAudio must be used within an AudioProvider")
  return ctx
}
