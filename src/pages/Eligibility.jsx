import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Info,
  ShieldAlert,
  Sprout,
  MapPin,
  CreditCard,
  Building
} from 'lucide-react';
import SchemeCard from '../components/SchemeCard';
import { SCHEMES_DATABASE } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { FarmerIllustration } from '../components/Doodles';

export default function Eligibility() {
  const navigate = useNavigate();
  const { eligibilityAnswers, setEligibilityAnswers } = useApp();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState(eligibilityAnswers.crop || 'Soybean');
  const [selectedState, setSelectedState] = useState(eligibilityAnswers.state || 'Maharashtra');
  const [hasLoan, setHasLoan] = useState(eligibilityAnswers.hasLoan || 'yes');
  const [isPacsMember, setIsPacsMember] = useState(eligibilityAnswers.isPacsMember || 'yes');
  const [isCompleted, setIsCompleted] = useState(false);

  const stepsMeta = [
    { number: 1, title: "Crop Selection", icon: <Sprout size={16} /> },
    { number: 2, title: "State Location", icon: <MapPin size={16} /> },
    { number: 3, title: "Crop Loan Status", icon: <CreditCard size={16} /> },
    { number: 4, title: "PACS Membership", icon: <Building size={16} /> }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save in context
      setEligibilityAnswers({
        crop: selectedCrop,
        state: selectedState,
        hasLoan,
        isPacsMember
      });
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setIsCompleted(false);
  };

  // Filter schemes dynamically based on selections
  const matchingSchemes = SCHEMES_DATABASE.filter((scheme) => {
    const matchesCrop = scheme.crops.includes(selectedCrop);
    const matchesState = scheme.states.includes(selectedState);
    if (!matchesCrop || !matchesState) return false;
    // Loan condition
    if (scheme.requiresLoan && hasLoan === 'no') return false;
    // PACS condition
    if (scheme.requiresPACS && isPacsMember === 'no') return false;
    return true;
  });

  return (
    <div className="eligibility-page-container" style={{ maxWidth: '880px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <div className="pill-section-tag orange">
          <FileCheck2 size={13} />
          <span>SCHEME ELIGIBILITY ENGINE</span>
        </div>
        <h1 style={{ fontSize: '28px', color: 'var(--text-dark)', fontWeight: 800 }}>
          Check Your Scheme & Benefit Eligibility
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
          Answer 4 simple questions to discover statutory central & state subsidies tailored to your landholding and crop.
        </p>
      </div>

      {!isCompleted ? (
        <div className="saathi-card" style={{ padding: '32px' }}>
          {/* Stepper Progress Bar */}
          <div className="stepper-progress-track">
            {stepsMeta.map((s, idx) => {
              const isActive = currentStep === s.number;
              const isPast = currentStep > s.number;
              return (
                <React.Fragment key={s.number}>
                  <div
                    className={`step-indicator-node ${isActive ? 'active' : ''} ${isPast ? 'completed' : ''}`}
                  >
                    <div className="step-indicator-circle">
                      {isPast ? <CheckCircle2 size={18} /> : s.number}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: isActive ? 'var(--primary-green)' : 'var(--text-muted)', display: 'none', minWidth: '80px' }}>
                      {s.title}
                    </span>
                  </div>
                  {idx < stepsMeta.length - 1 && (
                    <div className={`step-track-line ${isPast ? 'filled' : ''}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
            Step {currentStep} of 4: {stepsMeta[currentStep - 1].title}
          </div>

          {/* STEP 1: CROP */}
          {currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Q1: What is your primary crop?
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Select the crop sown in the current Kharif/Rabi agricultural season.
              </p>

              <div className="option-cards-grid">
                {[
                  { id: 'Soybean', name: 'Soybean (सोयाबीन)', desc: 'Oilseed • High Kharif risk cover' },
                  { id: 'Cotton', name: 'Cotton (कापूस)', desc: 'Commercial Cash Crop • White Gold' },
                  { id: 'Wheat', name: 'Wheat (गहू)', desc: 'Major Rabi cereal crop' },
                  { id: 'Rice', name: 'Rice / Paddy (भात)', desc: 'Kharif wetland cultivation' }
                ].map((crop) => (
                  <button
                    key={crop.id}
                    type="button"
                    className={`option-card-btn ${selectedCrop === crop.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCrop(crop.id)}
                  >
                    <div>
                      <div className="option-card-label">{crop.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {crop.desc}
                      </div>
                    </div>
                    <div className="option-card-radio">
                      {selectedCrop === crop.id && <CheckCircle2 size={14} />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: STATE */}
          {currentStep === 2 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Q2: Which state are you in?
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                State-specific notifications govern insurance indemnity levels and PACS subsidies.
              </p>

              <div className="option-cards-grid">
                {[
                  { id: 'Maharashtra', name: 'Maharashtra', tag: '₹1 Pradhan Mantri Pik Vima Scheme' },
                  { id: 'Karnataka', name: 'Karnataka', tag: 'Samrakshane Portal Integrated' },
                  { id: 'Telangana', name: 'Telangana', tag: 'Rythu Bima / Cooperative Integration' },
                  { id: 'West Bengal', name: 'West Bengal', tag: 'Bangla Shasya Bima (BSB) Scheme' }
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    className={`option-card-btn ${selectedState === st.id ? 'selected' : ''}`}
                    onClick={() => setSelectedState(st.id)}
                  >
                    <div>
                      <div className="option-card-label">{st.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {st.tag}
                      </div>
                    </div>
                    <div className="option-card-radio">
                      {selectedState === st.id && <CheckCircle2 size={14} />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: ACTIVE CROP LOAN */}
          {currentStep === 3 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Q3: Do you have an active crop loan?
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Loanee farmers are automatically covered, while non-loanee farmers enrol voluntarily.
              </p>

              <div className="option-cards-grid">
                <button
                  type="button"
                  className={`option-card-btn ${hasLoan === 'yes' ? 'selected' : ''}`}
                  onClick={() => setHasLoan('yes')}
                >
                  <div>
                    <div className="option-card-label">Yes (Loanee Farmer)</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Kisan Credit Card (KCC) or PACS short-term credit
                    </div>
                  </div>
                  <div className="option-card-radio">
                    {hasLoan === 'yes' && <CheckCircle2 size={14} />}
                  </div>
                </button>

                <button
                  type="button"
                  className={`option-card-btn ${hasLoan === 'no' ? 'selected' : ''}`}
                  onClick={() => setHasLoan('no')}
                >
                  <div>
                    <div className="option-card-label">No (Non-Loanee Farmer)</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Cultivating without active institutional bank crop borrowing
                    </div>
                  </div>
                  <div className="option-card-radio">
                    {hasLoan === 'no' && <CheckCircle2 size={14} />}
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PACS MEMBERSHIP */}
          {currentStep === 4 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Q4: Are you a member of a cooperative / PACS?
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Primary Agricultural Credit Societies provide interest subventions, fertilizers and storage.
              </p>

              <div className="option-cards-grid">
                <button
                  type="button"
                  className={`option-card-btn ${isPacsMember === 'yes' ? 'selected' : ''}`}
                  onClick={() => setIsPacsMember('yes')}
                >
                  <div>
                    <div className="option-card-label">Yes, Active PACS Member</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Registered shareholder in village cooperative society
                    </div>
                  </div>
                  <div className="option-card-radio">
                    {isPacsMember === 'yes' && <CheckCircle2 size={14} />}
                  </div>
                </button>

                <button
                  type="button"
                  className={`option-card-btn ${isPacsMember === 'no' ? 'selected' : ''}`}
                  onClick={() => setIsPacsMember('no')}
                >
                  <div>
                    <div className="option-card-label">No / Not Yet Registered</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Eligible to apply under open membership model by-laws
                    </div>
                  </div>
                  <div className="option-card-radio">
                    {isPacsMember === 'no' && <CheckCircle2 size={14} />}
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Farmer Mascot Doodle Sticker matching PPT Screen 3 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px auto 16px', background: '#F0FDF4', borderRadius: '18px', padding: '14px 20px', border: '1.5px solid #BBF7D0', maxWidth: '480px', gap: '18px' }}>
            <div style={{ width: '90px', flexShrink: 0 }}>
              <FarmerIllustration />
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Farmer-Centric Scheme Matcher
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '2px' }}>
                “तुमच्या पिकासाठी योग्य योजना शोधत आहोत”
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4 }}>
                Real-time rule evaluation grounded in state agricultural gazettes and PACS subvention ceilings.
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '18px' }}>
            <button
              type="button"
              className="btn-outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              style={{ opacity: currentStep === 1 ? 0.4 : 1 }}
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>

            <button
              type="button"
              className="btn-action-orange"
              onClick={handleNext}
            >
              <span>{currentStep === 4 ? 'View Potentially Applicable Schemes' : 'Next Question'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          {/* Summary Box */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--primary-green-border)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-green)', textTransform: 'uppercase' }}>
                Your Profile Configuration:
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '2px' }}>
                🌾 {selectedCrop} • 📍 {selectedState} • {hasLoan === 'yes' ? '💳 Loanee' : '🌱 Non-Loanee'} • {isPacsMember === 'yes' ? '🏛️ PACS Member' : '📝 Non-Member'}
              </div>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="btn-secondary"
              style={{ padding: '6px 14px', fontSize: '13px' }}
            >
              <RotateCcw size={14} />
              <span>Modify Answers</span>
            </button>
          </div>

          {/* Applicable Schemes Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>
              Potentially Applicable Schemes ({matchingSchemes.length})
            </h2>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Grounded in Ministry of Cooperation Standards
            </span>
          </div>

          {/* Scheme Cards */}
          <div>
            {matchingSchemes.length > 0 ? (
              matchingSchemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  userChoice={{ state: selectedState, crop: selectedCrop }}
                />
              ))
            ) : (
              <div className="saathi-card" style={{ textAlign: 'center', padding: '40px' }}>
                <p>No direct matching schemes found for this combination. Visit your PACS Secretary for custom state schemes.</p>
              </div>
            )}
          </div>

          {/* Mandatory Demo Disclaimer */}
          <div
            style={{
              background: '#FFFBEB',
              border: '1px solid #FDE047',
              borderRadius: '12px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginTop: '20px'
            }}
          >
            <Info size={18} color="#B45309" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '12.5px', color: '#92400E' }}>
              <strong>Notice:</strong> This is a prototype/demo eligibility estimation tool for Smart India Hackathon 2025. Final claim determinations and subsidy approvals are subject to official verification of land records and local PACS general body resolutions.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
