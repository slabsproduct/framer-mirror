import React from "react";

// 1. Interlocking rings and heart logo (as seen in Section 8 of the PDF)
export const WeddingLogo: React.FC<{ className?: string; color?: "gold" | "green" | "terracotta" | "pink" }> = ({
  className = "w-24 h-24",
  color = "gold",
}) => {
  const strokeColor = {
    gold: "#C5A059",
    green: "#32422F",
    terracotta: "#BE6D53",
    pink: "#EBD4D0",
  }[color];

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer concentric rings */}
      <circle cx="50" cy="50" r="45" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 1" opacity="0.6" />
      <circle cx="50" cy="50" r="42" stroke={strokeColor} strokeWidth="2.5" />
      
      {/* Interlocking Heart Shapes representing M & S */}
      <path
        d="M50 35 C40 22, 22 28, 28 48 C32 60, 50 72, 50 72 C50 72, 68 60, 72 48 C78 28, 60 22, 50 35 Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={`${strokeColor}08`}
      />
      <path
        d="M50 40 C43 28, 30 32, 34 46 C37 54, 50 63, 50 63 C50 63, 63 54, 66 46 C70 32, 57 28, 50 40 Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      
      {/* Tiny decorative starburst or watercolor-like dots */}
      <circle cx="18" cy="30" r="1.5" fill={strokeColor} opacity="0.6" />
      <circle cx="82" cy="30" r="2" fill={strokeColor} opacity="0.8" />
      <circle cx="32" cy="80" r="1.5" fill={strokeColor} opacity="0.5" />
      <circle cx="74" cy="78" r="2" fill={strokeColor} opacity="0.7" />
    </svg>
  );
};

// 2. Illustrated Map of Mendoza vineyards (as seen in Section 1)
export const VineyardMap: React.FC<{ className?: string }> = ({ className = "w-full max-w-md h-auto" }) => {
  return (
    <div className={`relative bg-[#FAF6EE] rounded-2xl p-6 border border-olive-medium/20 shadow-sm ${className}`}>
      <div className="absolute top-2 right-2 px-2 py-0.5 bg-olive-medium/10 text-olive-dark text-[10px] font-mono rounded tracking-wider uppercase">
        Croquis de Ubicación
      </div>
      
      <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft Watercolor-style abstract green blobs */}
        <path d="M 50,80 Q 80,40 120,60 T 180,90 T 140,150 T 60,130 Z" fill="#E2EADE" opacity="0.7" />
        <path d="M 220,120 Q 280,90 320,130 T 300,200 T 210,180 Z" fill="#EAEFE5" opacity="0.6" />
        <path d="M 180,260 Q 240,240 280,290 T 220,350 T 150,310 Z" fill="#E4EBE0" opacity="0.8" />
        <path d="M 80,280 Q 110,240 150,270 T 130,340 T 70,320 Z" fill="#EDF2E8" opacity="0.7" />

        {/* Soft watercolor purple spots representing grapes */}
        <circle cx="100" cy="110" r="12" fill="#E5D9EB" opacity="0.6" />
        <circle cx="280" cy="300" r="15" fill="#E2D1E7" opacity="0.5" />

        {/* Illustrated Vineyards & Mountains Paths (Hand-drawn dashed lines) */}
        <path d="M 30,200 L 370,200" stroke="#C3C9BC" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 200,30 L 200,370" stroke="#C3C9BC" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 120,50 L 280,350" stroke="#D1D6CC" strokeWidth="1" strokeDasharray="2 2" />

        {/* Mendoza Cordillera line at the far west */}
        <path
          d="M 20,40 L 40,30 L 60,45 L 80,25 L 110,40 L 140,20 L 170,45 L 200,35 L 250,50 L 300,30 L 350,45"
          stroke="#C5A059"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Main Places Markers & Annotations */}
        {/* Chacras de Coria */}
        <g transform="translate(200, 70)">
          <circle cx="0" cy="0" r="4" fill="#32422F" />
          <text x="8" y="4" fill="#32422F" className="font-serif italic font-medium" fontSize="11">Chacras de Coria</text>
        </g>

        {/* Luján de Cuyo */}
        <g transform="translate(200, 120)">
          <circle cx="0" cy="0" r="4" fill="#32422F" />
          <text x="8" y="4" fill="#32422F" className="font-serif italic" fontSize="11">Luján de Cuyo</text>
        </g>

        {/* MAAL WINES (Pre-Wedding Venue) */}
        <g transform="translate(140, 180)">
          {/* Winery sketch representation */}
          <rect x="-15" y="-20" width="30" height="15" fill="#FAF5EE" stroke="#BE6D53" strokeWidth="1" rx="2" />
          <polygon points="-17,-20 0,-30 17,-20" fill="#FAF5EE" stroke="#BE6D53" strokeWidth="1" />
          <circle cx="0" cy="-5" r="3" fill="#BE6D53" />
          <text x="20" y="-8" fill="#BE6D53" className="font-serif font-bold tracking-tight" fontSize="11">MAAL WINES</text>
          <text x="20" y="4" fill="#687A60" className="font-sans text-[8px] uppercase tracking-wide" fontSize="7">Pre-Wedding / 20 Nov</text>
        </g>

        {/* Agrelo Area */}
        <g transform="translate(260, 240)">
          <text x="0" y="0" fill="#687A60" className="font-serif italic" fontSize="11">Agrelo</text>
        </g>

        {/* CASA DAVID (Ceremony & Party) */}
        <g transform="translate(200, 290)">
          {/* Chapel / House watercolor drawing */}
          <path d="M -15,10 L -15,-10 L 0,-25 L 15,-10 L 15,10 Z" fill="#F4EFEB" stroke="#32422F" strokeWidth="1.5" />
          <path d="M -5,10 L -5,2 Q 0,0 5,2 L 5,10 Z" fill="#BE6D53" />
          <circle cx="0" cy="-12" r="3" fill="#C5A059" />
          {/* Location highlight rings */}
          <circle cx="0" cy="10" r="18" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 2" className="animate-spin-slow" />
          
          <text x="22" y="-4" fill="#32422F" className="font-serif font-bold" fontSize="11">CASA DAVID</text>
          <text x="22" y="8" fill="#BE6D53" className="font-sans font-medium text-[8px] tracking-wide uppercase" fontSize="7">Ceremonia & Fiesta / 21 Nov</text>
        </g>

        {/* Wine glasses icons on the map */}
        <g transform="translate(80, 150)" opacity="0.6">
          <path d="M-5,-10 L5,-10 L0,0 Z M0,0 L0,8 M-4,8 L4,8" stroke="#32422F" strokeWidth="1" />
        </g>
        <g transform="translate(320, 310)" opacity="0.6">
          <path d="M-5,-10 L5,-10 L0,0 Z M0,0 L0,8 M-4,8 L4,8" stroke="#BE6D53" strokeWidth="1" />
        </g>

        {/* Interlocking Rings symbol near Agrelo */}
        <g transform="translate(100, 330)" opacity="0.7">
          <circle cx="-5" cy="0" r="6" stroke="#C5A059" strokeWidth="1" />
          <circle cx="3" cy="0" r="6" stroke="#C5A059" strokeWidth="1" />
        </g>
        <g transform="translate(310, 80)" opacity="0.7">
          <circle cx="-5" cy="0" r="6" stroke="#C5A059" strokeWidth="1" />
          <circle cx="3" cy="0" r="6" stroke="#C5A059" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

