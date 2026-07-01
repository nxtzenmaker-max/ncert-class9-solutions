interface DiagramProps {
  className?: string;
}

export function ChordDistanceDiagram({ r = 100, d = 50, label = "" }: { r?: number; d?: number; label?: string }) {
  const cx = 130, cy = 130;
  const halfChord = Math.round(Math.sqrt(r * r - d * d));
  const scale = 1.1;
  const rx = r * scale;
  const dy = d * scale;
  const hx = halfChord * scale;
  return (
    <svg viewBox="0 0 260 260" className="w-full max-w-xs mx-auto block" aria-label="Circle chord diagram">
      <circle cx={cx} cy={cy} r={rx} fill="#eff6ff" stroke="#1a56db" strokeWidth="2" />
      <line x1={cx} y1={cy} x2={cx} y2={cy - rx} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={cx + 4} y={cy - rx / 2} fontSize="11" fill="#f97316" fontWeight="bold">r</text>
      <line x1={cx - hx} y1={cy + dy} x2={cx + hx} y2={cy + dy} stroke="#1a56db" strokeWidth="2.5" />
      <line x1={cx} y1={cy} x2={cx} y2={cy + dy} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={cx + 4} y={cy + dy / 2} fontSize="11" fill="#16a34a" fontWeight="bold">d</text>
      <text x={cx - hx / 2} y={cy + dy + 14} fontSize="11" fill="#1a56db" fontWeight="bold">½ chord</text>
      <circle cx={cx} cy={cy} r="4" fill="#1a56db" />
      <text x={cx + 5} y={cy - 4} fontSize="11" fill="#1a56db" fontWeight="bold">O</text>
      <text x={cx - 8} y={cy + dy + 28} fontSize="10" fill="#6b7280">{label}</text>
      <text x={cx - 80} y={cy + dy + 28} fontSize="10" fill="#6b7280">r² = d² + (½ chord)²</text>
    </svg>
  );
}

export function InscribedAngleSemicircleDiagram() {
  const cx = 130, cy = 140, r = 100;
  const Ax = cx - r, Ay = cy;
  const Bx = cx + r, By = cy;
  const Cx = cx + 30, Cy = cy - 90;
  return (
    <svg viewBox="0 0 260 230" className="w-full max-w-xs mx-auto block" aria-label="Angle in semicircle">
      <path d={`M ${Ax} ${Ay} A ${r} ${r} 0 0 1 ${Bx} ${By}`} fill="#eff6ff" stroke="#1a56db" strokeWidth="2" />
      <line x1={Ax} y1={Ay} x2={Bx} y2={By} stroke="#1a56db" strokeWidth="2" />
      <line x1={Ax} y1={Ay} x2={Cx} y2={Cy} stroke="#f97316" strokeWidth="2" />
      <line x1={Bx} y1={By} x2={Cx} y2={Cy} stroke="#f97316" strokeWidth="2" />
      <line x1={cx} y1={cy} x2={Cx} y2={Cy} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx={cx} cy={cy} r="4" fill="#1a56db" />
      <circle cx={Cx} cy={Cy} r="4" fill="#f97316" />
      <text x={Ax - 14} y={Ay + 4} fontSize="12" fill="#1a56db" fontWeight="bold">A</text>
      <text x={Bx + 4} y={By + 4} fontSize="12" fill="#1a56db" fontWeight="bold">B</text>
      <text x={Cx - 4} y={Cy - 8} fontSize="12" fill="#f97316" fontWeight="bold">C</text>
      <text x={cx - 4} y={cy + 16} fontSize="11" fill="#1a56db">O</text>
      <text x={Cx - 32} y={Cy + 22} fontSize="11" fill="#16a34a">∠ACB = 90°</text>
    </svg>
  );
}

export function ParallelChordsDiagram() {
  const cx = 130, cy = 130, r = 105;
  const d1 = 26, d2 = 56;
  const h1 = Math.sqrt(r * r - d1 * d1);
  const h2 = Math.sqrt(r * r - d2 * d2);
  return (
    <svg viewBox="0 0 260 260" className="w-full max-w-xs mx-auto block" aria-label="Two parallel chords">
      <circle cx={cx} cy={cy} r={r} fill="#eff6ff" stroke="#1a56db" strokeWidth="2" />
      <line x1={cx - h1} y1={cy - d1} x2={cx + h1} y2={cy - d1} stroke="#1a56db" strokeWidth="2.5" />
      <line x1={cx - h2} y1={cy - d2} x2={cx + h2} y2={cy - d2} stroke="#f97316" strokeWidth="2.5" />
      <line x1={cx} y1={cy} x2={cx} y2={cy - d1} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1={cx} y1={cy} x2={cx} y2={cy - d2} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx={cx} cy={cy} r="4" fill="#1a56db" />
      <text x={cx + 5} y={cy - 4} fontSize="11" fill="#1a56db" fontWeight="bold">O</text>
      <text x={cx + 5} y={cy - d1 + 4} fontSize="10" fill="#1a56db">chord 1 (longer)</text>
      <text x={cx + 5} y={cy - d2 + 4} fontSize="10" fill="#f97316">chord 2 (shorter)</text>
      <text x={cx - 14} y={(cy - d1 + cy - d2) / 2 + 4} fontSize="10" fill="#16a34a">7 cm</text>
    </svg>
  );
}

