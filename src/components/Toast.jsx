import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.95)',
        border: '1px solid var(--accent-cyan)',
        borderRadius: 'var(--radius-md)',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.25)',
        backdropFilter: 'blur(12px)',
        color: '#ffffff',
        animation: 'slideUpToast 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        maxWidth: '90vw'
      }}
      role="alert"
    >
      <style>{`
        @keyframes slideUpToast {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {toast.type === 'success' ? (
        <CheckCircle2 size={18} color="var(--accent-emerald)" />
      ) : (
        <Info size={18} color="var(--accent-cyan)" />
      )}
      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          padding: '0.2rem',
          marginLeft: '0.5rem',
          display: 'flex',
          alignItems: 'center'
        }}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
