import { Layout, Smartphone, Gauge, Code, ShoppingBag } from 'lucide-react'

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Small Business Websites & Landing Pages',
      desc: 'Building high-converting, mobile-friendly websites for local businesses, salons, stores, and service providers. Complete with transparent pricing menus and direct WhatsApp booking.',
      deliverables: ['Custom Mobile-First Design', 'WhatsApp Booking Systems', 'Service & Price Menus', 'Google Maps & Location Integration'],
      icon: ShoppingBag,
    },
    {
      num: '02',
      title: 'Frontend Web Applications',
      desc: 'Developing specialized web applications, dashboards, financial ledgers, and productivity software featuring real-time client-side calculation and persistent state.',
      deliverables: ['Custom React SPAs', 'Interactive Dashboards', 'Web Calculators', 'LocalStorage Integration'],
      icon: Layout,
    },
    {
      num: '03',
      title: 'UI/UX Implementation & Figma to Code',
      desc: 'Translating design visions into exact, high-fidelity responsive websites with generous whitespace, disciplined typography, and subtle micro-interactions.',
      deliverables: ['Figma to React Code', 'Clean CSS Variables', 'Cross-Browser Verification', 'Micro-interactions'],
      icon: Smartphone,
    },
    {
      num: '04',
      title: 'Speed, SEO & Mobile Optimization',
      desc: 'Engineering fast, lightweight web experiences that load under 2 seconds on mobile data, score high on performance audits, and rank reliably on search engines.',
      deliverables: ['Sub-2s Mobile Page Loads', 'Zero Bloat CSS Architecture', 'SEO & OpenGraph Metadata', 'Accessible HTML5 Standards'],
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
            FRONTEND SOLUTIONS ENGINEERED TO TURN VISITORS INTO REAL CLIENTS.
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
