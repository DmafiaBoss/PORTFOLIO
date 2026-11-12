import { ArrowDown, MessageSquare, ArrowUpRight } from 'lucide-react'

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

  const whatsappUrl =
    'https://wa.me/2348138566192?text=Hello%20Samuel%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.'

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Top Status */}
        <div className="hero-status-row">
          <div className="status-badge">
            <span className="status-indicator"></span>
            <span className="status-text">
              Frontend Developer &bull; Websites for Small Businesses &amp; Brands
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-location-wa font-mono"
          >
            <span>LAGOS, NIGERIA &bull; WHATSAPP: +234 813 856 6192</span>
          </a>
        </div>

        {/* Main Headline */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            <span className="title-line">I BUILD DIGITAL</span>
            <span className="title-line text-outline">EXPERIENCES.</span>
          </h1>
        </div>

        {/* Supporting Intro & CTAs */}
        <div className="hero-bottom-grid">
          <div className="hero-description">
            <p className="lead-text">
              Hi, I&apos;m <strong>Olabode Samuel</strong> &mdash; a frontend developer crafting modern, 
              responsive, and high-converting web applications. I build fast, mobile-friendly websites 
              that showcase your services, display transparent prices, and turn everyday visitors into paying clients.
            </p>
            <div className="hero-tags">
              <span className="tag-pill">Small Business Websites</span>
              <span className="tag-pill">React &bull; Vite</span>
              <span className="tag-pill">Direct WhatsApp Integration</span>
              <span className="tag-pill">Mobile-First Responsiveness</span>
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-whatsapp"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Chat</span>
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

        {/* Value Highlights */}
        <div className="hero-highlights">
          <div className="highlight-item">
            <span className="highlight-num font-mono">01</span>
            <div className="highlight-text">
              <h4>Direct Customer Conversion</h4>
              <p>Turn website visitors into customer inquiries with frictionless WhatsApp booking.</p>
            </div>
          </div>
          <div className="highlight-item">
            <span className="highlight-num font-mono">02</span>
            <div className="highlight-text">
              <h4>Fast on Mobile Devices</h4>
              <p>Engineered to load instantly on 3G/4G smartphones with clean, lightweight React code.</p>
            </div>
          </div>
          <div className="highlight-item">
            <span className="highlight-num font-mono">03</span>
            <div className="highlight-text">
              <h4>Clear Architecture &amp; Trust</h4>
              <p>Transparent pricing menus, verified reviews, and responsive layouts that elevate your brand.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
