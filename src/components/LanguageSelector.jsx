import React from 'react';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../data/mockData';

export default function LanguageSelector({ compact = false }) {
  const { language, setLanguage } = useApp();

  return (
    <div className={`lang-selector-group ${compact ? 'compact' : ''}`}>
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            className={`lang-pill-btn ${isActive ? 'active' : ''}`}
            onClick={() => setLanguage(lang.code)}
            title={`Switch to ${lang.englishName}`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