// 3. Botanical Olive leaves and grape-vine accents (as seen in Section 1)
export const BotanicalBranch: React.FC<{ className?: string; color?: string }> = ({
  className = "w-16 h-16",
  color = "#687A60",
}) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central stem */}
      <path d="M10,90 Q40,60 90,20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Olive Leaves */}
      {/* Left side leaves */}
      <path d="M25,75 Q15,60 25,55 Q35,62 30,70" fill={color} opacity="0.8" />
      <circle cx="16" cy="61" r="2.5" fill="#32422F" /> {/* Olive */}
      
      <path d="M45,55 Q35,40 45,35 Q55,42 50,50" fill={color} opacity="0.9" />
      
      <path d="M65,35 Q55,20 65,15 Q75,22 70,30" fill={color} />
      <circle cx="56" cy="22" r="2.5" fill="#32422F" /> {/* Olive */}

      {/* Right side leaves */}
      <path d="M30,80 Q45,75 50,65 Q42,60 35,70" fill={color} opacity="0.7" />
      <path d="M50,60 Q65,55 70,45 Q62,40 55,50" fill={color} opacity="0.85" />
      <circle cx="63" cy="51" r="2.5" fill="#C5A059" /> {/* Golden olive */}
      
      <path d="M70,40 Q85,35 90,25 Q82,20 75,30" fill={color} opacity="0.9" />
      
      {/* Splendid botanical details */}
      <path d="M85,25 Q95,15 93,10 Q85,12 80,18" fill={color} />
    </svg>
  );
};