export function CyclicQuadrilateralDiagram() {
  const cx = 130, cy = 130, r = 100;
  const pts = [
    { x: cx + r * Math.cos(Math.PI * 0.7), y: cy - r * Math.sin(Math.PI * 0.7), label: "A" },
    { x: cx + r * Math.cos(Math.PI * 0.1), y: cy - r * Math.sin(Math.PI * 0.1), label: "B" },
    { x: cx + r * Math.cos(-Math.PI * 0.4), y: cy - r * Math.sin(-Math.PI * 0.4), label: "C" },
    { x: cx + r * Math.cos(-Math.PI * 0.85), y: cy - r * Math.sin(-Math.PI * 0.85), label: "D" },
  ];
  const polygon = pts.map(p => `${p.x},${p.y}`).join(" ");
  return (
    <svg viewBox="0 0 260 260" className="w-full max-w-xs mx-auto block" aria-label="Cyclic quadrilateral">
      <circle cx={cx} cy={cy} r={r} fill="#eff6ff" stroke="#1a56db" strokeWidth="1.5" strokeDasharray="5 3" />
      <polygon points={polygon} fill="#dbeafe" stroke="#1a56db" strokeWidth="2" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill="#f97316" />
          <text x={p.x + (p.x > cx ? 6 : -14)} y={p.y + (p.y > cy ? 14 : -4)} fontSize="13" fill="#1a56db" fontWeight="bold">{p.label}</text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r="4" fill="#1a56db" />
      <text x={cx + 4} y={cy + 4} fontSize="10" fill="#1a56db">O</text>
      <text x={20} y={248} fontSize="10" fill="#6b7280">∠A + ∠C = 180°,  ∠B + ∠D = 180°</text>
    </svg>
  );
}

export function IsoscelesTriangleDiagram({ base = 10, equal = 13, height = 12 }: { base?: number; equal?: number; height?: number }) {
  const scale = 12;
  const w = base * scale;
  const h = height * scale;
  const cx = 130, bottom = 190;
  return (
    <svg viewBox="0 0 260 230" className="w-full max-w-xs mx-auto block" aria-label="Isosceles triangle">
      <polygon points={`${cx},${bottom - h} ${cx - w / 2},${bottom} ${cx + w / 2},${bottom}`} fill="#eff6ff" stroke="#1a56db" strokeWidth="2" />
      <line x1={cx} y1={bottom - h} x2={cx} y2={bottom} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={cx + 5} y={bottom - h / 2} fontSize="11" fill="#16a34a" fontWeight="bold">h = {height}</text>
      <text x={cx - 20} y={bottom + 16} fontSize="11" fill="#1a56db">base = {base}</text>
      <text x={cx - w / 2 - 4} y={(bottom - h + bottom) / 2} fontSize="11" fill="#f97316" fontWeight="bold">{equal}</text>
      <circle cx={cx} cy={bottom - h} r="3" fill="#f97316" />
      <circle cx={cx - w / 2} cy={bottom} r="3" fill="#1a56db" />
      <circle cx={cx + w / 2} cy={bottom} r="3" fill="#1a56db" />
    </svg>
  );
}

export function RightTriangleDiagram({ a = 12, b = 9, c = 15 }: { a?: number; b?: number; c?: number }) {
  const scale = 10;
  const cx = 60, cy = 180;
  return (
    <svg viewBox="0 0 260 220" className="w-full max-w-xs mx-auto block" aria-label="Right triangle">
      <polygon points={`${cx},${cy} ${cx + a * scale},${cy} ${cx + a * scale},${cy - b * scale}`} fill="#eff6ff" stroke="#1a56db" strokeWidth="2" />
      <rect x={cx + a * scale - 12} y={cy - 12} width="12" height="12" fill="none" stroke="#1a56db" strokeWidth="1.5" />
      <text x={cx + a * scale / 2} y={cy + 16} fontSize="12" fill="#1a56db" fontWeight="bold">{a} cm</text>
      <text x={cx + a * scale + 5} y={cy - b * scale / 2} fontSize="12" fill="#f97316" fontWeight="bold">{b} cm</text>
      <text x={cx + a * scale / 2 - 22} y={cy - b * scale / 2 - 10} fontSize="12" fill="#16a34a" fontWeight="bold">{c} cm</text>
    </svg>
  );
}

