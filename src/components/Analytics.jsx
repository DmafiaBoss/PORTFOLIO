import { useMemo } from 'react'
import {
  TrendingUp,
  BarChart2,
  PieChart,
  Award,
  Zap,
  Target,
  Clock,
  CheckCircle2
} from 'lucide-react'

export default function Analytics({ tasks, studyLogs, pomodoroStats }) {
  // Weekly simulated/calculated focus data for the bar chart
  const weeklyData = useMemo(() => {
    // Generate 7 days with realistic data reflecting user's progress
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const todayIndex = (new Date().getDay() + 6) % 7 // Monday = 0

    // Today's actual logged hours
    const todayStudyHours =
      studyLogs
        .filter((l) => l.date.startsWith(new Date().toISOString().split('T')[0]))
        .reduce((sum, l) => sum + l.seconds, 0) / 3600
    const todayPomoHours = ((pomodoroStats.todayCompleted || 0) * 25) / 60
    const todayTotalHours = +(todayStudyHours + todayPomoHours).toFixed(1)

    return days.map((day, idx) => {
      let hours = 0
      if (idx === todayIndex) {
        hours = Math.max(todayTotalHours, 1.5)
      } else if (idx < todayIndex) {
        // past days mock history
        hours = +(2.5 + (idx % 3) * 0.8).toFixed(1)
      } else {
        // upcoming days
        hours = 0
      }
      return { day, hours }
    })
  }, [studyLogs, pomodoroStats])

  const maxWeeklyHours = Math.max(...weeklyData.map((d) => d.hours), 4)

  // Task stats
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((t) => t.completed).length
  const pendingTasks = totalTasks - completedTasks
  const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0

  // Category breakdown
  const categoryStats = useMemo(() => {
    const counts = {}
    tasks.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1
    })
    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
      percent: totalTasks ? Math.round((count / totalTasks) * 100) : 0,
    }))
  }, [tasks, totalTasks])

  // Donut chart calculations
  const donutRadius = 45
  const donutCircumference = 2 * Math.PI * donutRadius
  const completedStroke = (completionRate / 100) * donutCircumference

  return (
    <div className="analytics-container">
      <div className="section-header">
        <div>
          <h1 className="section-title">Productivity Intelligence</h1>
          <p className="section-subtitle">
            Telemetry, output metrics, and deep work velocity diagnostics
          </p>
        </div>

        <div className="analytics-badge">
          <Zap size={16} className="text-cyan" />
          <span>Flow Index: 94.2%</span>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="analytics-stats-grid">
        <div className="glass-panel metric-box">
          <div className="metric-icon-wrap cyan">
            <Clock size={20} />
          </div>
          <div>
            <span className="metric-label">Weekly Focus Hours</span>
            <span className="metric-num">
              {weeklyData.reduce((acc, d) => acc + d.hours, 0).toFixed(1)} hrs
            </span>
          </div>
        </div>

        <div className="glass-panel metric-box">
          <div className="metric-icon-wrap purple">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <span className="metric-label">Tasks Velocity</span>
            <span className="metric-num">{completionRate}% Done</span>
          </div>
        </div>

        <div className="glass-panel metric-box">
          <div className="metric-icon-wrap pink">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="metric-label">Focus Streak</span>
            <span className="metric-num">5 Consecutive Days</span>
          </div>
        </div>

        <div className="glass-panel metric-box">
          <div className="metric-icon-wrap cyan">
            <Target size={20} />
          </div>
          <div>
            <span className="metric-label">Daily Efficiency</span>
            <span className="metric-num">Grade A+</span>
          </div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="charts-grid">
        {/* Weekly Bar Chart */}
        <div className="glass-panel chart-card">
          <div className="chart-header">
            <div>
              <h3 className="card-heading">Weekly Focus Time (Hours)</h3>
              <p className="card-subheading">Hours logged via Pomodoro & Study Tracker</p>
            </div>
            <BarChart2 size={20} className="text-cyan" />
          </div>

          <div className="bar-chart-container">
            <div className="bar-chart-bars">
              {weeklyData.map((d, index) => {
                const heightPercent = (d.hours / maxWeeklyHours) * 100
                return (
                  <div key={d.day} className="bar-column">
                    <div className="bar-value-label font-mono">
                      {d.hours > 0 ? `${d.hours}h` : '-'}
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="bar-day-label">{d.day}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Task Completion Donut Chart */}
        <div className="glass-panel chart-card">
          <div className="chart-header">
            <div>
              <h3 className="card-heading">Task Completion Ratio</h3>
              <p className="card-subheading">Overall execution distribution</p>
            </div>
            <PieChart size={20} className="text-purple" />
          </div>

          <div className="donut-chart-wrapper">
            <svg width="150" height="150" viewBox="0 0 120 120" className="donut-svg">
              <circle
                cx="60"
                cy="60"
                r={donutRadius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="12"
              />
              <circle
                cx="60"
                cy="60"
                r={donutRadius}
                fill="none"
                stroke="url(#donutGradient)"
                strokeWidth="12"
                strokeDasharray={donutCircumference}
                strokeDashoffset={donutCircumference - completedStroke}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
              <defs>
                <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="100%" stopColor="#9D4EDD" />
                </linearGradient>
              </defs>
            </svg>

            <div className="donut-legend">
              <div className="legend-item">
                <span className="legend-dot completed-dot" />
                <span className="legend-name">Completed</span>
                <span className="legend-val font-mono">{completedTasks}</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot pending-dot" />
                <span className="legend-name">In Progress</span>
                <span className="legend-val font-mono">{pendingTasks}</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot total-dot" />
                <span className="legend-name">Total Logged</span>
                <span className="legend-val font-mono">{totalTasks}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown & Optimization Tips */}
      <div className="charts-grid mt-6">
        <div className="glass-panel">
          <h3 className="card-heading">Focus by Category</h3>
          <div className="category-breakdown-list">
            {categoryStats.length === 0 ? (
              <p className="text-muted">No category data available.</p>
            ) : (
              categoryStats.map((cat) => (
                <div key={cat.name} className="cat-row">
                  <div className="cat-meta">
                    <span className="cat-name">{cat.name}</span>
                    <span className="cat-percent font-mono">{cat.percent}%</span>
                  </div>
                  <div className="cat-progress-track">
                    <div
                      className="cat-progress-fill"
                      style={{ width: `${cat.percent}%` }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="glass-panel">
          <h3 className="card-heading">Flowstate Intelligence Insights</h3>
          <div className="insights-feed">
            <div className="insight-card">
              <span className="insight-tag">⚡ Peak Window</span>
              <p>Your highest focus occurs between <strong>09:00 AM – 11:30 AM</strong>. Schedule high-leverage architectural tasks then.</p>
            </div>
            <div className="insight-card">
              <span className="insight-tag">🎯 Milestone Alert</span>
              <p>You have completed <strong>{completedTasks} tasks</strong> this week. Finishing 2 more unlocks the <em>Flow Master</em> badge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