// 4. Illustrated Wine Glass Splashing (as seen in Section 1)
export const SplashingWine: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glass Outline */}
      <path
        d="M30,20 C30,50 35,70 50,70 C65,70 70,50 70,20"
        stroke="#2B2A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Stem & Base */}
      <line x1="50" y1="70" x2="50" y2="105" stroke="#2B2A27" strokeWidth="1.5" opacity="0.3" />
      <path d="M35,105 Q50,102 65,105" stroke="#2B2A27" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      
      {/* splashing Red Wine (Watercolor looking deep red) */}
      <path
        d="M34,45 C35,52 38,64 50,64 C62,64 65,52 66,45 C60,48 55,42 50,46 C45,42 40,48 34,45 Z"
        fill="#914832"
        opacity="0.9"
      />
      {/* Splash arcs */}
      <path
        d="M34,45 Q22,25 25,18 Q28,15 32,25 Q35,35 34,45 Z"
        fill="#BE6D53"
        opacity="0.8"
      />
      <path
        d="M66,45 Q78,30 75,22 Q70,20 68,32 Q65,40 66,45 Z"
        fill="#914832"
        opacity="0.85"
      />
      
      {/* Flying drops */}
      <circle cx="20" cy="12" r="2" fill="#BE6D53" />
      <circle cx="28" cy="8" r="1.5" fill="#914832" />
      <circle cx="78" cy="15" r="2.5" fill="#914832" />
      <circle cx="70" cy="10" r="1.2" fill="#BE6D53" />
      <circle cx="50" cy="30" r="1.5" fill="#FAF5EE" /> {/* highlight inside wine */}
    </svg>
  );
};

// 5. Mascot - Perrita Milu with a Crown (as seen in Section 5)
export const PerritaMilu: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => {
  return (
    <div className={`relative flex flex-col items-center bg-warm-beige rounded-2xl p-4 border border-gold-wedding/20 text-center ${className}`}>
      <svg viewBox="0 0 100 110" className="w-24 h-24 mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft white fluffy body & head */}
        <path d="M25,80 C25,55 30,35 50,35 C70,35 75,55 75,80 C75,95 68,100 50,100 C32,100 25,95 25,80 Z" fill="#FAF9F6" />
        
        {/* Watercolor cream ears */}
        <path d="M26,45 C20,45 15,60 18,75 C21,80 28,75 28,60 Z" fill="#EADCC9" />
        <path d="M74,45 C80,45 85,60 82,75 C79,80 72,75 72,60 Z" fill="#EADCC9" />
        
        {/* Cute face cheeks */}
        <circle cx="36" cy="65" r="5" fill="#F4E3E0" />
        <circle cx="64" cy="65" r="5" fill="#F4E3E0" />
        
        {/* Smiling Eyes */}
        <path d="M32,58 Q38,52 42,58" stroke="#32422F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M58,58 Q62,52 68,58" stroke="#32422F" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Little Nose & Smile */}
        <path d="M47,64 Q50,61 53,64 C55,65 54,67 50,67 C46,67 45,65 47,64 Z" fill="#32422F" />
        <path d="M46,69 Q50,73 54,69" stroke="#32422F" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Happy red tongue */}
        <path d="M48,71 C48,75 52,75 52,71 Z" fill="#BE6D53" />

        {/* Fluffy tail */}
        <path d="M22,82 C14,80 12,90 18,93 C22,95 25,88 22,82 Z" fill="#FAF9F6" />

        {/* CUTE GOLDEN PRINCESS CROWN on her head */}
        <g transform="translate(50, 34) scale(0.7)">
          <polygon points="-15,0 -20,-15 -8,-8 0,-20 8,-8 20,-15 15,0" fill="#C5A059" stroke="#914832" strokeWidth="1" />
          <circle cx="-20" cy="-15" r="2.5" fill="#BE6D53" />
          <circle cx="0" cy="-20" r="2.5" fill="#BE6D53" />
          <circle cx="20" cy="-15" r="2.5" fill="#BE6D53" />
          <rect x="-15" y="0" width="30" height="3" fill="#914832" rx="1" />
        </g>
      </svg>
      <h4 className="font-serif italic text-xs text-olive-dark font-semibold">Milu</h4>
      <p className="text-[10px] text-olive-medium uppercase tracking-wider font-medium">Nuestra perrita & testigo de honor</p>
    </div>
  );
};

