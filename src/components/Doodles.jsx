import React from 'react';

// 1. Header Village Doodle (Top right of PPT header: PACS cottage, trees, sun, fields)
export function HeaderVillageDoodle({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 280 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: '54px', width: 'auto', ...style }}
    >
      {/* Sky subtle gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FAFCF8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>

      {/* Sun */}
      <circle cx="230" cy="22" r="14" fill="#FDE047" opacity="0.85" />
      <circle cx="230" cy="22" r="18" stroke="#FEF08A" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

      {/* Rolling hills */}
      <path d="M0 65 Q 60 45, 130 55 T 280 50 L 280 90 L 0 90 Z" fill="url(#hillGrad)" opacity="0.5" />
      <path d="M0 72 Q 80 58, 160 66 T 280 64 L 280 90 L 0 90 Z" fill="#34D399" opacity="0.7" />
      <path d="M0 78 Q 70 68, 150 72 T 280 70 L 280 90 L 0 90 Z" fill="#059669" />

      {/* Trees Left */}
      <circle cx="25" cy="52" r="13" fill="#15803D" />
      <circle cx="38" cy="46" r="15" fill="#16A34A" />
      <circle cx="50" cy="52" r="12" fill="#22C55E" />
      <rect x="35" y="58" width="4" height="20" fill="#78350F" />

      {/* PACS Cottage Building */}
      {/* House Body */}
      <rect x="130" y="46" width="60" height="32" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
      {/* Tiled Roof */}
      <polygon points="124,46 160,26 196,46" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
      {/* PACS Signboard */}
      <rect x="146" y="36" width="28" height="9" rx="2" fill="#FFFFFF" stroke="#0F744A" strokeWidth="1" />
      <text x="160" y="43" textAnchor="middle" fill="#0F744A" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PACS</text>
      {/* Door */}
      <rect x="153" y="60" width="14" height="18" rx="2" fill="#78350F" />
      <circle cx="163" cy="70" r="1" fill="#FEF08A" />
      {/* Windows */}
      <rect x="136" y="54" width="10" height="10" rx="1" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1" />
      <line x1="141" y1="54" x2="141" y2="64" stroke="#0284C7" strokeWidth="0.8" />
      <rect x="174" y="54" width="10" height="10" rx="1" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1" />
      <line x1="179" y1="54" x2="179" y2="64" stroke="#0284C7" strokeWidth="0.8" />

      {/* Trees Right */}
      <circle cx="210" cy="48" r="14" fill="#15803D" />
      <circle cx="224" cy="42" r="17" fill="#16A34A" />
      <circle cx="240" cy="50" r="13" fill="#22C55E" />
      <rect x="222" y="56" width="5" height="22" fill="#78350F" />

      {/* Little Wooden Fence */}
      <line x1="90" y1="74" x2="124" y2="74" stroke="#92400E" strokeWidth="1.5" />
      <line x1="94" y1="70" x2="94" y2="78" stroke="#92400E" strokeWidth="1.5" />
      <line x1="104" y1="70" x2="104" y2="78" stroke="#92400E" strokeWidth="1.5" />
      <line x1="114" y1="70" x2="114" y2="78" stroke="#92400E" strokeWidth="1.5" />

      {/* Birds */}
      <path d="M70 24 Q 74 20, 78 24 Q 82 20, 86 24" stroke="#475569" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M85 30 Q 88 27, 91 30 Q 94 27, 97 30" stroke="#475569" strokeWidth="0.9" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// 2. Rural PACS & Govt Pillar Landscape (Screen 1 Home bottom illustration)