export function ReiaaanRoomFig13() {
  // Room: O(0,0) A(18,0) B(18,12) C(0,12)
  // Left padding=100 so bathroom door labels fit; scale=14
  const sc = 14;
  const ox = 100, oy = 36;
  const W = 18 * sc, H = 12 * sc; // 252 × 168
  const d1x = ox + 8 * sc;        // room door start
  const r1x = ox + 11.5 * sc;     // room door end
  const b2y = oy + H - 4 * sc;    // bathroom door top (B2 y=4)
  const b1y = oy + H - 1.5 * sc;  // bathroom door bottom (B1 y=1.5)
  const doorW = r1x - d1x;
  const bathH = b1y - b2y;
  return (
    <svg viewBox="0 0 480 270" className="w-full max-w-lg mx-auto block" aria-label="Fig 1.3 Reiaan's Room">
      <defs>
        <marker id="ax13" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" />
        </marker>
        <marker id="ay13" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto">
          <path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" />
        </marker>
      </defs>

      {/* Room fill */}
      <rect x={ox} y={oy} width={W} height={H} fill="#f0f9ff" stroke="none" />

      {/* Walls — drawn as 4 separate segments so gaps show */}
      {/* Top wall (C→B) */}
      <line x1={ox} y1={oy} x2={ox + W} y2={oy} stroke="#1a56db" strokeWidth="3" />
      {/* Right wall (B→A) */}
      <line x1={ox + W} y1={oy} x2={ox + W} y2={oy + H} stroke="#1a56db" strokeWidth="3" />
      {/* Bottom wall — gap for room door D1→R1 */}
      <line x1={ox} y1={oy + H} x2={d1x} y2={oy + H} stroke="#1a56db" strokeWidth="3" />
      <line x1={r1x} y1={oy + H} x2={ox + W} y2={oy + H} stroke="#1a56db" strokeWidth="3" />
      {/* Left wall — gap for bathroom door B2→B1 */}
      <line x1={ox} y1={oy} x2={ox} y2={b2y} stroke="#1a56db" strokeWidth="3" />
      <line x1={ox} y1={b1y} x2={ox} y2={oy + H} stroke="#1a56db" strokeWidth="3" />

      {/* Room door arc (swings inward = upward from bottom wall) */}
      <path d={`M ${d1x} ${oy+H} A ${doorW} ${doorW} 0 0 0 ${r1x} ${oy+H}`}
            fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5 3" />
      {/* Bathroom door arc (swings rightward from left wall) */}
      <path d={`M ${ox} ${b2y} A ${bathH} ${bathH} 0 0 1 ${ox} ${b1y}`}
            fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* Axes */}
      <line x1={ox - 12} y1={oy + H} x2={ox + W + 20} y2={oy + H} stroke="#374151" strokeWidth="1.2" markerEnd="url(#ax13)" />
      <line x1={ox} y1={oy + H + 12} x2={ox} y2={oy - 18} stroke="#374151" strokeWidth="1.2" markerEnd="url(#ay13)" />
      <text x={ox + W + 22} y={oy + H + 4} fontSize="12" fill="#374151" fontWeight="bold">x</text>
      <text x={ox + 4} y={oy - 20} fontSize="12" fill="#374151" fontWeight="bold">y</text>

      {/* Corner labels */}
      <text x={ox + 3} y={oy + H + 18} fontSize="11" fill="#1a56db" fontWeight="bold">O(0,0)</text>
      <text x={ox + W - 4} y={oy + H + 18} fontSize="11" fill="#1a56db" fontWeight="bold" textAnchor="end">A(18,0)</text>
      <text x={ox + W + 4} y={oy + 12} fontSize="11" fill="#1a56db" fontWeight="bold">B(18,12)</text>
      <text x={ox + 3} y={oy + 12} fontSize="11" fill="#1a56db" fontWeight="bold">C(0,12)</text>

      {/* Room door labels — below the wall */}
      <text x={d1x} y={oy + H + 32} fontSize="10" fill="#f97316" fontWeight="bold" textAnchor="middle">D₁(8,0)</text>
      <text x={r1x} y={oy + H + 32} fontSize="10" fill="#f97316" fontWeight="bold" textAnchor="middle">R₁(11.5,0)</text>

      {/* Bathroom door labels — left of the wall, properly inside viewBox */}
      <text x={ox - 8} y={b2y + 4} fontSize="10" fill="#16a34a" fontWeight="bold" textAnchor="end">B₂(0,4)</text>
      <text x={ox - 8} y={b1y + 4} fontSize="10" fill="#16a34a" fontWeight="bold" textAnchor="end">B₁(0,1.5)</text>

      {/* Caption */}
      <text x={ox} y={258} fontSize="10" fill="#6b7280">Fig 1.3 — Reiaan's Room floor plan (not to scale)</text>
    </svg>
  );
}
export function RAMPDiagram() {
  // scale=24: all points fit comfortably within viewBox 0 0 340 260
  // Origin at cx=160, cy=120
  const sc = 24, cx = 160, cy = 120;
  const R = { x: cx + 3*sc, y: cy };           // R(3,0)
  const A = { x: cx,        y: cy + 2*sc };    // A(0,-2)
  const M = { x: cx - 5*sc, y: cy + 2*sc };   // M(-5,-2)
  const P = { x: cx - 5*sc, y: cy - 2*sc };   // P(-5,2)
  const poly = [R,A,M,P].map(p=>`${p.x},${p.y}`).join(" ");
  const ticks = [-5,-4,-3,-2,-1,1,2,3,4];
  return (
    <svg viewBox="0 0 340 260" className="w-full max-w-lg mx-auto block" aria-label="RAMP quadrilateral">
      <defs>
        <marker id="axR" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" />
        </marker>
        <marker id="ayR" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto">
          <path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" />
        </marker>
      </defs>

      {/* Grid */}
      {ticks.map(t => (
        <g key={t}>
          <line x1={cx+t*sc} y1={16} x2={cx+t*sc} y2={244} stroke="#f3f4f6" strokeWidth="0.9" />
          <line x1={16} y1={cy+t*sc} x2={324} y2={cy+t*sc} stroke="#f3f4f6" strokeWidth="0.9" />
          <text x={cx+t*sc} y={cy+14} fontSize="9" fill="#9ca3af" textAnchor="middle">{t}</text>
          <text x={cx-6} y={cy-t*sc+4} fontSize="9" fill="#9ca3af" textAnchor="end">{t}</text>
        </g>
      ))}
      <text x={cx} y={cy+14} fontSize="9" fill="#9ca3af" textAnchor="middle">0</text>

      {/* Axes */}
      <line x1={16} y1={cy} x2={324} y2={cy} stroke="#374151" strokeWidth="1.5" markerEnd="url(#axR)" />
      <line x1={cx} y1={244} x2={cx} y2={16} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ayR)" />
      <text x={326} y={cy+4} fontSize="12" fill="#374151" fontWeight="bold">x</text>
      <text x={cx+4} y={14} fontSize="12" fill="#374151" fontWeight="bold">y</text>

      {/* Quadrilateral */}
      <polygon points={poly} fill="#dbeafe" stroke="#1a56db" strokeWidth="2.5" fillOpacity="0.7" />

      {/* Right angle mark at M */}
      <rect x={M.x} y={M.y-10} width="10" height="10" fill="none" stroke="#1a56db" strokeWidth="1.5" />

      {/* Points with labels */}
      {[
        {p:R, label:"R(3, 0)",   ax: 8,  ay:-10},
        {p:A, label:"A(0, −2)",  ax: 6,  ay: 16},
        {p:M, label:"M(−5, −2)", ax:-84, ay: 16},
        {p:P, label:"P(−5, 2)",  ax:-78, ay:-8},
      ].map(({p, label, ax, ay}) => (
        <g key={label}>
          <circle cx={p.x} cy={p.y} r="5" fill="#f97316" />
          <text x={p.x+ax} y={p.y+ay} fontSize="11" fill="#1a56db" fontWeight="bold">{label}</text>
        </g>
      ))}

      <text x={16} y={256} fontSize="10" fill="#6b7280">RAMP — AM ∥ x-axis, MP ∥ y-axis, ∠M = 90°</text>
    </svg>
  );
}

