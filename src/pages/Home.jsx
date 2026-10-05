import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  ChevronRight,
  BookOpen,
  FileCheck2,
  Umbrella,
  AlertTriangle,
  Building,
  Landmark,
  Sparkles,
  Award
} from 'lucide-react';
import VoiceButton from '../components/VoiceButton';
import LanguageSelector from '../components/LanguageSelector';
import { useApp } from '../context/AppContext';
import { PacsGovtLandscapeDoodle } from '../components/Doodles';

export default function Home() {
  const navigate = useNavigate();
  const { language } = useApp();
  const [showTrustModal, setShowTrustModal] = useState(false);

  const handleHeroVoice = (sampleText) => {
    // Navigate to ask assistant and pre-fill query
    navigate('/ask', { state: { initialVoiceQuery: sampleText } });
  };

  const greetings = {
    mr: { hello: "नमस्कार 👋", title: "सहकार साथी तुम्हाला आज कशी मदत करू शकते?", sub: "सहकारी कायदे, शासकीय योजना, PMFBY पीक विमा किंवा तक्रारींविषयी विचारा." },
    hi: { hello: "नमस्कार 👋", title: "सहकार साथी आज आपकी क्या सहायता कर सकता है?", sub: "सहकारी नियम, सरकारी योजनाएं, PMFBY फसल बीमा या शिकायत के बारे में पूछें।" },
    en: { hello: "Namaskar 👋", title: "How can Sahakar Saathi help you today?", sub: "Ask about cooperative laws, schemes, PMFBY, financial literacy or grievances." },
    te: { hello: "నమస్కారం 👋", title: "సహకార సాథి మీకు ఎలా సహాయం చేయగలదు?", sub: "సహకార చట్టాలు, పథకాలు, PMFBY లేదా ఫిర్యాదుల గురించి అడగండి." },
    bn: { hello: "নমস্কার 👋", title: "সহকার সাথী আজ আপনাকে কীভাবে সাহায্য করতে পারে?", sub: "সমবায় আইন, সরকারি প্রকল্প, PMFBY ফসল বীমা বা অভিযোগ সম্পর্কে জিজ্ঞাসা করুন।" }
  };

  const curr = greetings[language] || greetings['en'];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <div className="hero-box">
        <div className="pill-section-tag green">
          <Sparkles size={12} />
          <span>Voice-First Rural AI Assistant</span>
        </div>

        <h1 className="hero-greeting">{curr.hello}</h1>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
          {curr.title}
        </h2>
        <p className="hero-subtitle">
          {curr.sub}
        </p>

        {/* Big Tap to Speak Voice Button */}
        <div style={{ margin: '10px 0 24px' }}>
          <VoiceButton
            size="hero"
            label="Tap to Speak"
            onVoiceCaptured={handleHeroVoice}
          />
        </div>

        {/* Choose Language */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
            Choose your language / भाषा निवडा:
          </div>
          <div className="hero-lang-row">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Trust Banner (Interactive) */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <button
          type="button"
          onClick={() => setShowTrustModal(true)}
          className="trust-banner"
          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
          title="Click to view statutory grounding certificate"
        >
          <ShieldCheck size={18} color="#0F744A" />
          <span>Answers are grounded in verified government documents.</span>
          <span style={{ fontSize: '11px', color: 'var(--primary-green)', fontWeight: 700, marginLeft: '4px' }}>[Verify]</span>
        </button>
      </div>

      {showTrustModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3000,
            padding: '16px'
          }}
          onClick={() => setShowTrustModal(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <ShieldCheck size={26} color="#0F744A" />
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>
                Government Verification Guarantee
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.5, marginBottom: '16px' }}>
              Sahakar Saathi enforces strict retrieval grounding. The system only provides answers validated against published acts, circulars, and official portals:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <div style={{ padding: '8px 12px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', fontSize: '12.5px', color: '#166534' }}>
                ✓ Multi-State Cooperative Societies (Amendment) Act, 2023
              </div>
              <div style={{ padding: '8px 12px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', fontSize: '12.5px', color: '#166534' }}>
                ✓ PMFBY Revised Operational Guidelines 2024
              </div>
              <div style={{ padding: '8px 12px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', fontSize: '12.5px', color: '#166534' }}>
                ✓ Model By-laws for PACS (Ministry of Cooperation)
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="btn-action-orange"
                style={{ flex: 1, padding: '10px' }}
                onClick={() => {
                  setShowTrustModal(false);
                  navigate('/sources');
                }}
              >
                Explore All 6 Verified Sources
              </button>
              <button
                type="button"
                className="btn-outline"
                style={{ padding: '10px 16px' }}
                onClick={() => setShowTrustModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4 Main Action Cards Grid */}
      <div className="home-actions-grid">
        {/* Card 1: Cooperative Rights (Green) */}
        <div
          className="action-card green-theme"
          onClick={() => navigate('/ask', { state: { initialText: "सहकारी संस्थेत मतदानाचा अधिकार मिळण्यासाठी नियम काय आहेत?" } })}
        >
          <div>
            <div className="action-card-icon-wrap">
              <BookOpen size={22} />
            </div>
            <h3 className="action-card-title">Cooperative Rights</h3>
            <p className="action-card-desc">
              Understand your rights, by-laws and cooperative procedures.
            </p>
          </div>
          <div className="action-card-footer" style={{ color: 'var(--primary-green)' }}>
            <span>Explore Rights</span>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Card 2: Government Schemes (Orange) */}
        <div
          className="action-card orange-theme"
          onClick={() => navigate('/schemes')}
        >
          <div>
            <div className="action-card-icon-wrap">
              <FileCheck2 size={22} />
            </div>
            <h3 className="action-card-title">Government Schemes</h3>
            <p className="action-card-desc">
              Find schemes you may be eligible for with custom checks.
            </p>
          </div>
          <div className="action-card-footer" style={{ color: 'var(--accent-orange)' }}>
            <span>Check Eligibility</span>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Card 3: PMFBY Assistance (Blue) */}
        <div
          className="action-card blue-theme"
          onClick={() => navigate('/ask', { state: { initialText: "माझ्या पिकासाठी PMFBY अंतर्गत दावा कसा करायचा?" } })}
        >
          <div>
            <div className="action-card-icon-wrap">
              <Umbrella size={22} />
            </div>
            <h3 className="action-card-title">PMFBY Assistance</h3>
            <p className="action-card-desc">
              Understand crop insurance, claims process and required documents.
            </p>
          </div>
          <div className="action-card-footer" style={{ color: 'var(--blue-info)' }}>
            <span>Insurance Guidance</span>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Card 4: File a Grievance (Purple) */}
        <div
          className="action-card purple-theme"
          onClick={() => navigate('/grievance')}
        >
          <div>
            <div className="action-card-icon-wrap">
              <AlertTriangle size={22} />
            </div>
            <h3 className="action-card-title">File a Grievance</h3>
            <p className="action-card-desc">
              Create, escalate and track a complaint with statutory timeline.
            </p>
          </div>
          <div className="action-card-footer" style={{ color: 'var(--purple-grievance)' }}>
            <span>Submit Ticket</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      {/* PACS Rural Technology Graphic Banner matching PPT Screen 1 */}
      <div className="rural-pacs-footer-graphic" style={{ flexDirection: 'column', gap: '16px', padding: '24px 28px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '16px' }}>
          <div className="pacs-badge-illustration">
            <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '16px', border: '1px solid var(--primary-green-border)', boxShadow: '0 2px 6px rgba(15,116,74,0.1)' }}>
              <Building size={32} color="#0F744A" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pill-section-tag green" style={{ marginBottom: 0 }}>
                  PACS Computerization Ecosystem
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Target: 63,000+ Functional Societies
                </span>
              </div>
              <h4 style={{ fontSize: '15px', color: 'var(--primary-green-dark)', marginTop: '4px', fontWeight: 700 }}>
                Village-Level Empowerment through Primary Agricultural Credit Societies (PACS)
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', marginTop: '2px' }}>
                Offline Edge Voice Nodes ensure every farmer gets instant statutory guidance even during rural internet outages.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/kiosk')}
            className="btn-action-orange"
            style={{ whiteSpace: 'nowrap' }}
          >
            <span>Launch PACS Kiosk Mode</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Vector Landscape Doodle matching PPT Screen 1 */}
        <div style={{ width: '100%', marginTop: '6px', transform: 'scale(1.02)' }}>
          <PacsGovtLandscapeDoodle />
        </div>
      </div>
    </div>
  );
}