export function PacsGovtLandscapeDoodle({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 740 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block', ...style }}
    >
      <defs>
        <linearGradient id="hillGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>

      {/* Soft Hills */}
      <path d="M0 95 Q 160 55, 340 80 T 740 70 L 740 140 L 0 140 Z" fill="url(#hillGreen)" opacity="0.6" />
      <path d="M0 105 Q 200 85, 420 95 T 740 90 L 740 140 L 0 140 Z" fill="#34D399" opacity="0.8" />
      <path d="M0 115 Q 180 102, 380 110 T 740 105 L 740 140 L 0 140 Z" fill="#059669" />

      {/* Trees Cluster Left */}
      <circle cx="35" cy="85" r="16" fill="#15803D" />
      <circle cx="55" cy="76" r="20" fill="#16A34A" />
      <circle cx="75" cy="84" r="16" fill="#22C55E" />
      <rect x="52" y="92" width="6" height="26" fill="#78350F" />

      {/* Small Farm Cottage Left */}
      <rect x="110" y="86" width="38" height="24" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
      <polygon points="106,86 129,70 152,86" fill="#EA580C" />
      <rect x="124" y="96" width="10" height="14" fill="#78350F" />

      {/* PACS Village Center (Center Left) */}
      <rect x="195" y="68" width="85" height="46" rx="3" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
      <polygon points="188,68 237.5,42 287,68" fill="#F97316" stroke="#C2410C" strokeWidth="1.5" />
      {/* PACS Emblem Banner */}
      <rect x="216" y="52" width="43" height="12" rx="2" fill="#0F744A" />
      <text x="237.5" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PACS</text>
      {/* Door & Pillars */}
      <rect x="228" y="86" width="19" height="28" rx="2" fill="#78350F" />
      <rect x="204" y="78" width="14" height="14" rx="1" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1" />
      <rect x="257" y="78" width="14" height="14" rx="1" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1" />

      {/* Green crop rows */}
      <path d="M300 115 L 340 135" stroke="#15803D" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M315 115 L 355 135" stroke="#15803D" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M330 115 L 370 135" stroke="#15803D" strokeWidth="2" strokeDasharray="3 3" />

      {/* Trees in Middle */}
      <circle cx="430" cy="80" r="18" fill="#15803D" />
      <circle cx="452" cy="72" r="22" fill="#16A34A" />
      <circle cx="475" cy="82" r="18" fill="#22C55E" />
      <rect x="449" y="90" width="6" height="26" fill="#78350F" />

      {/* Government Bhavan / Parliament Building (Right) */}
      {/* Base */}
      <rect x="525" y="78" width="130" height="38" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
      {/* Grand Dome */}
      <path d="M570 78 A 20 20 0 0 1 610 78 Z" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
      {/* Flag Mast & Tricolor */}
      <line x1="590" y1="42" x2="590" y2="58" stroke="#334155" strokeWidth="2" />
      {/* Indian Tricolor Flag */}
      <rect x="590" y="42" width="15" height="3.5" fill="#FF9933" />
      <rect x="590" y="45.5" width="15" height="3.5" fill="#FFFFFF" />
      <circle cx="597.5" cy="47.2" r="1.3" fill="#000080" />
      <rect x="590" y="49" width="15" height="3.5" fill="#138808" />
      {/* Classical Pillars */}
      <rect x="535" y="78" width="7" height="36" fill="#CBD5E1" />
      <rect x="550" y="78" width="7" height="36" fill="#CBD5E1" />
      <rect x="565" y="78" width="7" height="36" fill="#CBD5E1" />
      <rect x="608" y="78" width="7" height="36" fill="#CBD5E1" />
      <rect x="623" y="78" width="7" height="36" fill="#CBD5E1" />
      <rect x="638" y="78" width="7" height="36" fill="#CBD5E1" />
      {/* Pediment Roof */}
      <polygon points="520,78 590,62 660,78" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />

      {/* Far Right Trees */}
      <circle cx="685" cy="85" r="16" fill="#16A34A" />
      <circle cx="705" cy="78" r="19" fill="#22C55E" />
      <rect x="693" y="92" width="5" height="24" fill="#78350F" />
    </svg>
  );
}

