import { useMemo, useState } from 'react'

export default function Quiz({ subtopic, color, onComplete }) {
  const questions = subtopic.questions
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [answers, setAnswers] = useState([]) // booleans
  const [finished, setFinished] = useState(false)

  const current = questions[currentIdx]
  const correctCount = useMemo(
    () => answers.filter(Boolean).length,
    [answers],
  )

  function handleSelect(idx) {
    if (revealed) return
    setSelected(idx)
  }

  function handleSubmit() {
    if (selected === null) return
    const isCorrect = selected === current.correct
    setRevealed(true)
    setAnswers((prev) => [...prev, isCorrect])
  }

  function handleNext() {
    if (currentIdx + 1 >= questions.length) {
      // Complete
      const finalCorrect = answers.filter(Boolean).length
      setFinished(true)
      onComplete?.(finalCorrect, questions.length)
    } else {
      setCurrentIdx((i) => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  function handleRestart() {
    setCurrentIdx(0)
    setSelected(null)
    setRevealed(false)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    const total = questions.length
    const score = correctCount / total
    const pct = Math.round(score * 100)
    let message = ''
    if (score >= 0.9) message = 'Excellent — you know this cold.'
    else if (score >= 0.7) message = 'Solid work. Review the misses and try again.'
    else if (score >= 0.5) message = 'Getting there. Watch the explainer and try again.'
    else message = "Keep going — re-watch the video, then take another swing."

    return (
      <div className="quiz-result">
        <div className="quiz-score" style={{ color }}>
          {correctCount} / {total}
          <span className="quiz-score-pct">({pct}%)</span>
        </div>
        <p className="quiz-message">{message}</p>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: color }}
          onClick={handleRestart}
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <span className="quiz-step">
          Question {currentIdx + 1} of {questions.length}
        </span>
        <span className="quiz-running-score">
          Score: {correctCount} / {answers.length}
        </span>
      </div>

      <h3 className="quiz-question">{current.q}</h3>

      <div className="quiz-options">
        {current.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = i === current.correct
          let cls = 'quiz-option'
          if (revealed) {
            if (isCorrect) cls += ' is-correct'
            else if (isSelected) cls += ' is-wrong'
          } else if (isSelected) cls += ' is-selected'
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              style={
                isSelected && !revealed
                  ? { borderColor: color, boxShadow: `0 0 0 2px ${color}33` }
                  : undefined
              }
            >
              <span className="quiz-option-letter">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="quiz-option-text">{opt}</span>
            </button>
          )
        })}
      </div>

      {revealed && (
        <div
          className={
            'quiz-explanation ' +
            (selected === current.correct ? 'is-correct' : 'is-wrong')
          }
        >
          <strong>
            {selected === current.correct ? 'Correct!' : 'Not quite.'}
          </strong>{' '}
          {current.explanation}
        </div>
      )}

      <div className="quiz-actions">
        {!revealed ? (
          <button
            className="btn btn-primary"
            style={{ backgroundColor: color }}
            disabled={selected === null}
            onClick={handleSubmit}
          >
            Check answer
          </button>
        ) : (
          <button
            className="btn btn-primary"
            style={{ backgroundColor: color }}
            onClick={handleNext}
          >
            {currentIdx + 1 >= questions.length ? 'See results' : 'Next question'}
          </button>
        )}
      </div>
    </div>
  )
}
