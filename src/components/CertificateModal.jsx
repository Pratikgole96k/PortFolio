import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 9996,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '2.5rem',
          border: '1px solid var(--accent-emerald)',
          boxShadow: 'var(--shadow-lg), 0 0 40px rgba(16, 185, 129, 0.3)',
          textAlign: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Certificate Badge Visual */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)',
            border: '2px solid var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-emerald)',
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
          }}
        >
          <ShieldCheck size={42} />
        </div>

        <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
          Official Verified Credential
        </span>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
          {cert.title}
        </h3>

        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '1.25rem' }}>
          Issued by {cert.issuer}
        </div>

        <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          {cert.description}
        </p>

        {/* Validated Skills List */}
        <div style={{ textAlign: 'left', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
            Validated Core Domains:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {cert.skillsCovered.map((s, idx) => (
              <span key={idx} style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', color: 'var(--accent-emerald)' }}>
                ✓ {s}
              </span>
            ))}
          </div>
        </div>

        <button onClick={onClose} className="btn btn-secondary" style={{ width: '100%' }}>
          Close Credential Preview
        </button>
      </div>
    </div>
  );
}
