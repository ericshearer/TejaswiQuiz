export default function ProgressBar({ value, color = '#3b82f6', label }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100)
  return (
    <div className="progress-wrap">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      {label !== undefined && <span className="progress-label">{label}</span>}
    </div>
  )
}
