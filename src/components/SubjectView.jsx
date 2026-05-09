import ProgressBar from './ProgressBar.jsx'

export default function SubjectView({
  subject,
  getSubtopicStats,
  onBack,
  onSelectSubtopic,
}) {
  return (
    <div className="subject-view">
      <button className="back-link" onClick={onBack}>
        ← All subjects
      </button>

      <header
        className="subject-header"
        style={{ background: subject.accent, borderColor: subject.color }}
      >
        <span className="subject-icon-lg">{subject.icon}</span>
        <div>
          <h1 style={{ color: subject.color }}>{subject.name}</h1>
          <p>{subject.description}</p>
        </div>
      </header>

      <ul className="subtopic-list">
        {subject.subtopics.map((t) => {
          const stats = getSubtopicStats(subject.id, t.id)
          const best = stats?.bestScore ?? 0
          const attempts = stats?.attempts ?? 0
          return (
            <li key={t.id}>
              <button
                className="subtopic-card"
                onClick={() => onSelectSubtopic(t.id)}
                style={{ borderLeftColor: subject.color }}
              >
                <div className="subtopic-card-main">
                  <h3>{t.name}</h3>
                  <p className="subtopic-desc">{t.description}</p>
                </div>
                <div className="subtopic-card-stats">
                  <div className="subtopic-card-score">
                    {attempts > 0 ? (
                      <>
                        <strong style={{ color: subject.color }}>
                          {Math.round(best * 100)}%
                        </strong>
                        <small>
                          best · {attempts} {attempts === 1 ? 'try' : 'tries'}
                        </small>
                      </>
                    ) : (
                      <small className="muted">Not started</small>
                    )}
                  </div>
                  <ProgressBar value={best} color={subject.color} />
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
