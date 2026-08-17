import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Database, 
  BrainCircuit, 
  Server, 
  Sparkles,
  X,
  Eye,
  ChevronRight,
  Play,
  BookOpen,
  UserCheck,
  Terminal
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('overview');

  // E-Learning Simulator Interactive State
  const [courses, setCourses] = useState([
    { id: 101, title: 'Python Core & Data Structures', category: 'Programming', progress: 100, enrolled: true },
    { id: 102, title: 'Machine Learning & Statistical Modeling', category: 'AI/ML', progress: 65, enrolled: true },
    { id: 103, title: 'Relational Database Schema & SQL 3NF', category: 'Database', progress: 40, enrolled: true },
    { id: 104, title: 'Web Development with PHP & MySQL', category: 'Full Stack', progress: 0, enrolled: false }
  ]);

  const [activeSqlQuery, setActiveSqlQuery] = useState("SELECT c.title, COUNT(e.student_id) AS total_students, AVG(e.progress) AS avg_progress FROM courses c JOIN enrollments e ON c.id = e.course_id GROUP BY c.title HAVING avg_progress > 50;");
  const [sqlResults, setSqlResults] = useState(null);
  const [queryExecuting, setQueryExecuting] = useState(false);

  const handleEnroll = (id) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, enrolled: true, progress: 10 } : c));
  };

  const handleIncrementProgress = (id) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, progress: Math.min(100, c.progress + 20) } : c));
  };

  const handleRunSql = () => {
    setQueryExecuting(true);
    setTimeout(() => {
      setQueryExecuting(false);
      setSqlResults([
        { title: "Python Core & Data Structures", total_students: 42, avg_progress: "92.5%" },
        { title: "Machine Learning & Statistical Modeling", total_students: 38, avg_progress: "68.0%" },
        { title: "Relational Database Schema & SQL 3NF", total_students: 29, avg_progress: "54.2%" }
      ]);
    }, 450);
  };

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Featured Work
          </div>
          <h2 className="section-title">
            Engineering & <span className="gradient-text">Project Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Production-oriented implementations encompassing full-stack web applications, AI/ML pipelines, and relational database systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span className="badge badge-cyan">{project.badge}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.timeline}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {project.summary}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Core Capabilities:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--accent-cyan)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setModalTab('overview');
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Eye size={15} /> Inspect Architecture & Live Demo <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(4, 8, 16, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 9990,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.25rem',
              border: '1px solid var(--accent-cyan)',
              boxShadow: 'var(--shadow-lg), 0 0 40px rgba(56, 189, 248, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>{selectedProject.badge}</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{selectedProject.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{selectedProject.timeline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
                aria-label="Close Project Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalTab('overview')}
                className={`btn btn-sm ${modalTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Overview & Features
              </button>
              <button
                onClick={() => setModalTab('architecture')}
                className={`btn btn-sm ${modalTab === 'architecture' ? 'btn-primary' : 'btn-secondary'}`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setModalTab('interactive')}
                className={`btn btn-sm ${modalTab === 'interactive' ? 'btn-emerald' : 'btn-secondary'}`}
              >
                ⚡ Live Interactive Demo
              </button>
              <button
                onClick={() => setModalTab('metrics')}
                className={`btn btn-sm ${modalTab === 'metrics' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Metrics & Highlights
              </button>
            </div>

            {/* Tab: Overview */}
            {modalTab === 'overview' && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--accent-cyan)' }}>The Problem</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProject.problem}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--accent-emerald)' }}>The Engineering Solution</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>Key Features Implemented</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Architecture */}
            {modalTab === 'architecture' && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Architectural Stack Breakdown</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {Object.entries(selectedProject.architecture).map(([layer, desc], idx) => (
                    <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-purple)', marginBottom: '0.25rem' }}>
                        {layer} Layer
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Interactive Demo */}
            {modalTab === 'interactive' && (
              <div>
                {selectedProject.id === 'elearning-platform' ? (
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <BookOpen size={18} /> E-Learning Course Portal & Progress Simulator
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                      Simulating user course enrollment and real-time database progress updates:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      {courses.map((course) => (
                        <div
                          key={course.id}
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem'
                          }}
                        >
                          <div style={{ flex: 1, minWidth: '220px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{course.title}</span>
                              <span className="badge">{course.category}</span>
                            </div>

                            {/* Progress bar */}
                            {course.enrolled ? (
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                  <span>Course Progress</span>
                                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{course.progress}%</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                                  <div style={{ width: `${course.progress}%`, height: '100%', background: 'var(--gradient-brand)', borderRadius: '3px' }} />
                                </div>
                              </div>
                            ) : (
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Not enrolled yet</div>
                            )}
                          </div>

                          <div>
                            {course.enrolled ? (
                              <button
                                onClick={() => handleIncrementProgress(course.id)}
                                disabled={course.progress >= 100}
                                className="btn btn-secondary btn-sm"
                              >
                                {course.progress >= 100 ? 'Completed ✓' : '+ Complete Next Module'}
                              </button>
                            ) : (
                              <button
                                onClick={() => handleEnroll(course.id)}
                                className="btn btn-emerald btn-sm"
                              >
                                Enroll in Course
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Terminal size={18} /> Relational SQL Engine Query Runner
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      Execute optimized aggregation query over normalized academic schemas:
                    </p>

                    <div style={{ background: '#070b16', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                      <code style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', display: 'block', lineHeight: 1.5 }}>
                        {activeSqlQuery}
                      </code>
                    </div>

                    <button
                      onClick={handleRunSql}
                      disabled={queryExecuting}
                      className="btn btn-primary btn-sm"
                      style={{ marginBottom: '1.25rem' }}
                    >
                      {queryExecuting ? 'Executing Query on DB...' : '▶ Execute SQL Query (Index Scan)'}
                    </button>

                    {sqlResults && (
                      <div style={{ background: 'rgba(5, 10, 20, 0.9)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-accent)', padding: '1rem' }}>
                        <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '0.5rem' }}>
                          ✓ Query executed in 1.4ms (Indexed Multi-Table Hash Join)
                        </div>
                        <table style={{ width: '100%', fontSize: '0.82rem', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                              <th style={{ padding: '0.5rem', color: 'var(--text-muted)' }}>course_title</th>
                              <th style={{ padding: '0.5rem', color: 'var(--text-muted)' }}>total_students</th>
                              <th style={{ padding: '0.5rem', color: 'var(--text-muted)' }}>avg_progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sqlResults.map((r, i) => (
                              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', fontWeight: 600 }}>{r.title}</td>
                                <td style={{ padding: '0.5rem', fontFamily: 'var(--font-mono)' }}>{r.total_students}</td>
                                <td style={{ padding: '0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{r.avg_progress}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Tab: Metrics */}
            {modalTab === 'metrics' && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-emerald)' }}>Key Deliverables & Specifications</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.label}</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.25rem' }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedProject(null)} className="btn btn-secondary btn-sm">
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
