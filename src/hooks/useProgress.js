import { useCallback, useEffect, useState } from 'react'
import { curriculum } from '../data/curriculum.js'

const STORAGE_KEY = 'tejaswi-quiz-progress-v1'

// Shape:
// {
//   [subjectId]: {
//     [subtopicId]: {
//        attempts: number,
//        bestScore: number,    // 0..1
//        lastScore: number,    // 0..1
//        totalQuestions: number,
//        correctAnswers: number,
//        completedAt: ISO string | null
//     }
//   }
// }

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw)
  } catch (e) {
    console.warn('Could not parse progress from localStorage:', e)
    return {}
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('Could not save progress:', e)
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const recordAttempt = useCallback((subjectId, subtopicId, correct, total) => {
    setProgress((prev) => {
      const subjectData = prev[subjectId] || {}
      const prior = subjectData[subtopicId] || {
        attempts: 0,
        bestScore: 0,
        lastScore: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        completedAt: null,
      }
      const score = total > 0 ? correct / total : 0
      const next = {
        attempts: prior.attempts + 1,
        bestScore: Math.max(prior.bestScore, score),
        lastScore: score,
        totalQuestions: total,
        correctAnswers: correct,
        completedAt: new Date().toISOString(),
      }
      return {
        ...prev,
        [subjectId]: {
          ...subjectData,
          [subtopicId]: next,
        },
      }
    })
  }, [])

  const resetSubtopic = useCallback((subjectId, subtopicId) => {
    setProgress((prev) => {
      const subjectData = { ...(prev[subjectId] || {}) }
      delete subjectData[subtopicId]
      return { ...prev, [subjectId]: subjectData }
    })
  }, [])

  const resetAll = useCallback(() => {
    setProgress({})
  }, [])

  // Derived stats per subject.
  const getSubjectStats = useCallback(
    (subjectId) => {
      const subj = curriculum[subjectId]
      if (!subj) return { completed: 0, total: 0, avgBest: 0 }
      const data = progress[subjectId] || {}
      const total = subj.subtopics.length
      let completed = 0
      let sumBest = 0
      for (const t of subj.subtopics) {
        const p = data[t.id]
        if (p && p.attempts > 0) {
          completed += 1
          sumBest += p.bestScore
        }
      }
      return {
        completed,
        total,
        avgBest: completed > 0 ? sumBest / completed : 0,
      }
    },
    [progress],
  )

  const getSubtopicStats = useCallback(
    (subjectId, subtopicId) => {
      return progress[subjectId]?.[subtopicId] || null
    },
    [progress],
  )

  return {
    progress,
    recordAttempt,
    resetSubtopic,
    resetAll,
    getSubjectStats,
    getSubtopicStats,
  }
}
