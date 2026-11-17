import { useState, type ChangeEvent } from "react"
import { useAudio } from "@/audio/AudioProvider"
import { SoundOffIcon, SoundOnIcon } from "./icons"

const MUSIC_HINT_KEY = "gta6-portfolio:music-hint-v2-dismissed"

function hasSeenMusicHint() {
  try {
    return localStorage.getItem(MUSIC_HINT_KEY) === "true"
  } catch {
    return false
  }
}

function dismissMusicHint() {
  try {
    localStorage.setItem(MUSIC_HINT_KEY, "true")
  } catch {
    // The hint can still be dismissed for this render if storage is unavailable.
  }
}

/**
 * Floating control to toggle the app-wide background music. Hovering (or
 * focusing) reveals a volume slider. The audio itself lives in AudioProvider
 * so it persists across route changes.
 */
export function MusicToggle() {
  const { musicPlaying, toggleMusic, volume, setVolume } = useAudio()
  const [showHint, setShowHint] = useState(() => !hasSeenMusicHint())

  const onVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value) / 100)
  }

  const dismiss = () => {
    dismissMusicHint()
    setShowHint(false)
  }

  const startMusicFromHint = () => {
    if (!musicPlaying) toggleMusic()
    dismiss()
  }

  return (
    <div className="music-control">
      {showHint && (
        <div className="music-hint" role="status">
          <span className="music-hint-spark">✦</span>
          <span className="music-hint-copy">
            Want a soundtrack?
            <button type="button" onClick={startMusicFromHint}>
              Click me
            </button>
          </span>
          <button
            type="button"
            className="music-hint-close"
            onClick={dismiss}
            aria-label="Dismiss music hint"
          >
            ×
          </button>
          <span className="music-hint-tail" aria-hidden="true" />
        </div>
      )}

      {/* Volume slider — shown on hover/focus of the control. */}
      <div className="music-volume" data-no-click-sound>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(volume * 100)}
          onChange={onVolumeChange}
          className="music-volume-slider"
          aria-label="Music volume"
          title="Music volume"
        />
        <span className="music-volume-value">{Math.round(volume * 100)}</span>
      </div>

      <button
        type="button"
        onClick={() => {
          toggleMusic()
          if (showHint) dismiss()
        }}
        className={`music-toggle ${musicPlaying ? "is-playing" : ""}`}
        aria-pressed={musicPlaying}
        aria-label={musicPlaying ? "Mute background music" : "Play background music"}
        title={musicPlaying ? "Mute music" : "Play music"}
      >
        <span className="music-toggle-icon">
          {musicPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
        </span>
        <span className="music-toggle-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      </button>
    </div>
  )
}