export function ZTriangleDiagram() {
  // scale=22, origin at cx=62 cy=72 — Z goes down 6 units = y+132=204, label at 216 fits in 280
  const sc = 22, cx = 62, cy = 72;
  const N = { x: cx,       y: cy };          // N(0,0)
  const I = { x: cx+5*sc,  y: cy };          // I(5,0)
  const Z = { x: cx+5*sc,  y: cy+6*sc };     // Z(5,-6)
  const xTicks = [1,2,3,4,5,6];
  const yTicks = [-1,-2,-3,-4,-5,-6];
  return (
    <svg viewBox="0 0 280 280" className="w-full max-w-md mx-auto block" aria-label="Right triangle IZN">
      <defs>
        <marker id="axZ" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" />
        </marker>
        <marker id="ayZ" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto">
          <path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" />
        </marker>
      </defs>

      {/* Grid */}
      {xTicks.map(t => (
        <line key={`vg${t}`} x1={cx+t*sc} y1={14} x2={cx+t*sc} y2={260} stroke="#f3f4f6" strokeWidth="0.9" />
      ))}
      {yTicks.map(t => (
        <line key={`hg${t}`} x1={14} y1={cy-t*sc} x2={264} y2={cy-t*sc} stroke="#f3f4f6" strokeWidth="0.9" />
      ))}

      {/* Axes */}
      <line x1={14} y1={cy} x2={264} y2={cy} stroke="#374151" strokeWidth="1.5" markerEnd="url(#axZ)" />
      <line x1={cx} y1={260} x2={cx} y2={14} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ayZ)" />
      <text x={266} y={cy+4} fontSize="12" fill="#374151" fontWeight="bold">x</text>
      <text x={cx+4} y={12} fontSize="12" fill="#374151" fontWeight="bold">y</text>
      <text x={cx-4} y={cy+14} fontSize="9" fill="#374151" textAnchor="end">0</text>

      {/* Tick labels */}
      {xTicks.map(t => (
        <text key={t} x={cx+t*sc} y={cy+14} fontSize="9" fill="#9ca3af" textAnchor="middle">{t}</text>
      ))}
      {yTicks.map(t => (
        <text key={t} x={cx-4} y={cy-t*sc+4} fontSize="9" fill="#9ca3af" textAnchor="end">{t}</text>
      ))}

      {/* Triangle fill */}
      <polygon points={`${N.x},${N.y} ${I.x},${I.y} ${Z.x},${Z.y}`} fill="#dbeafe" stroke="#1a56db" strokeWidth="2" fillOpacity="0.7" />

      {/* Right angle box at I */}
      <rect x={I.x-11} y={I.y} width="11" height="11" fill="none" stroke="#1a56db" strokeWidth="1.5" />

      {/* Side length labels */}
      <text x={(N.x+I.x)/2} y={N.y-8} fontSize="11" fill="#16a34a" fontWeight="bold" textAnchor="middle">IN = 5</text>
      <text x={I.x+6} y={(I.y+Z.y)/2+4} fontSize="11" fill="#f97316" fontWeight="bold">IZ = 6</text>
      <text x={(N.x+Z.x)/2-46} y={(N.y+Z.y)/2+4} fontSize="11" fill="#1a56db" fontWeight="bold">ZN = √61</text>

      {/* Point dots + labels */}
      <circle cx={N.x} cy={N.y} r="5" fill="#1a56db" />
      <text x={N.x-6} y={N.y-10} fontSize="11" fill="#1a56db" fontWeight="bold" textAnchor="end">N(0, 0)</text>

      <circle cx={I.x} cy={I.y} r="5" fill="#16a34a" />
      <text x={I.x+8} y={I.y-8} fontSize="11" fill="#16a34a" fontWeight="bold">I(5, 0)</text>

      <circle cx={Z.x} cy={Z.y} r="5" fill="#f97316" />
      <text x={Z.x+8} y={Z.y+4} fontSize="11" fill="#f97316" fontWeight="bold">Z(5, −6)</text>
    </svg>
  );
}

export function CoordinatePlaneDiagram() {
  const cx = 130, cy = 130, sz = 110;
  const ticks = [-4, -3, -2, -1, 1, 2, 3, 4, 5];
  const unit = sz / 5;
  return (
    <svg viewBox="0 0 260 260" className="w-full max-w-xs mx-auto block" aria-label="Coordinate plane">
      <line x1={cx - sz} y1={cy} x2={cx + sz} y2={cy} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1={cx} y1={cy + sz} x2={cx} y2={cy - sz} stroke="#374151" strokeWidth="1.5" markerEnd="url(#arr2)" />
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#374151" />
        </marker>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#374151" />
        </marker>
      </defs>
      {ticks.map(t => (
        <g key={t}>
          <line x1={cx + t * unit} y1={cy - 4} x2={cx + t * unit} y2={cy + 4} stroke="#9ca3af" strokeWidth="1" />
          <line x1={cx - 4} y1={cy - t * unit} x2={cx + 4} y2={cy - t * unit} stroke="#9ca3af" strokeWidth="1" />
          <text x={cx + t * unit - 4} y={cy + 16} fontSize="9" fill="#6b7280">{t}</text>
          <text x={cx - 16} y={cy - t * unit + 4} fontSize="9" fill="#6b7280">{t}</text>
        </g>
      ))}
      <circle cx={cx + 5 * unit} cy={cy + 6 * unit} r="5" fill="#f97316" />
      <text x={cx + 5 * unit + 6} y={cy + 6 * unit + 4} fontSize="11" fill="#f97316" fontWeight="bold">Z(5,–6)</text>
      <text x={cx + sz - 10} y={cy - 8} fontSize="11" fill="#374151">x</text>
      <text x={cx + 6} y={cy - sz + 14} fontSize="11" fill="#374151">y</text>
      <text x={cx + 4} y={cy + 14} fontSize="9" fill="#374151">O</text>
    </svg>
  );
}

