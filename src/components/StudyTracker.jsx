import { useState, useEffect } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  Save,
  BookOpen,
  Calendar,
  Clock,
  Trash2,
  Award,
  Layers
} from 'lucide-react'

export default function StudyTracker({ studyLogs, setStudyLogs }) {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [subject, setSubject] = useState('React & Frontend Architecture')
  const [notes, setNotes] = useState('')

  const subjects = [
    'React & Frontend Architecture',
    'Data Structures & Algorithms',
    'System Design & Backend',
    'UI/UX & Design Systems',
    'AI & Prompt Engineering',
  ]

  // Stopwatch timer
  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  const toggleStopwatch = () => {
    setIsActive(!isActive)
  }

  const resetStopwatch = () => {
    setIsActive(false)
    setSeconds(0)
  }

  const handleSaveSession = () => {
    if (seconds < 5) {
      alert('Session must be at least 5 seconds to log.')
      return
    }

    const newLog = {
      id: Date.now(),
      subject,
      seconds,
      notes: notes.trim() || 'Deep focus study session',
      date: new Date().toISOString(),
    }

    setStudyLogs([newLog, ...studyLogs])
    setIsActive(false)
    setSeconds(0)
    setNotes('')
  }

  const deleteLog = (id) => {
    setStudyLogs(studyLogs.filter((log) => log.id !== id))
  }

  // Format HH:MM:SS
  const formatTime = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600)
    const mins = Math.floor((totalSec % 3600) / 60)
    const secs = totalSec % 60
    return `${hrs ? `${hrs}h ` : ''}${mins}m ${secs}s`
  }

  const formatDigital = (totalSec) => {
    const hrs = String(Math.floor(totalSec / 3600)).padStart(2, '0')
    const mins = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0')
    const secs = String(totalSec % 60).padStart(2, '0')
    return `${hrs}:${mins}:${secs}`
  }

  // Total study time across all logs
  const totalSecondsAll = studyLogs.reduce((acc, log) => acc + log.seconds, 0)
  const todayStr = new Date().toISOString().split('T')[0]
  const todaySeconds = studyLogs
    .filter((log) => log.date.startsWith(todayStr))
    .reduce((acc, log) => acc + log.seconds, 0)

  return (
    <div className="study-tracker-container">
      <div className="section-header">
        <div>
          <h1 className="section-title">Knowledge Acquisition Logger</h1>
          <p className="section-subtitle">
            Record study hours, courses, and technical reading intervals
          </p>
        </div>

        <div className="study-header-badge">
          <BookOpen size={16} className="text-purple" />
          <span>Total Logged: {formatTime(totalSecondsAll)}</span>
        </div>
      </div>

      <div className="study-main-layout">
        {/* Active Study Session Card */}
        <div className="glass-panel study-timer-card">
          <h3 className="card-heading">Active Study Session</h3>

          <div className="study-digital-clock">
            <span className="digits">{formatDigital(seconds)}</span>
          </div>

          <div className="form-group mb-4">
            <label>Subject / Track</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="select-field"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-4">
            <label>Session Notes (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Practiced building components with hooks..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="study-controls">
            <button
              onClick={toggleStopwatch}
              className={`btn ${isActive ? 'btn-danger' : 'btn-primary'}`}
            >
              {isActive ? <Pause size={18} /> : <Play size={18} />}
              <span>{isActive ? 'Pause Study' : 'Start Study'}</span>
            </button>

            <button
              onClick={resetStopwatch}
              className="btn btn-ghost"
              title="Reset timer"
              disabled={seconds === 0}
            >
              <RotateCcw size={18} />
              <span>Reset</span>
            </button>

            <button
              onClick={handleSaveSession}
              className="btn btn-secondary"
              disabled={seconds < 5}
              title="Log session to history"
            >
              <Save size={18} />
              <span>Log Session</span>
            </button>
          </div>
        </div>

        {/* Today's Goals & Progress */}
        <div className="glass-panel study-stats-panel">
          <h3 className="card-heading">Today's Study Progress</h3>
          <div className="study-target-box">
            <div className="target-metric">
              <span className="label">Today's Total</span>
              <span className="value">{formatTime(todaySeconds)}</span>
            </div>
            <div className="target-metric">
              <span className="label">Daily Target</span>
              <span className="value">2h 00m</span>
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{
                width: `${Math.min(Math.round((todaySeconds / 7200) * 100), 100)}%`,
              }}
            />
          </div>

          <h4 className="subheading-sm mt-4">Subjects Breakdown</h4>
          <div className="subject-pills-list">
            {subjects.map((sub) => {
              const count = studyLogs.filter((l) => l.subject === sub).length
              return (
                <div key={sub} className="subject-pill-row">
                  <span className="sub-title">{sub}</span>
                  <span className="sub-count">{count} sessions</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* History Log Table */}
      <div className="glass-panel mt-6">
        <h3 className="card-heading">Logged Study Sessions</h3>

        {studyLogs.length === 0 ? (
          <div className="empty-panel-notice">
            <Clock size={36} className="text-purple" />
            <p>No study sessions logged yet. Hit Start Study above to log your first block!</p>
          </div>
        ) : (
          <div className="study-logs-table">
            <div className="table-header">
              <span>Subject</span>
              <span>Duration</span>
              <span>Notes</span>
              <span>Date</span>
              <span>Action</span>
            </div>

            {studyLogs.map((log) => (
              <div key={log.id} className="table-row">
                <span className="col-subject">
                  <Layers size={14} className="text-cyan inline-icon" />
                  {log.subject}
                </span>
                <span className="col-duration font-mono">{formatTime(log.seconds)}</span>
                <span className="col-notes">{log.notes}</span>
                <span className="col-date">
                  {new Date(log.date).toLocaleDateString([], {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <span className="col-action">
                  <button
                    onClick={() => deleteLog(log.id)}
                    className="delete-icon-btn"
                    title="Delete log"
                  >
                    <Trash2 size={15} />
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
