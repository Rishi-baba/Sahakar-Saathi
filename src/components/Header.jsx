import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gem, Sprout, Radio, Lightbulb, Wifi, WifiOff, MonitorDot, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import LanguageSelector from './LanguageSelector';
import TeamModal from './TeamModal';
import { HeaderVillageDoodle } from './Doodles';

export default function Header() {
  const { isOffline, toggleOffline } = useApp();
  const [showTeamModal, setShowTeamModal] = useState(false);

  return (
    <>
      <header className="master-header">
        <div className="header-top-row">
          {/* Left: TEAM DIAMONDS */}
          <div className="header-left-brand">
            <button
              type="button"
              className="team-badge"
              onClick={() => setShowTeamModal(true)}
              title="Click to view Team Diamonds & SIH 2025 project overview"
              style={{ cursor: 'pointer' }}
            >
              <Gem size={14} />
              <span>TEAM DIAMONDS</span>
            </button>
          </div>

          {/* Center: Sahakar Saathi */}
          <div className="header-center-branding">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="brand-title-group">
                <Sprout size={24} className="logo-leaf-icon" />
                <span className="brand-sahakar">Sahakar</span>
                <span className="brand-saathi">Saathi</span>
                <span className="brand-voice-wave" title="Voice First Assistant">
                  <Radio size={20} />
                </span>
              </div>
            </Link>
            <div className="brand-subtitle">
              “Trusted answers in your language, and the help to act on them.”
            </div>
          </div>

          {/* Right: SMART INDIA HACKATHON 2025 + Network + Lang + Village Doodle */}
          <div className="header-right-meta">
            <button
              type="button"
              onClick={toggleOffline}
              className={`offline-toggle-btn ${isOffline ? 'offline' : 'online'}`}
              title="Click to toggle between Online Cloud AI and Offline Edge AI"
            >
              <span className={`status-dot ${isOffline ? 'orange' : 'green'}`} />
              <span>{isOffline ? 'Offline Mode' : 'Connected'}</span>
              {isOffline ? <WifiOff size={14} /> : <Wifi size={14} />}
            </button>

            <LanguageSelector compact={true} />

            <button
              type="button"
              className="sih-badge"
              onClick={() => setShowTeamModal(true)}
              title="Click to view Smart India Hackathon 2025 Details"
              style={{ cursor: 'pointer' }}
            >
              <Lightbulb size={15} color="#EA580C" />
              <div className="sih-text">
                SIH 2025
              </div>
            </button>

            {/* Rural Village Doodle matching top right of PPT */}
            <div className="header-village-doodle-wrap" style={{ display: 'flex', alignItems: 'center' }}>
              <HeaderVillageDoodle />
            </div>
          </div>
        </div>

        {/* Offline Alert Strip when in offline mode */}
        {isOffline && (
          <div className="offline-banner">
            <WifiOff size={15} />
            <span>
              <strong>Offline Mode Active:</strong> Using local device knowledge base (Edge ONNX / SQLite). Voice queries and statutory guides remain fully functional without internet.
            </span>
          </div>
        )}
      </header>

      {showTeamModal && <TeamModal onClose={() => setShowTeamModal(false)} />}
    </>
  );
}