export function MidpointDiagram() {
  return (
    <svg viewBox="0 0 260 80" className="w-full max-w-xs mx-auto block" aria-label="Midpoint of segment">
      <line x1="30" y1="40" x2="230" y2="40" stroke="#1a56db" strokeWidth="2" />
      <circle cx="30" cy="40" r="5" fill="#1a56db" />
      <circle cx="130" cy="40" r="5" fill="#16a34a" />
      <circle cx="230" cy="40" r="5" fill="#1a56db" />
      <text x="20" y="60" fontSize="11" fill="#1a56db" fontWeight="bold">A(x₁,y₁)</text>
      <text x="110" y="60" fontSize="11" fill="#16a34a" fontWeight="bold">M(mid)</text>
      <text x="210" y="60" fontSize="11" fill="#1a56db" fontWeight="bold">B(x₂,y₂)</text>
      <text x="70" y="30" fontSize="10" fill="#6b7280">M = ((x₁+x₂)/2, (y₁+y₂)/2)</text>
    </svg>
  );
}
export function Fig12AxesDiagram() {
  const sc = 18, cx = 150, cy = 130;
  const pts = [
    { x: 0, y: 0, label: "O(0, 0)", ax: 6, ay: 16, color: "#374151" },
    { x: 4.5, y: 0, label: "B(4.5, 0)", ax: -8, ay: 16, color: "#1a56db" },
    { x: -2.9, y: 0, label: "E(−2.9, 0)", ax: -10, ay: -8, color: "#1a56db" },
    { x: 0, y: 4, label: "H(0, 4)", ax: 6, ay: -2, color: "#16a34a" },
    { x: 0, y: -4.5, label: "G(0, −4.5)", ax: 6, ay: 4, color: "#f97316" },
  ];
  const xticks = [-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7];
  const yticks = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 300 260" className="w-full max-w-sm mx-auto block" aria-label="Fig 1.2 coordinate plane structure">
      <defs>
        <marker id="ax12" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" /></marker>
        <marker id="ay12" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" /></marker>
      </defs>
      {xticks.map(t => <line key={`xg${t}`} x1={cx + t * sc} y1={14} x2={cx + t * sc} y2={246} stroke="#f3f4f6" strokeWidth="0.8" />)}
      {yticks.map(t => <line key={`yg${t}`} x1={14} y1={cy - t * sc} x2={286} y2={cy - t * sc} stroke="#f3f4f6" strokeWidth="0.8" />)}
      <line x1={14} y1={cy} x2={286} y2={cy} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ax12)" />
      <line x1={cx} y1={246} x2={cx} y2={14} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ay12)" />
      <text x={288} y={cy + 4} fontSize="11" fill="#374151" fontWeight="bold">x</text>
      <text x={cx + 4} y={12} fontSize="11" fill="#374151" fontWeight="bold">y</text>
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={cx + p.x * sc} cy={cy - p.y * sc} r="4.5" fill={p.color} />
          <text x={cx + p.x * sc + p.ax} y={cy - p.y * sc + p.ay} fontSize="10.5" fill={p.color} fontWeight="bold">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

export function Fig14QuadrantsDiagram() {
  const sc = 20, cx = 140, cy = 140;
  const pts = [
    { x: 3, y: -5, label: "S(3, −5)", ax: 6, ay: 14, color: "#f97316" },
    { x: -5, y: 3, label: "Q(−5, 3)", ax: -10, ay: -8, color: "#1a56db" },
    { x: 4, y: 2, label: "P(4, 2)", ax: 6, ay: -6, color: "#16a34a" },
    { x: -4, y: -2, label: "R(−4, −2)", ax: -16, ay: 16, color: "#16a34a" },
  ];
  const ticks = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6];
  return (
    <svg viewBox="0 0 280 280" className="w-full max-w-sm mx-auto block" aria-label="Fig 1.4 four quadrants">
      <defs>
        <marker id="ax14" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" /></marker>
        <marker id="ay14" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" /></marker>
      </defs>
      <rect x={cx} y={14} width={126} height={cy - 14} fill="#eff6ff" />
      <rect x={14} y={14} width={cx - 14} height={cy - 14} fill="#fef3e7" />
      <rect x={14} y={cy} width={cx - 14} height={252 - cy} fill="#eff6ff" />
      <rect x={cx} y={cy} width={126} height={252 - cy} fill="#fef3e7" />
      <text x={cx + 50} y={34} fontSize="11" fill="#9ca3af" fontWeight="bold">Quadrant I</text>
      <text x={30} y={34} fontSize="10" fill="#9ca3af" fontWeight="bold">Quadrant II</text>
      <text x={26} y={244} fontSize="10" fill="#9ca3af" fontWeight="bold">Quadrant III</text>
      <text x={cx + 38} y={244} fontSize="10" fill="#9ca3af" fontWeight="bold">Quadrant IV</text>
      {ticks.map(t => (
        <g key={t}>
          <line x1={cx + t * sc} y1={14} x2={cx + t * sc} y2={252} stroke="#e5e7eb" strokeWidth="0.7" />
          <line x1={14} y1={cy - t * sc} x2={266} y2={cy - t * sc} stroke="#e5e7eb" strokeWidth="0.7" />
        </g>
      ))}
      <line x1={14} y1={cy} x2={266} y2={cy} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ax14)" />
      <line x1={cx} y1={252} x2={cx} y2={14} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ay14)" />
      <text x={268} y={cy + 4} fontSize="11" fill="#374151" fontWeight="bold">x</text>
      <text x={cx + 4} y={12} fontSize="11" fill="#374151" fontWeight="bold">y</text>
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={cx + p.x * sc} cy={cy - p.y * sc} r="4.5" fill={p.color} />
          <text x={cx + p.x * sc + p.ax} y={cy - p.y * sc + p.ay} fontSize="10.5" fill={p.color} fontWeight="bold">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

