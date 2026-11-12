import { useState } from 'react'
import { Mail, MessageSquare, Copy, Check, ArrowUpRight, Send } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Frontend Engineering',
    message: '',
  })

  // Contact details
  const contactEmail = 'olabodesamuel0401@gmail.com'
  const whatsappNumber = '2348138566192'
  const whatsappDisplay = '+234 813 856 6192'

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Real client-side contact action using mailto (NO fake form submission)
  const handleDirectEmailSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please enter your name and a brief message.')
      return
    }

    const subject = encodeURIComponent(
      `[Project Inquiry] ${formData.projectType} — From ${formData.name}`
    )
    const body = encodeURIComponent(
      `Hello Olabode,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Olabode, I viewed your portfolio and would like to discuss a project.`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="section-padding border-top-subtle">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-header-row">
          <span className="section-index font-mono">05 // CONTACT</span>
          <span className="section-tagline">LET&apos;S COLLABORATE</span>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Inquiries */}
          <div className="contact-info-col">
            <h2 className="editorial-headline">
              LET&apos;S BUILD SOMETHING EXCEPTIONAL TOGETHER.
            </h2>
            <p className="contact-lead-text">
              Have an opening, an upcoming project, or want to discuss frontend architecture? 
              I am available for freelance engagements and full-time engineering opportunities.
            </p>

            {/* Direct Connect Buttons */}
            <div className="direct-channels-list">
              {/* Email Card */}
              <div className="channel-card">
                <div className="channel-icon">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label font-mono">DIRECT INBOX</span>
                  <a href={`mailto:${contactEmail}`} className="channel-link">
                    {contactEmail}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="channel-action-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <span className="copied-tag font-mono">
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="channel-card">
                <div className="channel-icon">
                  <MessageSquare size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label font-mono">WHATSAPP CHAT</span>
                  <button onClick={openWhatsApp} className="channel-link text-left">
                    {whatsappDisplay} &rarr;
                  </button>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="channel-action-btn"
                  title="Open WhatsApp chat"
                  aria-label="Open WhatsApp"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* Availability Note */}
            <div className="contact-availability-note">
              <span className="status-dot"></span>
              <p>
                <strong>Current Status:</strong> Actively accepting new projects. Typical response 
                time is under 12 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Mailto Form Composer */}
          <div className="contact-form-col">
            <div className="contact-card">
              <div className="card-header-mono">
                <span className="font-mono">START A CONVERSATION</span>
                <span className="font-mono text-muted">DIRECT TRANSMISSION</span>
              </div>

              <form onSubmit={handleDirectEmailSubmit} className="contact-form">
                <div className="form-field">
                  <label htmlFor="contact-name">YOUR NAME *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mono-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">YOUR EMAIL *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mono-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-type">PROJECT SCOPE</label>
                  <select
                    id="contact-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="mono-select"
                  >
                    <option value="Frontend Engineering">Frontend Web Engineering</option>
                    <option value="Full Web Application">Interactive Web Application</option>
                    <option value="UI/UX Implementation">Figma to React Implementation</option>
                    <option value="Full-time Role">Full-time Engineering Role</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">BRIEF OVERVIEW *</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    required
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mono-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-contact">
                  <span>Send Message via Email Client</span>
                  <Send size={15} />
                </button>
                <p className="form-disclaimer font-mono">
                  &bull; Opens your default email app with pre-filled details. No fake submission.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
