import { useEffect, useRef, useState } from 'react'

// Uses the YouTube IFrame Player API to detect errors (e.g. video removed,
// embedding disabled) and gracefully falls back to a search link.

let ytApiReady = false
let ytApiCallbacks = []

function loadYTApi() {
  if (window.YT && window.YT.Player) {
    ytApiReady = true
    return
  }
  if (document.getElementById('yt-iframe-api')) return
  const tag = document.createElement('script')
  tag.id = 'yt-iframe-api'
  tag.src = 'https://www.youtube.com/iframe_api'
  document.head.appendChild(tag)
  window.onYouTubeIframeAPIReady = () => {
    ytApiReady = true
    ytApiCallbacks.forEach(cb => cb())
    ytApiCallbacks = []
  }
}

function onYTReady(cb) {
  if (ytApiReady) { cb(); return }
  ytApiCallbacks.push(cb)
  loadYTApi()
}

export default function VideoPlayer({ subtopic, color }) {
  const searchUrl =
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(subtopic.searchQuery || subtopic.name)

  const containerRef = useRef(null)
  const playerRef = useRef(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    if (!subtopic.videoId) return
    setUnavailable(false)

    onYTReady(() => {
      // Destroy any previous player instance
      if (playerRef.current) {
        try { playerRef.current.destroy() } catch (_) {}
        playerRef.current = null
      }
      if (!containerRef.current) return

      // Create a fresh div for the player (YT replaces it)
      const div = document.createElement('div')
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(div)

      playerRef.current = new window.YT.Player(div, {
        videoId: subtopic.videoId,
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onError: (e) => {
            // Error codes 100, 101, 150 = video unavailable or embedding disabled
            setUnavailable(true)
          },
        },
      })
    })

    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy() } catch (_) {}
        playerRef.current = null
      }
    }
  }, [subtopic.videoId])

  if (!subtopic.videoId || unavailable) {
    return (
      <div className="video-fallback" style={{ borderColor: color }}>
        <div className="video-fallback-icon">▶</div>
        <h4>Watch a quick explainer</h4>
        {unavailable && (
          <p style={{ color: '#c0392b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            This video is no longer available — search for a replacement below.
          </p>
        )}
        <p>
          Open YouTube to find a short video on{' '}
          <strong>{subtopic.name}</strong>.
        </p>
        <a
          className="btn btn-primary"
          style={{ backgroundColor: color }}
          href={searchUrl}
          target="_blank"
          rel="noreferrer"
        >
          Find videos on YouTube ↗
        </a>
        {unavailable && (
          <p className="video-hint">
            Tip: once you find a good replacement, paste its video ID into{' '}
            <code>src/data/curriculum.js</code>.
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="video-player">
      <div className="video-frame-wrap" ref={containerRef} />
      <a
        className="video-search-link"
        href={searchUrl}
        target="_blank"
        rel="noreferrer"
      >
        More videos on YouTube ↗
      </a>
    </div>
  )
}
