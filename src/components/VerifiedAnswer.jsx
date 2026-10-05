import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  FileCheck2,
  FileText,
  AlertTriangle,
  Volume2,
  VolumeX,
  Building2,
  CheckCircle2,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function VerifiedAnswer({
  answerText,
  steps = [],
  sourceTitle = "PMFBY Operational Guidelines",
  sourceSection = "Section 4.2",
  sourceUpdated = "2024",
  sourceUrl = "https://pmfby.gov.in",
  isOfflineAnswer = false
}) {
  const navigate = useNavigate();
  const { language } = useApp();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showDocModal, setShowDocModal] = useState(false);

  // Read aloud feature (Speech Synthesis or simulated voice waveform)
  const toggleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const textToSpeak = `${answerText} ${steps.join('. ')}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        // Marathi/Hindi or default
        if (language === 'mr') utterance.lang = 'mr-IN';
        else if (language === 'hi') utterance.lang = 'hi-IN';
        else utterance.lang = 'en-IN';

        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    } else {
      // Simulate audio playback for demo
      setIsPlayingAudio(!isPlayingAudio);
      if (!isPlayingAudio) {
        setTimeout(() => setIsPlayingAudio(false), 4000);
      }
    }
  };

  return (
    <div className="verified-answer-component">
      {/* Read aloud & status bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            type="button"
            onClick={toggleSpeech}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              fontWeight: 600,
              padding: '3px 9px',
              borderRadius: '999px',
              background: isPlayingAudio ? '#FEE2E2' : '#F3F4F6',
              color: isPlayingAudio ? '#DC2626' : '#374151',
              border: '1px solid #E5E7EB',
              cursor: 'pointer'
            }}
            title="Read out response in voice"
          >
            {isPlayingAudio ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{isPlayingAudio ? 'थांबवा (Stop Audio)' : 'ऐका (Listen)'}</span>
          </button>

          {isOfflineAnswer && (
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                background: '#FFF7ED',
                color: '#C2410C',
                padding: '2px 8px',
                borderRadius: '999px',
                border: '1px solid #FED7AA'
              }}
            >
              Offline Cached Rule
            </span>
          )}
        </div>

        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {/* Main answer text */}
      <div style={{ fontSize: '14.5px', color: 'var(--text-dark)', marginBottom: '10px', lineHeight: 1.55 }}>
        {answerText}
      </div>

      {/* Steps list if present */}
      {steps && steps.length > 0 && (
        <ol style={{ paddingLeft: '20px', marginBottom: '14px', fontSize: '13.5px', color: '#1F2937', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {steps.map((st, i) => (
            <li key={i}>{st}</li>
          ))}
        </ol>
      )}

      {/* Verified Source Card (matching PPT) */}
      <div className="verified-source-card">
        <div className="source-header-row">
          <span className="verified-pill">
            <ShieldCheck size={12} />
            <span>Verified Source</span>
          </span>

          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: 'var(--primary-green)' }}
            title="Open official government source"
          >
            <span>Open Source</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="source-title">{sourceTitle}</div>
        <div className="source-meta">
          <strong>{sourceSection}</strong> • Last updated: {sourceUpdated}
        </div>

        {/* Low Confidence Notice (Mandatory trust rule from prompt) */}
        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(15, 116, 74, 0.2)', fontSize: '11.5px', color: '#065F46', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
          <Building2 size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            When confidence is low, Sahakar Saathi directs the user to the PACS Secretary / Registrar office.
          </span>
        </div>
      </div>

      {/* What you can do next (matching PPT) */}
      <div className="chat-next-actions">
        <div className="next-action-label">What you can do next</div>
        <div className="next-actions-row">
          <button
            type="button"
            className="next-action-pill green"
            onClick={() => navigate('/schemes')}
          >
            <FileCheck2 size={14} />
            <span>Check Eligibility</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            className="next-action-pill orange"
            onClick={() => setShowDocModal(true)}
          >
            <FileText size={14} />
            <span>Required Documents</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            className="next-action-pill purple"
            onClick={() => navigate('/grievance')}
          >
            <AlertTriangle size={14} />
            <span>File Grievance</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Required Documents Checklist Modal */}
      {showDocModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '16px'
          }}
          onClick={() => setShowDocModal(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '480px',
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--primary-green)' }}>
                📋 Required Documents for PMFBY Claim
              </h3>
              <button
                type="button"
                onClick={() => setShowDocModal(false)}
                style={{ fontSize: '20px', fontWeight: 'bold', color: '#9CA3AF' }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Keep these physical or digitized records ready before submitting at your village PACS or CSC center:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F9FAFB', padding: '10px 14px', borderRadius: '8px' }}>
                <CheckCircle2 size={16} color="#0F744A" />
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>7/12 Land Record Extract / RoR</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F9FAFB', padding: '10px 14px', borderRadius: '8px' }}>
                <CheckCircle2 size={16} color="#0F744A" />
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Sowing Certificate (पेरणी दाखला / Patwari)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F9FAFB', padding: '10px 14px', borderRadius: '8px' }}>
                <CheckCircle2 size={16} color="#0F744A" />
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Aadhaar linked Bank Account Passbook</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#F9FAFB', padding: '10px 14px', borderRadius: '8px' }}>
                <CheckCircle2 size={16} color="#0F744A" />
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Intimation number from 14447 or App</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-action-orange"
              style={{ width: '100%' }}
              onClick={() => {
                setShowDocModal(false);
                navigate('/schemes');
              }}
            >
              Verify My Scheme Eligibility
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
