import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Theme State: 'light' (default) or 'dark', respecting system preference on first load
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme')
    if (saved === 'dark' || saved === 'light') {
      return saved
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  // Apply theme class to <html> element and persist in localStorage
  useEffect(() => {
    document.documentElement.classList.remove('theme-light', 'theme-dark')
    document.documentElement.classList.add(`theme-${theme}`)
    localStorage.setItem('portfolio_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Scroll spy to update active navigation item
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'projects', 'skills', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`portfolio-app theme-${theme}`}>
      {/* Fixed Minimal Navigation with Theme Switcher */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  )
}
