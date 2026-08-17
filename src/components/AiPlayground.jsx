import React, { useState, useMemo, useRef } from 'react';
import { 
  BrainCircuit, 
  Play, 
  RotateCcw, 
  Sliders, 
  Activity, 
  BarChart3, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Layers,
  TrendingUp,
  Cpu,
  Info,
  Network
} from 'lucide-react';

export default function AiPlayground() {
  const [activeTab, setActiveTab] = useState('regression');

  return (
    <section id="ai-lab" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BrainCircuit size={14} /> Interactive AI/ML Lab
          </div>
          <h2 className="section-title">
            Explore Machine Learning <span className="gradient-accent-text">In Real Time</span>
          </h2>
          <p className="section-subtitle">
            An interactive simulator demonstrating core algorithms, exploratory data analysis, mathematical metrics, and data preprocessing pipelines.
          </p>
        </div>

        {/* Lab Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          <button
            onClick={() => setActiveTab('regression')}
            className={`btn ${activeTab === 'regression' ? 'btn-emerald' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <TrendingUp size={16} />
            1. Linear Regression (OLS, MSE, R²)
          </button>

          <button
            onClick={() => setActiveTab('knn')}
            className={`btn ${activeTab === 'knn' ? 'btn-emerald' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <Target size={16} />
            2. 2D Classification & KNN Boundary
          </button>

          <button
            onClick={() => setActiveTab('eda')}
            className={`btn ${activeTab === 'eda' ? 'btn-emerald' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <BarChart3 size={16} />
            3. EDA & Preprocessing Pipeline
          </button>

          <button
            onClick={() => setActiveTab('neural')}
            className={`btn ${activeTab === 'neural' ? 'btn-emerald' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <Network size={16} />
            4. Neural Activation Functions
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-accent)' }}>
          {activeTab === 'regression' && <LinearRegressionLab />}
          {activeTab === 'knn' && <KnnClassifierLab />}
          {activeTab === 'eda' && <EdaPreprocessingLab />}
          {activeTab === 'neural' && <NeuralActivationLab />}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// TAB 1: LINEAR REGRESSION & EVALUATION METRICS LAB
// ----------------------------------------------------
function LinearRegressionLab() {
  const [numPoints, setNumPoints] = useState(25);
  const [trueSlope, setTrueSlope] = useState(1.8);
  const [noiseLevel, setNoiseLevel] = useState(15);
  const [predictX, setPredictX] = useState(6);
  const [seed, setSeed] = useState(42);

  const points = useMemo(() => {
    const pts = [];
    const step = 10 / numPoints;
    for (let i = 0; i < numPoints; i++) {
      const x = i * step + (Math.random() - 0.5) * 0.4;
      const pseudoNoise = (Math.sin(i * 99 + seed) + Math.cos(i * 33)) * (noiseLevel / 2);
      const y = trueSlope * x + 10 + pseudoNoise;
      pts.push({ x: Math.max(0.5, Math.min(10, x)), y: Math.max(2, y) });
    }
    return pts;
  }, [numPoints, trueSlope, noiseLevel, seed]);

  const regressionStats = useMemo(() => {
    const n = points.length;
    if (n === 0) return { m: 0, c: 0, mse: 0, rmse: 0, r2: 0 };

    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    for (let p of points) {
      sumX += p.x;
      sumY += p.y;
      sumXY += p.x * p.y;
      sumX2 += p.x * p.x;
    }

    const meanX = sumX / n;
    const meanY = sumY / n;

    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX || 1);
    const c = meanY - m * meanX;

    let ssRes = 0;
    let ssTot = 0;
    for (let p of points) {
      const predY = m * p.x + c;
      ssRes += Math.pow(p.y - predY, 2);
      ssTot += Math.pow(p.y - meanY, 2);
    }

    const mse = ssRes / n;
    const rmse = Math.sqrt(mse);
    const r2 = ssTot !== 0 ? Math.max(0, 1 - ssRes / ssTot) : 0;

    return { m, c, mse, rmse, r2 };
  }, [points]);

  const predictedY = regressionStats.m * predictX + regressionStats.c;

  const svgWidth = 520;
  const svgHeight = 320;
  const padding = 45;

  const minX = 0;
  const maxX = 10;
  const minY = 0;
  const maxY = Math.max(35, trueSlope * 10 + 20);

  const scaleX = (x) => padding + ((x - minX) / (maxX - minX)) * (svgWidth - padding * 2);
  const scaleY = (y) => svgHeight - padding - ((y - minY) / (maxY - minY)) * (svgHeight - padding * 2);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp color="var(--accent-emerald)" size={20} />
            Linear Regression Model & Loss Evaluation
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Fitting $Y = \beta_1 X + \beta_0$ via Ordinary Least Squares (OLS) with instant residual evaluation.
          </p>
        </div>

        <button
          onClick={() => setSeed(prev => prev + 1)}
          className="btn btn-secondary btn-sm"
        >
          <RotateCcw size={14} /> Regenerate Dataset
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="lab-inner-grid">
        <style>{`
          @media (min-width: 1024px) {
            .lab-inner-grid { grid-template-columns: 1.15fr 0.85fr !important; }
          }
        `}</style>

        {/* Interactive Scatter & Fit SVG Plot */}
        <div style={{ background: 'rgba(5, 10, 20, 0.85)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            <span>Scatter Plot & OLS Fit Line</span>
            <span style={{ color: 'var(--accent-emerald)' }}>y = {regressionStats.m.toFixed(2)}x + {regressionStats.c.toFixed(2)}</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ width: '100%', height: 'auto', background: '#0a0f1d', borderRadius: '8px' }}>
              {[2, 4, 6, 8, 10].map(x => (
                <line key={`x-${x}`} x1={scaleX(x)} y1={padding} x2={scaleX(x)} y2={svgHeight - padding} stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />
              ))}
              {[10, 20, 30].map(y => (
                <line key={`y-${y}`} x1={padding} y1={scaleY(y)} x2={svgWidth - padding} y2={scaleY(y)} stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />
              ))}

              <line x1={padding} y1={svgHeight - padding} x2={svgWidth - padding} y2={svgHeight - padding} stroke="var(--border-accent)" strokeWidth="2" />
              <line x1={padding} y1={padding} x2={padding} y2={svgHeight - padding} stroke="var(--border-accent)" strokeWidth="2" />

              <text x={svgWidth / 2} y={svgHeight - 10} fill="var(--text-muted)" fontSize="11" textAnchor="middle">Feature X (e.g. Study Hours / Normalized Input)</text>
              <text x={15} y={svgHeight / 2} fill="var(--text-muted)" fontSize="11" transform={`rotate(-90 15,${svgHeight / 2})`} textAnchor="middle">Target Y (Predicted Output)</text>

              {points.map((pt, i) => {
                const predY = regressionStats.m * pt.x + regressionStats.c;
                return (
                  <line
                    key={`res-${i}`}
                    x1={scaleX(pt.x)}
                    y1={scaleY(pt.y)}
                    x2={scaleX(pt.x)}
                    y2={scaleY(predY)}
                    stroke="rgba(239, 68, 68, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                );
              })}

              <line
                x1={scaleX(minX)}
                y1={scaleY(regressionStats.m * minX + regressionStats.c)}
                x2={scaleX(maxX)}
                y2={scaleY(regressionStats.m * maxX + regressionStats.c)}
                stroke="var(--accent-emerald)"
                strokeWidth="3"
              />

              {points.map((pt, i) => (
                <circle
                  key={`pt-${i}`}
                  cx={scaleX(pt.x)}
                  cy={scaleY(pt.y)}
                  r="5"
                  fill="var(--accent-cyan)"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              ))}

              <circle
                cx={scaleX(predictX)}
                cy={scaleY(predictedY)}
                r="7"
                fill="#f59e0b"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <line
                x1={scaleX(predictX)}
                y1={svgHeight - padding}
                x2={scaleX(predictX)}
                y2={scaleY(predictedY)}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
            </svg>
          </div>
        </div>

        {/* Right Controls & Metric Cards */}
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', fontWeight: 600, textTransform: 'uppercase' }}>R² Score</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {regressionStats.r2.toFixed(3)}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Goodness of Fit</div>
            </div>

            <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase' }}>MSE</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {regressionStats.mse.toFixed(2)}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Mean Squared Error</div>
            </div>

            <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase' }}>RMSE</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {regressionStats.rmse.toFixed(2)}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Root MSE</div>
            </div>
          </div>

          {/* Sliders */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sliders size={16} color="var(--accent-cyan)" />
              Dataset & Parameter Tuning
            </div>

            <div style={{ marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                <span>True Underlying Slope (β₁):</span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{trueSlope}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.5"
                step="0.1"
                value={trueSlope}
                onChange={(e) => setTrueSlope(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
              />
            </div>

            <div style={{ marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                <span>Variance / Noise Level (σ):</span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{noiseLevel}</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                <span>Sample Size (N):</span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{numPoints}</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={numPoints}
                onChange={(e) => setNumPoints(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
              />
            </div>
          </div>

          {/* Live Inference Box */}
          <div style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.03) 100%)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} />
              Real-Time Inference Simulator
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Input X value (0 - 10):</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.5"
                  value={predictX}
                  onChange={(e) => setPredictX(Math.max(0, Math.min(10, parseFloat(e.target.value) || 0)))}
                  className="form-input"
                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.9rem' }}
                />
              </div>
              <div style={{ flex: 1.2, textAlign: 'right' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Model Predicted Y:</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
                  {predictedY.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// TAB 2: 2D CLASSIFICATION & KNN DECISION SURFACE LAB
// ----------------------------------------------------
function KnnClassifierLab() {
  const [kValue, setKValue] = useState(3);
  const [selectedClass, setSelectedClass] = useState('A');
  const [testQuery, setTestQuery] = useState({ x: 120, y: 120 });
  const [dataset, setDataset] = useState([
    { x: 50, y: 60, cls: 'A' },
    { x: 70, y: 90, cls: 'A' },
    { x: 90, y: 50, cls: 'A' },
    { x: 110, y: 80, cls: 'A' },
    { x: 60, y: 120, cls: 'A' },
    { x: 160, y: 160, cls: 'B' },
    { x: 180, y: 190, cls: 'B' },
    { x: 140, y: 200, cls: 'B' },
    { x: 200, y: 150, cls: 'B' },
    { x: 210, y: 180, cls: 'B' }
  ]);

  const handleCanvasClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    if (x >= 0 && x <= 250 && y >= 0 && y <= 250) {
      setTestQuery({ x, y });
    }
  };

  const knnResult = useMemo(() => {
    const distances = dataset.map((p, idx) => {
      const dist = Math.hypot(p.x - testQuery.x, p.y - testQuery.y);
      return { ...p, dist, idx };
    });

    distances.sort((a, b) => a.dist - b.dist);
    const nearest = distances.slice(0, Math.min(kValue, distances.length));

    const votes = { A: 0, B: 0 };
    nearest.forEach(n => {
      votes[n.cls] = (votes[n.cls] || 0) + 1;
    });

    const predictedClass = votes.A >= votes.B ? 'A' : 'B';
    const confidence = ((Math.max(votes.A, votes.B) / nearest.length) * 100).toFixed(0);

    return { nearest, predictedClass, confidence, votes };
  }, [dataset, testQuery, kValue]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target color="var(--accent-cyan)" size={20} />
            K-Nearest Neighbors (KNN) & Decision Boundaries
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Click anywhere on the coordinate plane to query the KNN classification boundary and majority vote.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setDataset([
              { x: 50, y: 60, cls: 'A' }, { x: 70, y: 90, cls: 'A' }, { x: 90, y: 50, cls: 'A' }, { x: 110, y: 80, cls: 'A' }, { x: 60, y: 120, cls: 'A' },
              { x: 160, y: 160, cls: 'B' }, { x: 180, y: 190, cls: 'B' }, { x: 140, y: 200, cls: 'B' }, { x: 200, y: 150, cls: 'B' }, { x: 210, y: 180, cls: 'B' }
            ])}
            className="btn btn-secondary btn-sm"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="lab-inner-grid">
        <div style={{ background: '#0a0f1d', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Click to test point</span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>● Class A (Cluster 1)</span>
              <span style={{ color: '#ec4899', fontWeight: 600 }}>● Class B (Cluster 2)</span>
            </div>
          </div>

          <div style={{ display: 'inline-block', position: 'relative', cursor: 'crosshair' }}>
            <svg
              width="260"
              height="260"
              onClick={handleCanvasClick}
              style={{ background: '#070b16', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}
            >
              {[50, 100, 150, 200].map(v => (
                <g key={`grid-${v}`}>
                  <line x1={v} y1={0} x2={v} y2={260} stroke="rgba(255,255,255,0.04)" />
                  <line x1={0} y1={v} x2={260} y2={v} stroke="rgba(255,255,255,0.04)" />
                </g>
              ))}

              {knnResult.nearest.map((n, i) => (
                <line
                  key={`line-${i}`}
                  x1={testQuery.x}
                  y1={testQuery.y}
                  x2={n.x}
                  y2={n.y}
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
              ))}

              {dataset.map((pt, i) => (
                <circle
                  key={`pt-${i}`}
                  cx={pt.x}
                  cy={pt.y}
                  r="6"
                  fill={pt.cls === 'A' ? 'var(--accent-cyan)' : '#ec4899'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              ))}

              <circle
                cx={testQuery.x}
                cy={testQuery.y}
                r="8"
                fill="#f59e0b"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Query Coordinates: ({testQuery.x}, {testQuery.y})
          </div>
        </div>

        <div>
          <div
            style={{
              background: knnResult.predictedClass === 'A' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(236, 72, 153, 0.1)',
              border: `1px solid ${knnResult.predictedClass === 'A' ? 'var(--accent-cyan)' : '#ec4899'}`,
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Classification Decision</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: knnResult.predictedClass === 'A' ? 'var(--accent-cyan)' : '#ec4899', marginTop: '0.2rem' }}>
              Class {knnResult.predictedClass} ({knnResult.confidence}% Majority)
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Among {kValue} nearest neighbors: <strong>{knnResult.votes.A || 0}</strong> for Class A, <strong>{knnResult.votes.B || 0}</strong> for Class B.
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              <span>Hyperparameter K (Neighbors):</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>K = {kValue}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[1, 3, 5, 7, 9].map(k => (
                <button
                  key={k}
                  onClick={() => setKValue(k)}
                  className={`btn btn-sm ${kValue === k ? 'btn-emerald' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Add New Training Sample:
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <button
                onClick={() => setSelectedClass('A')}
                className={`btn btn-sm ${selectedClass === 'A' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1 }}
              >
                ● Mode: Class A (Cyan)
              </button>
              <button
                onClick={() => setSelectedClass('B')}
                className={`btn btn-sm ${selectedClass === 'B' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1, borderColor: selectedClass === 'B' ? '#ec4899' : undefined }}
              >
                ● Mode: Class B (Pink)
              </button>
            </div>
            <button
              onClick={() => {
                setDataset(prev => [
                  ...prev,
                  { x: Math.floor(Math.random() * 220 + 20), y: Math.floor(Math.random() * 220 + 20), cls: selectedClass }
                ]);
              }}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              + Spawn Random Point for Class {selectedClass}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// TAB 3: EDA & FEATURE PREPROCESSING PIPELINE LAB
// ----------------------------------------------------
function EdaPreprocessingLab() {
  const [selectedDataset, setSelectedDataset] = useState('students');
  const [imputationMethod, setImputationMethod] = useState('mean');
  const [outlierMethod, setOutlierMethod] = useState('iqr');
  const [scalingMethod, setScalingMethod] = useState('standard');

  const rawData = useMemo(() => {
    if (selectedDataset === 'students') {
      return [
        { id: 1, name: "Aarav", studyHours: 6.5, examScore: 78, attendance: 92 },
        { id: 2, name: "Sneha", studyHours: null, examScore: 88, attendance: 95 },
        { id: 3, name: "Rohan", studyHours: 3.0, examScore: 52, attendance: 70 },
        { id: 4, name: "Pooja", studyHours: 8.5, examScore: 94, attendance: 98 },
        { id: 5, name: "Vikas", studyHours: 1.2, examScore: 35, attendance: 60 },
        { id: 6, name: "Ananya", studyHours: 7.0, examScore: 85, attendance: null },
        { id: 7, name: "Outlier_1", studyHours: 24.0, examScore: 100, attendance: 99 },
        { id: 8, name: "Kunal", studyHours: 5.5, examScore: 72, attendance: 85 }
      ];
    } else {
      return [
        { id: 1, name: "Client_A", studyHours: 120, examScore: 4.5, attendance: 350 },
        { id: 2, name: "Client_B", studyHours: null, examScore: 3.2, attendance: 120 },
        { id: 3, name: "Client_C", studyHours: 85, examScore: 4.8, attendance: 490 },
        { id: 4, name: "Client_D", studyHours: 210, examScore: 2.1, attendance: null },
        { id: 5, name: "Outlier_X", studyHours: 950, examScore: 1.0, attendance: 1200 },
        { id: 6, name: "Client_E", studyHours: 140, examScore: 4.9, attendance: 410 }
      ];
    }
  }, [selectedDataset]);

  const processedData = useMemo(() => {
    const validHours = rawData.filter(d => d.studyHours !== null).map(d => d.studyHours);
    const meanVal = validHours.reduce((a, b) => a + b, 0) / validHours.length;
    const sortedHours = [...validHours].sort((a, b) => a - b);
    const medianVal = sortedHours[Math.floor(sortedHours.length / 2)];

    let step1 = rawData.map(d => {
      let val = d.studyHours;
      if (val === null) {
        val = imputationMethod === 'mean' ? meanVal : medianVal;
      }
      return { ...d, cleanHours: val };
    });

    let step2 = step1;
    if (outlierMethod === 'iqr') {
      const q1 = sortedHours[Math.floor(sortedHours.length * 0.25)];
      const q3 = sortedHours[Math.floor(sortedHours.length * 0.75)];
      const iqr = q3 - q1;
      const upperBound = q3 + 1.5 * iqr;
      step2 = step1.filter(d => d.cleanHours <= upperBound);
    }

    const finalHours = step2.map(d => d.cleanHours);
    const fMean = finalHours.reduce((a, b) => a + b, 0) / (finalHours.length || 1);
    const fStd = Math.sqrt(finalHours.reduce((a, b) => a + Math.pow(b - fMean, 2), 0) / (finalHours.length || 1)) || 1;
    const fMin = Math.min(...finalHours);
    const fMax = Math.max(...finalHours);

    const step3 = step2.map(d => {
      let scaled = 0;
      if (scalingMethod === 'standard') {
        scaled = (d.cleanHours - fMean) / fStd;
      } else {
        scaled = fMax !== fMin ? (d.cleanHours - fMin) / (fMax - fMin) : 0;
      }
      return { ...d, scaledHours: scaled };
    });

    return {
      rows: step3,
      stats: {
        rawCount: rawData.length,
        cleanCount: step3.length,
        mean: fMean.toFixed(2),
        std: fStd.toFixed(2),
        min: fMin.toFixed(2),
        max: fMax.toFixed(2)
      }
    };
  }, [rawData, imputationMethod, outlierMethod, scalingMethod]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BarChart3 color="var(--accent-purple)" size={20} />
            Data Preprocessing & Feature Transformation Pipeline
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Handling missing values, outlier capping, and feature standardizing before model feeding.
          </p>
        </div>

        <select
          value={selectedDataset}
          onChange={(e) => setSelectedDataset(e.target.value)}
          className="form-select"
          style={{ width: 'auto', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
        >
          <option value="students">Dataset: Student Performance</option>
          <option value="clients">Dataset: Customer Usage Metrics</option>
        </select>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}
      >
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            1. Missing Value Imputation
          </div>
          <select
            value={imputationMethod}
            onChange={(e) => setImputationMethod(e.target.value)}
            className="form-select"
            style={{ fontSize: '0.85rem' }}
          >
            <option value="mean">Mean Imputation (Average)</option>
            <option value="median">Median Imputation (Robust)</option>
          </select>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
            2. Outlier Treatment
          </div>
          <select
            value={outlierMethod}
            onChange={(e) => setOutlierMethod(e.target.value)}
            className="form-select"
            style={{ fontSize: '0.85rem' }}
          >
            <option value="iqr">IQR Filter (Q3 + 1.5*IQR Capping)</option>
            <option value="none">Keep Outliers (Raw)</option>
          </select>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
            3. Feature Scaling
          </div>
          <select
            value={scalingMethod}
            onChange={(e) => setScalingMethod(e.target.value)}
            className="form-select"
            style={{ fontSize: '0.85rem' }}
          >
            <option value="standard">StandardScaler (Z-Score: μ=0, σ=1)</option>
            <option value="minmax">MinMaxScaler (Range [0, 1])</option>
          </select>
        </div>
      </div>

      <div style={{ overflowX: 'auto', background: 'rgba(5, 10, 20, 0.8)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
              <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>ID / Name</th>
              <th style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Raw Feature (Input)</th>
              <th style={{ padding: '0.75rem 1rem', color: 'var(--accent-cyan)' }}>Imputed Value</th>
              <th style={{ padding: '0.75rem 1rem', color: 'var(--accent-purple)' }}>Transformed / Scaled</th>
              <th style={{ padding: '0.75rem 1rem', color: 'var(--accent-emerald)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {processedData.rows.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{row.name}</td>
                <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>
                  {row.studyHours === null ? (
                    <span style={{ color: '#ef4444', fontWeight: 600 }}>NaN (Missing)</span>
                  ) : (
                    row.studyHours
                  )}
                </td>
                <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  {row.cleanHours.toFixed(2)}
                </td>
                <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', fontWeight: 600 }}>
                  {row.scaledHours.toFixed(3)}
                </td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span className="badge badge-emerald">Ready for ML</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <div>✓ Valid Samples: <strong>{processedData.stats.cleanCount}</strong> / {processedData.stats.rawCount}</div>
        <div>✓ Feature Mean: <strong>{processedData.stats.mean}</strong></div>
        <div>✓ Feature Std: <strong>{processedData.stats.std}</strong></div>
        <div>✓ Range: <strong>[{processedData.stats.min}, {processedData.stats.max}]</strong></div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// TAB 4: NEURAL ACTIVATION FUNCTIONS & PERCEPTRON LAB
// ----------------------------------------------------
function NeuralActivationLab() {
  const [activation, setActivation] = useState('relu');
  const [x1, setX1] = useState(1.5);
  const [x2, setX2] = useState(-0.8);
  const [w1, setW1] = useState(0.7);
  const [w2, setW2] = useState(1.2);
  const [bias, setBias] = useState(-0.3);

  // Compute Net input z = w1*x1 + w2*x2 + bias
  const z = w1 * x1 + w2 * x2 + bias;

  // Activation functions f(z)
  const computeActivation = (val, fn) => {
    switch (fn) {
      case 'relu':
        return Math.max(0, val);
      case 'sigmoid':
        return 1 / (1 + Math.exp(-val));
      case 'tanh':
        return Math.tanh(val);
      case 'leaky':
        return val >= 0 ? val : 0.1 * val;
      default:
        return val;
    }
  };

  const outputActivation = computeActivation(z, activation);

  // Plot activation curve points from -5 to +5
  const curvePoints = useMemo(() => {
    const pts = [];
    for (let t = -5; t <= 5; t += 0.25) {
      pts.push({ z: t, a: computeActivation(t, activation) });
    }
    return pts;
  }, [activation]);

  const svgW = 420;
  const svgH = 220;
  const pad = 35;

  const mapX = (val) => pad + ((val + 5) / 10) * (svgW - pad * 2);
  const mapY = (val) => {
    const minA = activation === 'tanh' ? -1.2 : -0.2;
    const maxA = activation === 'relu' || activation === 'leaky' ? 5.2 : 1.2;
    return svgH - pad - ((val - minA) / (maxA - minA)) * (svgH - pad * 2);
  };

  const pathD = curvePoints.reduce((acc, pt, i) => {
    return `${acc} ${i === 0 ? 'M' : 'L'} ${mapX(pt.z)} ${mapY(pt.a)}`;
  }, '');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Network color="var(--accent-cyan)" size={20} />
            Neuron Perceptron & Non-Linear Activation Simulator
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Simulating artificial neuron summation $z = \sum w_i x_i + b$ and activation function mapping $a = f(z)$.
          </p>
        </div>

        {/* Function selector pills */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {['relu', 'sigmoid', 'tanh', 'leaky'].map((fn) => (
            <button
              key={fn}
              onClick={() => setActivation(fn)}
              className={`btn btn-sm ${activation === fn ? 'btn-primary' : 'btn-secondary'}`}
              style={{ textTransform: 'uppercase', fontSize: '0.75rem', borderRadius: 'var(--radius-full)' }}
            >
              {fn === 'leaky' ? 'Leaky ReLU' : fn}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="lab-inner-grid">
        {/* Visual Activation Curve Chart */}
        <div style={{ background: '#0a0f1d', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            <span>Activation Function Curve: <strong style={{ color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>{activation}</strong></span>
            <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>f(z={z.toFixed(2)}) = {outputActivation.toFixed(3)}</span>
          </div>

          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto', background: '#070b16', borderRadius: '8px' }}>
            {/* Zero Axis lines */}
            <line x1={mapX(-5)} y1={mapY(0)} x2={mapX(5)} y2={mapY(0)} stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
            <line x1={mapX(0)} y1={pad} x2={mapX(0)} y2={svgH - pad} stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

            {/* Function path */}
            <path d={pathD} fill="none" stroke="var(--accent-cyan)" strokeWidth="3" />

            {/* Current operating point */}
            <circle
              cx={mapX(Math.max(-5, Math.min(5, z)))}
              cy={mapY(outputActivation)}
              r="7"
              fill="var(--accent-emerald)"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            <span>Input Domain: z ∈ [-5, +5]</span>
            <span>Current State: Net input z = {z.toFixed(3)} → Output a = {outputActivation.toFixed(3)}</span>
          </div>
        </div>

        {/* Weights, Bias & Inputs Tuning */}
        <div>
          {/* Output Display Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              border: '1px solid var(--accent-cyan)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Neuron Activation Output</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                  a = {outputActivation.toFixed(4)}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Net Weighted Sum (z)</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {z.toFixed(3)}
                </div>
              </div>
            </div>
          </div>

          {/* Slider Inputs */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Neuron Inputs & Synaptic Weights:
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Input x₁: {x1}</label>
                <input type="range" min="-3" max="3" step="0.1" value={x1} onChange={(e) => setX1(parseFloat(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Weight w₁: {w1}</label>
                <input type="range" min="-2" max="2" step="0.1" value={w1} onChange={(e) => setW1(parseFloat(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Input x₂: {x2}</label>
                <input type="range" min="-3" max="3" step="0.1" value={x2} onChange={(e) => setX2(parseFloat(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-emerald)' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Weight w₂: {w2}</label>
                <input type="range" min="-2" max="2" step="0.1" value={w2} onChange={(e) => setW2(parseFloat(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-emerald)' }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Neuron Bias (b): {bias}</label>
              <input type="range" min="-2" max="2" step="0.1" value={bias} onChange={(e) => setBias(parseFloat(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-purple)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
