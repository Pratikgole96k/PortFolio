import React, { useState, useMemo } from 'react';
import { 
  Cpu, 
  Code2, 
  BrainCircuit, 
  Globe, 
  Database, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...skillsData.map(c => c.category)];

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "Programming Languages": return Code2;
      case "AI & Machine Learning": return BrainCircuit;
      case "Web Development": return Globe;
      case "Databases & Core CS": return Database;
      default: return Cpu;
    }
  };

  const filteredCategories = useMemo(() => {
    return skillsData.map(cat => {
      const isCatMatch = selectedCategory === "All" || cat.category === selectedCategory;
      if (!isCatMatch) return null;

      const matchingSkills = cat.skills.filter(sk => 
        sk.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sk.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sk.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingSkills.length === 0 && searchQuery.trim() !== "") return null;

      return {
        ...cat,
        skills: matchingSkills
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} /> Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Engineering Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive taxonomy of programming languages, AI/ML pipelines, relational data architectures, and software engineering practices.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Category Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              justifyContent: 'center'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', maxWidth: '420px', width: '100%' }}>
            <Search
              size={18}
              color="var(--text-muted)"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, EDA, SQL, Regression)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '2.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem'
              }}
            />
          </div>
        </div>

        {/* Skills Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.map((group, gIdx) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div key={gIdx} className="glass-card" style={{ padding: '2rem' }}>
                {/* Category Title Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        color: 'var(--accent-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{group.category}</h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{group.description}</p>
                    </div>
                  </div>

                  <span className="badge badge-cyan">
                    {group.skills.length} Competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.1rem',
                        transition: 'all var(--transition-normal)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                          {skill.name}
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '0.2rem 0.5rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.25)',
                            color: 'var(--accent-emerald)'
                          }}
                        >
                          {skill.tag}
                        </span>
                      </div>

                      {/* Proficiency Bar */}
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          <span>Proficiency</span>
                          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{skill.level}%</span>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            borderRadius: '3px',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: '100%',
                              background: 'var(--gradient-brand)',
                              borderRadius: '3px',
                              boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
                            }}
                          />
                        </div>
                      </div>

                      {/* Highlight Description */}
                      <p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
              <Sparkles size={32} color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
              <h3>No matching skills found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search keyword or selected category filter.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
