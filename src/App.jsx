import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AiPlayground from './components/AiPlayground';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Education from './components/Education';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import AiAssistant from './components/AiAssistant';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = ({ type, message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const launchConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#38bdf8', '#10b981', '#a855f7', '#f59e0b', '#3b82f6']
      });
    } catch (e) {
      console.log('Confetti trigger', e);
    }
  };

  return (
    <div className="app-root" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Background Ambience & Interactive Node Canvas */}
      <BackgroundEffect />

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onLaunchConfetti={launchConfetti}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Interactive AI/ML Lab & Simulator (Flagship) */}
        <AiPlayground />

        {/* 4. Skills & Competencies */}
        <Skills />

        {/* 5. Featured Projects Showcase */}
        <Projects />

        {/* 6. AI/ML Training Roadmap */}
        <Timeline />

        {/* 7. Education & Certifications */}
        <Education />

        {/* 8. Interactive ATS Resume Viewer */}
        <ResumeViewer onShowToast={showToast} />

        {/* 9. Contact & Hire Me */}
        <Contact
          onShowToast={showToast}
          onLaunchConfetti={launchConfetti}
        />
      </main>

      {/* Footer */}
      <Footer onLaunchConfetti={launchConfetti} />

      {/* Quick Resume Pop-up Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Interactive AI Portfolio Assistant Bot */}
      <AiAssistant onOpenResume={() => setResumeModalOpen(true)} onShowToast={showToast} />

      {/* Feedback Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
