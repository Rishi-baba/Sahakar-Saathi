// Centralized Mock Data for Sahakar Saathi Prototype

export const SUPPORTED_LANGUAGES = [
  { code: 'mr', label: 'मराठी', englishName: 'Marathi' },
  { code: 'hi', label: 'हिन्दी', englishName: 'Hindi' },
  { code: 'en', label: 'English', englishName: 'English' },
  { code: 'te', label: 'తెలుగు', englishName: 'Telugu' },
  { code: 'bn', label: 'বাংলা', englishName: 'Bengali' }
];

export const SAMPLE_CHAT_PRESETS = {
  mr: {
    welcome: "नमस्कार! मी सहकार साथी. मी तुम्हाला शेतकरी योजना, पीक विमा आणि सहकारी संस्थांबद्दल मदत करू शकतो.",
    sampleQuery: "माझ्या पिकासाठी PMFBY अंतर्गत दावा कसा करायचा?",
    listening: "ऐकत आहे... कृपया बोला...",
    answer: "तुमचा PMFBY दावा दाखल करण्यासाठी प्रथम नुकसानीची माहिती नोंदवा आणि आवश्यक कागदपत्रे तयार ठेवा. खाली पुढील चरण दिले आहेत:",
    steps: [
      "स्थानिक नुकसान झाल्यास ७२ तासांच्या आत विमा कंपनी, कृषी अधिकारी किंवा 'Crop Insurance App' वर नोंदवा.",
      "७/१२ उतारा, पेरणी प्रमाणपत्र आणि बँक पासबुकची प्रत तयार ठेवा.",
      "तुमच्या गावातील PACS (प्राथमिक कृषी पतसंस्था) किंवा CSC केंद्रावर जाऊन दावा अर्जाची पावती मिळवा."
    ],
    sourceTitle: "PMFBY Operational Guidelines",
    sourceSection: "Section 4.2 (Localized Calamities & Post-Harvest Losses)",
    sourceUpdated: "2024 (Ministry of Agriculture & Farmers Welfare)"
  },
  hi: {
    welcome: "नमस्कार! मैं सहकार साथी हूँ। मैं आपको सहकारी नियमों, योजनाओं और फसल बीमा में सहायता कर सकता हूँ।",
    sampleQuery: "मेरी फसल के लिए PMFBY के तहत दावा कैसे करें?",
    listening: "सुन रहे हैं... कृपया बोलें...",
    answer: "अपनी फसल नुकसान के लिए PMFBY दावा दर्ज करने के लिए 72 घंटे के भीतर सूचना दें और आवश्यक दस्तावेज तैयार रखें:",
    steps: [
      "आपदा के 72 घंटे के भीतर 'Crop Insurance App' या टोल-फ्री 14447 पर नुकसान दर्ज करें।",
      "खसरा/खतौनी, बुवाई प्रमाण पत्र और बैंक पासबुक संलग्न करें।",
      "अपने नजदीकी पैक्स (PACS) या बैंक शाखा से पावती रसीद प्राप्त करें।"
    ],
    sourceTitle: "PMFBY Operational Guidelines",
    sourceSection: "Section 4.2 (Localized Calamities)",
    sourceUpdated: "2024 (Govt. of India)"
  },
  en: {
    welcome: "Namaskar! I am Sahakar Saathi. I can help you with cooperative laws, government schemes, PMFBY insurance, and grievances.",
    sampleQuery: "How to file a claim under PMFBY for crop loss?",
    listening: "Listening... Please speak now...",
    answer: "To file your PMFBY crop loss claim, report the damage within 72 hours and prepare your primary documents. Follow these steps:",
    steps: [
      "Notify localized damage within 72 hours via the Crop Insurance App or toll-free number 14447.",
      "Keep your land records (7/12 / RoR), Sowing Certificate, and Bank Passbook ready.",
      "Submit the claim through your local PACS or Common Service Centre (CSC) and get an acknowledgment slip."
    ],
    sourceTitle: "PMFBY Operational Guidelines",
    sourceSection: "Section 4.2 (Localized Calamities & Post-Harvest Losses)",
    sourceUpdated: "2024 (Ministry of Agriculture & Farmers Welfare)"
  },
  te: {
    welcome: "నమస్కారం! నేను సహకార సాథిని. పంట బీమా మరియు సహకార సంఘాల వివరాల కోసం అడగండి.",
    sampleQuery: "PMFBY కింద పంట నష్టం క్లెయిమ్ ఎలా చేయాలి?",
    listening: "వింటున్నాము... దయచేసి మాట్లాడండి...",
    answer: "పంట నష్టం జరిగిన 72 గంటలలోపు క్రాప్ ఇన్సూరెన్స్ యాప్ లేదా PACS ద్వారా క్లెయిమ్ నమోదు చేసుకోండి.",
    steps: [
      "72 గంటల్లోపు పంట నష్టం సమాచారం అందించండి.",
      "పట్టాదారు పాస్ బుక్ మరియు బ్యాంక్ వివరాలు సమర్పించండి."
    ],
    sourceTitle: "PMFBY Operational Guidelines",
    sourceSection: "Section 4.2",
    sourceUpdated: "2024"
  },
  bn: {
    welcome: "নমস্কার! আমি সহকার সাথী। সমবায় নিয়ম এবং ফসল বীমা সংক্রান্ত তথ্যের জন্য জিজ্ঞাসা করুন।",
    sampleQuery: "PMFBY এর অধীনে ফসলের ক্ষতিপূরণ কীভাবে দাবি করবেন?",
    listening: "শুনছি... অনুগ্রহ করে বলুন...",
    answer: "ক্ষয়ক্ষতির ৭২ ঘণ্টার মধ্যে ক্রপ ইন্স্যুরেন্স অ্যাপ বা আপনার স্থানীয় PACS-এ আবেদন জানান।",
    steps: [
      "৭২ ঘণ্টার মধ্যে ক্ষয়ক্ষতি রিপোর্ট করুন।",
      "জমির খতিয়ান এবং ব্যাঙ্ক পাসবই জমা দিন।"
    ],
    sourceTitle: "PMFBY Operational Guidelines",
    sourceSection: "Section 4.2",
    sourceUpdated: "2024"
  }
};

