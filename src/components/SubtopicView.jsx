import { useCallback } from 'react'
import VideoPlayer from './VideoPlayer.jsx'
import Quiz from './Quiz.jsx'

export default function SubtopicView({
  subject,
  subtopic,
  onBack,
  recordAttempt,
  resetSubtopic,
  stats,
}) {
  const handleComplete = useCallback(
    (correct, total) => {
      recordAttempt(subject.id, subtopic.id, correct, total)
    },
    [recordAttempt, subject.id, subtopic.id],
  )

  return (
    <div className="subtopic-view">
      <button className="back-link" onClick={onBack}>
        ← {subject.name}
      </button>

      <header
        className="subtopic-header"
        style={{ borderColor: subject.color }}
      >
        <h1>{subtopic.name}</h1>
        <p>{subtopic.description}</p>
        {stats && stats.attempts > 0 && (
          <div className="subtopic-stats-pill" style={{ background: subject.accent }}>
            <span style={{ color: subject.color }}>
              Best: <strong>{Math.round(stats.bestScore * 100)}%</strong>
            </span>
            <span className="dot">•</span>
            <span>
              Last: {Math.round(stats.lastScore * 100)}%
            </span>
            <span className="dot">•</span>
            <span>
              {stats.attempts} {stats.attempts === 1 ? 'attempt' : 'attempts'}
            </span>
            <button
              className="btn-link"
              onClick={() => resetSubtopic(subject.id, subtopic.id)}
            >
              Reset
            </button>
          </div>
        )}
      </header>

      <section className="card">
        <h2 className="card-title">Watch</h2>
        <VideoPlayer subtopic={subtopic} color={subject.color} />
      </section>

      <section className="card">
        <h2 className="card-title">Quiz yourself</h2>
        <Quiz
          key={subtopic.id /* reset internal quiz state when topic changes */}
          subtopic={subtopic}
          color={subject.color}
          onComplete={handleComplete}
        />
      </section>
    </div>
  )
}
