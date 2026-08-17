import React from 'react';
import { 
  User, 
  Code2, 
  BrainCircuit, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone,
  Briefcase,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      color: "var(--accent-cyan)",
      title: "Python & Core Programming",
      description:
        "Solid mastery of Python and C programming, object-oriented architecture, data structures, and writing clean, scalable computational algorithms."
    },
    {
      icon: BrainCircuit,
      color: "var(--accent-emerald)",
      title: "AI/ML & Data Science Workflow",
      description:
        "Comprehensive knowledge of data preprocessing, exploratory data analysis (EDA), supervised and unsupervised model training, and performance evaluation metrics."
    },
    {
      icon: Database,
      color: "var(--accent-purple)",
      title: "Relational DB & Full Stack Basics",
      description:
        "Hands-on experience in SQL database schema design, normalization (up to 3NF), and web development (HTML5, CSS3, JavaScript, PHP)."
    },
    {
      icon: Sparkles,
      color: "var(--accent-amber)",
      title: "Analytical Problem Solving",
      description:
        "Methodical problem decomposition, rigorous debugging, quick learning curve, and enthusiastic dedication to production-grade engineering."
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} /> About Me
          </div>
          <h2 className="section-title">
            Engineering Solutions with <span className="gradient-text">Code & Intelligence</span>
          </h2>
          <p className="section-subtitle">
            Bridging core computer science fundamentals with modern Artificial Intelligence and practical software development.
          </p>
        </div>

        {/* Top Grid: Detailed Bio & Quick Details Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
          className="about-top-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              .about-top-grid { grid-template-columns: 1.25fr 0.75fr !important; }
            }
          `}</style>

          {/* Left: Professional Story */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Layers size={20} color="var(--accent-cyan)" />
              Professional Background
            </h3>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I am a <strong>Bachelor of Computer Science (BCS)</strong> graduate and currently pursuing my <strong>Master of Science in Computer Science (M.Sc CS)</strong> at K.S.K.W. College, Nashik. My technical journey is anchored in a rigorous understanding of computer science principles, algorithmic problem-solving, and continuous experimentation.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Through my dedicated AI/ML specialization and project-driven learning, I specialize in the complete data science pipeline—from raw data preprocessing and exploratory analysis to model training, evaluation, and visualization. Simultaneously, I bring practical web and database engineering expertise (HTML, CSS, JavaScript, PHP, SQL) to craft functional, end-to-end applications.
            </p>

            {/* Target Roles Tags */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Briefcase size={16} color="var(--accent-emerald)" />
                Target Opportunities:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {personalInfo.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.35rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    ✓ {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Info Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(20, 30, 55, 0.95) 100%)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Fast Facts & Status
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{personalInfo.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <GraduationCap size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Education</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>M.Sc Computer Science (Pursuing)</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>K.S.K.W. College, Nashik</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Mail size={18} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</div>
                    <a href={`mailto:${personalInfo.email}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', wordBreak: 'break-all' }}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Phone size={18} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone</div>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                Get In Touch With Pratik
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: 4 Technical Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: pillar.color
                  }}
                >
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
