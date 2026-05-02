// Decorative SVG motifs — abstract temple geometry, no figurative drawings
const MotifDiamond = ({ size = 24, color = 'currentColor', stroke = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke={color} strokeWidth={stroke} />
    <path d="M12 6 L18 12 L12 18 L6 12 Z" stroke={color} strokeWidth={stroke} opacity="0.55" />
    <circle cx="12" cy="12" r="1.4" fill={color} />
  </svg>
);

const MotifTrefoil = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 3 C18 9, 22 11, 28 13 C22 15, 18 17, 16 23 C14 17, 10 15, 4 13 C10 11, 14 9, 16 3 Z" stroke={color} strokeWidth="1" />
    <circle cx="16" cy="13" r="1.2" fill={color} />
  </svg>
);

const MotifSunburst = ({ size = 80, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="14" stroke={color} strokeWidth="0.8" />
    <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="0.6" opacity="0.6" />
    <circle cx="50" cy="50" r="34" stroke={color} strokeWidth="0.5" opacity="0.4" />
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i / 24) * Math.PI * 2;
      const x1 = 50 + Math.cos(a) * 36;
      const y1 = 50 + Math.sin(a) * 36;
      const x2 = 50 + Math.cos(a) * 46;
      const y2 = 50 + Math.sin(a) * 46;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.6" opacity="0.6" />;
    })}
  </svg>
);

const MotifArch = ({ width = 200, height = 320, color = 'currentColor', stroke = 1 }) => (
  <svg width={width} height={height} viewBox="0 0 200 320" fill="none" aria-hidden="true">
    <path d="M20 320 V120 Q20 20 100 20 Q180 20 180 120 V320" stroke={color} strokeWidth={stroke} fill="none" />
    <path d="M40 320 V130 Q40 40 100 40 Q160 40 160 130 V320" stroke={color} strokeWidth={stroke} fill="none" opacity="0.55" />
    <path d="M60 320 V140 Q60 60 100 60 Q140 60 140 140 V320" stroke={color} strokeWidth={stroke} fill="none" opacity="0.3" />
  </svg>
);

const MotifBorder = ({ height = 18, color = 'currentColor' }) => (
  <svg width="100%" height={height} viewBox="0 0 400 18" preserveAspectRatio="none" aria-hidden="true">
    <line x1="0" y1="9" x2="400" y2="9" stroke={color} strokeWidth="0.5" />
    {Array.from({ length: 40 }).map((_, i) => (
      <g key={i} transform={`translate(${i * 10}, 0)`}>
        <path d={`M5 4 L8 9 L5 14 L2 9 Z`} fill={color} opacity={i % 2 ? 0.9 : 0.3} />
      </g>
    ))}
  </svg>
);

const MotifCorner = ({ size = 60, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
    <path d="M0 0 H60 M0 0 V60" stroke={color} strokeWidth="1" />
    <path d="M0 8 H52 M8 0 V52" stroke={color} strokeWidth="0.5" opacity="0.5" />
    <path d="M2 12 Q12 12 12 2" stroke={color} strokeWidth="0.5" fill="none" />
    <circle cx="14" cy="14" r="2" stroke={color} strokeWidth="0.5" fill="none" />
  </svg>
);

const MotifLamp = ({ size = 50, color = 'currentColor' }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 50 80" fill="none" aria-hidden="true">
    <ellipse cx="25" cy="20" rx="18" ry="6" stroke={color} strokeWidth="0.7" />
    <path d="M7 20 Q7 32 25 32 Q43 32 43 20" stroke={color} strokeWidth="0.7" fill="none" />
    <path d="M25 6 Q22 12 25 18 Q28 12 25 6 Z" stroke={color} strokeWidth="0.6" fill={color} fillOpacity="0.3" />
    <line x1="25" y1="32" x2="25" y2="44" stroke={color} strokeWidth="0.7" />
    <ellipse cx="25" cy="46" rx="14" ry="3" stroke={color} strokeWidth="0.7" />
    <path d="M11 46 Q11 56 25 56 Q39 56 39 46" stroke={color} strokeWidth="0.7" fill="none" />
    <line x1="25" y1="56" x2="25" y2="64" stroke={color} strokeWidth="0.7" />
    <path d="M14 64 H36 L33 70 H17 Z" stroke={color} strokeWidth="0.7" fill="none" />
  </svg>
);

window.MotifDiamond = MotifDiamond;
window.MotifTrefoil = MotifTrefoil;
window.MotifSunburst = MotifSunburst;
window.MotifArch = MotifArch;
window.MotifBorder = MotifBorder;
window.MotifCorner = MotifCorner;
window.MotifLamp = MotifLamp;
