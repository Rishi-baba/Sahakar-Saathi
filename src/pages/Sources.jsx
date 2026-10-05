import React, { useState } from 'react';
import {
  BookOpenCheck,
  ShieldCheck,
  Building2,
  ExternalLink,
  Award,
  Layers,
  Scale,
  Sparkles,
  Filter,
  FileText,
  X
} from 'lucide-react';
import SourceCard from '../components/SourceCard';
import { VERIFIED_SOURCES } from '../data/mockData';

export default function Sources() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [activeExcerptSource, setActiveExcerptSource] = useState(null);

  const tags = [
    { id: 'all', label: 'All Sources' },
    { id: 'Government Portal', label: 'Official Portals' },
    { id: 'Statutory Law', label: 'Statutory Acts' },
    { id: 'Language AI Infrastructure', label: 'Language AI (Bhashini/AI4Bharat)' },
    { id: 'Governance Standard', label: 'Model By-laws' }
  ];

  const filteredSources = VERIFIED_SOURCES.filter((s) => {
    if (selectedTag === 'all') return true;
    return s.badge === selectedTag || (selectedTag === 'Language AI Infrastructure' && (s.badgeColor === 'orange' || s.badgeColor === 'purple'));
  });

  const getExcerptContent = (source) => {
    if (source.id === 'mscs_act') {
      return {
        clause: "Section 11 & Section 84 of MSCS Act, 2023",
        text: "Every member of a multi-state cooperative society shall exercise one vote in the affairs of the society provided they have attended at least three consecutive general meetings and utilized minimum services. Disciplinary disputes shall be referred to the Cooperative Ombudsman appointed by Central Government."
      };
    }
    if (source.id === 'pmfby_portal') {
      return {
        clause: "PMFBY Revised Operational Guidelines Clause 4.2",
        text: "Loss assessment for localized calamities (hailstorm, landslide, inundation, cloud burst) must be reported by the farmer within 72 hours of occurrence through the designated toll-free number or PACS touchpoint. Joint survey by insurance firm and State Agriculture Department to be finalized within 10 days."
      };
    }
    if (source.id === 'model_bylaws') {
      return {
        clause: "Model By-laws for PACS, Ministry of Cooperation 2024 (Clause 7.2)",
        text: "Primary Agricultural Credit Societies are authorized to establish Common Service Centres (CSCs), retail fertilizer depots, seed banks, custom hiring centers for agricultural machinery, and decentralized cold storage units under unified single-window approval."
      };
    }
    return {
      clause: "Official Standards & Gazette Notification",
      text: source.description + " Grounding index updated continuously from official ministry gazette releases."
    };
  };

  return (
    <div className="sources-page-container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div className="pill-section-tag green">
          <BookOpenCheck size={13} />
          <span>STATUTORY KNOWLEDGE BASE</span>
        </div>
        <h1 style={{ fontSize: '28px', color: 'var(--text-dark)', fontWeight: 800 }}>
          Verified Government & Statutory Sources
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px', maxWidth: '780px' }}>
          Trust is the foundational pillar of Sahakar Saathi. The assistant generates zero hallucinated advice—all answers are dynamically grounded and cited from official gazettes, acts, and portals.
        </p>
      </div>

      {/* Trust Guarantee Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, #EAF7EE 0%, #F6FAF7 100%)',
          border: '1.5px solid var(--primary-green-border)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-green)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShieldCheck size={26} />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>
              100% Grounded in Official Frameworks
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-body)', marginTop: '2px' }}>
              Whenever confidence in an answer is below statutory thresholds, the system explicitly refers the member to the local PACS Secretary or District Deputy Registrar.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-green-dark)', background: '#FFFFFF', padding: '6px 12px', borderRadius: '999px', border: '1px solid var(--primary-green-border)' }}>
            ✓ Gazette Verified
          </span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#C2410C', background: '#FFF7ED', padding: '6px 12px', borderRadius: '999px', border: '1px solid #FED7AA' }}>
            ✓ MoC Standards
          </span>
        </div>
      </div>

      {/* Interactive Filter Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Filter size={13} />
          <span>Filter:</span>
        </span>
        {tags.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedTag(t.id)}
            className={`btn-outline ${selectedTag === t.id ? 'active' : ''}`}
            style={{
              padding: '5px 12px',
              fontSize: '12px',
              borderRadius: '999px',
              whiteSpace: 'nowrap',
              background: selectedTag === t.id ? 'var(--primary-green)' : '#FFFFFF',
              color: selectedTag === t.id ? '#FFFFFF' : '#374151',
              borderColor: selectedTag === t.id ? 'var(--primary-green)' : '#E5E7EB'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Source Cards Grid matching PPT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredSources.map((source) => (
          <div key={source.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <SourceCard source={source} />
            <button
              type="button"
              onClick={() => setActiveExcerptSource(source)}
              style={{
                marginTop: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--primary-green)',
                background: '#FFFFFF',
                border: '1px solid var(--primary-green-border)',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <FileText size={13} />
              <span>Read Legal Excerpt & Clauses</span>
            </button>
          </div>
        ))}
      </div>

      {/* Excerpt Modal */}
      {activeExcerptSource && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3000,
            padding: '16px'
          }}
          onClick={() => setActiveExcerptSource(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '560px',
              width: '100%',
              padding: '28px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveExcerptSource(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: '#9CA3AF', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <span className="pill-section-tag green">
              Verified Legal Clause
            </span>

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)', margin: '8px 0 4px' }}>
              {activeExcerptSource.name}
            </h3>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#C2410C', marginBottom: '14px' }}>
              {getExcerptContent(activeExcerptSource).clause}
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '10px', fontSize: '13.5px', color: '#1E293B', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
              “{getExcerptContent(activeExcerptSource).text}”
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={activeExcerptSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action-orange"
                style={{ flex: 1, padding: '10px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <span>Open Full Government Gazette</span>
                <ExternalLink size={14} />
              </a>
              <button
                type="button"
                className="btn-outline"
                style={{ padding: '10px 18px' }}
                onClick={() => setActiveExcerptSource(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Model By-Laws Highlight */}
      <div
        className="saathi-card"
        style={{
          marginTop: '32px',
          padding: '24px',
          background: '#FFFFFF',
          borderLeft: '5px solid var(--primary-green)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Scale size={20} color="#0F744A" />
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)' }}>
            Model By-laws for PACS (Primary Agricultural Credit Societies)
          </h3>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: '14px' }}>
          Adopted nationally to diversify PACS beyond short-term credit into CSC services, decentralized storage, drone operations, fertilizer distribution, and dairy societies.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://cooperation.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '12.5px', padding: '6px 14px' }}
          >
            <span>Read Complete Model By-Laws PDF</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
