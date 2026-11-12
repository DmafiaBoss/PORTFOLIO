import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
      if (id === 'contact') {
        const input = document.getElementById('contact-name')
        if (input) {
          setTimeout(() => input.focus(), 600)
        }
      }
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Top Status */}
        <div className="hero-status-row">
          <div className="status-badge">
            <span className="status-indicator"></span>
            <span className="status-text">Frontend Developer &bull; Available for Q4/Q1 Roles & Projects</span>
          </div>
          <span className="hero-location font-mono">GLOBAL REMOTE / NIGERIA</span>
        </div>

        {/* Main Headline */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            <span className="title-line">I BUILD DIGITAL</span>
            <span className="title-line text-outline">EXPERIENCES.</span>
          </h1>
        </div>

        {/* Supporting Narrative & CTAs */}
        <div className="hero-bottom-grid">
          <div className="hero-description">
            <p className="lead-text">
              Hi, I&apos;m <strong>Olabode Samuel</strong>. I engineer high-performance web applications 
              at the intersection of clean architecture, modern React ecosystems, and rigorous 
              design fidelity.
            </p>
            <div className="hero-tags">
              <span className="tag-pill">React &bull; Vite</span>
              <span className="tag-pill">Modern Web Architecture</span>
              <span className="tag-pill">Accessible UI/UX</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, 'projects')}
              className="btn-hero-primary"
            >
              <span>View Selected Work</span>
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="btn-hero-secondary"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Editorial Value Highlights */}
        <div className="hero-highlights">
          <div className="highlight-item">
            <span className="highlight-num font-mono">01</span>
            <div className="highlight-text">
              <h4>Design Fidelity</h4>
              <p>Translating wireframes and interactions into pixel-precise code.</p>
            </div>
          </div>
          <div className="highlight-item">
            <span className="highlight-num font-mono">02</span>
            <div className="highlight-text">
              <h4>Clean Architecture</h4>
              <p>Modular, maintainable components with predictable state flow.</p>
            </div>
          </div>
          <div className="highlight-item">
            <span className="highlight-num font-mono">03</span>
            <div className="highlight-text">
              <h4>Performance First</h4>
              <p>Fast render times, responsive layouts, and zero bloat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
