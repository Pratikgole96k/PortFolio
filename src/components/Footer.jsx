import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Code2, 
  PartyPopper 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onLaunchConfetti }) {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format to IST (Asia/Kolkata)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(5, 8, 15, 0.95)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Left Brand info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#ffffff'
                }}
              >
                PG
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{personalInfo.name}</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '380px' }}>
              Python Developer & AI/ML Fresher passionate about data-driven intelligence and robust software systems.
            </p>
          </div>

          {/* Center: Live Local Time in Nashik */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.85rem'
            }}
          >
            <div className="status-dot" />
            <span style={{ color: 'var(--text-muted)' }}>Nashik, India (IST):</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>
              {localTime || 'Loading...'}
            </span>
          </div>

          {/* Right: Confetti & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onLaunchConfetti}
              className="btn btn-secondary btn-sm"
              title="Launch Confetti!"
            >
              <PartyPopper size={16} color="var(--accent-amber)" />
              Celebrate!
            </button>

            <button
              onClick={scrollToTop}
              className="btn btn-primary btn-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              Top
            </button>
          </div>
        </div>

        {/* Copyright & Social Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved. Built with React & Modern Web APIs.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>
              Email
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>
              Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
