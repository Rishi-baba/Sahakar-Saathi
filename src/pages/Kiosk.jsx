import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic,
  Monitor,
  Printer,
  ChevronRight,
  HelpCircle,
  FileCheck2,
  AlertTriangle,
  MessageSquareQuote,
  X,
  Volume2,
  Sparkles,
  QrCode,
  ShieldCheck,
  Building,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import VoiceButton from '../components/VoiceButton';
import LanguageSelector from '../components/LanguageSelector';
import { useApp } from '../context/AppContext';
import { SAMPLE_CHAT_PRESETS, QUICK_QUESTIONS, SCHEMES_DATABASE } from '../data/mockData';
import { KioskNatureBackdrop } from '../components/Doodles';

export default function Kiosk() {
  const navigate = useNavigate();
  const { language, isOffline, addGrievance } = useApp();

  const [activeQuery, setActiveQuery] = useState("माझ्या पिकासाठी PMFBY अंतर्गत दावा कसा करायचा?");
  const [activeResponse, setActiveResponse] = useState("तुमचा PMFBY दावा दाखल करण्यासाठी प्रथम नुकसानीची माहिती नोंदवा आणि आवश्यक कागदपत्रे तयार ठेवा. (Guidelines Sec 4.2)");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPrintingAnim, setIsPrintingAnim] = useState(false);
  const [printedTime, setPrintedTime] = useState("10:23 AM");

  // Kiosk touch action modals
  const [kioskModal, setKioskModal] = useState(null); // 'ask' | 'schemes' | 'grievance' | 'help'
  const [kioskGrievanceLogged, setKioskGrievanceLogged] = useState(null);

  const kioskPrompts = {
    mr: { speak: "बोला...", sub: "मी तुमच्या मदतीसाठी आहे.", hint: "माईकवर टॅप करा आणि विचारा" },
    hi: { speak: "बोलिए...", sub: "मैं आपकी सहायता के लिए उपस्थित हूँ।", hint: "माइक पर टैप करें और बोलें" },
    en: { speak: "Speak now...", sub: "I am here to assist you.", hint: "Tap the microphone to speak" },
    te: { speak: "మాట్లాడండి...", sub: "నేను మీ సహాయం కోసం ఇక్కడ ఉన్నాను.", hint: "మైక్రోఫోన్‌ను నొక్కండి" },
    bn: { speak: "বলুন...", sub: "আমি আপনার সাহায্যের জন্য প্রস্তুত।", hint: "মাইক্রোফোনে ট্যাপ করুন" }
  };

  const curr = kioskPrompts[language] || kioskPrompts['mr'];
  const preset = SAMPLE_CHAT_PRESETS[language] || SAMPLE_CHAT_PRESETS['mr'];

  const handleKioskVoice = (queryText) => {
    setIsProcessing(true);
    setActiveQuery(queryText);
    setTimeout(() => {
      setActiveResponse(preset.answer);
      setPrintedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setIsProcessing(false);
    }, 1200);
  };

  const handlePrintSlip = () => {
    setIsPrintingAnim(true);
    setTimeout(() => {
      setIsPrintingAnim(false);
      window.print();
    }, 600);
  };

  const handleQuickKioskGrievance = (issueType) => {
    const newId = `GRC-KIOSK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTicket = {
      ticketId: newId,
      issueType: issueType,
      issueTitle: `${issueType} issue reported via Village Kiosk #042`,
      cooperativeName: "Sangamner Vividh Karyakari Seva Sahakari Sanstha",
      district: "Sangamner (Ahmednagar)",
      farmerName: "Kiosk Walk-in Member",
      mobile: "9822******",
      description: `Rapid voice-logged grievance at PACS Terminal regarding ${issueType}. Forwarded to Society Secretary.`,
      status: "Submitted",
      route: "PACS → Registrar",
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      timeline: [
        { step: "PACS Terminal", status: "Submitted", date: "Today", note: "Logged at kiosk counter" }
      ]
    };
    addGrievance(newTicket);
    setKioskGrievanceLogged(newTicket);
    setActiveQuery(`Grievance: ${issueType} (Ticket ${newId})`);
    setActiveResponse(`तुमची तक्रार यशस्वीपणे नोंदवली गेली आहे. पावती खालील प्रिंटरमधून मिळवा. (Ticket: ${newId})`);
    setPrintedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  return (
    <div className="kiosk-fullscreen-shell">
      {/* Top Kiosk Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', width: '100%', margin: '0 auto 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
          <span style={{ color: '#E2E8F0', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}>
            RURAL PACS TOUCHPOINT TERMINAL #042 • SANGAMNER
          </span>
        </div>

        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '8px 16px',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <X size={16} />
          <span>Exit Kiosk Mode</span>
        </button>
      </div>

      {/* Main Kiosk Center Console */}
      <div className="kiosk-kiosk-body">
        {/* Terminal Screen Mockup */}
        <div className="kiosk-screen-terminal">
          {/* Top Brand on terminal */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '2px solid #F1F5F9', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-green)' }}>Sahakar</span>
              <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-orange)' }}>Saathi</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LanguageSelector compact={true} />
            </div>
          </div>

          {/* Touchscreen Voice Prompt */}
          <div style={{ margin: '14px 0' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 900, color: 'var(--primary-green-dark)', lineHeight: 1.15 }}>
              “{curr.speak}”
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-muted)', marginTop: '4px' }}>
              {curr.sub}
            </p>
          </div>

          {/* Giant Mic Button */}
          <VoiceButton
            size="giant"
            label="बोला (Tap to Speak)"
            onVoiceCaptured={handleKioskVoice}
          />

          {isProcessing && (
            <div style={{ fontSize: '14px', color: 'var(--primary-green)', fontWeight: 700, margin: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Sparkles size={16} />
              <span>Processing rural dialect via AI4Bharat IndicWhisper...</span>
            </div>
          )}

          {/* 4 High-contrast touch buttons */}
          <div className="kiosk-grid-touch-buttons">
            <button
              type="button"
              className="kiosk-touch-btn"
              onClick={() => setKioskModal('ask')}
              style={{ background: '#EAF7EE', color: '#0F744A', borderColor: '#A3D9B5' }}
            >
              <MessageSquareQuote size={20} />
              <span>Ask Question</span>
            </button>

            <button
              type="button"
              className="kiosk-touch-btn"
              onClick={() => setKioskModal('schemes')}
              style={{ background: '#FFF4E5', color: '#C2410C', borderColor: '#FFD299' }}
            >
              <FileCheck2 size={20} />
              <span>Schemes</span>
            </button>

            <button
              type="button"
              className="kiosk-touch-btn"
              onClick={() => setKioskModal('grievance')}
              style={{ background: '#F3EEFE', color: '#7C3AED', borderColor: '#D8B4FE' }}
            >
              <AlertTriangle size={20} />
              <span>Grievance</span>
            </button>

            <button
              type="button"
              className="kiosk-touch-btn"
              onClick={() => setKioskModal('help')}
              style={{ background: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}
            >
              <HelpCircle size={20} />
              <span>Help & Secretary</span>
            </button>
          </div>
        </div>

        {/* Right side: Printed Slip Preview (matching PPT exactly) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', color: '#FFFFFF' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Print Slip (Preview)
            </span>
            <span style={{ fontSize: '11px', opacity: 0.8 }}>Thermal 58mm Dispenser</span>
          </div>

          <div className={`thermal-slip-card ${isPrintingAnim ? 'printing' : ''}`} style={{ transition: 'all 0.3s ease' }}>
            <div className="thermal-slip-header">
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                Sahakar Saathi
              </div>
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>
                PACS TOUCHPOINT #042
              </div>
            </div>

            <div style={{ fontSize: '12px', lineHeight: 1.7 }}>
              <div>
                <strong>Query:</strong> {activeQuery.slice(0, 32)}...
              </div>
              <div>
                <strong>Source:</strong> PMFBY Guidelines
              </div>
              <div>
                <strong>Section:</strong> 4.2 (Claim Process)
              </div>
              <div>
                <strong>Date:</strong> 30 Sep 2026, {printedTime}
              </div>
            </div>

            <div style={{ margin: '14px 0', borderTop: '1px dashed #4B5563', borderBottom: '1px dashed #4B5563', padding: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <QrCode size={36} />
                <span style={{ fontSize: '9px', lineHeight: 1.2 }}>
                  PACS ACK<br />
                  SCAN FOR SMS
                </span>
              </div>
              <div style={{ fontSize: '10px', textAlign: 'right', fontWeight: 'bold', color: '#0F744A' }}>
                VERIFIED
              </div>
            </div>

            <div className="thermal-slip-footer">
              <div style={{ fontSize: '13px', fontWeight: 'bold' }}>
                Thank you!
              </div>
              <div style={{ fontSize: '9px', color: '#6B7280', marginTop: '2px' }}>
                Ministry of Cooperation • SIH 2025
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn-action-orange"
            onClick={handlePrintSlip}
            style={{ width: '100%', marginTop: '14px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Printer size={18} />
            <span>{isPrintingAnim ? 'Printing Slip...' : 'Simulate Print Slip'}</span>
          </button>
        </div>
      </div>

      {/* Kiosk Touch Modals */}
      {kioskModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 4000,
            padding: '20px'
          }}
          onClick={() => setKioskModal(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              padding: '30px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setKioskModal(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: '#6B7280', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>

            {/* ASK MODAL */}
            {kioskModal === 'ask' && (
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
                  Touch Common Questions
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  Select a topic to generate instant audio guidance and a printed receipt:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => {
                        handleKioskVoice(q.text);
                        setKioskModal(null);
                      }}
                      style={{
                        padding: '14px 16px',
                        textAlign: 'left',
                        background: '#F8FAFC',
                        border: '1.5px solid #E2E8F0',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1E293B',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{q.text}</span>
                      <ChevronRight size={18} color="#0F744A" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-action-orange"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => navigate('/ask')}
                >
                  Open Full Chat Interface
                </button>
              </div>
            )}

            {/* SCHEMES MODAL */}
            {kioskModal === 'schemes' && (
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent-orange-dark)', marginBottom: '8px' }}>
                  PACS Subsidies & Schemes
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  High-priority government schemes available at this PACS center:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {SCHEMES_DATABASE.slice(0, 3).map((sc) => (
                    <div
                      key={sc.id}
                      style={{
                        padding: '12px 14px',
                        background: '#FFFDF9',
                        border: '1.5px solid #FED7AA',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: '14px', color: '#1F2937' }}>{sc.name}</strong>
                        <div style={{ fontSize: '12px', color: '#B45309' }}>Deadline: {sc.deadline}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveQuery(`Scheme: ${sc.name}`);
                          setActiveResponse(sc.whyApplies);
                          setPrintedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                          setKioskModal(null);
                        }}
                        style={{ background: 'var(--accent-orange)', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}
                      >
                        Print Details
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-outline"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => navigate('/schemes')}
                >
                  Run Detailed Eligibility Wizard
                </button>
              </div>
            )}

            {/* GRIEVANCE MODAL */}
            {kioskModal === 'grievance' && (
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--purple-grievance)', marginBottom: '8px' }}>
                  1-Touch Kiosk Grievance
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Select your grievance issue to log an immediate complaint with the Village PACS Secretary:
                </p>

                {kioskGrievanceLogged ? (
                  <div style={{ textAlign: 'center', padding: '16px 0' }}>
                    <CheckCircle2 size={40} color="#10B981" style={{ margin: '0 auto 10px' }} />
                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0F744A' }}>Ticket Logged: {kioskGrievanceLogged.ticketId}</h4>
                    <p style={{ fontSize: '13px', color: '#4B5563', margin: '8px 0 16px' }}>
                      Forwarded to Secretary desk. The acknowledgment slip has been updated in the printer.
                    </p>
                    <button
                      type="button"
                      className="btn-action-orange"
                      onClick={() => {
                        setKioskGrievanceLogged(null);
                        setKioskModal(null);
                        handlePrintSlip();
                      }}
                    >
                      Print Ticket Slip
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                    {['PMFBY Claim Delay', 'PACS Membership Refusal', 'Fertilizer Stock Issue', 'Voting Right Omission'].map((issue) => (
                      <button
                        key={issue}
                        type="button"
                        onClick={() => handleQuickKioskGrievance(issue)}
                        style={{
                          padding: '14px',
                          background: '#FAF5FF',
                          border: '1.5px solid #DDD6FE',
                          borderRadius: '12px',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: 'var(--purple-grievance)',
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                      >
                        {issue}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className="btn-outline"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => navigate('/grievance')}
                >
                  Open Full 3-Step Grievance Portal
                </button>
              </div>
            )}

            {/* HELP MODAL */}
            {kioskModal === 'help' && (
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--blue-info)', marginBottom: '8px' }}>
                  PACS Operator & Secretary Desk
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  If you need physical assistance at this kiosk, reach out to the on-duty personnel:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '12px 16px', borderRadius: '10px' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#1E40AF' }}>PACS Secretary Desk</div>
                    <div style={{ fontSize: '12.5px', color: '#3B82F6' }}>Room 2, Ground Floor, Village Sahakari Bhavan</div>
                    <div style={{ fontSize: '12.5px', color: '#1E293B', marginTop: '4px' }}>⏰ Mon–Sat: 9:00 AM – 5:30 PM</div>
                  </div>
                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '12px 16px', borderRadius: '10px' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#0F744A' }}>National Kisan Call Center</div>
                    <div style={{ fontSize: '13px', color: '#1E293B' }}>📞 1800-180-1551 (Toll Free, 22 Languages)</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-action-orange"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => navigate('/sources')}
                >
                  Browse Statutory By-Laws & Acts
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Nature Trees & Rural Green Backdrop matching PPT Screen 7 */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '20px auto -30px', pointerEvents: 'none', zIndex: 1, opacity: 0.9 }}>
        <KioskNatureBackdrop />
      </div>

      {/* Bottom Kiosk Footer */}
      <div style={{ textAlign: 'center', color: '#CBD5E1', fontSize: '12.5px', maxWidth: '1200px', margin: '24px auto 0', position: 'relative', zIndex: 2 }}>
        Hardware Prototype Simulation for SIH 2025 • Embedded with offline Raspberry Pi 5 & Edge ONNX / SQLite
      </div>
    </div>
  );
}
