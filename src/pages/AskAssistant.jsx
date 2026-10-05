import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Send,
  Mic,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Info,
  Radio,
  WifiOff
} from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import VoiceButton from '../components/VoiceButton';
import LanguageSelector from '../components/LanguageSelector';
import { useApp } from '../context/AppContext';
import { SAMPLE_CHAT_PRESETS, QUICK_QUESTIONS } from '../data/mockData';

export default function AskAssistant() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, isOffline, addQuery } = useApp();
  const messagesEndRef = useRef(null);

  const preset = SAMPLE_CHAT_PRESETS[language] || SAMPLE_CHAT_PRESETS['mr'];

  const [messages, setMessages] = useState([
    {
      id: 'initial-bot',
      sender: 'bot',
      answerText: preset.welcome,
      steps: [],
      sourceTitle: "Ministry of Cooperation & Model By-laws",
      sourceSection: "PACS Citizen Charter",
      sourceUpdated: "2024",
      sourceUrl: "https://cooperation.gov.in"
    },
    {
      id: 'demo-user',
      sender: 'user',
      text: preset.sampleQuery,
      time: "10:23 AM"
    },
    {
      id: 'demo-bot',
      sender: 'bot',
      answerText: preset.answer,
      steps: preset.steps,
      sourceTitle: preset.sourceTitle,
      sourceSection: preset.sourceSection,
      sourceUpdated: preset.sourceUpdated,
      sourceUrl: "https://pmfby.gov.in",
      isOffline: isOffline
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle incoming query from Home voice tap
  useEffect(() => {
    if (location.state?.initialVoiceQuery) {
      handleUserSubmit(location.state.initialVoiceQuery);
    } else if (location.state?.initialText) {
      handleUserSubmit(location.state.initialText);
    }
  }, [location.state]);

  const handleUserSubmit = (queryText) => {
    const textToProcess = (queryText || inputText).trim();
    if (!textToProcess) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToProcess,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Centralized activity log
    addQuery({
      id: `q-${Date.now()}`,
      query: textToProcess,
      date: 'Just now',
      language: language === 'mr' ? 'मराठी' : language === 'hi' ? 'हिन्दी' : 'English',
      source: preset.sourceTitle + ' ' + preset.sourceSection,
      status: 'Verified',
      topic: textToProcess.includes('PMFBY') || textToProcess.includes('विमा') ? 'PMFBY Claim' : 'Cooperative'
    });

    // Mock AI reply after 900ms
    setTimeout(() => {
      let botResponse;

      if (textToProcess.toLowerCase().includes('matdan') || textToProcess.includes('मतदान') || textToProcess.includes('voting')) {
        botResponse = {
          id: `bot-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
          sender: 'bot',
          answerText: language === 'mr'
            ? "सहकारी संस्थेत मतदानाचा अधिकार मिळण्यासाठी सदस्याने किमान १ वर्ष पूर्ण केलेले असावे आणि संस्थेचे किमान भागभांडवल (Share Capital) धारण केलेले असावे. MSCS Act 2023 नुसार सलग ३ वर्षे सर्वसाधारण सभेला गैरहजर राहिल्यास मतदानाचा हक्क निलंबित होऊ शकतो."
            : "To obtain voting rights in a cooperative, a member must hold active share capital and be a member for at least 1 year. Under the MSCS Act 2023, failing to attend 3 consecutive AGMs may lead to voting right disqualification.",
          steps: [
            language === 'mr' ? "PACS किंवा सोसायटीच्या भाग नोंदवहीत (Share Register) नाव असल्याची खात्री करा." : "Verify your name in the Society Share Register.",
            language === 'mr' ? "वार्षिक सर्वसाधारण सभेच्या (AGM) किमान १५ दिवस आधी अंतिम मतदार यादी प्रसिद्ध होते." : "Check the provisional electoral roll released 15 days before elections."
          ],
          sourceTitle: "Multi-State Cooperative Societies (Amendment) Act, 2023",
          sourceSection: "Section 11 (Voting Rights & Quorum Requirements)",
          sourceUpdated: "Gazette Aug 2023",
          sourceUrl: "https://www.indiacode.nic.in/handle/123456789/1993",
          isOffline: isOffline
        };
      } else if (textToProcess.toLowerCase().includes('sadasya') || textToProcess.includes('सदस्य') || textToProcess.includes('member') || textToProcess.includes('membership')) {
        botResponse = {
          id: `bot-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
          sender: 'bot',
          answerText: language === 'mr'
            ? "PACS (प्राथमिक कृषी पतसंस्था) चे सभासदत्व मिळवण्यासाठी गावातील शेतजमीन धारक किंवा भाडेपट्ट्याने शेती करणारा कोणताही शेतकरी विहित नमुन्यात अर्ज करू शकतो. केंद्र सरकारच्या नवीन मॉडेल बाय-लॉज (Model By-laws 2024) नुसार 'खुले सभासदत्व' (Open Membership) बंधनकारक करण्यात आले आहे."
            : "To obtain membership in a PACS (Primary Agricultural Credit Society), any landholder or tenant cultivator in the society's area of operation can submit an application with minimum share capital. Under Model By-laws 2024, Open Membership is mandatory.",
          steps: [
            language === 'mr' ? "गावातील PACS कार्यालयातून 'नमुना अ' (Form A) अर्ज मिळवा किंवा ऑनलाईन PACS पोर्टलवर भरा." : "Obtain Form A from village PACS desk or online digitization portal.",
            language === 'mr' ? "७/१२ उतारा, आधार कार्ड, बँक तपशील आणि किमान १ शेअरचे मूल्य (उदा. ₹१०० ते ₹५००) व प्रवेश शुल्क जमा करा." : "Attach 7/12 extract, Aadhaar, KYC, and deposit 1 share capital value.",
            language === 'mr' ? "व्यवस्थापक समितीला (Managing Committee) ३० दिवसांच्या आत अर्जावर निर्णय घेणे कायद्याने बंधनकारक आहे." : "Managing Committee must decide on the application within 30 statutory days."
          ],
          sourceTitle: "Model By-laws for PACS (Ministry of Cooperation)",
          sourceSection: "Chapter III: Membership & Share Capital (Clause 5 to 9)",
          sourceUpdated: "2024 Edition",
          sourceUrl: "https://cooperation.gov.in/model-by-laws-pacs",
          isOffline: isOffline
        };
      } else if (textToProcess.toLowerCase().includes('khat') || textToProcess.includes('खत') || textToProcess.includes('fertilizer') || textToProcess.includes('अनुदान')) {
        botResponse = {
          id: `bot-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
          sender: 'bot',
          answerText: language === 'mr'
            ? "सोयाबीन आणि खरीप पिकांसाठी रासायनिक व सेंद्रिय खतांवर DBT द्वारे थेट सबसिडी दिली जाते. PACS सदस्य थेट सोसायटी खत गोदामातून सवलतीच्या दरात युरिया आणि DAP खरेदी करू शकतात."
            : "Direct Benefit Transfer (DBT) subsidy is available on subsidized fertilizers for Kharif crops. Active PACS members can purchase subsidized Urea and DAP directly from PACS retail counters.",
          steps: [
            language === 'mr' ? "खत खरेदी करताना आधार आधारित बायोमेट्रिक प्रमाणीकरण आवश्यक आहे." : "Aadhaar-based POS biometric verification is required.",
            language === 'mr' ? "७/१२ उताऱ्यावरील पीक नोंदीनुसार निर्धारित खत कोटा मंजूर होतो." : "Fertilizer quota is calculated according to the landholding sowing certificate."
          ],
          sourceTitle: "Department of Fertilizers & Model PACS Guidelines",
          sourceSection: "Fertilizer Retail Distribution Clause 7.1",
          sourceUpdated: "2024",
          sourceUrl: "https://cooperation.gov.in",
          isOffline: isOffline
        };
      } else {
        // Standard PMFBY / Grounded Answer matching PPT
        botResponse = {
          id: `bot-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
          sender: 'bot',
          answerText: preset.answer,
          steps: preset.steps,
          sourceTitle: preset.sourceTitle,
          sourceSection: preset.sourceSection,
          sourceUpdated: preset.sourceUpdated,
          sourceUrl: "https://pmfby.gov.in",
          isOffline: isOffline
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 900);
  };

  const handleVoiceRecognized = (sampleText) => {
    handleUserSubmit(sampleText);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'initial-bot-reset',
        sender: 'bot',
        answerText: preset.welcome,
        steps: [],
        sourceTitle: "Ministry of Cooperation",
        sourceSection: "PACS Citizen Charter",
        sourceUpdated: "2024",
        sourceUrl: "https://cooperation.gov.in"
      }
    ]);
  };

  return (
    <div className="ask-assistant-page">
      <div className="chat-container">
        {/* Chat Header Bar */}
        <div className="chat-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-green)' }}>
                Ask Sahakar Saathi
              </h2>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Directly grounded in official government gazettes & guidelines
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LanguageSelector compact={true} />

            <button
              type="button"
              onClick={resetChat}
              className="btn-outline"
              style={{ padding: '6px 10px', fontSize: '12px' }}
              title="Clear & restart conversation"
            >
              <RefreshCw size={13} />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Chat Messages List */}
        <div className="chat-messages-area">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          {isTyping && (
            <div className="message-row bot">
              <div className="message-avatar bot-avatar">
                <Sparkles size={18} />
              </div>
              <div className="message-bubble" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-green)', fontWeight: 600, fontSize: '13px' }}>
                <span className="status-dot green" />
                <span>Sahakar Saathi is retrieving verified clauses...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input Bar */}
        <div className="chat-input-container">
          {/* Quick Prompts Bar */}
          <div className="quick-prompts-bar">
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Suggested:
            </span>
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q.id}
                type="button"
                className="quick-chip"
                onClick={() => handleUserSubmit(q.text)}
              >
                {q.text}
              </button>
            ))}
          </div>

          {/* Form with Mic and Send Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUserSubmit();
            }}
            className="chat-input-form"
            style={{ marginTop: '8px' }}
          >
            {/* Working Voice Mic Button */}
            <VoiceButton
              size="input"
              onVoiceCaptured={handleVoiceRecognized}
            />

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question or click microphone to speak..."
              className="chat-text-input"
            />

            <button
              type="submit"
              className="chat-send-btn"
              disabled={!inputText.trim()}
              title="Send question"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
