import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Printer,
  ExternalLink,
  CheckCircle2,
  Clock,
  ArrowRight,
  Landmark,
  Building,
  ShieldAlert,
  Share2,
  Eye,
  X
} from 'lucide-react';
import StatusBadge from './StatusBadge';
import ThermalSlipModal from './ThermalSlipModal';

export default function TicketCard({ ticket, showFullTimeline = true, onSelect }) {
  const navigate = useNavigate();
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showDossierModal, setShowDossierModal] = useState(false);

  return (
    <>
      <div className="grievance-ticket-box">
        {/* Ticket Header */}
        <div className="ticket-header-strip">
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--purple-grievance)', marginBottom: '2px' }}>
              GRIEVANCE TICKET
            </div>
            <div className="ticket-id-display">{ticket.ticketId}</div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <StatusBadge status={ticket.status} />
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Logged: {ticket.date}
            </div>
          </div>
        </div>

        {/* Metadata Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '16px', background: '#FBF8FE', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E9D5FF' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Issue Type</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--purple-grievance)' }}>{ticket.issueType}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>District / Taluka</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-dark)' }}>{ticket.district}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Route Assigned</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F744A' }}>{ticket.route}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Complainant</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-dark)' }}>{ticket.farmerName || 'Farmer'}</div>
          </div>
        </div>

        {/* Complaint summary */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
            Registered Complaint Details:
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.5, background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px 14px' }}>
            "{ticket.description}"
          </p>
        </div>

        {/* Escalation Timeline matching PPT */}
        {showFullTimeline && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Statutory Escalation Timeline:
            </div>

            <div className="escalation-timeline">
              {/* Step 1: PACS */}
              <div className="timeline-step-row completed">
                <div className="timeline-icon-dot">
                  <CheckCircle2 size={14} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '13px', color: 'var(--primary-green)' }}>
                      PACS (Primary Agricultural Credit Society)
                    </strong>
                    <span style={{ fontSize: '11px', color: '#0F744A', fontWeight: 600 }}>Submitted (Day 0)</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Complaint routed to PACS Secretary & Society Desk ({ticket.cooperativeName})
                  </div>
                </div>
              </div>

              {/* Step 2: Registrar */}
              <div className="timeline-step-row current">
                <div className="timeline-icon-dot" style={{ background: '#FFF7ED', borderColor: '#FF8A00', color: '#FF8A00' }}>
                  <Clock size={14} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '13px', color: '#C2410C' }}>
                      Assistant Registrar / District Central Society
                    </strong>
                    <span style={{ fontSize: '11px', color: '#C2410C', fontWeight: 600 }}>Pending Review</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Auto-escalates if unresolved within 7 statutory working days.
                  </div>
                </div>
              </div>

              {/* Step 3: Higher Authority */}
              <div className="timeline-step-row">
                <div className="timeline-icon-dot" style={{ background: '#F3F4F6', color: '#9CA3AF' }}>
                  <Building size={12} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '13px', color: '#6B7280' }}>
                      State Cooperative Ombudsman / Higher Authority
                    </strong>
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>Next Level (Day 15+)</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                    Appellate review under MSCS Act Section 84.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons matching PPT: Track Status & View Complaint & Print Slip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setShowPrintModal(true)}
              style={{ fontSize: '13px', padding: '8px 14px' }}
              title="Print thermal receipt slip"
            >
              <Printer size={15} />
              <span>Print PACS Slip</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="btn-outline"
              onClick={() => setShowDossierModal(true)}
              style={{ fontSize: '13px', padding: '8px 14px' }}
              title="View full grievance dossier"
            >
              <Eye size={15} />
              <span>View Complaint</span>
            </button>

            <button
              type="button"
              className="btn-action-orange"
              onClick={() => navigate('/activity')}
              style={{ fontSize: '13px', padding: '8px 16px' }}
              title="Track grievance in activity log"
            >
              <span>Track Status</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* View Complaint Dossier Modal */}
      {showDossierModal && (
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
          onClick={() => setShowDossierModal(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '560px',
              width: '100%',
              padding: '28px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowDossierModal(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: '#9CA3AF', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="pill-section-tag purple" style={{ marginBottom: 0 }}>
                Official Dossier
              </span>
              <StatusBadge status={ticket.status} />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--purple-grievance)', marginBottom: '4px' }}>
              Case Dossier: {ticket.ticketId}
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '18px' }}>
              Statutory grievance registered under Section 84 of MSCS Act and State Cooperative Societies Framework.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', fontSize: '13px' }}>
              <div style={{ background: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Complainant:</span>
                <strong>{ticket.farmerName || 'Rameshwar Patil'} ({ticket.mobile || '9822******'})</strong>
              </div>
              <div style={{ background: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Primary Society:</span>
                <strong>{ticket.cooperativeName}</strong>
              </div>
              <div style={{ background: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>District Nodal Desk:</span>
                <strong>{ticket.district}</strong>
              </div>
              <div style={{ background: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Filing Date:</span>
                <strong>{ticket.date}</strong>
              </div>
              <div style={{ background: '#FAF5FF', border: '1px solid #E9D5FF', padding: '12px 14px', borderRadius: '8px' }}>
                <span style={{ color: 'var(--purple-grievance)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  Registered Statement:
                </span>
                <p style={{ color: '#1F2937', fontStyle: 'italic', lineHeight: 1.5 }}>
                  "{ticket.description}"
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="btn-action-orange"
                style={{ flex: 1, padding: '11px', background: 'var(--purple-grievance)' }}
                onClick={() => {
                  setShowDossierModal(false);
                  setShowPrintModal(true);
                }}
              >
                <Printer size={15} />
                <span>Print Official Slip</span>
              </button>
              <button
                type="button"
                className="btn-outline"
                style={{ padding: '11px 18px' }}
                onClick={() => setShowDossierModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Printable Receipt Modal */}
      {showPrintModal && (
        <ThermalSlipModal
          ticket={ticket}
          onClose={() => setShowPrintModal(false)}
        />
      )}
    </>
  );
}
