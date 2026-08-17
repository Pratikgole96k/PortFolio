import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  CheckCircle2, 
  Code2, 
  BrainCircuit, 
  FileText, 
  Mail,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData, certificationsData, trainingData } from '../data/portfolioData';

export default function AiAssistant({ onOpenResume, onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 I'm Pratik's AI Portfolio Assistant. Ask me anything about Pratik's Python development skills, AI/ML training, projects, or education!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickQuestions = [
    "What are his core skills?",
    "Tell me about the E-Learning project",
    "What AI/ML algorithms does he know?",
    "How can I contact or hire him?",
    "What is his education background?"
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(query);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponse.text, actions: botResponse.actions }]);
      setIsTyping(false);
    }, 600);
  };

  const generateBotResponse = (q) => {
    const lower = q.toLowerCase();

    if (lower.includes('skill') || lower.includes('python') || lower.includes('stack') || lower.includes('technolog')) {
      return {
        text: `Pratik has a robust technical stack centered around **Python** and **AI/Machine Learning**:\n\n• **Programming:** Python (OOP, Data Structures, Scripting), C, JavaScript, PHP\n• **AI/ML:** Data Preprocessing, Exploratory Data Analysis (EDA), Model Training & Evaluation (MSE, RMSE, R²), Supervised & Unsupervised Learning\n• **Databases:** SQL, Relational Database Design (3NF Normalization), Query Optimization\n• **Web:** HTML5, CSS3, JavaScript, PHP`,
        actions: [{ label: "View Technical Skills Section", href: "#skills" }]
      };
    }

    if (lower.includes('project') || lower.includes('e-learning') || lower.includes('portfolio') || lower.includes('app')) {
      return {
        text: `Pratik has engineered notable projects including:\n\n1. **Innovative E-Learning Platform** (HTML, CSS, JS, PHP, SQL) — Features role-based auth, course catalog, progress tracking, normalized 3NF schema, and admin dashboard.\n2. **AI/ML Predictive & EDA Intelligence Lab** (Python) — Interactive data preprocessing, automated EDA, and supervised learning evaluation.\n3. **Relational Database & Student Analytics Engine** (SQL, Python) — Multi-table optimization, indexing, and analytics reporting.`,
        actions: [{ label: "Explore Projects Showcase", href: "#projects" }]
      };
    }

    if (lower.includes('ai') || lower.includes('ml') || lower.includes('machine learning') || lower.includes('training') || lower.includes('course') || lower.includes('algorithm')) {
      return {
        text: `Pratik is undergoing intensive **AI & Machine Learning Specialization** covering:\n\n• Data Preprocessing (missing values, feature scaling, encoding)\n• Exploratory Data Analysis (EDA) on complex datasets\n• Supervised Learning (Linear Regression, KNN, Decision Trees)\n• Unsupervised Learning (Clustering, PCA concepts)\n• Model Evaluation Metrics (MSE, RMSE, R², Confusion Matrices)\n\nYou can test his interactive AI models right in the **AI Lab** section!`,
        actions: [{ label: "Open Interactive AI Lab", href: "#ai-lab" }]
      };
    }

    if (lower.includes('education') || lower.includes('college') || lower.includes('degree') || lower.includes('bcs') || lower.includes('msc') || lower.includes('grade')) {
      return {
        text: `Pratik's academic background includes:\n\n• **MSc Computer Science (Pursuing)** (2026–Present) at K.S.K.W. College, Nashik\n• **Bachelor of Computer Science (BCS)** (2023–2026) at Karmaveer Ganpat Dada More College, Niphad\n• **HSC (Science):** Janata English School & Jr. College (50.33%)\n• **SSC:** Niphad English School (78.00%)\n\nHe also holds a **Python Programming Certification** and a **Salesforce Certification (ExcelR)**.`,
        actions: [{ label: "View Education & Certifications", href: "#education" }]
      };
    }

    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('location')) {
      return {
        text: `You can reach Pratik directly:\n\n• **Email:** pratikgole96k@gmail.com\n• **Phone:** +91 9021263085\n• **Location:** Nashik, Maharashtra, India\n• **LinkedIn:** linkedin.com/in/pratik-gole\n\nHe is actively looking for **Python Developer**, **AI/ML Intern**, or **Junior AI/ML Developer** roles!`,
        actions: [{ label: "Go to Contact Form", href: "#contact" }]
      };
    }

    if (lower.includes('resume') || lower.includes('cv') || lower.includes('pdf')) {
      return {
        text: `You can preview and print Pratik's ATS-standard resume directly inside the portfolio!`,
        actions: [{ label: "Open Interactive Resume", href: "#resume" }]
      };
    }

    return {
      text: `Thanks for asking! Pratik Gole is a passionate **Python Developer & AI/ML Fresher** based in Nashik, Maharashtra, India. He builds clean Python backends, machine learning pipelines, and database-driven web applications. Would you like to inspect his projects, test the AI playground, or review his resume?`,
      actions: [
        { label: "View Projects", href: "#projects" },
        { label: "Try AI Lab", href: "#ai-lab" }
      ]
    };
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9980,
          background: 'var(--gradient-brand)',
          color: '#ffffff',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(56, 189, 248, 0.45), 0 0 20px rgba(56, 189, 248, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        aria-label="Open AI Assistant"
        title="Ask Pratik's AI Assistant"
      >
        {isOpen ? <X size={24} /> : <Bot size={26} />}
      </button>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '2rem',
            zIndex: 9980,
            width: '380px',
            maxWidth: 'calc(100vw - 2.5rem)',
            height: '540px',
            maxHeight: 'calc(100vh - 8rem)',
            background: 'rgba(10, 15, 28, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--accent-cyan)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg), 0 0 40px rgba(56, 189, 248, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatPopUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <style>{`
            @keyframes chatPopUp {
              from { transform: scale(0.9) translateY(20px); opacity: 0; }
              to { transform: scale(1) translateY(0); opacity: 1; }
            }
          `}</style>

          {/* Chat Header */}
          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Bot size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  Pratik's AI Agent
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                  Active • Ready to Assist
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '0.25rem'
              }}
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '0.8rem 1rem',
                    borderRadius: '16px',
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    background: m.sender === 'user' ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.05)',
                    color: m.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                    border: m.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                    borderBottomRightRadius: m.sender === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: m.sender === 'bot' ? '4px' : '16px',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {m.text}

                  {/* Optional action buttons */}
                  {m.actions && (
                    <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {m.actions.map((act, aIdx) => (
                        <a
                          key={aIdx}
                          href={act.href}
                          onClick={() => setIsOpen(false)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            padding: '0.3rem 0.65rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(56, 189, 248, 0.15)',
                            border: '1px solid rgba(56, 189, 248, 0.35)',
                            color: 'var(--accent-cyan)',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            textDecoration: 'none'
                          }}
                        >
                          → {act.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', gap: '0.35rem', padding: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', width: 'fit-content' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'bounceDot 1s infinite' }} />
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'bounceDot 1s infinite 0.2s' }} />
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'bounceDot 1s infinite 0.4s' }} />
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div
            style={{
              padding: '0.5rem 1rem',
              overflowX: 'auto',
              display: 'flex',
              gap: '0.4rem',
              borderTop: '1px solid var(--border-subtle)',
              background: 'rgba(0, 0, 0, 0.2)'
            }}
          >
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            style={{
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderTop: '1px solid var(--border-subtle)',
              background: 'rgba(5, 10, 20, 0.8)'
            }}
          >
            <input
              type="text"
              placeholder="Ask about skills, projects, or background..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                flex: 1,
                padding: '0.65rem 0.9rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: inputValue.trim() ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s ease'
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
