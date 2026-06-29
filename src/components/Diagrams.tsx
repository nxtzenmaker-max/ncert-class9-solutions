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