export const QUICK_QUESTIONS = [
  { id: 'q1', text: "माझ्या पिकासाठी PMFBY अंतर्गत दावा कसा करायचा?", category: "PMFBY" },
  { id: 'q2', text: "PACS चे सदस्यत्व कसे मिळवायचे?", category: "Cooperative" },
  { id: 'q3', text: "सोयाबीन पिकासाठी खत अनुदान नियम काय आहेत?", category: "Schemes" },
  { id: 'q4', text: "सहकारी संस्थेत मतदानाचा अधिकार कोणाला असतो?", category: "Rights" }
];

export const INITIAL_GRIEVANCES = [
  {
    ticketId: "GRC-2026-0143",
    issueType: "PMFBY",
    issueTitle: "PMFBY claim compensation delayed for Kharif 2025",
    cooperativeName: "Sangamner Vividh Karyakari Seva Sahakari Sanstha",
    district: "Ahmednagar (Sangamner)",
    farmerName: "Rameshwar Patil",
    mobile: "9822******",
    description: "Crop damage survey was completed in September 2025, but insurance payout has not been credited to bank account.",
    status: "Submitted",
    route: "PACS → Registrar",
    date: "30 Sep 2026",
    timeline: [
      { step: "PACS (Local Society)", status: "Submitted", date: "30 Sep 2026", note: "Complaint logged and forwarded to District Nodal Officer" },
      { step: "Assistant Registrar (Cooperative Societies)", status: "Pending", date: "Expected 07 Oct 2026", note: "Review of insurance claim roster" },
      { step: "Higher Authority / District Collectorate", status: "Pending", date: "Escalation threshold: 15 days", note: "State Grievance Redressal Committee" }
    ]
  },
  {
    ticketId: "GRC-2026-0127",
    issueType: "Cooperative rights",
    issueTitle: "Omission from PACS voter list before election",
    cooperativeName: "Baramati Taluka Sahakari Kharedi Vikri Sangh",
    district: "Pune (Baramati)",
    farmerName: "Sunita G. Deshmukh",
    mobile: "9421******",
    description: "Active share capital holder since 2018, but name was missing from provisional voter list published for upcoming board elections.",
    status: "Under Review",
    route: "PACS → Registrar",
    date: "18 Sep 2026",
    timeline: [
      { step: "PACS (Local Society)", status: "Completed", date: "18 Sep 2026", note: "Objection received and verified against share register" },
      { step: "Assistant Registrar (Cooperative Societies)", status: "In Progress", date: "24 Sep 2026", note: "Hearing notice issued to Society Secretary" },
      { step: "Higher Authority / District Collectorate", status: "Pending", date: "Awaiting final order", note: "Voter roll amendment pending" }
    ]
  }
];

