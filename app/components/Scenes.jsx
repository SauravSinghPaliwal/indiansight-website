// Night-sky artwork drawn in SVG, so the site needs no photography.
// Everything is generated from a seeded PRNG: identical on every render.
// To use a real photo instead, replace a <…Scene /> with
// <img src="/your-image.jpg" alt="" className="scene object-cover" />.

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n) => Number(n.toFixed(1));
const GOLDS = ['#FFE7B0', '#FFD27A', '#F8B432', '#F47A35'];

function Stars({ seed, count, width, height, top = 0 }) {
  const r = rng(seed);
  const dots = Array.from({ length: count }, () => {
    const size = r();
    return {
      x: f(r() * width),
      y: f(top + r() * height),
      r: f(size > 0.96 ? 2.2 : size > 0.8 ? 1.4 : 0.8),
      o: f(0.35 + r() * 0.65),
      tw: r(),
    };
  });
  return (
    <g fill="#fff">
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          opacity={d.o}
          className={d.tw > 0.9 ? 'twinkle-a' : d.tw > 0.8 ? 'twinkle-b' : undefined}
        />
      ))}
    </g>
  );
}

// Sparks rising in a cone: narrow at (cx, bottom), widening toward `top`.
function Sparks({ seed, count, cx, top, bottom, spread, className }) {
  const r = rng(seed);
  const dots = Array.from({ length: count }, () => {
    const t = Math.pow(r(), 1.6); // bias toward the base
    const y = bottom - t * (bottom - top);
    const half = 26 + t * spread;
    const x = cx + (r() + r() - 1) * half;
    return {
      x: f(x),
      y: f(y),
      r: f(0.8 + r() * (2.6 - t * 1.2)),
      o: f(0.45 + r() * 0.55),
      c: GOLDS[Math.floor(r() * GOLDS.length)],
    };
  });
  return (
    <g className={className}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={d.o} />
      ))}
    </g>
  );
}

// A small standing figure; origin is at the feet.
function Figure({ x, y, scale = 1, fill = '#020308' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}>
      <circle cx="0" cy="-62" r="7" />
      <path d="M-9 -52 Q0 -58 9 -52 L7 -24 L-7 -24 Z" />
      <path d="M-7 -24 L-8 0 L-2 0 L0 -18 L2 0 L8 0 L7 -24 Z" />
    </g>
  );
}

