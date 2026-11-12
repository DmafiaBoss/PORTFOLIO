export default function StatCard({ title, value, subtitle, icon: Icon, color = 'cyan', trend }) {
  return (
    <div className={`stat-card border-glow-${color}`}>
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        <div className={`stat-card-icon icon-glow-${color}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-card-body">
        <span className="stat-card-value">{value}</span>
        {trend && <span className="stat-card-trend">{trend}</span>}
      </div>
      {subtitle && <p className="stat-card-subtitle">{subtitle}</p>}
    </div>
  )
}
