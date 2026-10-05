import React from 'react';
import VerifiedAnswer from './VerifiedAnswer';

// Doodle avatar for Farmer
function FarmerAvatarDoodle() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '28px', height: '28px' }}>
      <ellipse cx="18" cy="19" rx="10" ry="11" fill="#FCD3A1" />
      <ellipse cx="18" cy="11" rx="12" ry="6" fill="#EA580C" />
      <path d="M7 13 C 6 8, 12 4, 18 4 C 24 4, 30 8, 29 13 Z" fill="#FF8A00" />
      <circle cx="14" cy="17" r="1.5" fill="#1C1917" />
      <circle cx="22" cy="17" r="1.5" fill="#1C1917" />
      <path d="M12 22 Q 15 20, 18 22 Q 21 20, 24 22" stroke="#292524" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Doodle avatar for Assistant Headset (matching Screen 2 in PPT)
function AssistantHeadsetDoodle() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '28px', height: '28px' }}>
      <circle cx="18" cy="18" r="15" fill="#0F744A" />
      {/* Headset Arc */}
      <path d="M10 18 A 8 8 0 0 1 26 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Ear cups */}
      <rect x="8" y="16" width="4" height="7" rx="2" fill="#FF8A00" />
      <rect x="24" y="16" width="4" height="7" rx="2" fill="#FF8A00" />
      {/* Mic boom */}
      <path d="M26 21 C 26 25, 22 27, 19 27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="27" r="2" fill="#FF8A00" />
    </svg>
  );
}

export default function ChatMessage({ message }) {
  const isUser = message.sender === 'user';

  if (isUser) {
    return (
      <div className="message-row user">
        <div className="message-avatar user-avatar" title="Farmer">
          <FarmerAvatarDoodle />
        </div>
        <div className="message-bubble">
          <p style={{ fontWeight: 600 }}>{message.text}</p>
          <div style={{ textAlign: 'right', fontSize: '11px', marginTop: '4px', opacity: 0.7 }}>
            {message.time || 'Just now'}
          </div>
        </div>
      </div>
    );
  }

  // Assistant response
  return (
    <div className="message-row bot">
      <div className="message-avatar bot-avatar" title="Sahakar Saathi AI" style={{ background: 'transparent' }}>
        <AssistantHeadsetDoodle />
      </div>
      <div className="message-bubble" style={{ width: '100%', maxWidth: '620px' }}>
        <VerifiedAnswer
          answerText={message.answerText}
          steps={message.steps}
          sourceTitle={message.sourceTitle}
          sourceSection={message.sourceSection}
          sourceUpdated={message.sourceUpdated}
          sourceUrl={message.sourceUrl}
          isOfflineAnswer={message.isOffline}
        />
      </div>
    </div>
  );
}
