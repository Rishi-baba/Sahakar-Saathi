import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  MessageSquareQuote,
  FileCheck2,
  AlertTriangle,
  History,
  BookOpenCheck,
  Monitor,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Sidebar() {
  const { resetToDemoDefaults, grievances } = useApp();

  const navItems = [
    { to: '/', label: 'Home', icon: <Home className="nav-icon" /> },
    { to: '/ask', label: 'Ask Assistant', icon: <MessageSquareQuote className="nav-icon" /> },
    { to: '/schemes', label: 'Schemes & Eligibility', icon: <FileCheck2 className="nav-icon" /> },
    {
      to: '/grievance',
      label: 'Grievance',
      icon: <AlertTriangle className="nav-icon" />,
      badge: grievances.length > 0 ? grievances.length : null
    },
    { to: '/activity', label: 'My Activity', icon: <History className="nav-icon" /> },
    { to: '/sources', label: 'Verified Sources', icon: <BookOpenCheck className="nav-icon" /> },
    { to: '/kiosk', label: 'Kiosk Mode', icon: <Monitor className="nav-icon" />, isSpecial: true }
  ];

  return (
    <aside className="app-sidebar">
      <div>
        <nav className="sidebar-nav-list">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-item-link ${isActive ? 'active' : ''} ${item.isSpecial ? 'special-kiosk' : ''}`
              }
            >
              {item.icon}
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    background: '#7C3AED',
                    color: '#fff',
                    borderRadius: '999px',
                    padding: '1px 6px'
                  }}
                >
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Enter Kiosk Callout */}
        <NavLink to="/kiosk" className="sidebar-kiosk-cta" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800 }}>
            <Monitor size={16} />
            <span>Enter Kiosk Mode</span>
          </div>
          <span style={{ fontSize: '11px', opacity: 0.85, lineHeight: 1.2 }}>
            Simulate Touchscreen PACS Hardware
          </span>
        </NavLink>
      </div>

      <div className="sidebar-footer-info">
        <button
          type="button"
          onClick={resetToDemoDefaults}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11.5px',
            color: 'var(--text-muted)',
            marginBottom: '10px',
            cursor: 'pointer',
            padding: '4px 6px',
            borderRadius: '4px'
          }}
          title="Reset demo questions and grievance state"
        >
          <RotateCcw size={12} />
          <span>Reset Demo State</span>
        </button>

        <div style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
          Sahakar Saathi v1.0
        </div>
        <div>SIH 2025 Prototype</div>
        <div style={{ marginTop: '4px', fontSize: '10px', color: 'var(--text-light)' }}>
          PACS • AI4Bharat • Bhashini
        </div>
      </div>
    </aside>
  );
}
