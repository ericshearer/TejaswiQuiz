import { subjectList } from '../data/curriculum.js'
import ProgressBar from './ProgressBar.jsx'

export default function Dashboard({ getSubjectStats, onSelectSubject, onResetAll }) {
  const overall = subjectList.reduce(
    (acc, s) => {
      const stats = getSubjectStats(s.id)
      acc.completed += stats.completed
      acc.total += stats.total
      acc.weightedBest += stats.avgBest * stats.completed
      return acc
    },
    { completed: 0, total: 0, weightedBest: 0 },
  )
  const overallAvg = overall.completed > 0 ? overall.weightedBest / overall.completed : 0

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Tejaswi's Exam Prep</h1>
          <p className="subtitle">
            Pick a subject, watch a quick explainer, then test yourself.
          </p>
        </div>
        <div className="overall-card">
          <div className="overall-row">
            <span>Topics completed</span>
            <strong>
              {overall.completed} / {overall.total}
            </strong>
          </div>
          <div className="overall-row">
            <span>Average best score</span>
            <strong>
              {overall.completed > 0 ? `${Math.round(overallAvg * 100)}%` : '—'}
            </strong>
          </div>
          <ProgressBar
            value={overall.total > 0 ? overall.completed / overall.total : 0}
            color="#1f2937"
          />
        </div>
      </header>

      <div className="subject-grid">
        {subjectList.map((s) => {
          const stats = getSubjectStats(s.id)
          const completionRatio = stats.total > 0 ? stats.completed / stats.total : 0
          return (
            <button
              key={s.id}
              className="subject-card"
              style={{ borderColor: s.color }}
              onClick={() => onSelectSubject(s.id)}
            >
              <div className="subject-icon" style={{ background: s.accent }}>
                <span style={{ fontSize: 36 }}>{s.icon}</span>
              </div>
              <h2 style={{ color: s.color }}>{s.name}</h2>
              <p className="subject-desc">{s.description}</p>

              <div className="subject-stats">
                <div className="stat">
                  <span className="stat-num">{stats.completed}</span>
                  <span className="stat-label">of {stats.total} topics</span>
                </div>
                <div className="stat">
                  <span className="stat-num">
                    {stats.completed > 0
                      ? `${Math.round(stats.avgBest * 100)}%`
                      : '—'}
                  </span>
                  <span className="stat-label">avg. best</span>
                </div>
              </div>
              <ProgressBar value={completionRatio} color={s.color} />
              <span className="subject-cta">Open →</span>
            </button>
          )
        })}
      </div>

      <footer className="dashboard-footer">
        <button className="btn btn-ghost" onClick={onResetAll}>
          Reset all progress
        </button>
      </footer>
    </div>
  )
}
