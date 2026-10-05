import React, { useState } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SAMPLE_CHAT_PRESETS } from '../data/mockData';

export default function VoiceButton({
  onVoiceCaptured,
  size = 'normal', // 'hero' | 'input' | 'giant' | 'normal'
  label = 'Tap to Speak',
  className = ''
}) {
  const { language } = useApp();
  const [isListening, setIsListening] = useState(false);

  const handleClick = () => {
    if (isListening) return;

    setIsListening(true);

    // Audio cue / speech synthesis chime if available
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // Audio context might be restricted, ignore silently
    }

    const preset = SAMPLE_CHAT_PRESETS[language] || SAMPLE_CHAT_PRESETS['mr'];

    // After 1.4 seconds, complete voice input
    setTimeout(() => {
      setIsListening(false);
      if (onVoiceCaptured) {
        onVoiceCaptured(preset.sampleQuery);
      }
    }, 1400);
  };

  const preset = SAMPLE_CHAT_PRESETS[language] || SAMPLE_CHAT_PRESETS['mr'];

  if (size === 'hero') {
    return (
      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={handleClick}
          className={`voice-tap-circle ${isListening ? 'listening' : ''} ${className}`}
          title="Tap to speak in selected language"
        >
          <Mic size={42} />
        </button>
        <span className="voice-label">
          {isListening ? preset.listening : `[ 🎤 ${label} ]`}
        </span>
      </div>
    );
  }

  if (size === 'giant') {
    return (
      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={handleClick}
          className={`kiosk-mic-giant ${isListening ? 'listening' : ''} ${className}`}
          title="Tap to Speak (बोला)"
        >
          <Mic size={64} />
        </button>
        <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F744A', marginTop: '6px' }}>
          {isListening ? preset.listening : '🎤 ' + label}
        </div>
      </div>
    );
  }

  if (size === 'input') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`voice-input-btn ${isListening ? 'active' : ''} ${className}`}
        title={isListening ? 'Listening...' : 'Voice Input (Click to speak)'}
      >
        <Mic size={20} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn-primary-speak ${isListening ? 'listening' : ''} ${className}`}
    >
      <Mic size={18} />
      <span>{isListening ? preset.listening : label}</span>
    </button>
  );
}
