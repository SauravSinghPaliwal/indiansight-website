import Link from 'next/link';
import RevealSection from './components/RevealSection';
import { client, formatDate } from '../lib/sanity';
import { allPostsQuery } from '../lib/queries';

// ── Shared helpers ──────────────────────────────────────────────────────────

function SectionHeader({ kicker, title, desc }) {
  return (
    <div className="mb-4">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">{kicker}</div>
      <div className="mt-2 font-black uppercase tracking-tight text-white" style={{ fontSize: 'var(--display-sm)' }}>{title}</div>
      {desc && <p className="mt-2 max-w-2xl text-sm text-white/60">{desc}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/8 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/75 ring-1 ring-white/10">
      {children}
    </span>
  );
}

// ── Marquee strip ─────────────────────────────────────────────────────────────

const marqueeItems = [
  'AI STRATEGY', 'GENAI / RAG', 'GOVERNANCE', 'ARCHITECTURE ADVISORY',
  'MLOPS READINESS', 'ENTERPRISE AI', 'DISCOVERY SPRINT', 'BLUEPRINT',
  'SCALE READINESS', 'RESPONSIBLE AI', 'VENDOR NEUTRAL', 'CONSULTING-FIRST',
];

function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="overflow-hidden rounded-[18px] py-3"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-[10px] font-semibold tracking-widest text-white/40 whitespace-nowrap">
            {item}
            <span style={{ color: '#F47A35' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Hero card decorations ────────────────────────────────────────────────────

function Scribble() {
  return (
    <svg viewBox="0 0 180 90" className="h-14 w-44" fill="none" aria-hidden="true">
      <path
        d="M10 58c26-26 38 10 68-18 26-24 34 10 60-12 18-15 26 3 32-6"
        stroke="#F8B432"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M132 22l14-10m-2 22l18 6m-22 8l-16 12"
        stroke="#F8B432"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bullet({ title, desc }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-[11px] font-black uppercase tracking-widest text-white">{title}</div>
      <div className="mt-1 text-xs leading-relaxed text-white/65">{desc}</div>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function HeroCard() {
  return (
    <section
      id="ai-consulting"
      className="relative overflow-hidden rounded-[28px] p-8 sm:p-10 shadow-[0_26px_70px_rgba(0,0,0,0.45)]"
      style={{ background: '#1E1F24' }}
    >
      {/* Subtle gradient glow */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full opacity-20 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #F47A35, transparent 70%)' }}
      />

      <div className="absolute right-8 top-16 hidden lg:block">
        <Scribble />
      </div>

      <div className="relative max-w-[680px]">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/75 ring-1 ring-white/10">
          CONSULTING-FIRST AI
          <span className="text-white/30">·</span>
          ROADMAP · GOVERNANCE · ARCHITECTURE
        </div>

        <h1
          className="mt-5 font-black uppercase leading-[0.9] tracking-tight text-white"
          style={{ fontSize: 'var(--display-hero)' }}
        >
          MAKE AI
          <br />
          DECISIONS
          <br />
          <span style={{ background: 'linear-gradient(135deg, #F8B432, #F47A35, #E8342C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            THAT SCALE
          </span>
        </h1>

        <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/60">
          Built for India. Ready for the world. Indian Sight is a consulting-first AI firm helping
          leadership and technical teams prioritize use cases, define governance, and design
          infrastructure-aware architectures — so initiatives don&apos;t stall after the pilot.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Pill>AI STRATEGY</Pill>
          <Pill>GENAI / RAG ADVISORY</Pill>
          <Pill>GOVERNANCE & RISK</Pill>
          <Pill>ARCHITECTURE ADVISORY</Pill>
          <Pill>MLOPS READINESS</Pill>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#services"
            className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4 text-[12px] font-black uppercase tracking-widest text-black shadow-[0_16px_45px_rgba(0,0,0,0.28)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.32)] transition-shadow"
          >
            <span>
              <span className="block text-[10px] font-semibold tracking-widest text-black/40">INDIAN SIGHT</span>
              CONSULTING SERVICES
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-black text-white transition group-hover:rotate-[-6deg]">
              →
            </span>
          </Link>

          <Link
            href="/#approach"
            className="group inline-flex flex-1 items-center justify-between gap-4 rounded-2xl bg-white/8 px-6 py-4 text-[12px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/12 transition-colors"
          >
            <span>
              <span className="block text-[10px] font-semibold tracking-widest text-white/45">HOW WE ENGAGE</span>
              DISCOVERY → BLUEPRINT
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition group-hover:rotate-[6deg]">
              🧭
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Bullet title="1) Discovery" desc="Use-case prioritization, constraints, data readiness, success metrics." />
          <Bullet title="2) Blueprint" desc="Target architecture, governance controls, evaluation plan, rollout path." />
          <Bullet title="3) Support" desc="Execution support when needed — pilot guidance, vendor coordination, scale readiness." />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/8" />
    </section>
  );
}

// ── Small cards (Services / Approach) ────────────────────────────────────────

function TinyCharacters({ tone }) {
  const hot = tone === 'services' ? '#F8B432' : '#E8342C';
  const accent = '#111827';
  return (
    <svg viewBox="0 0 280 120" className="w-full" aria-hidden="true">
      <rect x="18" y="54" width="72" height="54" rx="18" fill={accent} />
      <circle cx="44" cy="80" r="12" fill={hot} />
      <circle cx="64" cy="80" r="12" fill={hot} />
      <rect x="110" y="46" width="80" height="62" rx="22" fill={accent} />
      <rect x="126" y="62" width="52" height="12" rx="6" fill="#60A5FA" />
      <rect x="126" y="82" width="64" height="12" rx="6" fill="#A78BFA" />
      <circle cx="216" cy="76" r="26" fill={accent} />
      <circle cx="208" cy="70" r="6" fill={hot} />
      <circle cx="224" cy="70" r="6" fill={hot} />
      <path d="M206 86c8 10 20 10 28 0" stroke={hot} strokeWidth="6" strokeLinecap="round" />
      <path d="M238 52l10-8" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <path d="M240 98l10 8" stroke={accent} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function SmallCard({ tone, title, kicker, desc, href = '#' }) {
  const bg = tone === 'services' ? '#E8342C' : '#F8B432';
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[26px] p-6 shadow-[0_22px_62px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 block"
      style={{ background: bg }}
    >
      <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/55 transition group-hover:rotate-12">↗</div>
      <div className="text-[10px] font-semibold uppercase tracking-widest text-black/60">{kicker}</div>
      <div className="mt-3 font-black uppercase tracking-tight text-black" style={{ fontSize: 'var(--display-sm)' }}>{title}</div>
      <p className="mt-2 text-sm text-black/65">{desc}</p>
      <div className="mt-4">
        <TinyCharacters tone={tone} />
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
    </Link>
  );
}

// ── Blog section ──────────────────────────────────────────────────────────────

function BlogArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlogCard({ title, excerpt, meta, tag, href = '/blog', image }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[22px] bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/8 block"
    >
      {/* Thumbnail */}
      {image ? (
        <div className="overflow-hidden rounded-t-[22px]" style={{ height: '130px' }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div
          className="rounded-t-[22px]"
          style={{ height: '90px', background: 'linear-gradient(135deg, rgba(244,122,53,0.12), rgba(116,119,255,0.08))' }}
        />
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/75 ring-1 ring-white/10">
                {tag}
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-white/40">{meta}</span>
            </div>
            <div className="mt-3 line-clamp-2 text-[13px] font-black uppercase tracking-wide text-white">{title}</div>
            <p className="mt-2 line-clamp-2 text-sm text-white/60">{excerpt}</p>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:rotate-[6deg]">
            <BlogArrow />
          </div>
        </div>
      </div>
    </Link>
  );
}

async function BlogSection() {
  let posts = [];
  try {
    const raw = await client.fetch(allPostsQuery);
    posts = raw.slice(0, 4).map((p) => ({
      tag: p.category ?? 'INSIGHTS',
      meta: p.publishedAt ? formatDate(p.publishedAt) : '',
      title: p.title,
      excerpt: p.excerpt ?? '',
      href: `/blog/${p.slug}`,
      image: p.mainImage ?? null,
    }));
  } catch {}

  return (
    <section id="blogs" className="rounded-[28px] p-6 ring-1 ring-white/10" style={{ background: '#1A1B20' }}>
      <SectionHeader
        kicker="Insights"
        title="Latest blogs"
        desc="Short, practical notes on strategy, governance, and production readiness."
      />
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-white/50 py-4">No posts published yet — check back soon.</p>
      )}
      <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 sm:flex-row sm:items-center">
        <div className="text-sm text-white/55">
          Want these tailored to your industry? We can publish a dedicated series.
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
        >
          VIEW ALL <span>→</span>
        </Link>
      </div>
    </section>
  );
}

// ── Services grid ─────────────────────────────────────────────────────────────

const services = [
  { title: 'AI Strategy & Roadmaps', desc: 'Prioritize use cases, align stakeholders, define success metrics, and plan delivery phases.' },
  { title: 'GenAI / RAG Advisory', desc: 'Guidance for enterprise knowledge assistants: grounding, evaluation, and safe rollout patterns.' },
  { title: 'Governance & Risk', desc: 'Policies, RBAC guidance, auditability, vendor-risk inputs, and responsible AI controls.' },
  { title: 'Architecture & Infra Advisory', desc: 'On-prem / cloud / hybrid architecture guidance with performance, security, and cost tradeoffs.' },
  { title: 'MLOps & Production Readiness', desc: 'Monitoring, drift planning, incident playbooks, lifecycle updates, and operating model.' },
  { title: 'Enablement & Workshops', desc: 'Executive and technical enablement: adoption playbooks, governance training, and readiness.' },
];

function ServiceGrid() {
  return (
    <section id="services" className="rounded-[28px] p-6 ring-1 ring-white/10" style={{ background: '#1E2028' }}>
      <SectionHeader
        kicker="Consulting services"
        title="What we advise on"
        desc="Consulting-first engagements designed to de-risk adoption and make AI initiatives production-ready."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/8 transition-colors">
            <div
              className="mb-1 h-[2px] w-8 rounded-full"
              style={{ background: 'linear-gradient(90deg, #F8B432, #E8342C)' }}
            />
            <div className="text-[12px] font-black uppercase tracking-wide text-white">{s.title}</div>
            <p className="mt-2 text-sm text-white/60">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="text-[11px] font-black uppercase tracking-widest text-white">Execution support (optional)</div>
        <p className="mt-1 text-sm text-white/55">
          When required, we can support pilot execution and scale planning with your internal team or preferred partners.
          Our positioning remains consulting-first.
        </p>
      </div>
    </section>
  );
}

// ── Approach ──────────────────────────────────────────────────────────────────

const steps = [
  { title: 'Discovery Sprint', desc: 'Use-case selection, constraints mapping, data readiness, KPI definition.', icon: '🔎' },
  { title: 'Blueprint & Governance', desc: 'Target architecture, guardrails, evaluation plan, and operating model.', icon: '🧾' },
  { title: 'Pilot Advisory', desc: 'Guidance to execute a pilot with clear success criteria and risk controls.', icon: '🧪' },
  { title: 'Scale Readiness', desc: 'Production checklist, monitoring plan, cost/perf tradeoffs, rollout strategy.', icon: '📈' },
];

function Approach() {
  return (
    <section id="approach" className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
      <SectionHeader
        kicker="Engagement model"
        title="How we work"
        desc="A pragmatic consulting approach that reduces risk and accelerates outcomes."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-xl shrink-0">{s.icon}</div>
              <div>
                <div className="text-[10px] font-semibold tracking-widest text-white/40 mb-1">0{i + 1}</div>
                <div className="text-[12px] font-black uppercase tracking-wide text-white">{s.title}</div>
                <p className="mt-1 text-sm text-white/60">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Why Us ────────────────────────────────────────────────────────────────────

const whyPoints = [
  { title: 'Consulting-first', desc: 'We start with decisions: use cases, KPIs, governance, and adoption — before tools.', icon: '🎯' },
  { title: 'Infrastructure-aware', desc: 'Architecture guidance grounded in real constraints: security boundaries, latency, and cost.', icon: '🏗️' },
  { title: 'Production readiness', desc: 'We advise on monitoring, evaluation, and operating models so systems stay reliable over time.', icon: '⚙️' },
  { title: 'Vendor-neutral', desc: 'We align with your existing stack and partners — no forced platforms.', icon: '🤝' },
];

function WhyUs() {
  return (
    <section id="why-us" className="rounded-[28px] p-6 ring-1 ring-white/10" style={{ background: '#1A1B20' }}>
      <SectionHeader kicker="Differentiators" title="Why Indian Sight" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {whyPoints.map((p) => (
          <div key={p.title} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/8 transition-colors">
            <div className="text-2xl mb-2">{p.icon}</div>
            <div className="text-[12px] font-black uppercase tracking-wide text-white">{p.title}</div>
            <p className="mt-2 text-sm text-white/60">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="text-[11px] font-black uppercase tracking-widest text-white">Note on delivery</div>
        <p className="mt-1 text-sm text-white/55">
          We are comfortable with development, deployment, and scaling. However, we position ourselves as consulting
          first — execution support is available when needed.
        </p>
      </div>
    </section>
  );
}

// ── Contact (home section) ────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
      <SectionHeader
        kicker="Contact"
        title="Talk to us"
        desc="Share your use case and constraints. We'll suggest the right next step — discovery, blueprint, or review."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
          <div className="text-[12px] font-black uppercase tracking-wide text-white">Email</div>
          <p className="mt-2 text-sm text-white/60">business@indiansight.in</p>
          <a
            href="mailto:business@indiansight.in"
            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
          >
            Send an email
          </a>
        </div>
        <div className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
          <div className="text-[12px] font-black uppercase tracking-wide text-white">Schedule a call</div>
          <p className="mt-2 text-sm text-white/60">
            Prefer a call? Book a time with our consulting team directly.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors"
          >
            Go to contact page
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Right panel (sticky sidebar) ──────────────────────────────────────────────

const phases = [
  { num: '01', title: 'Discovery Sprint', duration: '1–2 wks', icon: '🔎', desc: 'Use-case prioritization, constraints mapping, data readiness, KPI definition.' },
  { num: '02', title: 'Blueprint', duration: '2–4 wks', icon: '🧾', desc: 'Target architecture, governance controls, evaluation plan, and rollout path.' },
  { num: '03', title: 'Pilot Advisory', duration: 'optional', icon: '🧪', desc: 'Guidance to execute a pilot with clear success criteria and risk controls.' },
  { num: '04', title: 'Scale Readiness', duration: 'roadmap', icon: '📈', desc: 'Production checklist, monitoring plan, cost/perf tradeoffs, rollout strategy.' },
];

const deliverables = [
  { title: 'Use-case prioritization', desc: 'Ranked AI use cases with success metrics and effort/value mapping.' },
  { title: 'Target architecture', desc: 'Infra guidance for on-prem, cloud, or hybrid — with cost and security tradeoffs.' },
  { title: 'Governance controls', desc: 'RBAC guidance, auditability, vendor-risk inputs, and responsible AI controls.' },
  { title: 'Evaluation plan', desc: 'Quality, safety, and reliability assessment for models and pipelines.' },
  { title: 'Scale readiness checklist', desc: 'Monitoring, drift planning, incident playbooks, and lifecycle updates.' },
];

function RightPanel() {
  return (
    <div className="space-y-6">

      {/* ── What we advise on ── */}
      <ServiceGrid />

      {/* ── Discovery Sprint (mirrors HeroCard style) ── */}
      <section
        className="relative overflow-hidden rounded-[28px] p-8 shadow-[0_26px_70px_rgba(0,0,0,0.45)]"
        style={{ background: '#1E1F24' }}
      >
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-20 blur-[80px]"
          style={{ background: 'radial-gradient(circle, #F47A35, transparent 70%)' }}
        />
        <div className="relative">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Start here</div>
          <div className="mt-2 font-black uppercase tracking-tight text-white" style={{ fontSize: 'var(--display-sm)' }}>
            Discovery Sprint
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Get clarity fast: use-case prioritization, governance inputs, and an infrastructure-aware plan that scales.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {phases.map((p) => (
              <div key={p.num} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">{p.title}</div>
                <div className="mt-1 text-[14px] font-black uppercase tracking-wide text-white">{p.duration}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/#approach"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors"
            >
              Our approach
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/8" />
      </section>

      {/* ── Engagement phases (mirrors Approach style) ── */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
        <SectionHeader
          kicker="Engagement model"
          title="How we work"
          desc="A pragmatic consulting approach that reduces risk and accelerates outcomes."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {phases.map((p, i) => (
            <div key={p.num} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-xl shrink-0">{p.icon}</div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest text-white/40 mb-1">{p.num}</div>
                  <div className="text-[12px] font-black uppercase tracking-wide text-white">{p.title}</div>
                  <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Deliverables (mirrors ServiceGrid style) ── */}
      <section className="rounded-[28px] p-6 ring-1 ring-white/10" style={{ background: '#1E2028' }}>
        <SectionHeader
          kicker="What you get"
          title="Deliverables"
          desc="Consulting-first outputs designed to de-risk adoption and make AI initiatives production-ready."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {deliverables.map((d) => (
            <div key={d.title} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/8 transition-colors">
              <div
                className="mb-1 h-[2px] w-8 rounded-full"
                style={{ background: 'linear-gradient(90deg, #F8B432, #E8342C)' }}
              />
              <div className="text-[12px] font-black uppercase tracking-wide text-white">{d.title}</div>
              <p className="mt-2 text-sm text-white/60">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="text-[11px] font-black uppercase tracking-widest text-white">Execution support (optional)</div>
          <p className="mt-1 text-sm text-white/55">
            When required, we can support pilot execution and scale planning with your internal team or preferred partners.
            Our positioning remains consulting-first.
          </p>
        </div>
      </section>

    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Left column — all sections */}
      <div className="space-y-6">
        <RevealSection>
          <HeroCard />
        </RevealSection>

        <RevealSection>
          <MarqueeStrip />
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SmallCard
              tone="services"
              kicker="CONSULTING SERVICES"
              title="SERVICES"
              desc="Strategy, GenAI/RAG advisory, governance, architecture guidance, and MLOps readiness."
              href="/#services"
            />
            <SmallCard
              tone="why"
              kicker="ENGAGEMENT MODEL"
              title="APPROACH"
              desc="Discovery → Blueprint → Pilot advisory → Scale readiness, aligned to constraints and KPIs."
              href="/#approach"
            />
          </div>
        </RevealSection>

        <RevealSection>
          <BlogSection />
        </RevealSection>

        <RevealSection>
          <Approach />
        </RevealSection>

        <RevealSection>
          <WhyUs />
        </RevealSection>

        <RevealSection>
          <ContactSection />
        </RevealSection>
      </div>

      {/* Right column — sticky panel */}
      <div className="lg:sticky lg:top-20 lg:self-start">
        <RightPanel />
      </div>
    </div>
  );
}
