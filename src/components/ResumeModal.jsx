import React from 'react';
import { X, Printer, Copy, CheckCircle2, Download, Mail, FileText } from 'lucide-react';
import { personalInfo, educationData, certificationsData, projectsData, trainingData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawResume = `
PRATIK GOLE
Python Developer | AI/ML Fresher
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinHandle}

PROFESSIONAL SUMMARY
${personalInfo.summary}

TECHNICAL SKILLS
- Programming Languages: Python, C
- AI / Machine Learning: Artificial Intelligence, Machine Learning, Data Analysis, Data Preprocessing, Exploratory Data Analysis (EDA), Model Training, Model Evaluation, Supervised Learning, Unsupervised Learning, Data Visualization
- Web Development: HTML5, CSS3, JavaScript, PHP
- Database: SQL, Relational Database Design
- Core Computer Science: Data Structures and Algorithms, Object-Oriented Programming (OOP), Computer Networks
- Tools & Practices: Version Control Fundamentals, Debugging, Problem Solving, Analytical Thinking, Team Collaboration

AI / MACHINE LEARNING TRAINING
${trainingData.program} (Ongoing)
• Studying core AI and Machine Learning concepts and applying them using Python.
• Practicing data preprocessing and exploratory data analysis (EDA) on structured datasets.
• Applying supervised and unsupervised learning techniques to sample problems.
• Building working knowledge of model training, model evaluation, and data visualization.
• Developing practical AI/ML mini-projects to reinforce coursework concepts.

PROJECTS
Innovative E-Learning Platform (HTML, CSS, JavaScript, PHP, SQL)
• Built an e-learning platform enabling online course management and improved user engagement.
• Implemented user registration, course catalog browsing, and progress-tracking functionality.
• Designed and normalized a SQL database schema to store and manage application data.
• Created an admin dashboard concept for managing courses, content, and registered users.
• Developed responsive frontend components using HTML, CSS, and JavaScript.

EDUCATION
• MSc Computer Science (Pursuing) (2026 – Present) - K.S.K.W. College, Nashik
• Bachelor of Computer Science (BCS) (2023 – 2026) - Karmaveer Ganpat Dada More College, Niphad
• Higher Secondary Certificate (HSC) (2022 – 2023) - Janata English School & Jr. College (50.33%)
• Secondary School Certificate (SSC) (2019 – 2020) - Niphad English School (78.00%)

CERTIFICATIONS
• Python Programming Certification
• Salesforce Certification — ExcelR
    `.trim();

    navigator.clipboard.writeText(rawResume);
    onShowToast && onShowToast({ type: 'success', message: 'Full resume copied to clipboard!' });
  };

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
        zIndex: 9995,
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
          maxWidth: '820px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2.5rem',
          border: '1px solid var(--accent-cyan)',
          boxShadow: 'var(--shadow-lg), 0 0 50px rgba(56, 189, 248, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Curriculum Vitae Preview</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={15} /> Print / Save PDF
            </button>
            <button onClick={handleCopyText} className="btn btn-secondary btn-sm">
              <Copy size={15} /> Copy Text
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
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
        </div>

        {/* Formatted Content */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border-accent)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase' }}>{personalInfo.name}</h2>
          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{personalInfo.title}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {personalInfo.location} | {personalInfo.phone} | {personalInfo.email} | {personalInfo.linkedinHandle}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
          <div>
            <h4 style={{ fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              Professional Summary
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{personalInfo.summary}</p>
          </div>

          <div>
            <h4 style={{ fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              Technical Skills
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', color: 'var(--text-secondary)' }}>
              <div><strong>Programming:</strong> Python, C, JavaScript, PHP</div>
              <div><strong>AI / Machine Learning:</strong> Preprocessing, EDA, Model Training, Evaluation, Supervised/Unsupervised Learning, Data Viz</div>
              <div><strong>Web & Database:</strong> HTML5, CSS3, JavaScript, PHP, SQL, Relational Design</div>
              <div><strong>Core CS:</strong> DSA, OOP, Computer Networks, Debugging, Problem Solving</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              Featured Project
            </h4>
            <div style={{ fontWeight: 700 }}>Innovative E-Learning Platform (HTML, CSS, JS, PHP, SQL)</div>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              <li>Built an online course management platform with role-based auth and progress tracking.</li>
              <li>Normalized SQL schema to 3NF and implemented interactive admin dashboard.</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              Education & Certifications
            </h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>
              <li><strong>MSc Computer Science (Pursuing)</strong> (2026 – Present) - K.S.K.W. College, Nashik</li>
              <li><strong>Bachelor of Computer Science (BCS)</strong> (2023 – 2026) - Karmaveer Ganpat Dada More College</li>
              <li><strong>Certifications:</strong> Python Programming Certification, Salesforce Certification (ExcelR)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