export function Fig67TriangleDiagram() {
  const sc = 24, ox = 20, baseline = 190;
  const px = (x: number) => ox + x * sc;
  const py = (y: number) => baseline - y * sc;
  const A = { x: 3, y: 4 }, D = { x: 7, y: 1 }, M = { x: 9, y: 6 }, C = { x: 7, y: 4 };
  return (
    <svg viewBox="0 0 280 220" className="w-full max-w-md mx-auto block" aria-label="Fig 1.6-1.7 triangle ADM with helper point C">
      <defs>
        <marker id="ax67" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" /></marker>
        <marker id="ay67" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" /></marker>
      </defs>
      {[1,2,3,4,5,6,7,8,9].map(t => <line key={`vg${t}`} x1={px(t)} y1={14} x2={px(t)} y2={baseline} stroke="#f3f4f6" strokeWidth="0.8" />)}
      {[1,2,3,4,5,6].map(t => <line key={`hg${t}`} x1={px(0)} y1={py(t)} x2={260} y2={py(t)} stroke="#f3f4f6" strokeWidth="0.8" />)}
      <line x1={px(0)} y1={baseline} x2={260} y2={baseline} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ax67)" />
      <line x1={px(0)} y1={baseline} x2={px(0)} y2={14} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ay67)" />
      <text x={262} y={baseline + 4} fontSize="11" fill="#374151" fontWeight="bold">x</text>
      <text x={px(0) + 4} y={12} fontSize="11" fill="#374151" fontWeight="bold">y</text>
      <polygon points={`${px(A.x)},${py(A.y)} ${px(D.x)},${py(D.y)} ${px(M.x)},${py(M.y)}`} fill="#dbeafe" stroke="#1a56db" strokeWidth="2.5" fillOpacity="0.6" />
      <line x1={px(A.x)} y1={py(A.y)} x2={px(C.x)} y2={py(C.y)} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1={px(C.x)} y1={py(C.y)} x2={px(D.x)} y2={py(D.y)} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x={px(C.x) - 10} y={py(C.y)} width="10" height="10" fill="none" stroke="#374151" strokeWidth="1.2" />
      <text x={(px(A.x) + px(C.x)) / 2 - 4} y={py(A.y) - 6} fontSize="10.5" fill="#16a34a" fontWeight="bold">AC = 3</text>
      <text x={px(C.x) + 4} y={(py(C.y) + py(D.y)) / 2} fontSize="10.5" fill="#f97316" fontWeight="bold">CD = 4</text>
      <text x={(px(A.x) + px(D.x)) / 2 - 22} y={(py(A.y) + py(D.y)) / 2 - 6} fontSize="10.5" fill="#1a56db" fontWeight="bold">AD = 5</text>
      <text x={(px(D.x) + px(M.x)) / 2 + 4} y={(py(D.y) + py(M.y)) / 2} fontSize="10.5" fill="#9333ea" fontWeight="bold">DM = √29</text>
      <text x={(px(M.x) + px(A.x)) / 2 - 50} y={(py(M.y) + py(A.y)) / 2 - 4} fontSize="10.5" fill="#be185d" fontWeight="bold">MA = √40</text>
      <circle cx={px(A.x)} cy={py(A.y)} r="4.5" fill="#1a56db" /><text x={px(A.x) - 26} y={py(A.y) + 4} fontSize="11" fill="#1a56db" fontWeight="bold">A(3,4)</text>
      <circle cx={px(D.x)} cy={py(D.y)} r="4.5" fill="#1a56db" /><text x={px(D.x) - 8} y={py(D.y) + 18} fontSize="11" fill="#1a56db" fontWeight="bold">D(7,1)</text>
      <circle cx={px(M.x)} cy={py(M.y)} r="4.5" fill="#1a56db" /><text x={px(M.x) + 6} y={py(M.y) - 6} fontSize="11" fill="#1a56db" fontWeight="bold">M(9,6)</text>
      <circle cx={px(C.x)} cy={py(C.y)} r="3.5" fill="#374151" /><text x={px(C.x) + 6} y={py(C.y) + 4} fontSize="10" fill="#374151">C(7,4)</text>
    </svg>
  );
}

