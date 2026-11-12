import { ArrowUp, Globe, Link2, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setLocalTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section border-top-subtle">
      <div className="section-container">
        {/* Main Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, 'hero')}
              className="footer-brand font-mono"
            >
              OL. / OLABODE SAMUEL
            </a>
            <p className="footer-tagline">
              Frontend developer crafting refined, high-performance web applications.
            </p>
            <div className="footer-time-badge font-mono">
              <span className="time-dot"></span>
              <span>LOCAL TIME: {localTime || 'LAGOS / UTC+1'}</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title font-mono">SECTIONS</span>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => scrollTo(e, 'hero')}>Index</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}>Services</a></li>
              <li><a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>Selected Work</a></li>
              <li><a href="#skills" onClick={(e) => scrollTo(e, 'skills')}>Tooling</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <span className="footer-col-title font-mono">NETWORK</span>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348138566192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:olabodesamuel0401@gmail.com"
                  className="social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-top-btn-col">
            <button
              onClick={scrollToTop}
              className="btn-back-to-top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span className="font-mono">BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-row font-mono">
          <span>&copy; {new Date().getFullYear()} OLABODE SAMUEL. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED &amp; ENGINEERED WITH REACT + VITE.</span>
        </div>
      </div>
    </footer>
  )
}
