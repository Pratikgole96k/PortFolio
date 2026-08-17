import React from 'react';
import { 
  GitCommit, 
  Sparkles, 
  BrainCircuit, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { trainingData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="training" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BrainCircuit size={14} /> Professional Growth
          </div>
          <h2 className="section-title">
            AI / Machine Learning <span className="gradient-accent-text">Training Roadmap</span>
          </h2>
          <p className="section-subtitle">
            A structured curriculum of applied data science, statistical modeling, exploratory analysis, and continuous practical problem solving.
          </p>
        </div>

        {/* Training Main Highlight Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(56, 189, 248, 0.05) 100%)',
            border: '1px solid var(--border-accent)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>
                <Clock size={12} /> {trainingData.status}
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{trainingData.program}</h3>
            </div>
            <a href="#ai-lab" className="btn btn-emerald btn-sm">
              <Sparkles size={14} /> Try Live Lab Demos
            </a>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {trainingData.description}
          </p>
        </div>

        {/* Modular Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {trainingData.modules.map((mod, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`badge ${mod.status === 'Completed' ? 'badge-emerald' : mod.status === 'Mastered' ? 'badge-cyan' : 'badge-purple'}`}
                  >
                    {mod.status}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {mod.title}
                </h4>

                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {mod.details}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                <CheckCircle2 size={14} /> Applied Hands-on with Python
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