export function Fig19ReflectionDiagram() {
  const sc = 14, cx = 150, baseline = 180;
  const pxR = (x: number) => cx + x * sc;
  const py = (y: number) => baseline - y * sc;
  const A = { x: 3, y: 4 }, D = { x: 7, y: 1 }, M = { x: 9, y: 6 };
  const Ap = { x: -3, y: 4 }, Dp = { x: -7, y: 1 }, Mp = { x: -9, y: 6 };
  return (
    <svg viewBox="0 0 300 210" className="w-full max-w-md mx-auto block" aria-label="Fig 1.9 reflection in y-axis">
      <defs>
        <marker id="ax19" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" /></marker>
        <marker id="ay19" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" /></marker>
      </defs>
      <line x1={10} y1={baseline} x2={290} y2={baseline} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ax19)" />
      <line x1={cx} y1={195} x2={cx} y2={10} stroke="#374151" strokeWidth="1.5" markerEnd="url(#ay19)" />
      <text x={292} y={baseline + 4} fontSize="11" fill="#374151" fontWeight="bold">x</text>
      <text x={cx + 4} y={10} fontSize="11" fill="#374151" fontWeight="bold">y</text>
      <polygon points={`${pxR(A.x)},${py(A.y)} ${pxR(D.x)},${py(D.y)} ${pxR(M.x)},${py(M.y)}`} fill="#dbeafe" stroke="#1a56db" strokeWidth="2.2" fillOpacity="0.65" />
      <polygon points={`${pxR(Ap.x)},${py(Ap.y)} ${pxR(Dp.x)},${py(Dp.y)} ${pxR(Mp.x)},${py(Mp.y)}`} fill="#fef3e7" stroke="#f97316" strokeWidth="2.2" fillOpacity="0.65" />
      {[[A, Ap], [D, Dp], [M, Mp]].map(([p1, p2], i) => (
        <line key={i} x1={pxR(p1.x)} y1={py(p1.y)} x2={pxR(p2.x)} y2={py(p2.y)} stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      <circle cx={pxR(A.x)} cy={py(A.y)} r="4" fill="#1a56db" /><text x={pxR(A.x) + 6} y={py(A.y) - 4} fontSize="10" fill="#1a56db" fontWeight="bold">A(3,4)</text>
      <circle cx={pxR(D.x)} cy={py(D.y)} r="4" fill="#1a56db" /><text x={pxR(D.x) + 6} y={py(D.y) + 14} fontSize="10" fill="#1a56db" fontWeight="bold">D(7,1)</text>
      <circle cx={pxR(M.x)} cy={py(M.y)} r="4" fill="#1a56db" /><text x={pxR(M.x) + 6} y={py(M.y) - 4} fontSize="10" fill="#1a56db" fontWeight="bold">M(9,6)</text>
      <circle cx={pxR(Ap.x)} cy={py(Ap.y)} r="4" fill="#f97316" /><text x={pxR(Ap.x) - 50} y={py(Ap.y) - 4} fontSize="10" fill="#f97316" fontWeight="bold">A'(−3,4)</text>
      <circle cx={pxR(Dp.x)} cy={py(Dp.y)} r="4" fill="#f97316" /><text x={pxR(Dp.x) - 54} y={py(Dp.y) + 14} fontSize="10" fill="#f97316" fontWeight="bold">D'(−7,1)</text>
      <circle cx={pxR(Mp.x)} cy={py(Mp.y)} r="4" fill="#f97316" /><text x={pxR(Mp.x) - 54} y={py(Mp.y) - 4} fontSize="10" fill="#f97316" fontWeight="bold">M'(−9,6)</text>
      <text x={16} y={204} fontSize="9.5" fill="#6b7280">Blue = original ΔADM   Orange = reflection ΔA'D'M' in y-axis</text>
    </svg>
  );
}

export function Fig15FullPlanDiagram() {
  const sc = 16, ox = 30, oyTop = 20, baseline = 180;
  const px = (x: number) => ox + (x + 6) * sc;
  const py = (y: number) => oyTop + (10 - y) * sc;
  return (
    <svg viewBox="0 0 340 210" className="w-full max-w-xl mx-auto block" aria-label="Fig 1.5 full room and bathroom plan">
      <defs>
        <marker id="ax15f" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151" /></marker>
        <marker id="ay15f" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#374151" /></marker>
      </defs>

      {/* Bedroom fill */}
      <rect x={px(0)} y={py(10)} width={px(12) - px(0)} height={py(0) - py(10)} fill="#fdf2e0" stroke="#d97706" strokeWidth="2.5" />
      {/* Bathroom fill */}
      <rect x={px(-6)} y={py(9)} width={px(0) - px(-6)} height={py(0) - py(9)} fill="#dbeafe" stroke="#1a56db" strokeWidth="2.5" />

      {/* Showering area SHWR */}
      <rect x={px(-6)} y={py(9)} width={px(-3) - px(-6)} height={py(6) - py(9)} fill="#bfdbfe" stroke="#1a56db" strokeWidth="1.5" />
      {/* Washbasin */}
      <rect x={px(-6)} y={py(2)} width={px(-3) - px(-6)} height={py(0) - py(2)} fill="#a7f3d0" stroke="#047857" strokeWidth="1.2" />
      {/* Toilet */}
      <rect x={px(-3)} y={py(3)} width={px(-1) - px(-3)} height={py(0) - py(3)} fill="#fde68a" stroke="#b45309" strokeWidth="1.2" />

      {/* Bed */}
      <rect x={px(0)} y={py(8)} width={px(6) - px(0)} height={py(5) - py(8)} fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" />
      {/* Wardrobe */}
      <rect x={px(3)} y={py(2)} width={px(7) - px(3)} height={py(0) - py(2)} fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" />
      {/* Study table (8,7)-(11,9) */}
      <rect x={px(8)} y={py(9)} width={px(11) - px(8)} height={py(7) - py(9)} fill="#fef08a" stroke="#a16207" strokeWidth="1.5" />

      {/* Axes */}
      <line x1={10} y1={baseline} x2={328} y2={baseline} stroke="#374151" strokeWidth="1.4" markerEnd="url(#ax15f)" />
      <line x1={px(0)} y1={195} x2={px(0)} y2={10} stroke="#374151" strokeWidth="1.4" markerEnd="url(#ay15f)" />
      <text x={330} y={baseline + 4} fontSize="10" fill="#374151" fontWeight="bold">x</text>
      <text x={px(0) + 4} y={10} fontSize="10" fill="#374151" fontWeight="bold">y</text>

      {/* tick labels */}
      {[-6,-4,-2,2,4,6,8,10,12].map(t => <text key={`xt${t}`} x={px(t)} y={baseline + 12} fontSize="7.5" fill="#9ca3af" textAnchor="middle">{t}</text>)}
      {[2,4,6,8,10].map(t => <text key={`yt${t}`} x={px(0) - 8} y={py(t) + 3} fontSize="7.5" fill="#9ca3af" textAnchor="end">{t}</text>)}

      {/* Labels for key points */}
      {[
        { x: 0, y: 0, l: "O(0,0)", c: "#374151", ax: 4, ay: 14 },
        { x: 12, y: 0, l: "A(12,0)", c: "#d97706", ax: -6, ay: 14 },
        { x: 12, y: 10, l: "B(12,10)", c: "#d97706", ax: -10, ay: -4 },
        { x: 0, y: 10, l: "C(0,10)", c: "#d97706", ax: 2, ay: -4 },
        { x: -6, y: 0, l: "P", c: "#1a56db", ax: -8, ay: 12 },
        { x: -6, y: 9, l: "R", c: "#1a56db", ax: -8, ay: -3 },
        { x: 0, y: 9, l: "F", c: "#1a56db", ax: 3, ay: -3 },
        { x: -6, y: 6, l: "S", c: "#1a56db", ax: -8, ay: 3 },
        { x: -3, y: 6, l: "H", c: "#1a56db", ax: 2, ay: 10 },
        { x: -3, y: 9, l: "W", c: "#1a56db", ax: -4, ay: -4 },
        { x: 0, y: 5, l: "S₁", c: "#4338ca", ax: 2, ay: 3 },
        { x: 6, y: 5, l: "S₂", c: "#4338ca", ax: 2, ay: 3 },
        { x: 6, y: 8, l: "S₃", c: "#4338ca", ax: 2, ay: -3 },
        { x: 0, y: 8, l: "S₄", c: "#4338ca", ax: -10, ay: -3 },
        { x: 0, y: 4, l: "B₂", c: "#16a34a", ax: 3, ay: 2 },
        { x: 0, y: 1.5, l: "B₁", c: "#16a34a", ax: 3, ay: 2 },
        { x: 3, y: 0, l: "W₁", c: "#c2410c", ax: -2, ay: 12 },
        { x: 7, y: 0, l: "W₂", c: "#c2410c", ax: -2, ay: 12 },
        { x: 7, y: 2, l: "W₃", c: "#c2410c", ax: 2, ay: -3 },
        { x: 3, y: 2, l: "W₄", c: "#c2410c", ax: -2, ay: -3 },
        { x: 8, y: 0, l: "D₁", c: "#f97316", ax: -2, ay: 12 },
        { x: 11.5, y: 0, l: "R₁(11.5,0)", c: "#f97316", ax: -10, ay: 12 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={px(p.x)} cy={py(p.y)} r="3" fill={p.c} />
          <text x={px(p.x) + p.ax} y={py(p.y) + p.ay} fontSize="8.5" fill={p.c} fontWeight="bold">{p.l}</text>
        </g>
      ))}
      <text x={px(1.5)} y={py(6.5)} fontSize="9" fill="#4338ca" fontWeight="bold">Bed</text>
      <text x={px(4)} y={py(1)} fontSize="8" fill="#c2410c" fontWeight="bold">Wardrobe</text>
      <text x={px(-5.7)} y={py(7.5)} fontSize="7" fill="#1a56db" fontWeight="bold">Shower</text>
      <text x={px(-5.7)} y={py(1)} fontSize="7" fill="#047857" fontWeight="bold">Basin</text>
      <text x={px(-2.9)} y={py(1.5)} fontSize="7" fill="#b45309" fontWeight="bold">Toilet</text>
    </svg>
  );
}
const diagramMap: Record<string, React.FC> = {
  "chord-distance": () => <ChordDistanceDiagram r={90} d={50} />,
  "chord-distance-2": () => <ChordDistanceDiagram r={90} d={30} />,
  "chord-radius-13": () => <ChordDistanceDiagram r={90} d={35} label="r=13, d=5, chord=24" />,
  "chord-r15-d9": () => <ChordDistanceDiagram r={90} d={55} label="r=15, d=9, chord=24" />,
  "parallel-chords": () => <ParallelChordsDiagram />,
  "inscribed-semicircle": () => <InscribedAngleSemicircleDiagram />,
  "cyclic-quad": () => <CyclicQuadrilateralDiagram />,
  "isosceles-40-15": () => <IsoscelesTriangleDiagram base={10} equal={15} height={Math.round(Math.sqrt(15 * 15 - 5 * 5))} />,
  "isosceles-base10": () => <IsoscelesTriangleDiagram base={10} equal={13} height={12} />,
  "right-triangle-12-9-15": () => <RightTriangleDiagram a={12} b={9} c={15} />,
  "coordinate-z": () => <CoordinatePlaneDiagram />,
  "midpoint": () => <MidpointDiagram />,
  "ch1-fig12-axes": () => <Fig12AxesDiagram />,
  "ch1-fig13-room": () => <ReiaaanRoomFig13 />,
  "ch1-fig14-quadrants": () => <Fig14QuadrantsDiagram />,
  "ch1-fig15-fullplan": () => <Fig15FullPlanDiagram />,
  "ch1-fig67-triangle": () => <Fig67TriangleDiagram />,
  "ch1-fig19-reflection": () => <Fig19ReflectionDiagram />,
  "ch1-ramp": () => <RAMPDiagram />,
  "ch1-z-triangle": () => <ZTriangleDiagram />,
};

export default function DiagramRenderer({ id }: { id: string }) {
  const Component = diagramMap[id];
  if (!Component) return null;
  return (
    <div className="my-4 p-3 bg-blue-50 rounded-xl border border-blue-100 flex flex-col items-center">
      <Component />
    </div>
  );
}
