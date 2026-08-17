import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Copy, 
  CheckCircle2, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles,
  BookOpen,
  Award,
  Code2,
  BrainCircuit,
  Database
} from 'lucide-react';
import { personalInfo, educationData, certificationsData, projectsData, skillsData, trainingData } from '../data/portfolioData';

export default function ResumeViewer({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const rawResume = `
PRATIK GOLE
Python Developer | AI/ML Fresher
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinHandle}

PROFESSIONAL SUMMARY
${personalInfo.summary}

TECHNICAL SKILLS
- Programming Languages: Python, C, JavaScript, PHP
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
• M.Sc Computer Science (Pursuing) (2026 – Present) - K.S.K.W. College, Nashik
• Bachelor of Computer Science (BCS) (2023 – 2026) - Karmaveer Ganpat Dada More College, Niphad
• Higher Secondary Certificate (HSC) (2022 – 2023) - Janata English School & Jr. College (50.33%)
• Secondary School Certificate (SSC) (2019 – 2020) - Niphad English School (78.00%)

CERTIFICATIONS
• Python Programming Certification
• Salesforce Certification — ExcelR
    `.trim();

    navigator.clipboard.writeText(rawResume);
    setCopied(true);
    onShowToast && onShowToast({ type: 'success', message: 'Full plain-text resume copied to clipboard!' });
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header no-print">
          <div className="section-tag">
            <FileText size={14} /> Official CV
          </div>
          <h2 className="section-title">
            Interactive <span className="gradient-text">Resume Viewer</span>
          </h2>
          <p className="section-subtitle">
            Clean, ATS-standard formatted resume ready for instant printing, download, or textual copy.
          </p>
        </div>

        {/* Action Toolbar */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <button onClick={handlePrint} className="btn btn-primary">
            <Printer size={16} /> Print / Save as PDF
          </button>
          <button onClick={handleCopyText} className="btn btn-secondary">
            {copied ? <CheckCircle2 size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
            {copied ? "Copied to Clipboard!" : "Copy Plain Text Resume"}
          </button>
          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Invitation%20-%20Pratik%20Gole&body=Hi%20Pratik,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20resume%20and%20would%20like%20to%20connect%20for%20an%20opportunity.`}
            className="btn btn-emerald"
          >
            <Mail size={16} /> Request Official PDF Copy
          </a>
        </div>

        {/* Formatted ATS Resume Container */}
        <div
          className="resume-sheet"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border-accent)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.6rem' }}>
              {personalInfo.title}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} style={{ color: 'inherit' }}>{personalInfo.phone}</a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--accent-cyan)' }}>{personalInfo.email}</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>{personalInfo.linkedinHandle}</a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', textAlign: 'justify' }}>
              {personalInfo.summary}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
              <div>
                <strong>Programming Languages:</strong> Python, C
              </div>
              <div>
                <strong>AI / Machine Learning:</strong> Artificial Intelligence, Machine Learning, Data Analysis, Data Preprocessing, Exploratory Data Analysis (EDA), Model Training, Model Evaluation, Supervised Learning, Unsupervised Learning, Data Visualization
              </div>
              <div>
                <strong>Web Development:</strong> HTML5, CSS3, JavaScript, PHP
              </div>
              <div>
                <strong>Database:</strong> SQL, Relational Database Design
              </div>
              <div>
                <strong>Core Computer Science:</strong> Data Structures and Algorithms, Object-Oriented Programming (OOP), Computer Networks
              </div>
              <div>
                <strong>Tools & Practices:</strong> Version Control Fundamentals, Debugging, Problem Solving, Analytical Thinking, Team Collaboration
              </div>
            </div>
          </div>

          {/* Section: AI/ML Training */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)' }}>
                AI / Machine Learning Training
              </h3>
              <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--accent-emerald)', fontWeight: 600 }}>Ongoing</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.4rem' }}>
              Artificial Intelligence & Machine Learning Course
            </div>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Studying core AI and Machine Learning concepts and applying them using Python.</li>
              <li>Practicing data preprocessing and exploratory data analysis (EDA) on structured datasets.</li>
              <li>Applying supervised and unsupervised learning techniques to sample problems.</li>
              <li>Building working knowledge of model training, model evaluation, and data visualization.</li>
              <li>Developing practical AI/ML mini-projects to reinforce coursework concepts.</li>
            </ul>
          </div>

          {/* Section: Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Projects
            </h3>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Innovative E-Learning Platform</span>
                <span style={{ fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--accent-cyan)' }}>HTML, CSS, JavaScript, PHP, SQL</span>
              </div>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Built an e-learning platform enabling online course management and improved user engagement.</li>
                <li>Implemented user registration, course catalog browsing, and progress-tracking functionality.</li>
                <li>Designed and normalized a SQL database schema to store and manage application data.</li>
                <li>Created an admin dashboard concept for managing courses, content, and registered users.</li>
                <li>Developed responsive frontend components using HTML, CSS, and JavaScript.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Education
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>MSc Computer Science (Pursuing)</span>
                  <span>2026 – Present</span>
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>K.S.K.W. College, Nashik, Maharashtra, India</div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>Bachelor of Computer Science (BCS)</span>
                  <span>2023 – 2026</span>
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Karmaveer Ganpat Dada More College, Niphad, Maharashtra, India</div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>Higher Secondary Certificate (HSC)</span>
                  <span>2022 – 2023</span>
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Janata English School & Jr. College, Saikheda, Nashik, Maharashtra, India — 50.33%</div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>Secondary School Certificate (SSC)</span>
                  <span>2019 – 2020</span>
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>Niphad English School, Niphad, Maharashtra, India — 78.00%</div>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Certifications
            </h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              <li>Python Programming Certification</li>
              <li>Salesforce Certification — ExcelR</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
