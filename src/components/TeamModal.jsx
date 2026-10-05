import React from 'react';
import { X, Gem, Lightbulb, ShieldCheck, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function TeamModal({ onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3000,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          maxWidth: '560px',
          width: '100%',
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: '#6B7280',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className="team-badge">
            <Gem size={14} />
            <span>TEAM DIAMONDS</span>
          </span>
          <span className="sih-badge" style={{ padding: '3px 8px' }}>
            <Lightbulb size={13} color="#EA580C" />
            <span className="sih-text">SIH 2025 Prototype</span>
          </span>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-green-dark)', marginTop: '8px', marginBottom: '6px' }}>
          Sahakar Saathi Architecture
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
          A Voice-First, Offline-Capable AI Assistant for Cooperative Members and Farmers
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F744A', fontWeight: 700, fontSize: '13.5px', marginBottom: '2px' }}>
              <ShieldCheck size={16} />
              <span>100% Grounded in Official Statutory Acts</span>
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
              Zero hallucinated guidance. Responses cite MSCS Act 2023, PMFBY Guidelines, and Ministry of Cooperation Model By-laws.
            </p>
          </div>

          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF8A00', fontWeight: 700, fontSize: '13.5px', marginBottom: '2px' }}>
              <Cpu size={16} />
              <span>Offline Edge Intelligence for PACS Kiosks</span>
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
              Deploys on low-power rural kiosk hardware (Raspberry Pi 5) with quantized ONNX speech & local SQLite cache.
            </p>
          </div>

          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7C3AED', fontWeight: 700, fontSize: '13.5px', marginBottom: '2px' }}>
              <Database size={16} />
              <span>3-Tier Statutory Escalation Redressal</span>
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
              PACS Secretary → Assistant Registrar → District Ombudsman automatic escalation with SMS and thermal slip slips.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="btn-action-orange"
          style={{ width: '100%', padding: '12px' }}
          onClick={onClose}
        >
          <span>Continue Prototype Demo</span>
        </button>
      </div>
    </div>
  );
}
