"use client";

import { motion, useReducedMotion } from "framer-motion";

// Детайлизиран багер със собствен SVG: артикулирана ръка (рамо + кофа),
// хидравлични цилиндри, вериги със звезда и обтегач. Анимира се чрез CSS.
const C = {
  body: "#c79216",
  bodyDark: "#8a6410",
  bodyHi: "#e3b34c",
  ink: "#111111",
  steel: "#5f5f5d",
  steelDark: "#3a3a3a",
  track: "#292929",
  trackHub: "#454545",
  glass: "#cfd6da",
  beacon: "#f2dfae",
};

const DIG = 2.8;

export function Excavator({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const sprocketTeeth = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { x: 161 + Math.cos(a) * 15, y: 165 + Math.sin(a) * 15, a: (a * 180) / Math.PI };
  });

  return (
    <svg viewBox="0 0 280 196" className={className} role="img" aria-label="Багер, който копае на строителен обект" fill="none">
      <ellipse cx="118" cy="184" rx="104" ry="9" fill="#000" opacity="0.18" />

      {/* ВЕРИГИ */}
      <g>
        <rect x="44" y="150" width="134" height="30" rx="15" fill={C.track} stroke={C.ink} strokeWidth="3" />
        <rect x="44" y="155" width="134" height="20" rx="10" fill={C.steelDark} />
        {/* протектор */}
        {Array.from({ length: 16 }, (_, i) => (
          <line key={i} x1={56 + i * 8} y1="176" x2={56 + i * 8} y2="180" stroke={C.ink} strokeWidth="2" opacity="0.6" />
        ))}
        {/* пътни колела */}
        {[82, 100, 118, 136].map((cx) => (
          <circle key={cx} cx={cx} cy="173" r="4.5" fill={C.ink} />
        ))}
        {/* обтегач (ляво) */}
        <circle cx="61" cy="165" r="13" fill={C.trackHub} stroke={C.ink} strokeWidth="2.5" />
        <circle cx="61" cy="165" r="5" fill={C.steel} stroke={C.ink} strokeWidth="1.5" />
        {/* задвижваща звезда (дясно) */}
        {sprocketTeeth.map((t, i) => (
          <rect key={i} x={t.x - 2.5} y={t.y - 2.5} width="5" height="5" rx="1" fill={C.trackHub} transform={`rotate(${t.a} ${t.x} ${t.y})`} />
        ))}
        <circle cx="161" cy="165" r="13" fill={C.trackHub} stroke={C.ink} strokeWidth="2.5" />
        <circle cx="161" cy="165" r="5" fill={C.steel} stroke={C.ink} strokeWidth="1.5" />
      </g>

      {/* въртяща платформа */}
      <path d="M72 140 H166 L158 152 H80 Z" fill={C.steelDark} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />

      {/* противотежест */}
      <path d="M50 110 q-6 0 -6 7 v18 q0 7 7 7 h13 v-32 z" fill={C.bodyDark} stroke={C.ink} strokeWidth="3" />
      <line x1="50" y1="118" x2="62" y2="118" stroke={C.ink} strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="126" x2="62" y2="126" stroke={C.ink} strokeWidth="1.5" opacity="0.5" />

      {/* двигателен капак (отзад) */}
      <rect x="62" y="106" width="58" height="36" rx="5" fill={C.body} stroke={C.ink} strokeWidth="3" />
      {[68, 73, 78].map((x) => (
        <line key={x} x1={x} y1="111" x2={x} y2="121" stroke={C.ink} strokeWidth="1.5" opacity="0.45" />
      ))}
      {/* кабина (отпред) */}
      <rect x="116" y="88" width="48" height="54" rx="5" fill={C.body} stroke={C.ink} strokeWidth="3" />
      {/* двуцветна основа */}
      <path d="M62 134 h102 v3 a5 5 0 0 1 -5 5 H67 a5 5 0 0 1 -5 -5 z" fill={C.bodyDark} />
      {/* стъкло */}
      <path d="M122 94 L158 92 L158 118 L122 118 Z" fill={C.glass} stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="141" y1="93" x2="141" y2="118" stroke={C.ink} strokeWidth="1.5" opacity="0.4" />
      <line x1="122" y1="106" x2="158" y2="106" stroke={C.ink} strokeWidth="1.5" opacity="0.4" />
      {/* дръжка на вратата */}
      <line x1="126" y1="126" x2="134" y2="126" stroke={C.ink} strokeWidth="2" />
      {/* парапет */}
      <line x1="116" y1="100" x2="116" y2="132" stroke={C.beacon} strokeWidth="2" />

      {/* сигнална лампа */}
      <rect x="135" y="83" width="9" height="6" rx="1.5" fill={C.beacon} stroke={C.ink} strokeWidth="1.5" />
      {/* ауспух */}
      <rect x="74" y="97" width="6" height="11" rx="2" fill={C.steel} stroke={C.ink} strokeWidth="1.5" />

      {!reduce && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="77"
              cy="93"
              r="3.5"
              fill="#9aa0a8"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.45, 0], y: [-2, -16, -28], x: [0, -4, -10], scale: [0.6, 1, 1.35] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
            />
          ))}
        </>
      )}

      {/* шарнир на рамото */}
      <circle cx="150" cy="106" r="6" fill={C.steelDark} stroke={C.ink} strokeWidth="2" />

      {/* РЪКА */}
      <g className="excavator-arm">
        {/* стрела (гъше шия) */}
        <path d="M150 106 Q 178 84 200 74" stroke={C.ink} strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M150 106 Q 178 84 200 74" stroke={C.body} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M153 102 Q 178 82 198 73" stroke={C.bodyHi} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* цилиндър на стрелата */}
        <line x1="159" y1="118" x2="180" y2="98" stroke={C.steelDark} strokeWidth="7" strokeLinecap="round" />
        <line x1="176" y1="102" x2="190" y2="89" stroke={C.steel} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="159" cy="118" r="3" fill={C.ink} />

        {/* дръжка */}
        <path d="M200 74 L214 112" stroke={C.ink} strokeWidth="15" strokeLinecap="round" />
        <path d="M200 74 L214 112" stroke={C.body} strokeWidth="9" strokeLinecap="round" />
        <circle cx="200" cy="74" r="5" fill={C.steelDark} stroke={C.ink} strokeWidth="1.5" />

        {/* цилиндър на дръжката */}
        <line x1="192" y1="82" x2="208" y2="100" stroke={C.steelDark} strokeWidth="6" strokeLinecap="round" />
        <line x1="190" y1="80" x2="198" y2="89" stroke={C.steel} strokeWidth="3" strokeLinecap="round" />

        {/* КОФА (загребва) */}
        <g className="excavator-bucket">
          {/* връзки */}
          <line x1="214" y1="112" x2="206" y2="122" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
          <path
            d="M214 112 q21 1 28 21 q3 8 -3 13 l-30 -8 q-8 -2 -8 -11 l3 -14 q1 -5 10 -4 z"
            fill={C.bodyDark}
            stroke={C.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M213 124 q12 1 19 13" stroke={C.bodyHi} strokeWidth="2" fill="none" opacity="0.5" />
          {/* зъби */}
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M${210 + i * 7} 145 l3.5 7 l3 -5.5 z`} fill={C.steelDark} stroke={C.ink} strokeWidth="1" />
          ))}
        </g>
      </g>

      {/* буци пръст */}
      {!reduce && (
        <g>
          {[
            { x: 232, y: 160, dx: 22, dy: -24, r: 4 },
            { x: 236, y: 162, dx: 32, dy: -12, r: 3 },
            { x: 230, y: 164, dx: 16, dy: -32, r: 5 },
            { x: 238, y: 160, dx: 28, dy: -30, r: 3 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill="#7a5230"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 0], x: [0, 0, p.dx, p.dx + 6], y: [0, 0, p.dy, 8], scale: [0.4, 0.4, 1, 0.5] }}
              transition={{ duration: DIG, repeat: Infinity, ease: "easeOut", times: [0, 0.4, 0.6, 0.85], delay: i * 0.05 }}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
