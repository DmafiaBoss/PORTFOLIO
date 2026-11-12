import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Monogram Brand */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, 'hero')}
          className="brand-logo"
          aria-label="Olabode Samuel Home"
        >
          <span className="brand-monogram">OL.</span>
          <span className="brand-full">OLABODE SAMUEL</span>
        </a>

        {/* Availability Badge */}
        <div className="availability-pill desktop-only">
          <span className="status-dot"></span>
          <span>Available for work</span>
        </div>

        {/* Desktop Links */}
        <nav className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="btn-nav"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-overlay">
          <div className="mobile-nav-list">
            <div className="mobile-status">
              <span className="status-dot"></span>
              <span>Available for new opportunities</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="mobile-nav-item"
                onClick={(e) => scrollTo(e, link.id)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-hero-primary mobile-cta"
              onClick={(e) => scrollTo(e, 'contact')}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
