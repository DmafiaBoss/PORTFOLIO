import { useState, useEffect, useRef } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Volume2,
  VolumeX,
  Flame,
  Coffee,
  Sparkles
} from 'lucide-react'

export default function PomodoroTimer({ pomodoroStats, setPomodoroStats }) {
  // Preset durations (seconds)
  const MODES = {
    pomodoro: { label: 'Pomodoro', duration: 25 * 60, icon: Flame, color: 'cyan' },
    shortBreak: { label: 'Short Break', duration: 5 * 60, icon: Coffee, color: 'purple' },
    longBreak: { label: 'Long Break', duration: 15 * 60, icon: Sparkles, color: 'pink' },
  }

  const [currentMode, setCurrentMode] = useState('pomodoro')
  const [timeLeft, setTimeLeft] = useState(MODES.pomodoro.duration)
  const [isRunning, setIsRunning] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  const activeDuration = MODES[currentMode].duration

  // Web Audio Synth Chime
  const playChime = () => {
    if (!soundEnabled) return
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime) // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3) // A5

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8)

      osc.connect(gain)
      gain.connect(audioCtx.destination)

      osc.start()
      osc.stop(audioCtx.currentTime + 0.8)
    } catch {
      // AudioContext not allowed or not supported
    }
  }

  // Timer interval
  useEffect(() => {
    let interval = null
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false)
      playChime()

      if (currentMode === 'pomodoro') {
        // Increment completed pomodoro
        setPomodoroStats((prev) => ({
          ...prev,
          todayCompleted: (prev.todayCompleted || 0) + 1,
          totalMinutes: (prev.totalMinutes || 0) + 25,
        }))
        // Switch to short break
        switchMode('shortBreak')
      } else {
        switchMode('pomodoro')
      }
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft, currentMode])

  const switchMode = (modeKey) => {
    setIsRunning(false)
    setCurrentMode(modeKey)
    setTimeLeft(MODES[modeKey].duration)
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(MODES[currentMode].duration)
  }

  const skipInterval = () => {
    setIsRunning(false)
    if (currentMode === 'pomodoro') {
      switchMode('shortBreak')
    } else {
      switchMode('pomodoro')
    }
  }

  // Format MM:SS
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  // SVG Circle Calculations
  const radius = 130
  const circumference = 2 * Math.PI * radius
  const progressRatio = timeLeft / activeDuration
  const strokeDashoffset = circumference - progressRatio * circumference

  return (
    <div className="pomodoro-container">
      <div className="section-header">
        <div>
          <h1 className="section-title">Deep Focus Engine</h1>
          <p className="section-subtitle">
            Harness timeboxing intervals to reach and maintain peak flow state
          </p>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="btn btn-ghost sound-toggle"
          title={soundEnabled ? 'Mute Chimes' : 'Enable Chimes'}
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          <span>{soundEnabled ? 'Audio On' : 'Muted'}</span>
        </button>
      </div>

      {/* Mode Selectors */}
      <div className="pomodoro-modes">
        {Object.entries(MODES).map(([key, config]) => {
          const Icon = config.icon
          const isActive = currentMode === key
          return (
            <button
              key={key}
              onClick={() => switchMode(key)}
              className={`mode-btn ${isActive ? 'active' : ''} glow-${config.color}`}
            >
              <Icon size={18} />
              <span>{config.label}</span>
            </button>
          )
        })}
      </div>

      {/* Circular Progress Display */}
      <div className="timer-display-wrapper">
        <svg className="timer-svg" width="320" height="320">
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="50%" stopColor="#9D4EDD" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Track */}
          <circle
            cx="160"
            cy="160"
            r={radius}
            className="timer-track"
          />

          {/* Animated Glowing Progress Ring */}
          <circle
            cx="160"
            cy="160"
            r={radius}
            className="timer-progress"
            stroke="url(#timerGradient)"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            filter="url(#neonGlow)"
          />
        </svg>

        <div className="timer-content">
          <span className="timer-mode-tag">{MODES[currentMode].label}</span>
          <h2 className="timer-digits">{formattedTime}</h2>
          <span className="timer-session-count">
            Sessions today: <strong>{pomodoroStats.todayCompleted || 0}</strong>
          </span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="timer-controls">
        <button
          onClick={resetTimer}
          className="control-btn secondary"
          title="Reset timer"
        >
          <RotateCcw size={20} />
        </button>

        <button
          onClick={toggleTimer}
          className={`control-btn primary ${isRunning ? 'running' : ''}`}
        >
          {isRunning ? <Pause size={28} /> : <Play size={28} className="play-icon" />}
        </button>

        <button
          onClick={skipInterval}
          className="control-btn secondary"
          title="Skip to next"
        >
          <SkipForward size={20} />
        </button>
      </div>

      {/* Tips Banner */}
      <div className="pomodoro-footer-card">
        <div className="tip-badge">Flow Protocol</div>
        <p>
          {currentMode === 'pomodoro'
            ? 'Put away your phone, close irrelevant tabs, and focus purely on your highest priority task.'
            : 'Step away from the screen, drink a glass of water, stretch your spine, and breathe deeply.'}
        </p>
      </div>
    </div>
  )
}
