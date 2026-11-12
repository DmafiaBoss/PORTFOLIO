import { useMemo } from 'react'
import {
  CheckCircle2,
  Clock,
  Flame,
  Award,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckSquare,
  Timer
} from 'lucide-react'
import StatCard from './StatCard'

export default function Dashboard({
  tasks,
  setTasks,
  pomodoroStats,
  studyLogs,
  setActiveTab
}) {
  // Time-based greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  // Today's stats calculation
  const completedTasks = tasks.filter((t) => t.completed).length
  const totalTasks = tasks.length
  const taskRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0

  // Total study minutes today
  const todayDateStr = new Date().toISOString().split('T')[0]
  const studySecondsToday = studyLogs
    .filter((log) => log.date.startsWith(todayDateStr))
    .reduce((acc, log) => acc + log.seconds, 0)
  const studyMinutesToday = Math.round(studySecondsToday / 60)

  // Pomodoro focus minutes today (assuming 25m each)
  const pomodoroMinutesToday = (pomodoroStats.todayCompleted || 0) * 25
  const totalFocusMinutes = studyMinutesToday + pomodoroMinutesToday

  // Productivity score calculation (0 - 100)
  const productivityScore = useMemo(() => {
    let score = 0
    // +20 points per completed task (max 60)
    score += Math.min(completedTasks * 15, 60)
    // +10 points per pomodoro session (max 30)
    score += Math.min((pomodoroStats.todayCompleted || 0) * 10, 30)
    // +10 points if studied > 30 mins
    if (totalFocusMinutes >= 30) score += 10
    return Math.min(score, 100)
  }, [completedTasks, pomodoroStats, totalFocusMinutes])

  // Top 3 active tasks
  const activeTasks = tasks.filter((t) => !t.completed).slice(0, 3)

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div className="dashboard-container">
      {/* Welcome Hero Banner */}
      <div className="welcome-banner">
        <div className="welcome-content">
          <div className="badge-pill">
            <Sparkles size={14} className="badge-icon" />
            <span>AI-Enhanced Productivity OS</span>
          </div>
          <h1 className="welcome-title">
            {greeting}, <span className="gradient-text">Creator</span>.
          </h1>
          <p className="welcome-subtitle">
            You're currently in deep work mode. You have <strong>{activeTasks.length} active tasks</strong> pending and <strong>{totalFocusMinutes} minutes</strong> logged today.
          </p>

          <div className="banner-actions">
            <button
              onClick={() => setActiveTab('pomodoro')}
              className="btn btn-primary"
            >
              <Timer size={18} />
              <span>Start Focus Session</span>
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className="btn btn-secondary"
            >
              <CheckSquare size={18} />
              <span>Manage Tasks</span>
            </button>
          </div>
        </div>

        <div className="welcome-score-card">
          <div className="score-ring">
            <div className="score-number">{productivityScore}</div>
            <div className="score-label">Flow Score</div>
          </div>
          <span className="score-status">
            {productivityScore >= 80 ? '⚡ Peak Flow' : productivityScore >= 40 ? '🔥 In The Zone' : '🌱 Warming Up'}
          </span>
        </div>
      </div>

      {/* Daily Metrics Grid */}
      <div className="metrics-grid">
        <StatCard
          title="Total Focus Time"
          value={`${totalFocusMinutes}m`}
          subtitle="Pomodoro + Study Logs"
          icon={Clock}
          color="cyan"
          trend="+18% vs yesterday"
        />
        <StatCard
          title="Tasks Completed"
          value={`${completedTasks} / ${totalTasks}`}
          subtitle={`${taskRate}% completion rate`}
          icon={CheckCircle2}
          color="purple"
          trend={`${completedTasks} done`}
        />
        <StatCard
          title="Pomodoros Finished"
          value={pomodoroStats.todayCompleted || 0}
          subtitle="25-min deep focus intervals"
          icon={Flame}
          color="pink"
          trend="Streak: 4 days"
        />
        <StatCard
          title="Daily Goal Target"
          value={`${Math.min(Math.round((totalFocusMinutes / 120) * 100), 100)}%`}
          subtitle="Target: 120 mins of focus"
          icon={Award}
          color="cyan"
          trend={`${Math.max(0, 120 - totalFocusMinutes)}m left`}
        />
      </div>

      {/* Main Grid: Priority Tasks & Quick Launcher */}
      <div className="dashboard-columns">
        {/* Priority Focus Tasks */}
        <div className="glass-panel">
          <div className="panel-header">
            <div>
              <h2 className="panel-title">Urgent Tasks</h2>
              <p className="panel-subtitle">Immediate items needing your focus</p>
            </div>
            <button
              onClick={() => setActiveTab('tasks')}
              className="panel-link-btn"
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="quick-task-list">
            {activeTasks.length === 0 ? (
              <div className="empty-panel-notice">
                <CheckCircle2 size={32} className="text-cyan" />
                <p>All priority tasks are clear! Time to relax or create new ones.</p>
              </div>
            ) : (
              activeTasks.map((task) => (
                <div key={task.id} className="quick-task-row">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="check-trigger"
                    title="Mark complete"
                  >
                    <div className="custom-check-box" />
                  </button>
                  <div className="quick-task-info">
                    <span className="quick-task-name">{task.title}</span>
                    <span className={`priority-tag ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </div>
                  <span className="category-pill">{task.category}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Launch & Habit Motivation */}
        <div className="glass-panel">
          <div className="panel-header">
            <div>
              <h2 className="panel-title">Flowstate Routines</h2>
              <p className="panel-subtitle">Accelerate your workflow with 1-click tools</p>
            </div>
          </div>

          <div className="routine-cards">
            <div
              className="routine-card"
              onClick={() => setActiveTab('pomodoro')}
            >
              <div className="routine-icon-box cyan">
                <Timer size={22} />
              </div>
              <div className="routine-meta">
                <h4>25m Pomodoro Sprint</h4>
                <p>Sharpen concentration with timed intervals</p>
              </div>
              <ArrowRight size={18} className="routine-arrow" />
            </div>

            <div
              className="routine-card"
              onClick={() => setActiveTab('study')}
            >
              <div className="routine-icon-box purple">
                <Clock size={22} />
              </div>
              <div className="routine-meta">
                <h4>Log Study Session</h4>
                <p>Track learning, courses, or reading hours</p>
              </div>
              <ArrowRight size={18} className="routine-arrow" />
            </div>

            <div
              className="routine-card"
              onClick={() => setActiveTab('analytics')}
            >
              <div className="routine-icon-box pink">
                <Calendar size={22} />
              </div>
              <div className="routine-meta">
                <h4>Inspect Analytics</h4>
                <p>Examine trends, efficiency, and progress charts</p>
              </div>
              <ArrowRight size={18} className="routine-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
