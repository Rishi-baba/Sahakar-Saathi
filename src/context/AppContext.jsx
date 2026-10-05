import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_GRIEVANCES, RECENT_QUERIES } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Language code: 'mr' | 'hi' | 'en' | 'te' | 'bn'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('sahakar_lang') || 'mr';
  });

  // Offline mode toggle: false = Online / 🟢 Connected, true = 🟠 Offline Mode
  const [isOffline, setIsOffline] = useState(false);

  // Grievance tickets list
  const [grievances, setGrievances] = useState(() => {
    const saved = localStorage.getItem('sahakar_grievances');
    return saved ? JSON.parse(saved) : INITIAL_GRIEVANCES;
  });

  // Recent queries list
  const [recentQueries, setRecentQueries] = useState(() => {
    const saved = localStorage.getItem('sahakar_queries');
    return saved ? JSON.parse(saved) : RECENT_QUERIES;
  });

  // Active eligibility draft/filter
  const [eligibilityAnswers, setEligibilityAnswers] = useState({
    crop: 'Soybean',
    state: 'Maharashtra',
    hasLoan: 'yes',
    isPacsMember: 'yes'
  });

  // Kiosk mode quick query trigger
  const [lastKioskPrint, setLastKioskPrint] = useState(null);

  useEffect(() => {
    localStorage.setItem('sahakar_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('sahakar_grievances', JSON.stringify(grievances));
  }, [grievances]);

  useEffect(() => {
    localStorage.setItem('sahakar_queries', JSON.stringify(recentQueries));
  }, [recentQueries]);

  const addGrievance = (newTicket) => {
    setGrievances((prev) => [newTicket, ...prev]);
  };

  const addQuery = (queryItem) => {
    setRecentQueries((prev) => [queryItem, ...prev]);
  };

  const toggleOffline = () => {
    setIsOffline((prev) => !prev);
  };

  const resetToDemoDefaults = () => {
    setLanguage('mr');
    setIsOffline(false);
    setGrievances(INITIAL_GRIEVANCES);
    setRecentQueries(RECENT_QUERIES);
    localStorage.removeItem('sahakar_grievances');
    localStorage.removeItem('sahakar_queries');
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isOffline,
        toggleOffline,
        setIsOffline,
        grievances,
        addGrievance,
        recentQueries,
        addQuery,
        eligibilityAnswers,
        setEligibilityAnswers,
        lastKioskPrint,
        setLastKioskPrint,
        resetToDemoDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
