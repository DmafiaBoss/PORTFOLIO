import { Code2, Cpu, Wrench, Layers } from 'lucide-react'

export default function Skills() {
  const skillGroups = [
    {
      category: 'Core & Frameworks',
      icon: Code2,
      skills: [
        { name: 'React', level: 'Primary Library' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'HTML5 Semantic', level: 'Standards Compliant' },
        { name: 'CSS3 & Modern CSS', level: 'Custom Variables & Grid' },
        { name: 'Vite', level: 'Build Tooling' },
        { name: 'TypeScript', level: 'Types & Interfaces' },
      ],
    },
    {
      category: 'Architecture & State',
      icon: Layers,
      skills: [
        { name: 'Component Modularity', level: 'Design Pattern' },
        { name: 'React Hooks Ecosystem', level: 'useState, useEffect, useMemo' },
        { name: 'Client-Side Persistence', level: 'LocalStorage / Web APIs' },
        { name: 'Web Audio API', level: 'Synthesizers & Chimes' },
        { name: 'Clean Code Hygiene', level: 'Predictable Data Flow' },
        { name: 'DOM Event Architecture', level: 'Touch & Keyboard Navigation' },
      ],
    },
    {
      category: 'Design Systems & UI/UX',
      icon: Cpu,
      skills: [
        { name: 'Mobile-First Layouts', level: 'Fully Responsive' },
        { name: 'CSS Grid & Flexbox', level: 'Fluid Modern Layouts' },
        { name: 'Editorial Typography', level: 'Visual Rhythm & Contrast' },
        { name: 'Web Accessibility', level: 'ARIA & Semantic Standards' },
        { name: 'Micro-Interactions', level: 'Smooth CSS Transitions' },
        { name: 'Monochrome Systems', level: 'High Contrast Design' },
      ],
    },
    {
      category: 'Workflow & Deployment',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 'Version Control' },
        { name: 'Netlify & Vercel', level: 'Continuous Deployment' },
        { name: 'npm & Package Management', level: 'Dependency Hygiene' },
        { name: 'Chrome DevTools', level: 'Profiling & Debugging' },
        { name: 'Responsive Device Audits', level: 'Cross-Browser Verification' },
        { name: 'Performance Optimization', level: 'Bundle & Asset Efficiency' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding border-top-subtle">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-header-row">
          <span className="section-index font-mono">04 // TOOLING & EXPERTISE</span>
          <span className="section-tagline">TECHNICAL STACK</span>
        </div>

        <div className="skills-headline-wrap">
          <h2 className="editorial-headline">
            DISCIPLINED TECHNOLOGIES CHOSEN FOR SPEED, PRECISION, AND MAINTAINABILITY.
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.category} className="skill-group-card">
                <div className="skill-group-header">
                  <div className="skill-group-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="skill-group-title font-mono">{group.category}</h3>
                </div>

                <div className="skills-item-list">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-badge-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level font-mono">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
