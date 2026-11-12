import { CheckCircle2, Terminal, Layers, Zap, Compass } from 'lucide-react'

export default function About() {
  const principles = [
    {
      title: 'Component Modularity',
      desc: 'Architecting clean, reusable functional components with clear prop interfaces and predictable state lifecycles.',
      icon: Layers,
    },
    {
      title: 'Modern CSS & Fluid Layouts',
      desc: 'Mobile-first responsive systems built with modern CSS variables, flexbox, and grid without relying on bloated dependencies.',
      icon: Terminal,
    },
    {
      title: 'Fast & Accessible',
      desc: 'Strict adherence to semantic HTML, ARIA attributes, keyboard accessibility, and optimized bundle footprints.',
      icon: Zap,
    },
    {
      title: 'Obsessive Detail',
      desc: 'Zero-compromise translation from design concepts to production: typography hierarchy, generous spacing, and smooth hover feedback.',
      icon: Compass,
    },
  ]

  return (
    <section id="about" className="section-padding border-top-subtle">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-header-row">
          <span className="section-index font-mono">01 // ABOUT</span>
          <span className="section-tagline">PHILOSOPHY & APPROACH</span>
        </div>

        <div className="about-editorial-grid">
          {/* Main Statement */}
          <div className="about-statement-col">
            <h2 className="editorial-headline">
              &ldquo;GOOD SOFTWARE IS NOT JUST FUNCTIONAL &mdash; IT IS INTENTIONAL, INTUITIVE, AND BUILT TO LAST.&rdquo;
            </h2>
            <div className="about-text-content">
              <p>
                I am a dedicated frontend developer with a focus on building web applications 
                that combine rigorous engineering standards with modern aesthetic sensibilities. 
                My focus lies in turning complex workflows into frictionless, visually cohesive 
                user interfaces.
              </p>
              <p>
                Whether building responsive SaaS dashboards, multi-page platforms, or focused web utilities, 
                I prioritize clean component hierarchies, predictable state management, and lightweight 
                stylesheets over heavy unnecessary abstractions.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="about-principles-col">
            <h3 className="subheading-label font-mono">CORE DISCIPLINES</h3>
            <div className="principles-list">
              {principles.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="principle-card">
                    <div className="principle-header">
                      <div className="principle-icon-box">
                        <Icon size={18} />
                      </div>
                      <span className="principle-num font-mono">0{idx + 1}</span>
                    </div>
                    <h4 className="principle-title">{item.title}</h4>
                    <p className="principle-desc">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