// 3. Indian Farmer Mascot Sticker (Screen 3 Scheme & Eligibility illustration)
export function FarmerIllustration({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 240 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', maxWidth: '240px', height: 'auto', ...style }}
    >
      <defs>
        <linearGradient id="farmerField" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D1FAE5" />
          <stop offset="100%" stopColor="#A7F3D0" />
        </linearGradient>
      </defs>

      {/* Circular backdrop */}
      <circle cx="120" cy="130" r="105" fill="url(#farmerField)" />
      <circle cx="120" cy="130" r="105" stroke="#34D399" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />

      {/* Green crop stalks behind */}
      <path d="M40 180 Q 50 140, 70 130" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
      <path d="M190 180 Q 185 135, 170 120" stroke="#059669" strokeWidth="3" strokeLinecap="round" />

      {/* Map Pin Marker on State */}
      <g transform="translate(160, 80)">
        <circle cx="15" cy="15" r="14" fill="#DC2626" opacity="0.2" />
        <path d="M15 4 C 9 4, 4 9, 4 15 C 4 23, 15 32, 15 32 C 15 32, 26 23, 26 15 C 26 9, 21 4, 15 4 Z" fill="#DC2626" />
        <circle cx="15" cy="14" r="4.5" fill="#FFFFFF" />
      </g>

      {/* FARMER CHARACTER */}
      {/* Shoulders / Kurta */}
      <path d="M50 245 C 50 200, 85 188, 120 188 C 155 188, 190 200, 190 245 Z" fill="#FDF4E3" stroke="#D97706" strokeWidth="1.5" />

      {/* Green Dupatta / Angavastram draped over shoulder */}
      <path d="M68 200 C 65 220, 70 245, 75 250 L 95 250 C 90 230, 85 205, 90 195 Z" fill="#0F744A" />
      <path d="M142 195 C 148 215, 158 235, 165 250 L 148 250 C 140 230, 135 210, 138 195 Z" fill="#0F744A" />

      {/* Kurta Collar & Buttons */}
      <path d="M112 188 L 120 205 L 128 188" stroke="#D97706" strokeWidth="1.5" fill="none" />
      <circle cx="120" cy="214" r="2" fill="#D97706" />
      <circle cx="120" cy="225" r="2" fill="#D97706" />

      {/* Neck */}
      <rect x="108" y="162" width="24" height="28" rx="4" fill="#F6C492" />

      {/* Ears */}
      <circle cx="82" cy="135" r="9" fill="#F6C492" />
      <circle cx="158" cy="135" r="9" fill="#F6C492" />

      {/* Face */}
      <ellipse cx="120" cy="138" rx="38" ry="42" fill="#FCD3A1" />

      {/* Cheerful Eyebrows */}
      <path d="M96 118 Q 106 114, 114 118" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M126 118 Q 134 114, 144 118" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Kind Eyes */}
      <ellipse cx="106" cy="126" rx="4" ry="4.5" fill="#1C1917" />
      <ellipse cx="134" cy="126" rx="4" ry="4.5" fill="#1C1917" />
      <circle cx="107.5" cy="124.5" r="1.5" fill="#FFFFFF" />
      <circle cx="135.5" cy="124.5" r="1.5" fill="#FFFFFF" />

      {/* Nose */}
      <path d="M118 126 Q 115 138, 122 138" stroke="#E08B48" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Classic Indian Farmer Mustache (bold & twirled) */}
      <path
        d="M94 148 Q 110 144, 120 150 Q 130 144, 146 148 Q 152 142, 144 140 Q 132 144, 120 144 Q 108 144, 96 140 Q 88 142, 94 148 Z"
        fill="#292524"
      />

      {/* Gentle Smile */}
      <path d="M112 158 Q 120 164, 128 158" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Pagri / Traditional Turban (Orange & White folds) */}
      <ellipse cx="120" cy="98" rx="46" ry="24" fill="#EA580C" />
      <path d="M72 104 C 70 80, 95 64, 120 64 C 145 64, 170 80, 168 104 C 158 114, 82 114, 72 104 Z" fill="#FF8A00" />
      <path d="M76 96 C 90 84, 130 80, 164 92" stroke="#FED7AA" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M80 86 C 100 75, 140 73, 160 84" stroke="#FFF7ED" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="120" cy="62" r="8" fill="#C2410C" />

      {/* Tilak on forehead */}
      <rect x="118.5" y="102" width="3" height="10" rx="1.5" fill="#DC2626" />
      <circle cx="120" cy="115" r="1.5" fill="#FACC15" />
    </svg>
  );
}

// 4. Kiosk Hardware & Nature Backdrop (Screen 7)
export function KioskNatureBackdrop({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block', ...style }}
    >
      <path d="M0 130 Q 200 90, 400 120 T 800 110 L 800 200 L 0 200 Z" fill="#064E3B" opacity="0.7" />
      <path d="M0 150 Q 220 130, 440 145 T 800 140 L 800 200 L 0 200 Z" fill="#0F744A" />

      {/* Trees Left */}
      <circle cx="60" cy="120" r="30" fill="#047857" />
      <circle cx="95" cy="105" r="36" fill="#10B981" />
      <circle cx="130" cy="118" r="28" fill="#34D399" />
      <rect x="90" y="130" width="10" height="40" fill="#78350F" />

      {/* Trees Right */}
      <circle cx="670" cy="115" r="30" fill="#047857" />
      <circle cx="705" cy="100" r="38" fill="#10B981" />
      <circle cx="745" cy="116" r="28" fill="#34D399" />
      <rect x="700" y="125" width="10" height="45" fill="#78350F" />
    </svg>
  );
}
