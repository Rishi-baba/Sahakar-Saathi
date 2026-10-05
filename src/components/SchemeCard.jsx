import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Calendar,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Landmark,
  ShieldCheck,
  Building,
  Printer,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SchemeCard({ scheme, userChoice = {} }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const [formData, setFormData] = useState({
    farmerName: 'Rameshwar Patil',
    mobile: '9822451089',
    landHoldingAcre: '3.5',
    pacsName: 'Sangamner Vividh Karyakari Seva Sahakari Sanstha'
  });

  const themeColors = {
    green: {
      border: 'var(--primary-green-border)',
      badgeBg: 'var(--primary-green-light)',
      badgeText: 'var(--primary-green-dark)'
    },
    orange: {
      border: 'var(--accent-orange-border)',
      badgeBg: 'var(--accent-orange-light)',
      badgeText: 'var(--accent-orange-dark)'
    },
    blue: {
      border: 'var(--blue-border)',
      badgeBg: 'var(--blue-light)',
      badgeText: 'var(--blue-info)'
    },
    purple: {
      border: 'var(--purple-border)',
      badgeBg: 'var(--purple-light)',
      badgeText: 'var(--purple-grievance)'
    }
  };

  const currentTheme = themeColors[scheme.badgeColor] || themeColors.green;

  const handleOpenApply = () => {
    setAppId(`PACS-${scheme.id.toUpperCase().slice(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitted(false);
    setShowApplyModal(true);
  };

  const handleConfirmApplication = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {}
  };

  return (
    <>
      <div
        className="saathi-card"
        style={{
          borderLeft: `5px solid ${scheme.badgeColor === 'orange' ? '#FF8A00' : scheme.badgeColor === 'blue' ? '#3B82F6' : scheme.badgeColor === 'purple' ? '#7C3AED' : '#0F744A'}`,
          marginBottom: '16px',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                background: currentTheme.badgeBg,
                color: currentTheme.badgeText,
                padding: '3px 9px',
                borderRadius: '999px',
                display: 'inline-block',
                marginBottom: '6px'
              }}
            >
              {scheme.category}
            </span>
            <h3 style={{ fontSize: '17px', color: 'var(--text-dark)', fontWeight: 700 }}>
              {scheme.name}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0F744A',
                background: '#EAF7EE',
                padding: '4px 10px',
                borderRadius: '999px'
              }}
            >
              <ShieldCheck size={14} />
              <span>Eligible</span>
            </span>
          </div>
        </div>

        {/* Why it may apply */}
        <div
          style={{
            background: '#F9FAFB',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            padding: '10px 14px',
            fontSize: '13.5px',
            color: '#374151',
            marginBottom: '14px',
            lineHeight: 1.5
          }}
        >
          <strong>Why it applies:</strong> {scheme.whyApplies}
        </div>

        {/* Grid of basic meta */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', fontSize: '13px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#B45309' }}>
            <Calendar size={16} />
            <span>
              <strong>Deadline:</strong> {scheme.deadline}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <Landmark size={16} />
            <span>Applicable in {userChoice.state || 'Selected State'}</span>
          </div>
        </div>

        {/* Collapsible Details */}
        {expanded && (
          <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed #E5E7EB' }}>
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.04em' }}>
              Required Documents:
            </h4>
            <ul style={{ paddingLeft: '18px', fontSize: '13px', color: '#1F2937', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {scheme.documents.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--primary-green-dark)', background: 'var(--primary-green-light)', padding: '8px 12px', borderRadius: '6px' }}>
              <PhoneCall size={14} />
              <span><strong>Helpline / Desk:</strong> {scheme.supportContact}</span>
            </div>
          </div>
        )}

        {/* Card action footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--primary-green)',
              cursor: 'pointer'
            }}
          >
            <span>{expanded ? 'Hide Details' : 'View Scheme Details'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <button
            type="button"
            onClick={handleOpenApply}
            className="btn-action-orange"
            style={{ padding: '6px 16px', fontSize: '12.5px' }}
          >
            <Building size={14} />
            <span>Apply at PACS Desk</span>
          </button>
        </div>
      </div>

      {/* PACS Desk Interactive Application Modal */}
      {showApplyModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3000,
            padding: '16px'
          }}
          onClick={() => setShowApplyModal(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowApplyModal(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: '#9CA3AF', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleConfirmApplication}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="pill-section-tag green" style={{ marginBottom: 0 }}>
                    PACS Assisted Filing
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Ref: {appId}
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '4px' }}>
                  PACS Application: {scheme.name}
                </h3>
                <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  Confirm member details to submit pre-registration directly to your local village society desk.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                      Farmer Member Name
                    </label>
                    <input
                      type="text"
                      value={formData.farmerName}
                      onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                      required
                      style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '13.5px' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                        Mobile (SMS updates)
                      </label>
                      <input
                        type="text"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        required
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '13.5px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                        Cultivable Area (Acres)
                      </label>
                      <input
                        type="text"
                        value={formData.landHoldingAcre}
                        onChange={(e) => setFormData({ ...formData, landHoldingAcre: e.target.value })}
                        required
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '13.5px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>
                      Primary Agricultural Credit Society (PACS)
                    </label>
                    <input
                      type="text"
                      value={formData.pacsName}
                      onChange={(e) => setFormData({ ...formData, pacsName: e.target.value })}
                      required
                      style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '13.5px' }}
                    />
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '8px', fontSize: '12px', color: '#475569', marginBottom: '20px' }}>
                  ✓ 7/12 Land extract & Aadhaar e-KYC will be synchronized through the PACS digitization portal.
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="submit"
                    className="btn-action-orange"
                    style={{ flex: 1, padding: '12px', fontSize: '14px' }}
                  >
                    <span>Submit Pre-Application to PACS</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => setShowApplyModal(false)}
                    style={{ padding: '12px 16px' }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#EAF7EE', color: '#0F744A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '4px' }}>
                  PACS Application Pre-Registered!
                </h3>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent-orange)', marginBottom: '12px', fontFamily: 'monospace' }}>
                  Reference No: {appId}
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.5, marginBottom: '20px' }}>
                  Your application for <strong>{scheme.name}</strong> has been logged with <strong>{formData.pacsName}</strong>. Please present your 7/12 copy at the counter before the deadline ({scheme.deadline}).
                </p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    className="btn-action-orange"
                    style={{ flex: 1, padding: '11px' }}
                    onClick={() => window.print()}
                  >
                    <Printer size={15} />
                    <span>Print Slip</span>
                  </button>
                  <button
                    type="button"
                    className="btn-outline"
                    style={{ padding: '11px 18px' }}
                    onClick={() => setShowApplyModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
