import React from 'react';
import { Printer, Download, X, QrCode } from 'lucide-react';

export default function ThermalSlipModal({ ticket, queryData, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const currentTime = new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '400px',
          width: '100%',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-36px',
            right: '0',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
          <span>Close Preview</span>
        </button>

        {/* Thermal Slip Content */}
        <div className="thermal-slip-card">
          <div className="thermal-slip-header">
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 'bold' }}>
              GOVT. OF INDIA • MINISTRY OF COOPERATION
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0', letterSpacing: '0.05em' }}>
              SAHAKAR SAATHI
            </div>
            <div style={{ fontSize: '11px', color: '#4B5563' }}>
              VILLAGE PACS KIOSK #042 • SANGAMNER
            </div>
            <div style={{ fontSize: '10px', marginTop: '4px' }}>
              DATE: {currentDate} | TIME: {currentTime}
            </div>
          </div>

          <div style={{ fontSize: '12px', lineHeight: 1.6, padding: '4px 0' }}>
            {ticket ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '4px', marginBottom: '6px' }}>
                  <span>TICKET NO:</span>
                  <strong>{ticket.ticketId}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>STATUS:</span>
                  <strong>{ticket.status}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>TYPE:</span>
                  <span>{ticket.issueType}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>DISTRICT:</span>
                  <span>{ticket.district}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>SOCIETY:</span>
                  <span style={{ maxWidth: '170px', textAlign: 'right' }}>{ticket.cooperativeName}</span>
                </div>
                <div style={{ marginTop: '8px', borderTop: '1px dashed #CBD5E1', paddingTop: '6px' }}>
                  <span style={{ fontSize: '10px' }}>SUMMARY:</span>
                  <div style={{ fontSize: '11px', fontStyle: 'italic' }}>
                    "{ticket.description}"
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '4px', marginBottom: '6px' }}>
                  <span>INQUIRY TYPE:</span>
                  <strong>PMFBY CLAIM PROCESS</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>SOURCE:</span>
                  <span>PMFBY Guidelines Sec 4.2</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>INTIMATION WINDOW:</span>
                  <strong>72 HOURS</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>HELPLINE:</span>
                  <strong>14447 (Toll Free)</strong>
                </div>
              </>
            )}
          </div>

          {/* QR Code and PACS Verification Seal */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '14px 0', padding: '10px 0', borderTop: '1px dashed #4B5563', borderBottom: '1px dashed #4B5563' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '44px', height: '44px', border: '1px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <QrCode size={36} />
              </div>
              <div style={{ fontSize: '9px', lineHeight: 1.3 }}>
                SCAN TO TRACK<br />
                ON MOBILE APP<br />
                OR PACS COUNTER
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '9px', border: '1px solid #0F744A', padding: '4px 6px', borderRadius: '4px', color: '#0F744A' }}>
              VERIFIED RECORD<br />
              <strong>PACS DESK OK</strong>
            </div>
          </div>

          <div className="thermal-slip-footer">
            <div style={{ fontSize: '11px', fontWeight: 'bold' }}>
              *** धन्यवाद! THANK YOU! ***
            </div>
            <div style={{ fontSize: '9px', color: '#6B7280', marginTop: '2px' }}>
              Grounding verified with Model By-laws & MoC Standards
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div style={{ marginTop: '14px', display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className="btn-action-orange"
            style={{ flex: 1, padding: '12px' }}
            onClick={handlePrint}
          >
            <Printer size={16} />
            <span>Print Physical Slip</span>
          </button>
          <button
            type="button"
            className="btn-outline"
            style={{ background: '#FFFFFF', padding: '12px' }}
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