// A soft blob: a radial gradient that fades to nothing. Cheaper and smoother
// than an SVG blur filter. `core` is how far out it stays fully opaque (0–1).
function Glow({ id, color, cx, cy, rx, ry, opacity = 1, core = 0 }) {
  return (
    <>
      <radialGradient id={id}>
        <stop offset={core} stopColor={color} stopOpacity="1" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </radialGradient>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id})`} opacity={opacity} />
    </>
  );
}

// ── Hero: storm cloud, a plume of gold sparks, a lone figure on a hill ───────
export function HeroScene() {
  return (
    <svg className="scene" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050915" />
          <stop offset="0.45" stopColor="#0C1F4D" />
          <stop offset="0.82" stopColor="#173B7C" />
          <stop offset="1" stopColor="#0E2452" />
        </linearGradient>
        <radialGradient id="hero-plume" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFD27A" stopOpacity="0.85" />
          <stop offset="0.35" stopColor="#F8B432" stopOpacity="0.4" />
          <stop offset="1" stopColor="#F47A35" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1000" fill="url(#hero-sky)" />
      <Stars seed={11} count={260} width={1600} height={820} />

      {/* Plume glow, drawn before the cloud so the cloud swallows its top */}
      <ellipse cx="800" cy="560" rx="360" ry="360" fill="url(#hero-plume)" />

      {/* Cloud mass */}
      <Glow id="hero-c1" color="#03040A" cx={800} cy={60} rx={1500} ry={400} core={0.55} />
      <Glow id="hero-c2" color="#03040A" cx={250} cy={320} rx={460} ry={190} core={0.35} />
      <Glow id="hero-c3" color="#04060D" cx={640} cy={370} rx={380} ry={170} core={0.35} />
      <Glow id="hero-c4" color="#03040A" cx={1040} cy={360} rx={430} ry={185} core={0.35} />
      <Glow id="hero-c5" color="#04060D" cx={1430} cy={310} rx={430} ry={200} core={0.35} />

      {/* Sparks */}
      <Sparks seed={21} count={170} cx={800} top={300} bottom={760} spread={300} className="sparks-a" />
      <Sparks seed={22} count={150} cx={800} top={330} bottom={770} spread={240} className="sparks-b" />
      <Sparks seed={23} count={40} cx={380} top={290} bottom={380} spread={90} className="sparks-b" />
      <Sparks seed={24} count={30} cx={1250} top={280} bottom={350} spread={110} className="sparks-a" />
      <Glow id="hero-core" color="#FFE7B0" cx={800} cy={700} rx={120} ry={120} opacity={0.7} />

      {/* Hill + figure */}
      <Glow id="hero-rim" color="#F8B432" cx={800} cy={810} rx={560} ry={70} opacity={0.5} />
      <path d="M0 1000 L0 880 C 280 820, 540 850, 800 790 C 1060 850, 1320 820, 1600 870 L1600 1000 Z" fill="#020308" />
      <Figure x={800} y={792} scale={1.5} />

      <rect y="780" width="1600" height="220" fill="url(#hero-fade)" />
    </svg>
  );
}

// ── Valley: two slopes, a galaxy between them, a lit field, a walker ─────────
export function ValleyScene() {
  const r = rng(31);
  const flecks = Array.from({ length: 340 }, () => {
    const depth = Math.pow(r(), 0.8);
    return {
      x: f(r() * 1600),
      y: f(540 + depth * 260),
      r: f(0.7 + depth * 2.4 * r()),
      o: f(0.3 + r() * 0.7),
      c: r() > 0.88 ? '#7CC4FF' : GOLDS[Math.floor(r() * GOLDS.length)],
    };
  });
  return (
    <svg className="scene" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="valley-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#040816" />
          <stop offset="1" stopColor="#0B2050" />
        </linearGradient>
        <linearGradient id="valley-slope" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#04060B" />
          <stop offset="1" stopColor="#1C150B" />
        </linearGradient>
        <linearGradient id="valley-field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8A5E14" />
          <stop offset="0.35" stopColor="#3B290B" />
          <stop offset="1" stopColor="#050403" />
        </linearGradient>
        <linearGradient id="valley-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <rect width="1600" height="800" fill="url(#valley-sky)" />

      {/* Galaxy */}
      <Glow id="valley-g1" color="#2F7FD6" cx={800} cy={250} rx={560} ry={360} opacity={0.75} />
      <Glow id="valley-g2" color="#8FD3FF" cx={760} cy={210} rx={300} ry={190} opacity={0.6} />
      <Glow id="valley-g3" color="#F8B432" cx={900} cy={330} rx={220} ry={130} opacity={0.25} />
      <Stars seed={32} count={150} width={900} height={520} top={0} />
      <g transform="translate(350 0)">
        <Stars seed={33} count={170} width={900} height={500} top={20} />
      </g>

      {/* Field */}
      <rect y="535" width="1600" height="265" fill="url(#valley-field)" />
      <Glow id="valley-path" color="#FFD27A" cx={800} cy={560} rx={460} ry={50} opacity={0.7} />
      <path d="M800 560 L690 800 L910 800 Z" fill="#FFD27A" opacity="0.1" />
      {flecks.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={d.o} />
      ))}

      {/* Slopes */}
      <path d="M0 0 L0 640 C 260 610, 520 590, 720 548 C 560 430, 330 250, 150 0 Z" fill="url(#valley-slope)" />
      <path d="M1600 0 L1600 640 C 1340 610, 1080 590, 880 548 C 1040 430, 1270 250, 1450 0 Z" fill="url(#valley-slope)" />

      {/* Walker */}
      <ellipse cx="800" cy="612" rx="26" ry="5" fill="#000" opacity="0.6" />
      <Figure x={800} y={610} scale={1.25} fill="#05070C" />

      <rect y="420" width="1600" height="380" fill="url(#valley-fade)" />
    </svg>
  );
}

// ── Constellation: a gold network of decisions against the dark ─────────────
const NODES = [
  [400, 150], [210, 290], [585, 270], [330, 420], [520, 500],
  [160, 560], [660, 600], [400, 660], [270, 250], [610, 430],
];
const EDGES = [
  [0, 8], [8, 1], [0, 2], [8, 3], [2, 3], [2, 9], [3, 4], [9, 4],
  [1, 5], [3, 5], [4, 6], [9, 6], [4, 7], [5, 7], [6, 7],
];

export function ConstellationScene() {
  return (
    <svg className="scene" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="con-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#10285C" />
          <stop offset="0.6" stopColor="#060C1F" />
          <stop offset="1" stopColor="#020308" />
        </radialGradient>
        <radialGradient id="con-node" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFE7B0" />
          <stop offset="0.3" stopColor="#F8B432" stopOpacity="0.6" />
          <stop offset="1" stopColor="#F8B432" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="800" fill="url(#con-bg)" />
      <Glow id="con-glow" color="#F8B432" cx={420} cy={430} rx={340} ry={300} opacity={0.16} />
      <Stars seed={41} count={170} width={800} height={800} />

      <circle cx="400" cy="410" r="300" fill="none" stroke="#fff" strokeOpacity="0.07" />
      <circle cx="400" cy="410" r="200" fill="none" stroke="#fff" strokeOpacity="0.06" strokeDasharray="2 8" />

      <g stroke="#F8B432" strokeOpacity="0.45" strokeWidth="1">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      {NODES.map(([x, y], i) => (
        <g key={i} className={i % 3 === 0 ? 'twinkle-b' : undefined}>
          <circle cx={x} cy={y} r={i % 4 === 0 ? 26 : 18} fill="url(#con-node)" />
          <circle cx={x} cy={y} r={i % 4 === 0 ? 4 : 3} fill="#FFF3D6" />
        </g>
      ))}
    </svg>
  );
}

// ── Horizon: a quiet band of sky with a warm glow, for banners and CTAs ─────
export function HorizonScene() {
  return (
    <svg className="scene" viewBox="0 0 1600 700" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="hor-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#020308" />
          <stop offset="0.6" stopColor="#0A1B45" />
          <stop offset="1" stopColor="#16387A" />
        </linearGradient>
        <linearGradient id="hor-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.75" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1600" height="700" fill="url(#hor-sky)" />
      <Stars seed={51} count={220} width={1600} height={600} />
      <Glow id="hor-glow" color="#F8B432" cx={800} cy={630} rx={720} ry={120} opacity={0.6} />
      <Sparks seed={52} count={110} cx={800} top={380} bottom={640} spread={420} className="sparks-a" />
      <path d="M0 700 L0 620 C 300 580, 560 610, 800 590 C 1040 610, 1300 580, 1600 615 L1600 700 Z" fill="#020308" />
      <rect width="1600" height="700" fill="url(#hor-fade)" />
    </svg>
  );
}
