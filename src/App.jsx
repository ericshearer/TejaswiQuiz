import { useState } from 'react'
import { getSubject, getSubtopic } from './data/curriculum.js'
import { useProgress } from './hooks/useProgress.js'
import Dashboard from './components/Dashboard.jsx'
import SubjectView from './components/SubjectView.jsx'
import SubtopicView from './components/SubtopicView.jsx'

export default function App() {
  // Simple route state. null = dashboard.
  const [route, setRoute] = useState({ subjectId: null, subtopicId: null })

  const {
    recordAttempt,
    resetSubtopic,
    resetAll,
    getSubjectStats,
    getSubtopicStats,
  } = useProgress()

  function goDashboard() {
    setRoute({ subjectId: null, subtopicId: null })
  }
  function goSubject(subjectId) {
    setRoute({ subjectId, subtopicId: null })
  }
  function goSubtopic(subtopicId) {
    setRoute((r) => ({ ...r, subtopicId }))
  }

  function handleResetAll() {
    if (
      typeof window !== 'undefined' &&
      window.confirm('Reset all quiz progress? This cannot be undone.')
    ) {
      resetAll()
    }
  }

  let content
  if (!route.subjectId) {
    content = (
      <Dashboard
        getSubjectStats={getSubjectStats}
        onSelectSubject={goSubject}
        onResetAll={handleResetAll}
      />
    )
  } else if (!route.subtopicId) {
    const subject = getSubject(route.subjectId)
    content = (
      <SubjectView
        subject={subject}
        getSubtopicStats={getSubtopicStats}
        onBack={goDashboard}
        onSelectSubtopic={goSubtopic}
      />
    )
  } else {
    const subject = getSubject(route.subjectId)
    const subtopic = getSubtopic(route.subjectId, route.subtopicId)
    const stats = getSubtopicStats(route.subjectId, route.subtopicId)
    content = (
      <SubtopicView
        subject={subject}
        subtopic={subtopic}
        stats={stats}
        recordAttempt={recordAttempt}
        resetSubtopic={resetSubtopic}
        onBack={() => goSubject(route.subjectId)}
      />
    )
  }

  return <div className="app">{content}</div>
}
