import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Education() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="education" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> Academic Journey & Credentials
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science foundations, higher secondary achievements, and verified technical credentials.
          </p>
        </div>

        {/* 2-Column Grid: Education & Certifications */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem'
          }}
          className="edu-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .edu-grid { grid-template-columns: 1.1fr 0.9fr !important; }
            }
          `}</style>

          {/* Left: Academic Path */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={20} color="var(--accent-cyan)" />
              Academic History
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
              {/* Vertical line connecting education items */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  bottom: '10px',
                  left: '6px',
                  width: '2px',
                  background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
                  borderRadius: '2px'
                }}
              />

              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    position: 'relative'
                  }}
                >
                  {/* Glowing Node Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-1.85rem',
                      top: '1.5rem',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: idx === 0 ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
                      border: '2px solid #ffffff',
                      boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)'
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className={`badge ${edu.status === 'Pursuing' ? 'badge-emerald' : 'badge-cyan'}`}>
                      {edu.status}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} /> {edu.duration}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h4>

                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
                    <MapPin size={13} /> {edu.location} {edu.grade && `• Score: ${edu.grade}`}
                  </div>

                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Badges */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award size={20} color="var(--accent-emerald)" />
              Professional Certifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    border: '1px solid var(--border-accent)',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(15, 23, 42, 0.8) 100%)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-emerald)'
                      }}
                    >
                      <ShieldCheck size={22} />
                    </div>
                    <span className="badge badge-emerald">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {cert.title}
                  </h4>

                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    Issuer: {cert.issuer}
                  </div>

                  <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    {cert.description}
                  </p>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Competencies Validated:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                      {cert.skillsCovered.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          ✓ {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveCert(cert)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <Award size={14} /> View Verified Credential Badge
                  </button>
                </div>
              ))}

              {/* Fast verification box */}
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  background: 'rgba(56, 189, 248, 0.05)',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                  <Sparkles size={16} /> Academic Excellence & Verifiability
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Transcripts, mark sheets, and credential certificates are readily available for validation upon request during interview processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}
