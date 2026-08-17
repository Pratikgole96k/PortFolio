import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Code2, 
  BrainCircuit, 
  Database, 
  Download, 
  MapPin, 
  Mail, 
  Phone,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onLaunchConfetti }) {
  const roles = [
    "Python Developer",
    "AI/ML Fresher",
    "Data Pipeline Builder",
    "Problem Solver & CS Graduate"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
            }
          `}</style>

          {/* Left Column: Hero Intro */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '1.5rem'
              }}
            >
              <span className="status-dot" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-emerald)', letterSpacing: '0.02em' }}>
                {personalInfo.status} • {personalInfo.availability}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: '1.2em' }}>
                <span className="gradient-accent-text">{displayedText}</span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    backgroundColor: 'var(--accent-cyan)',
                    marginLeft: '4px',
                    animation: 'blink 1s step-start infinite'
                  }}
                />
              </span>
            </h1>

            <style>{`
              @keyframes blink {
                50% { opacity: 0; }
              }
            `}</style>

            {/* Concise Bio */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '620px'
              }}
            >
              {personalInfo.summary}
            </p>

            {/* Quick Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#ai-lab" className="btn btn-emerald btn-lg">
                <BrainCircuit size={19} />
                Explore AI/ML Lab
              </a>

              <a href="#projects" className="btn btn-secondary btn-lg">
                <Code2 size={19} />
                View Projects
              </a>

              <button
                onClick={() => {
                  onOpenResume();
                  onLaunchConfetti && onLaunchConfetti();
                }}
                className="btn btn-primary btn-lg"
              >
                <Download size={19} />
                Resume & Profile
              </button>
            </div>

            {/* Stat Counters */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {personalInfo.stats.map((st, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    <span className="gradient-text">{st.value}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Holographic Tech Profile Card */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid var(--border-accent)',
                boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
                position: 'relative'
              }}
            >
              {/* Card Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  <Terminal size={14} />
                  <span>pratik_gole.py</span>
                </div>
              </div>

              {/* Developer Profile Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '18px',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
                    flexShrink: 0
                  }}
                >
                  PG
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                    {personalInfo.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {personalInfo.title}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                    <MapPin size={13} />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Interactive Code Snippet Preview */}
              <div
                style={{
                  background: 'rgba(5, 10, 20, 0.8)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.6,
                  color: '#94a3b8',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div><span style={{ color: '#ec4899' }}>class</span> <span style={{ color: '#38bdf8' }}>Developer</span>:</div>
                <div style={{ paddingLeft: '1rem' }}>
                  <span style={{ color: '#a855f7' }}>def</span> <span style={{ color: '#38bdf8' }}>__init__</span>(self):
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                  self.name = <span style={{ color: '#34d399' }}>"{personalInfo.name}"</span>
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                  self.core_stack = [<span style={{ color: '#34d399' }}>"Python"</span>, <span style={{ color: '#34d399' }}>"AI/ML"</span>, <span style={{ color: '#34d399' }}>"SQL"</span>]
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                  self.status = <span style={{ color: '#34d399' }}>"Ready to Innovate"</span>
                </div>
                <div style={{ paddingLeft: '1rem' }}>
                  <span style={{ color: '#a855f7' }}>def</span> <span style={{ color: '#38bdf8' }}>build_solution</span>(self, problem):
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                  <span style={{ color: '#ec4899' }}>return</span> <span style={{ color: '#38bdf8' }}>MLPipeline</span>(problem).optimize()
                </div>
              </div>

              {/* Core Skill Badges */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', fontWeight: 600 }}>
                  Primary Competencies
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge badge-cyan"><Code2 size={12} /> Python</span>
                  <span className="badge badge-emerald"><BrainCircuit size={12} /> Machine Learning</span>
                  <span className="badge badge-purple"><Database size={12} /> SQL & Relational DB</span>
                  <span className="badge"><Cpu size={12} /> Data Preprocessing & EDA</span>
                  <span className="badge"><CheckCircle2 size={12} /> OOP & DSA</span>
                </div>
              </div>

              {/* Direct Quick Contact Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: 'var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    title="Send Direct Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      color: 'var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    title="Call Pratik"
                  >
                    <Phone size={16} />
                  </a>
                </div>

                <a
                  href="#contact"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  Direct Connect <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
