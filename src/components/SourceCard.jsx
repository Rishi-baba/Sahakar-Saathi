import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SourceCard({ source }) {
  const badgeClasses = {
    green: 'pill-section-tag green',
    blue: 'pill-section-tag blue',
    orange: 'pill-section-tag orange',
    purple: 'pill-section-tag purple',
    yellow: 'pill-section-tag yellow'
  };

  return (
    <div
      className="saathi-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
          <span className={badgeClasses[source.badgeColor] || 'pill-section-tag green'} style={{ marginBottom: 0 }}>
            {source.badge}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            Updated: {source.lastUpdated}
          </span>
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '8px', marginBottom: '4px' }}>
          {source.name}
        </h3>

        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary-green)', marginBottom: '10px' }}>
          {source.authority} • {source.displayUrl}
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.45, marginBottom: '14px' }}>
          {source.description}
        </p>

        {source.coverage && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {source.coverage.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: '11px',
                  background: '#F3F4F6',
                  color: '#4B5563',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: 500
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px' }}>
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ width: '100%', fontSize: '13px', padding: '8px 12px' }}
        >
          <span>Visit Official Portal</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}
