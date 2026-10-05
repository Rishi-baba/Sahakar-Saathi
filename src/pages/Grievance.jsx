import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileText,
  RotateCcw,
  Sparkles,
  Info,
  ShieldCheck,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import TicketCard from '../components/TicketCard';
import { useApp } from '../context/AppContext';

export default function Grievance() {
  const navigate = useNavigate();
  const { addGrievance } = useApp();

  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    issueType: 'PMFBY',
    cooperativeName: 'Sangamner Vividh Karyakari Seva Sahakari Sanstha',
    district: 'Sangamner (Ahmednagar)',
    farmerName: 'Rameshwar Patil',
    mobile: '9822******',
    description: 'My PMFBY claim has not been processed for Kharif crop loss despite survey completion in September 2025.'
  });

  const [createdTicket, setCreatedTicket] = useState(null);

  const issueTypes = [
    'PMFBY',
    'Membership',
    'Cooperative rights',
    'Scheme access',
    'Loan/service issue',
    'Other'
  ];

  const handleAutofillDemo = () => {
    setFormData({
      issueType: 'PMFBY',
      cooperativeName: 'Sangamner Vividh Karyakari Seva Sahakari Sanstha',
      district: 'Sangamner (Ahmednagar)',
      farmerName: 'Rameshwar Patil',
      mobile: '9822451089',
      description: 'My PMFBY claim has not been processed for Kharif crop loss despite survey completion in September 2025.'
    });
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!formData.description.trim()) return;
    setStep(2);
  };

  const handleConfirmSubmit = () => {
    // Generate new ticket
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newTicketId = `GRC-2026-${randNum}`;

    const newTicket = {
      ticketId: newTicketId,
      issueType: formData.issueType,
      issueTitle: `${formData.issueType} claim issue: ${formData.cooperativeName}`,
      cooperativeName: formData.cooperativeName,
      district: formData.district,
      farmerName: formData.farmerName,
      mobile: formData.mobile,
      description: formData.description,
      status: 'Submitted',
      route: 'PACS → Registrar',
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      timeline: [
        { step: "PACS (Local Society)", status: "Submitted", date: "Today", note: "Complaint logged and forwarded to District Nodal Officer" },
        { step: "Assistant Registrar", status: "Pending", date: "Expected in 7 days", note: "Verification against PACS roster" },
        { step: "Higher Authority / Ombudsman", status: "Pending", date: "Escalation threshold: 15 days", note: "Appellate review" }
      ]
    };

    // Save in context
    addGrievance(newTicket);
    setCreatedTicket(newTicket);
    setStep(3);

    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="grievance-page-container" style={{ maxWidth: '840px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div className="pill-section-tag purple">
          <AlertTriangle size={13} />
          <span>STATUTORY GRIEVANCE REDRESSAL</span>
        </div>
        <h1 style={{ fontSize: '28px', color: 'var(--text-dark)', fontWeight: 800 }}>
          File & Escalate a Cooperative Grievance
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
          Directly register issues with your village PACS. Unresolved disputes automatically escalate to the Assistant Registrar.
        </p>
      </div>

      {/* Stepper Header Strip */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: step >= 1 ? 'var(--purple-grievance)' : '#E5E7EB',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '12px'
            }}
          >
            1
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: step === 1 ? 'var(--purple-grievance)' : 'var(--text-muted)' }}>
            Issue Details
          </span>

          <span style={{ color: '#CBD5E1' }}>—</span>

          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: step >= 2 ? 'var(--purple-grievance)' : '#E5E7EB',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '12px'
            }}
          >
            2
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: step === 2 ? 'var(--purple-grievance)' : 'var(--text-muted)' }}>
            Confirmation
          </span>

          <span style={{ color: '#CBD5E1' }}>—</span>

          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: step === 3 ? '#10B981' : '#E5E7EB',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '12px'
            }}
          >
            3
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: step === 3 ? '#10B981' : 'var(--text-muted)' }}>
            Ticket Generated
          </span>
        </div>

        {step === 1 && (
          <button
            type="button"
            onClick={handleAutofillDemo}
            className="btn-outline"
            style={{ fontSize: '12px', padding: '4px 10px' }}
            title="Autofill sample hackathon PMFBY complaint"
          >
            <Sparkles size={12} />
            <span>Load Sample Complaint</span>
          </button>
        )}
      </div>

      {/* STEP 1: FORM */}
      {step === 1 && (
        <form onSubmit={handleStep1Submit} className="saathi-card" style={{ padding: '28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '20px' }}>
            {/* Issue Type */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Issue Category *
              </label>
              <select
                value={formData.issueType}
                onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '14px', background: '#FFFFFF' }}
              >
                {issueTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* District */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                District / Taluka *
              </label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="e.g. Sangamner (Ahmednagar)"
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>
          </div>

          {/* Cooperative Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
              Cooperative Society / PACS Name *
            </label>
            <input
              type="text"
              value={formData.cooperativeName}
              onChange={(e) => setFormData({ ...formData, cooperativeName: e.target.value })}
              placeholder="e.g. Sangamner Vividh Karyakari Seva Sahakari Sanstha"
              required
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '14px' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '20px' }}>
            {/* Farmer Name */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Complainant Farmer Name *
              </label>
              <input
                type="text"
                value={formData.farmerName}
                onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                placeholder="Full Name"
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>

            {/* Mobile */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Mobile Number for SMS Tracking *
              </label>
              <input
                type="text"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="10-digit mobile number"
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
              Grievance Description *
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your issue clearly..."
              required
              style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1.5px solid var(--border-light)', fontSize: '14px', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              className="btn-action-orange"
              style={{ padding: '12px 24px', fontSize: '15px' }}
            >
              <span>Continue to Verification</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}

      {/* STEP 2: CONFIRMATION (Matching prompt requirement) */}
      {step === 2 && (
        <div className="saathi-card" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
            Confirm Grievance Submission
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Please review the registered summary before committing to the statutory cooperative registry.
          </p>

          {/* Prompt specified statement */}
          <div
            style={{
              background: '#F5F3FF',
              border: '1.5px solid #DDD6FE',
              borderRadius: '12px',
              padding: '18px',
              marginBottom: '20px'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--purple-grievance)', textTransform: 'uppercase', marginBottom: '6px' }}>
              You said:
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#1F2937', fontStyle: 'italic', lineHeight: 1.5 }}>
              “{formData.description}”
            </div>
          </div>

          {/* Details Table */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '24px', fontSize: '13.5px' }}>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Category:</span> <strong>{formData.issueType}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Cooperative:</span> <strong>{formData.cooperativeName}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>District:</span> <strong>{formData.district}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Complainant:</span> <strong>{formData.farmerName} ({formData.mobile})</strong>
            </div>
          </div>

          {/* Escalation Route Note */}
          <div style={{ background: '#F9FAFB', padding: '12px 16px', borderRadius: '8px', fontSize: '12.5px', color: '#4B5563', marginBottom: '24px' }}>
            <strong>Assigned Escalation Route:</strong> Village PACS Secretary → Assistant Registrar (Cooperative Societies) → District Ombudsman.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button
              type="button"
              className="btn-outline"
              onClick={() => setStep(1)}
            >
              <ArrowLeft size={16} />
              <span>Edit Details</span>
            </button>

            <button
              type="button"
              className="btn-action-orange"
              onClick={handleConfirmSubmit}
              style={{ background: 'var(--purple-grievance)', padding: '12px 28px', fontSize: '15px' }}
            >
              <span>Confirm & Generate Ticket</span>
              <CheckCircle2 size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: TICKET GENERATED (Matching PPT visual) */}
      {step === 3 && createdTicket && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EAF7EE', color: '#0F744A', padding: '6px 16px', borderRadius: '999px', fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>
              <CheckCircle2 size={16} />
              <span>Complaint Successfully Registered</span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
              Grievance Ticket Generated
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              SMS notification sent to {createdTicket.mobile}. You can track this ticket anytime in My Activity.
            </p>
          </div>

          {/* Large Ticket Card with Timeline */}
          <TicketCard ticket={createdTicket} showFullTimeline={true} />

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  issueType: 'Membership',
                  cooperativeName: '',
                  district: '',
                  farmerName: '',
                  mobile: '',
                  description: ''
                });
                setStep(1);
              }}
              className="btn-outline"
              style={{ fontSize: '13px' }}
            >
              File Another Grievance
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
