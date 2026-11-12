import { Layout, Smartphone, Gauge, Code } from 'lucide-react'

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Frontend Web Engineering',
      desc: 'Architecting single-page applications and web interfaces with React, modern JavaScript (ES6+), and clean component architectures tailored for scale.',
      deliverables: ['Custom React Components', 'Hooks & State Architecture', 'Vite & Modern Tooling', 'Clean Code Hygiene'],
      icon: Code,
    },
    {
      num: '02',
      title: 'Interactive Web Applications',
      desc: 'Developing specialized tools, dashboards, financial ledgers, and productivity software featuring real-time client-side calculation and persistent state.',
      deliverables: ['Productivity Hubs', 'Data Dashboards', 'Web Calculators', 'LocalStorage Integration'],
      icon: Layout,
    },
    {
      num: '03',
      title: 'UI/UX Implementation',
      desc: 'Translating design visions into exact, high-fidelity responsive websites with generous whitespace, disciplined typography, and subtle micro-interactions.',
      deliverables: ['Figma to Production Code', 'Editorial Typography Systems', 'Design Tokens & CSS Variables', 'Micro-interactions'],
      icon: Smartphone,
    },
    {
      num: '04',
      title: 'Performance & Accessibility',
      desc: 'Engineering fast, lightweight web experiences that load instantly, score high on performance audits, and are fully keyboard and screen-reader accessible.',
      deliverables: ['Semantic HTML5 Standards', 'Zero Bloat CSS', 'Mobile-First Responsiveness', 'SEO & OpenGraph Optimization'],
      icon: Gauge,
    },
  ]

  return (
    <section id="services" className="section-padding border-top-subtle">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-header-row">
          <span className="section-index font-mono">02 // SERVICES</span>
          <span className="section-tagline">SPECIALIZED CAPABILITIES</span>
        </div>

        <div className="services-title-wrap">
          <h2 className="editorial-headline">
            END-TO-END FRONTEND SOLUTIONS ENGINEERED FOR CLARITY AND IMPACT.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.num} className="service-card">
                <div className="service-card-top">
                  <span className="service-num font-mono">{service.num}</span>
                  <div className="service-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <div className="service-deliverables">
                  <span className="deliverables-heading font-mono">DELIVERABLES:</span>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
