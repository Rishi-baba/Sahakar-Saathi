import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import AskAssistant from './pages/AskAssistant';
import Eligibility from './pages/Eligibility';
import Grievance from './pages/Grievance';
import Activity from './pages/Activity';
import Sources from './pages/Sources';
import Kiosk from './pages/Kiosk';

function AppLayout() {
  const location = useLocation();
  const isKiosk = location.pathname === '/kiosk';

  if (isKiosk) {
    return <Kiosk />;
  }

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ask" element={<AskAssistant />} />
            <Route path="/schemes" element={<Eligibility />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppProvider>
  );
}
