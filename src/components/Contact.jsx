import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  Clock,
  Briefcase
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast, onLaunchConfetti }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Python Developer Role',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast && onShowToast({ type: 'success', message: `${fieldName} copied to clipboard!` });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleQuickTemplate = (subject, defaultMsg) => {
    setFormData(prev => ({
      ...prev,
      roleInterest: subject,
      message: defaultMsg
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast && onShowToast({ type: 'info', message: 'Please fill out all required fields.' });
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast && onShowToast({ type: 'success', message: 'Message recorded! Opening your default email client.' });
      onLaunchConfetti && onLaunchConfetti();

      // Open mailto fallback
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.roleInterest + ' - ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Contact: ' + formData.email)}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> Let's Connect
          </div>
          <h2 className="section-title">
            Get in Touch & <span className="gradient-text">Hire Pratik</span>
          </h2>
          <p className="section-subtitle">
            Looking for a dedicated Python Developer or AI/ML Fresher for full-time positions, internships, or collaborative projects.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem'
          }}
          className="contact-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .contact-grid { grid-template-columns: 0.9fr 1.1fr !important; }
            }
          `}</style>

          {/* Left: Direct Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--accent-cyan)" />
                Direct Communication Channels
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'Email')}
                    className="btn btn-secondary btn-sm"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <CheckCircle2 size={15} color="var(--accent-emerald)" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Phone Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone Number</div>
                      <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                    className="btn btn-secondary btn-sm"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone number' ? <CheckCircle2 size={15} color="var(--accent-emerald)" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>LinkedIn Network</div>
                      <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                        {personalInfo.linkedinHandle}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Connect
                  </a>
                </div>

                {/* Location Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Based In</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <Clock size={20} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Average response time: <strong>Within 24 Hours</strong> for recruiter inquiries and technical discussions.
              </span>
            </div>
          </div>

          {/* Right: Interactive Message Composer */}
          <div className="glass-card" style={{ padding: '2.25rem', border: '1px solid var(--border-accent)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={18} color="var(--accent-emerald)" />
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Select a quick topic or compose your custom message:
            </p>

            {/* Quick Template Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              <button
                type="button"
                onClick={() => handleQuickTemplate("Python Developer Opportunity", "Hi Pratik, we have an exciting entry-level Python Developer role and would love to schedule a preliminary conversation.")}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.78rem' }}
              >
                + Python Job Offer
              </button>
              <button
                type="button"
                onClick={() => handleQuickTemplate("AI/ML Internship Inquiry", "Hi Pratik, our data team has an opening for an AI/ML Intern. We were impressed by your coursework and project foundation.")}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.78rem' }}
              >
                + AI/ML Internship
              </button>
              <button
                type="button"
                onClick={() => handleQuickTemplate("Schedule Interview", "Hi Pratik, we would like to invite you for a technical interview round for our developer position.")}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.78rem' }}
              >
                + Schedule Interview
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Hiring Manager"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Purpose / Role</label>
                <select
                  value={formData.roleInterest}
                  onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                  className="form-select"
                >
                  <option value="Python Developer Role">Entry-Level Python Developer Role</option>
                  <option value="AI/ML Intern / Junior Developer">AI/ML Intern / Junior Developer</option>
                  <option value="Data Analyst / Python Engineer">Data Analyst / Python Engineer</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Project</option>
                  <option value="General Technical Inquiry">General Discussion / Networking</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  required
                  placeholder="Type your message, opportunity details, or questions here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message to Pratik
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
