import { ArrowUpRight, ExternalLink, CheckCircle2, Sparkles, Building2 } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 'luxe-and-co',
      num: '01',
      title: 'Luxe & Co. Hair & Beauty Lounge',
      subtitle: 'Commercial Small Business Website & WhatsApp Booking System',
      category: 'Small Business / Client Demo',
      year: '2026',
      featured: true,
      badge: 'FEATURED CLIENT DEMO',
      liveUrl: 'https://rad-naiad-d3787b.netlify.app/',
      description:
        'A high-converting, mobile-friendly commercial website demo engineered for a premier salon and beauty lounge in Lekki, Lagos. Built to solve customer booking friction and eliminate unlisted pricing by featuring transparent Naira (₦) price menus, salon amenities, real client reviews, and direct WhatsApp appointment booking with instant stylist confirmation.',
      keyFeatures: [
        'Interactive service menu with transparent Naira (₦) pricing',
        'Direct 1-click WhatsApp booking with pre-filled service inquiries',
        'Live studio status (Hours: 9:00 AM – 7:30 PM) & Admiralty Way location',
        'Conversion-optimized, mobile-first UX tailored for retail client bookings',
      ],
      techStack: ['React', 'Vite', 'Mobile-First UX', 'WhatsApp Integration', 'Modern CSS Architecture'],
      mockupType: 'luxe',
    },
    {
      id: 'rovo',
      num: '02',
      title: 'ROVO',
      subtitle: 'Local Services & Professional Marketplace',
      category: 'Marketplace Platform',
      year: '2026',
      featured: false,
      liveUrl: 'https://rovo12.netlify.app/',
      description:
        'A service marketplace web platform connecting individuals across Nigeria with verified local professionals for everyday jobs. Built to simplify finding practical help—from emergency home repairs and plumbing to logistics and long-distance moving—with an intuitive search system and categorized service discovery.',
      keyFeatures: [
        'Curated marketplace connecting clients with local tradespeople',
        'Real-time query search for immediate job requirements',
        'Categorized service directories and profile exploration',
        'Mobile-first responsive layout with clean typography',
      ],
      techStack: ['React', 'JavaScript', 'CSS Grid', 'Responsive Systems'],
      mockupType: 'rovo',
    },
    {
      id: 'flowstate',
      num: '03',
      title: 'FLOWSTATE',
      subtitle: 'Productivity Operating System & Focus Engine',
      category: 'Web Application / Productivity',
      year: '2026',
      featured: false,
      liveUrl: 'https://brilliant-cajeta-ef725c.netlify.app/',
      description:
        'A comprehensive daily focus and productivity application engineered with React and Vite. Features a functional task manager with category and priority filters, an animated circular SVG Pomodoro interval timer with synthesized Web Audio chimes, a study session stopwatch with history logging, and productivity analytics charts.',
      keyFeatures: [
        'Task management with localStorage persistence and filters',
        'Pomodoro focus timer with Web Audio API sound generator',
        'Study tracker stopwatch with subject duration history',
        'Weekly output telemetry & task completion analytics',
      ],
      techStack: ['React', 'Vite', 'LocalStorage', 'Web Audio API', 'Modern CSS'],
      mockupType: 'flowstate',
    },
    {
      id: 'expense-tracker',
      num: '04',
      title: 'Expense Tracker Dashboard',
      subtitle: 'Personal Financial Ledger & Spending Manager',
      category: 'Financial Dashboard',
      year: '2026',
      featured: false,
      liveUrl: 'https://myyexpensetrackerdashboard.netlify.app/',
      description:
        'A personal finance management web tool designed to help users track everyday spending and stay in financial control. Supports denominated Naira (₦) expense logging, dynamic transaction item additions, automatic cumulative total calculation, and bulk data resets with client-side state handling.',
      keyFeatures: [
        'Interactive expense logger denominated in Naira (₦)',
        'Instant client-side calculation of cumulative expenditures',
        'Dynamic list addition with individual deletion controls',
        'Quick-reset functionality to clear monthly expense logs',
      ],
      techStack: ['React', 'State Architecture', 'JavaScript', 'Custom CSS'],
      mockupType: 'expense',
    },
    {
      id: 'calculator',
      num: '05',
      title: 'Howecon Benow Calculator',
      subtitle: 'Precision Arithmetic Web Utility',
      category: 'Utility Tool',
      year: '2026',
      featured: false,
      liveUrl: 'https://howeconbenowcalculator.netlify.app/',
      description:
        'A clean, responsive arithmetic calculator designed with a disciplined grid layout. Engineered with precise floating-point calculation logic, immediate operator feedback, percentage computations, and rapid backspace deletion for seamless everyday numerical operations.',
      keyFeatures: [
        'Full arithmetic engine supporting continuous chained operations',
        'Responsive CSS Grid keypad optimized for mouse & touch input',
        'Percentage, decimal precision, and error-handling routines',
        'Minimalist high-contrast visual display with instant response',
      ],
      techStack: ['JavaScript (ES6+)', 'CSS3 Grid', 'Event Handling', 'Touch UI'],
      mockupType: 'calculator',
    },
  ]

  return (
    <section id="projects" className="section-padding border-top-subtle">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-header-row">
          <span className="section-index font-mono">03 // SELECTED WORK</span>
          <span className="section-tagline">DEPLOYED APPLICATIONS &amp; CLIENT DEMOS</span>
        </div>

        <div className="projects-heading-wrap">
          <h2 className="editorial-headline">
            REAL PRODUCTS &amp; COMMERCIAL CLIENT DEMOS ENGINEERED FOR RESULTS.
          </h2>
          <p className="editorial-subtext">
            Every project below is live on production. Built with rigorous attention to speed, 
            mobile responsiveness, and real business conversion.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="projects-showcase-list">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-feature-card ${project.featured ? 'featured-highlight-card' : ''}`}
            >
              {/* Card Meta Header */}
              <div className="project-card-header">
                <div className="project-meta-left">
                  <span className="project-index font-mono">{project.num}</span>
                  <div className="project-category-wrap">
                    <span className="project-category font-mono">{project.category}</span>
                    <span className="project-year font-mono">{project.year}</span>
                    {project.badge && (
                      <span className="featured-badge font-mono">
                        <Building2 size={12} />
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-btn"
                  aria-label={`Visit live demo for ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Card Body Grid */}
              <div className="project-card-body">
                {/* Visual Preview Frame */}
                <div className="project-preview-frame">
                  <div className="preview-browser-bar">
                    <div className="browser-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <div className="browser-url font-mono">
                      {project.liveUrl.replace('https://', '')}
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="browser-ext-link"
                      title="Open in new tab"
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* High-fidelity Visual Representation */}
                  <div className={`preview-viewport viewport-${project.mockupType}`}>
                    {/* NEW: Luxe & Co. Mockup */}
                    {project.mockupType === 'luxe' && (
                      <div className="mockup-content mockup-luxe">
                        <div className="mock-luxe-header">
                          <div>
                            <span className="mock-luxe-brand">LUXE &amp; CO.</span>
                            <span className="mock-luxe-sub">HAIR &bull; BRAIDS &bull; BEAUTY LOUNGE</span>
                          </div>
                          <span className="mock-luxe-badge font-mono">LEKKI, LAGOS</span>
                        </div>
                        <div className="mock-luxe-body">
                          <div className="mock-luxe-status font-mono">
                            <span className="status-dot"></span>
                            <span>DOORS OPEN TODAY 9:00 AM &ndash; 7:30 PM</span>
                          </div>
                          <h4 className="mock-luxe-tagline">Flawless Hair &amp; Beauty Care. No Endless Waiting.</h4>
                          <div className="mock-luxe-services">
                            <div className="mock-luxe-item">
                              <span>Medium Knotless Braids (Waist)</span>
                              <span className="font-mono mock-price">&#8358;35,000</span>
                            </div>
                            <div className="mock-luxe-item">
                              <span>HD Frontal Customization &amp; Install</span>
                              <span className="font-mono mock-price">&#8358;45,000</span>
                            </div>
                          </div>
                          <div className="mock-luxe-btn">
                            <span>Book on WhatsApp &rarr;</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'flowstate' && (
                      <div className="mockup-content mockup-flowstate">
                        <div className="mock-nav">
                          <span className="mock-brand font-mono">FLOWSTATE</span>
                          <span className="mock-pill font-mono">25:00 FOCUS</span>
                        </div>
                        <div className="mock-body">
                          <div className="mock-timer-ring">
                            <div className="mock-time font-mono">24:45</div>
                            <span className="mock-mode">DEEP WORK</span>
                          </div>
                          <div className="mock-tasks">
                            <div className="mock-task checked">
                              <span className="mock-box">&#10003;</span>
                              <span>Master React components</span>
                            </div>
                            <div className="mock-task">
                              <span className="mock-box"></span>
                              <span>Build production architecture</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'rovo' && (
                      <div className="mockup-content mockup-rovo">
                        <div className="mock-nav">
                          <span className="mock-brand font-mono">rovo .</span>
                          <span className="mock-pill">Find a Pro &nearr;</span>
                        </div>
                        <div className="mock-hero">
                          <span className="mock-tag font-mono">GOOD PEOPLE. PRACTICAL HELP.</span>
                          <h4>Every problem has a solution.</h4>
                          <div className="mock-search-bar">
                            <span>&telrec; What do you need help with?</span>
                            <button className="mock-search-btn">Search</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'expense' && (
                      <div className="mockup-content mockup-expense">
                        <div className="mock-nav">
                          <span className="mock-brand font-mono">MY EXPENSES</span>
                          <span className="mock-pill font-mono">TOTAL: &#8358;45,500</span>
                        </div>
                        <div className="mock-expense-grid">
                          <div className="mock-expense-form">
                            <div className="mock-input">Expense Name</div>
                            <div className="mock-input">Amount (&#8358;)</div>
                            <div className="mock-btn">+ Add Expense</div>
                          </div>
                          <div className="mock-expense-list">
                            <div className="mock-item">
                              <span>Office Workstation</span>
                              <span className="font-mono">&#8358;32,000</span>
                            </div>
                            <div className="mock-item">
                              <span>Internet Subscription</span>
                              <span className="font-mono">&#8358;13,500</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'calculator' && (
                      <div className="mockup-content mockup-calculator">
                        <div className="mock-calc-screen font-mono">
                          <span className="mock-history">1,250 &times; 8.5%</span>
                          <span className="mock-result">106.25</span>
                        </div>
                        <div className="mock-calc-grid font-mono">
                          <span className="key special">C</span>
                          <span className="key special">DEL</span>
                          <span className="key special">%</span>
                          <span className="key operator">&divide;</span>
                          <span className="key">7</span>
                          <span className="key">8</span>
                          <span className="key">9</span>
                          <span className="key operator">&times;</span>
                          <span className="key">4</span>
                          <span className="key">5</span>
                          <span className="key">6</span>
                          <span className="key operator">&minus;</span>
                          <span className="key">1</span>
                          <span className="key">2</span>
                          <span className="key">3</span>
                          <span className="key operator">+</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-info-col">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-features-list">
                    <span className="features-label font-mono">CORE CAPABILITIES</span>
                    <ul>
                      {project.keyFeatures.map((feat) => (
                        <li key={feat}>
                          <CheckCircle2 size={14} className="feature-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="project-tech-pills">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="project-card-footer">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-visit"
                    >
                      <span>Explore Live Application</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