export const SCHEMES_DATABASE = [
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    category: "Crop Insurance",
    crops: ["Soybean", "Cotton", "Wheat", "Rice"],
    states: ["Maharashtra", "Karnataka", "Telangana", "West Bengal"],
    requiresLoan: false,
    requiresPACS: false,
    whyApplies: "Eligible for non-preventable natural calamity crop insurance at highly subsidized premium (2% for Kharif crops, 1.5% for Rabi).",
    documents: [
      "7/12 Land Record / RoR Extract",
      "Sowing Certificate from Village Revenue Officer / Talathi",
      "Aadhaar-linked Bank Account Passbook",
      "PACS or CSC acknowledgment receipt"
    ],
    deadline: "31 July (Kharif) / 31 Dec (Rabi)",
    supportContact: "Kisan Call Center: 1800-180-1551 | Toll-free: 14447",
    badgeColor: "green"
  },
  {
    id: "pacs_subvention",
    name: "PACS 0% Short-Term Crop Loan & Interest Subvention",
    category: "Cooperative Credit",
    crops: ["Soybean", "Cotton", "Wheat", "Rice"],
    states: ["Maharashtra", "Karnataka", "Telangana", "West Bengal"],
    requiresLoan: true,
    requiresPACS: true,
    whyApplies: "Active PACS members who repay promptly receive up to ₹3,00,000 crop loan at effective 0% interest rate via State & Central subvention.",
    documents: [
      "PACS Membership Share Certificate",
      "No-Dues Certificate from District Central Co-op Bank (DCCB)",
      "Latest Land Holding Certificate & Sowing declaration",
      "Aadhaar Card and 2 Passport photos"
    ],
    deadline: "Open year-round for Kharif/Rabi cycles",
    supportContact: "PACS Village Secretary / DCCB Branch",
    badgeColor: "orange"
  },
  {
    id: "pm_kisan",
    name: "PM Kisan Samman Nidhi (PM-KISAN)",
    category: "Direct Income Support",
    crops: ["Soybean", "Cotton", "Wheat", "Rice"],
    states: ["Maharashtra", "Karnataka", "Telangana", "West Bengal"],
    requiresLoan: false,
    requiresPACS: false,
    whyApplies: "All cultivable landholding farmer families are eligible for ₹6,000 per year income support in three equal installments.",
    documents: [
      "Aadhaar Card with mobile linkage",
      "Land Record Documents showing ownership",
      "e-KYC biometric/facial authentication",
      "Active Bank Account with NPCI mapping"
    ],
    deadline: "Continuous registration on pmkisan.gov.in",
    supportContact: "PM-KISAN Helpline: 155261 / 011-24300606",
    badgeColor: "blue"
  },
  {
    id: "pacs_storage",
    name: "PACS Decentralized Grain Storage Scheme",
    category: "Post-Harvest Infrastructure",
    crops: ["Soybean", "Wheat", "Rice"],
    states: ["Maharashtra", "Karnataka", "Telangana", "West Bengal"],
    requiresLoan: false,
    requiresPACS: true,
    whyApplies: "Eligible to store produce at village-level modern PACS godown with negotiable warehouse receipts to avoid distress sale.",
    documents: [
      "PACS Membership Proof",
      "Crop Harvest Weighment slip",
      "Bank Account details for pledge loan"
    ],
    deadline: "Post-harvest season intake",
    supportContact: "PACS Godown In-Charge",
    badgeColor: "purple"
  }
];