// 6. Watercolor Couple Illustration (as seen in Section 3)
export const CoupleIllustration: React.FC<{ className?: string }> = ({ className = "w-full max-w-sm h-auto" }) => {
  return (
    <div className={`flex justify-center bg-[#FAF6EE] p-6 rounded-2xl border border-olive-medium/10 shadow-sm ${className}`}>
      <svg viewBox="0 0 200 240" className="w-56 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft background glow */}
        <circle cx="100" cy="110" r="70" fill="#F3EBE0" opacity="0.8" />
        <circle cx="130" cy="130" r="50" fill="#E3EAE0" opacity="0.5" />

        {/* SIMÓN (left) */}
        {/* Hair and Beard */}
        <path d="M72,50 C70,42 75,36 84,38 C89,39 94,44 92,52 Z" fill="#7A5034" />
        <path d="M72,52 C71,59 74,68 84,68 C88,68 93,60 92,52 Z" fill="#7A5034" />
        {/* Beard outline */}
        <path d="M73,63 C74,74 89,74 91,63 C91,66 89,68 82,68 C75,68 73,66 73,63 Z" fill="#5C3B24" />
        {/* Face */}
        <path d="M75,52 C75,50 90,50 90,52 C90,62 88,67 82,67 C76,67 75,62 75,52 Z" fill="#EBC8B2" />
        {/* Eyes & Glasses */}
        <circle cx="79" cy="58" r="3" stroke="#2B2A27" strokeWidth="1" />
        <circle cx="87" cy="58" r="3" stroke="#2B2A27" strokeWidth="1" />
        <line x1="82" y1="58" x2="84" y2="58" stroke="#2B2A27" strokeWidth="1.5" />
        {/* Beard Detail */}
        <path d="M74,62 Q82,71 89,62" stroke="#5C3B24" strokeWidth="2.5" strokeLinecap="round" />

        {/* Clothing - Beige blazer, orange shirt */}
        {/* Orange shirt */}
        <path d="M72,85 L92,85 L85,115 L78,115 Z" fill="#BE6D53" />
        {/* Beige blazer */}
        <path d="M52,90 C50,110 54,160 58,210 L84,210 L82,100 Z" fill="#DFD3C3" />
        <path d="M110,95 L95,210 L80,210 L82,90 Z" fill="#DFD3C3" />
        {/* Pants */}
        <path d="M58,210 L102,210 L98,240 L62,240 Z" fill="#2B2A27" />


        {/* MARI (right) */}
        {/* Hair - Dark */}
        <path d="M102,52 C100,45 106,38 118,38 C128,38 132,45 130,55 C129,66 128,88 126,95 C122,95 120,70 120,55 Z" fill="#2B2A27" />
        <path d="M102,54 C98,62 100,80 102,90 C105,90 106,75 106,62 Z" fill="#2B2A27" />
        {/* Face */}
        <path d="M104,54 C104,50 124,50 124,54 C124,64 122,69 114,69 C106,69 104,64 104,54 Z" fill="#F5DDD0" />
        {/* Red smiling lips */}
        <path d="M111,63 Q114,66 117,63" stroke="#914832" strokeWidth="1.5" strokeLinecap="round" />
        {/* Cheeks */}
        <circle cx="108" cy="61" r="2" fill="#E7A899" />
        <circle cx="120" cy="61" r="2" fill="#E7A899" />
        {/* Eyes closed with eyelashes */}
        <path d="M107,57 Q110,59 111,57" stroke="#2B2A27" strokeWidth="1" fill="none" />
        <path d="M117,57 Q118,59 121,57" stroke="#2B2A27" strokeWidth="1" fill="none" />

        {/* Pink floral dress with lavender and light blue print */}
        <path d="M105,82 C98,110 84,170 82,230 C90,235 130,235 145,225 C140,160 128,110 120,82 Z" fill="#E8BDC4" />
        {/* Floral watercolor prints on dress */}
        <circle cx="95" cy="140" r="6" fill="#AABAC7" opacity="0.6" />
        <circle cx="125" cy="160" r="8" fill="#BAC6A4" opacity="0.6" />
        <circle cx="105" cy="180" r="10" fill="#CBB6D4" opacity="0.7" />
        <circle cx="118" cy="130" r="5" fill="#CBB6D4" opacity="0.7" />
        <circle cx="132" cy="195" r="7" fill="#AABAC7" opacity="0.5" />
        <circle cx="110" cy="215" r="9" fill="#BAC6A4" opacity="0.5" />

        {/* Connecting hands details */}
        <path d="M84,120 Q96,125 106,120" stroke="#DFD3C3" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

// 7. Dancing Guests & Celebration (as seen in Section 4)
export const CelebrationDancing: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <div className={`relative bg-[#FAF6EE] p-6 rounded-2xl border border-olive-medium/10 shadow-sm flex flex-col items-center ${className}`}>
      {/* Disco ball at top */}
      <svg viewBox="0 0 300 200" className="w-full max-w-sm h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="150" y1="0" x2="150" y2="40" stroke="#C5A059" strokeWidth="1.5" />
        <circle cx="150" cy="50" r="16" fill="#FAF5EE" stroke="#C5A059" strokeWidth="1" />
        {/* Disco facets */}
        <circle cx="150" cy="50" r="12" stroke="#C5A059" strokeWidth="0.8" strokeDasharray="2 2" />
        <path d="M138,50 Q150,55 162,50" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M142,42 Q150,47 158,42" stroke="#C5A059" strokeWidth="0.5" />
        
        {/* Shining rays */}
        <line x1="120" y1="40" x2="110" y2="35" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        <line x1="180" y1="40" x2="190" y2="35" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        <line x1="120" y1="60" x2="105" y2="65" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        <line x1="180" y1="60" x2="195" y2="65" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />

        {/* Group of guests dancing (as detailed on page 4 of the PDF) */}
        {/* Guest 1: Man in Black Tux with red bowtie */}
        <g transform="translate(60, 100)">
          {/* Head */}
          <circle cx="0" cy="-20" r="5" fill="#EBC8B2" />
          <path d="M-6,-22 C-6,-25 0,-26 4,-24 Z" fill="#2B2A27" />
          {/* Tux & legs */}
          <path d="M-8,-10 L8,-10 L5,45 L-5,45 Z" fill="#2B2A27" />
          {/* White shirt & red bowtie */}
          <polygon points="-3,-10 0,-3 3,-10" fill="#FAF9F6" />
          <circle cx="0" cy="-7" r="2" fill="#BE6D53" /> {/* Red bowtie */}
          {/* Arms dancing */}
          <path d="M-8,-10 Q-18,5 -10,18" stroke="#2B2A27" strokeWidth="3" strokeLinecap="round" />
          <path d="M8,-10 Q16,-2 22,-8" stroke="#2B2A27" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>

        {/* Guest 2: Lady in Green Dress */}
        <g transform="translate(110, 100)">
          {/* Head */}
          <circle cx="0" cy="-22" r="5" fill="#F5DDD0" />
          <path d="M-5,-27 C-7,-18 5,-18 5,-27 Z" fill="#7A5034" />
          {/* Olive Green dress */}
          <path d="M-6,-12 C-6,-12 6,-12 6,-12 C10,12 14,34 16,50 C6,52 -6,52 -12,50 C-10,34 -8,12 -6,-12 Z" fill="#687A60" />
          {/* Golden belts & frills */}
          <path d="M-7,10 Q0,13 7,10" stroke="#C5A059" strokeWidth="1" />
          <path d="M-9,28 Q0,32 9,28" stroke="#C5A059" strokeWidth="1" />
          {/* Arms */}
          <path d="M-6,-10 Q-15,-15 -20,-10" stroke="#FAF5EE" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M6,-10 Q15,-12 20,-15" stroke="#FAF5EE" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Guest 3: Couple in Tux & Red Dress (dancing closely) */}
        <g transform="translate(165, 100)">
          {/* Man head */}
          <circle cx="-5" cy="-22" r="5" fill="#EBC8B2" />
          {/* Lady head */}
          <circle cx="5" cy="-20" r="4.5" fill="#F5DDD0" />
          {/* Man body (Tux) */}
          <path d="M-15,-10 L-2,-10 L-5,48 L-12,48 Z" fill="#2B2A27" />
          {/* Lady dress (Terracotta/Red) */}
          <path d="M-2,-10 C5,-10 12,-10 12,-10 C16,10 18,30 22,50 C10,52 0,52 -8,50 C-6,30 -4,10 -2,-10 Z" fill="#BE6D53" />
          {/* Arms holding each other */}
          <path d="M-14,-10 Q-6,-4 2,-10" stroke="#2B2A27" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12,-10 Q18,0 8,15" stroke="#F5DDD0" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Guest 4: Lady in Gold Dress */}
        <g transform="translate(230, 100)">
          {/* Head */}
          <circle cx="0" cy="-20" r="5" fill="#EBC8B2" />
          <path d="M-7,-25 Q0,-28 6,-22" stroke="#2B2A27" strokeWidth="2" fill="none" />
          {/* Gold Dress */}
          <path d="M-6,-10 L6,-10 L12,46 L-10,46 Z" fill="#C5A059" />
          {/* Arms raised */}
          <path d="M-6,-10 Q-15,-25 -8,-32" stroke="#EBC8B2" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M6,-10 Q16,-22 14,-32" stroke="#EBC8B2" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>
      <p className="text-[10px] text-olive-medium font-mono uppercase tracking-widest mt-2">✨ Fiesta, Baile & Brindis hasta el amanecer ✨</p>
    </div>
  );
};
