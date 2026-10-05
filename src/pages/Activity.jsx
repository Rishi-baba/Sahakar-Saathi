import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  History,
  MessageSquareQuote,
  AlertTriangle,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Printer,
  ChevronRight,
  ShieldCheck,
  Search,
  Filter,
  Bell,
  CheckCircle2
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import TicketCard from '../components/TicketCard';
import ThermalSlipModal from '../components/ThermalSlipModal';
import { useApp } from '../context/AppContext';
import { IMPORTANT_DATES } from '../data/mockData';

export default function Activity() {
  const navigate = useNavigate();
  const { recentQueries, grievances } = useApp();

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'grievances' | 'queries' | 'dates'
  const [reminders, setReminders] = useState({});
  const [selectedTicketForSlip, setSelectedTicketForSlip] = useState(null);

  const toggleReminder = (dateId) => {
    setReminders((prev) => ({
      ...prev,
      [dateId]: !prev[dateId]
    }));
  };

  return (
    <div className="activity-page-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div className="pill-section-tag blue">
          <History size={13} />
          <span>MEMBER ACTIVITY & AUDIT TRAIL</span>
        </div>
        <h1 style={{ fontSize: '28px', color: 'var(--text-dark)', fontWeight: 800 }}>
          My Activity & Case Tracking
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
          Monitor your logged queries, real-time grievance escalation stages, and statutory cooperative calendar dates.
        </p>
      </div>

      {/* Metric Counters Bar (Interactive Filter Buttons) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'grievances' ? 'all' : 'grievances')}
          className="saathi-card clickable"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '16px',
            textAlign: 'left',
            border: activeTab === 'grievances' ? '2px solid var(--purple-grievance)' : '1.5px solid var(--border-green-soft)'
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--purple-light)', color: 'var(--purple-grievance)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={22} />
          </div>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
              {grievances.length}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
              Active Grievance Tickets
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'queries' ? 'all' : 'queries')}
          className="saathi-card clickable"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '16px',
            textAlign: 'left',
            border: activeTab === 'queries' ? '2px solid var(--primary-green)' : '1.5px solid var(--border-green-soft)'
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquareQuote size={22} />
          </div>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
              {recentQueries.length}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
              Verified Questions Asked
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'dates' ? 'all' : 'dates')}
          className="saathi-card clickable"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '16px',
            textAlign: 'left',
            border: activeTab === 'dates' ? '2px solid var(--accent-orange)' : '1.5px solid var(--border-green-soft)'
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--accent-orange-light)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calendar size={22} />
          </div>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
              {IMPORTANT_DATES.length}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
              Upcoming Statutory Dates
            </div>
          </div>
        </button>
      </div>

      {/* Tabs Filter Strip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`btn-outline ${activeTab === 'all' ? 'active' : ''}`}
          style={{
            padding: '6px 14px',
            fontSize: '13px',
            borderRadius: '999px',
            background: activeTab === 'all' ? '#111827' : '#FFFFFF',
            color: activeTab === 'all' ? '#FFFFFF' : '#374151',
            borderColor: activeTab === 'all' ? '#111827' : '#E5E7EB'
          }}
        >
          All Activity
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('grievances')}
          className={`btn-outline ${activeTab === 'grievances' ? 'active' : ''}`}
          style={{
            padding: '6px 14px',
            fontSize: '13px',
            borderRadius: '999px',
            background: activeTab === 'grievances' ? 'var(--purple-grievance)' : '#FFFFFF',
            color: activeTab === 'grievances' ? '#FFFFFF' : '#374151',
            borderColor: activeTab === 'grievances' ? 'var(--purple-grievance)' : '#E5E7EB'
          }}
        >
          Grievances ({grievances.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('queries')}
          className={`btn-outline ${activeTab === 'queries' ? 'active' : ''}`}
          style={{
            padding: '6px 14px',
            fontSize: '13px',
            borderRadius: '999px',
            background: activeTab === 'queries' ? 'var(--primary-green)' : '#FFFFFF',
            color: activeTab === 'queries' ? '#FFFFFF' : '#374151',
            borderColor: activeTab === 'queries' ? 'var(--primary-green)' : '#E5E7EB'
          }}
        >
          Queries ({recentQueries.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('dates')}
          className={`btn-outline ${activeTab === 'dates' ? 'active' : ''}`}
          style={{
            padding: '6px 14px',
            fontSize: '13px',
            borderRadius: '999px',
            background: activeTab === 'dates' ? 'var(--accent-orange)' : '#FFFFFF',
            color: activeTab === 'dates' ? '#FFFFFF' : '#374151',
            borderColor: activeTab === 'dates' ? 'var(--accent-orange)' : '#E5E7EB'
          }}
        >
          Important Dates ({IMPORTANT_DATES.length})
        </button>
      </div>

      {/* SECTION 1: MY GRIEVANCES */}
      {(activeTab === 'all' || activeTab === 'grievances') && (
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)' }}>
                My Grievances ({grievances.length})
              </h2>
              <span style={{ fontSize: '11px', background: '#F3EEFE', color: 'var(--purple-grievance)', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                PACS Redressal
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/grievance')}
              className="btn-action-orange"
              style={{ fontSize: '12.5px', padding: '6px 14px', background: 'var(--purple-grievance)' }}
            >
              <span>+ File New Grievance</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {grievances.map((ticket) => (
              <TicketCard
                key={ticket.ticketId}
                ticket={ticket}
                showFullTimeline={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* 2 COLUMN GRID FOR QUERIES & IMPORTANT DATES */}
      {(activeTab === 'all' || activeTab === 'queries' || activeTab === 'dates') && (
        <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'all' ? 'repeat(auto-fit, minmax(340px, 1fr))' : '1fr', gap: '24px' }}>
          {/* SECTION 2: RECENT QUERIES */}
          {(activeTab === 'all' || activeTab === 'queries') && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)' }}>
                  Recent Queries ({recentQueries.length})
                </h2>
                <button
                  type="button"
                  onClick={() => navigate('/ask')}
                  style={{ fontSize: '12.5px', color: 'var(--primary-green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}
                >
                  <span>Ask New</span>
                  <ChevronRight size={14} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {recentQueries.map((q) => (
                  <div
                    key={q.id}
                    className="saathi-card clickable"
                    style={{ padding: '14px 18px' }}
                    onClick={() => navigate('/ask', { state: { initialText: q.query } })}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, background: '#EAF7EE', color: '#0F744A', padding: '2px 8px', borderRadius: '4px' }}>
                        {q.topic || 'Query'}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {q.date}
                      </span>
                    </div>

                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '8px' }}>
                      "{q.query}"
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11.5px', color: 'var(--text-muted)', borderTop: '1px solid #F3F4F6', paddingTop: '8px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#0F744A' }}>
                        <ShieldCheck size={13} />
                        <span>{q.source}</span>
                      </span>
                      <span style={{ color: 'var(--primary-green)', fontWeight: 600 }}>Re-open in Chat →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: IMPORTANT DATES */}
          {(activeTab === 'all' || activeTab === 'dates') && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)' }}>
                  Important Deadlines
                </h2>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Cooperative Calendar
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {IMPORTANT_DATES.map((item) => {
                  const hasReminder = reminders[item.id];
                  return (
                    <div
                      key={item.id}
                      className="saathi-card"
                      style={{
                        padding: '16px',
                        borderLeft: `4px solid ${item.urgency === 'high' ? '#EF4444' : item.urgency === 'medium' ? '#F59E0B' : '#3B82F6'}`
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            background: item.urgency === 'high' ? '#FEF2F2' : '#FFFBEB',
                            color: item.urgency === 'high' ? '#B91C1C' : '#B45309',
                            padding: '2px 8px',
                            borderRadius: '4px'
                          }}
                        >
                          {item.daysLeft}
                        </span>
                        <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-dark)' }}>
                          📅 {item.date}
                        </span>
                      </div>

                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>
                        {item.title}
                      </div>

                      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '10px' }}>
                        {item.description}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F3F4F6', paddingTop: '8px' }}>
                        <span style={{ fontSize: '11px', color: '#6B7280' }}>
                          Category: <strong>{item.tag}</strong>
                        </span>

                        <button
                          type="button"
                          onClick={() => toggleReminder(item.id)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            padding: '4px 10px',
                            borderRadius: '999px',
                            background: hasReminder ? '#ECFDF5' : '#F3F4F6',
                            color: hasReminder ? '#059669' : '#374151',
                            border: `1px solid ${hasReminder ? '#A7F3D0' : '#E5E7EB'}`,
                            cursor: 'pointer'
                          }}
                        >
                          {hasReminder ? <CheckCircle2 size={13} /> : <Bell size={13} />}
                          <span>{hasReminder ? 'Reminder Scheduled (SMS)' : 'Set SMS Reminder'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Receipt preview modal if triggered */}
      {selectedTicketForSlip && (
        <ThermalSlipModal
          ticket={selectedTicketForSlip}
          onClose={() => setSelectedTicketForSlip(null)}
        />
      )}
    </div>
  );
}