export const VERIFIED_SOURCES = [
  {
    id: "ministry_coop",
    name: "Ministry of Cooperation",
    authority: "Government of India",
    url: "https://cooperation.gov.in",
    displayUrl: "cooperation.gov.in",
    badge: "Government Portal",
    badgeColor: "blue",
    description: "Official portal of the Ministry of Cooperation detailing national policies, PACS computerization, multi-state cooperatives, and central sector schemes.",
    coverage: ["Model By-laws", "PACS Digitization", "National Cooperative Policy"],
    lastUpdated: "January 2026"
  },
  {
    id: "pmfby_portal",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    authority: "Ministry of Agriculture & Farmers Welfare",
    url: "https://pmfby.gov.in",
    displayUrl: "pmfby.gov.in",
    badge: "Official Portal",
    badgeColor: "green",
    description: "Unified portal for crop insurance enrolment, claim status, operational guidelines, weather triggers, and localized damage reporting.",
    coverage: ["Operational Guidelines 2024", "Claim Assessment", "Premium Calculator"],
    lastUpdated: "February 2026"
  },
  {
    id: "bhashini",
    name: "Bhashini (National Language Translation Mission)",
    authority: "Ministry of Electronics & IT (MeitY)",
    url: "https://bhashini.gov.in",
    displayUrl: "bhashini.gov.in",
    badge: "Language AI Infrastructure",
    badgeColor: "orange",
    description: "Open language AI platform enabling multilingual voice recognition (ASR), translation (NMT), and speech generation (TTS) for 22 Indian languages.",
    coverage: ["ASR Speech Models", "Indic NMT", "Dialectal Voice Support"],
    lastUpdated: "2025"
  },
  {
    id: "ai4bharat",
    name: "AI4Bharat",
    authority: "IIT Madras / Research Consortium",
    url: "https://ai4bharat.org",
    displayUrl: "ai4bharat.org",
    badge: "Open Source AI",
    badgeColor: "purple",
    description: "Research center developing state-of-the-art open source AI models for Indian languages: IndicTrans2, IndicWhisper, and IndicConformer.",
    coverage: ["IndicWhisper Voice ASR", "IndicTrans2", "Rural Dialect Benchmarks"],
    lastUpdated: "2025"
  },
  {
    id: "mscs_act",
    name: "Multi-State Cooperative Societies Act, 2002 & Amendment Act, 2023",
    authority: "Legislative Department / India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
    displayUrl: "India Code / Gazette",
    badge: "Statutory Law",
    badgeColor: "yellow",
    description: "Comprehensive statutory framework governing election rules, member rights, audit mandates, cooperative ombudsman, and board accountability.",
    coverage: ["Member Voting Rights", "Cooperative Election Authority", "Audit & Inspection"],
    lastUpdated: "Gazette Aug 2023"
  },
  {
    id: "model_bylaws",
    name: "Model By-laws for Primary Agricultural Credit Societies (PACS)",
    authority: "Ministry of Cooperation, Govt. of India",
    url: "https://cooperation.gov.in/model-by-laws-pacs",
    displayUrl: "cooperation.gov.in/model-by-laws",
    badge: "Governance Standard",
    badgeColor: "green",
    description: "Standardized model by-laws adopted by 29 States/UTs allowing PACS to diversify into 25+ activities including CSCs, fertilizer distribution, and dairy.",
    coverage: ["Eligibility & Quorum", "Diversified Services", "Grievance Protocol"],
    lastUpdated: "2024 Edition"
  }
];

export const IMPORTANT_DATES = [
  {
    id: 1,
    title: "PMFBY Rabi Crop Enrolment Deadline",
    date: "30 Nov 2026",
    daysLeft: "60 days remaining",
    urgency: "high",
    tag: "Crop Insurance",
    description: "Last date to enrol wheat, gram, and rabi jowar with PACS / Bank branch to qualify for weather risk cover."
  },
  {
    id: 2,
    title: "PACS Annual General Meeting (AGM) Notice",
    date: "15 Dec 2026",
    daysLeft: "75 days remaining",
    urgency: "medium",
    tag: "Cooperative Governance",
    description: "Statutory deadline for PACS to present annual audited balance sheets and dividend distributions to voting members."
  },
  {
    id: 3,
    title: "Interest Subvention Claim Settlement Cycle",
    date: "31 Jan 2027",
    daysLeft: "122 days remaining",
    urgency: "normal",
    tag: "Credit",
    description: "Farmers with prompt repayment must confirm zero interest refund credit in their DCCB Kisan Credit Card account."
  }
];

export const RECENT_QUERIES = [
  {
    id: "rq1",
    query: "माझ्या पिकासाठी PMFBY अंतर्गत दावा कसा करायचा?",
    date: "Today, 10:23 AM",
    language: "मराठी",
    source: "PMFBY Operational Guidelines Sec 4.2",
    status: "Verified",
    topic: "PMFBY Claim"
  },
  {
    id: "rq2",
    query: "सहकारी संस्थेत मतदानाचा अधिकार मिळण्यासाठी किमान भाग भांडवल किती?",
    date: "28 Sep 2026, 04:15 PM",
    language: "मराठी",
    source: "MSCS Act 2023 & Model By-laws Sec 11",
    status: "Verified",
    topic: "Cooperative Rights"
  },
  {
    id: "rq3",
    query: "PACS मधून ठिबक सिंचन योजनेसाठी सबसिडी कशी मिळते?",
    date: "25 Sep 2026, 11:40 AM",
    language: "मराठी",
    source: "Micro Irrigation Fund Guidelines",
    status: "Verified",
    topic: "Scheme Eligibility"
  }
];
