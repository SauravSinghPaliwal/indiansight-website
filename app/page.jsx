import Link from 'next/link';
import RevealSection from './components/RevealSection';
import { HeroScene, ValleyScene, ConstellationScene, HorizonScene } from './components/Scenes';
import { client, formatDate } from '../lib/sanity';
import { allPostsQuery } from '../lib/queries';
import { CONTACT_EMAIL } from '../lib/site';

// Refresh blog previews from Sanity hourly (matches /blog)
export const revalidate = 3600;

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="ai-consulting" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <HeroScene />

      {/* Bottom padding keeps the copy clear of the figure on the hill */}
      <div className="wrap relative flex flex-col items-center pb-[max(22vw,32svh)] pt-32 text-center sm:pt-36">
        <h1 className="h-hero" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.45)' }}>
          Make AI decisions <em>that scale</em>
        </h1>

        <Link href="/contact" className="cta-pill mt-8">
          <span>Tell us about your use case</span>
          <span className="cta-pill-dot">
            <Arrow />
          </span>
        </Link>

        <p className="mt-5 max-w-[30rem] text-[13px] leading-relaxed text-white/85" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}>
          Built for India. Ready for the world. A consulting-first AI firm helping teams prioritize
          use cases, define governance, and design architectures that don&apos;t stall after the pilot.
        </p>

        <Link href="/#approach" className="btn btn-outline mt-6">
          Our approach
        </Link>
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────

const services = [
  { title: 'AI Strategy & Roadmaps', desc: 'Prioritize use cases, align stakeholders, define success metrics, and plan delivery phases.' },
  { title: 'GenAI / RAG Advisory', desc: 'Guidance for enterprise knowledge assistants: grounding, evaluation, and safe rollout patterns.' },
  { title: 'Governance & Risk', desc: 'Policies, RBAC guidance, auditability, vendor-risk inputs, and responsible AI controls.' },
  { title: 'Architecture & Infra Advisory', desc: 'On-prem / cloud / hybrid architecture guidance with performance, security, and cost tradeoffs.' },
  { title: 'MLOps & Production Readiness', desc: 'Monitoring, drift planning, incident playbooks, lifecycle updates, and operating model.' },
  { title: 'Enablement & Workshops', desc: 'Executive and technical enablement: adoption playbooks, governance training, and readiness.' },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <RevealSection>
          <h2 className="h-display">
            What we <em>advise on</em>
          </h2>

          <div className="scene-card mt-8 min-h-[440px] sm:min-h-[540px]">
            <ValleyScene />
            <div className="absolute inset-x-4 bottom-4 flex flex-col gap-4 sm:inset-x-8 sm:bottom-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="glass max-w-[26rem] p-5">
                <div className="kicker">Consulting-first</div>
                <p className="mt-2 text-[14px] leading-relaxed text-white/90">
                  We start with decisions — use cases, KPIs, governance, and adoption — before tools.
                  Every engagement is designed to de-risk AI and make it production-ready.
                </p>
              </div>
              <Link href="/contact" className="btn btn-outline self-start sm:self-auto">
                Start a conversation
              </Link>
            </div>
          </div>
        </RevealSection>

        <RevealSection stagger className="mt-12 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="border-t border-white/10 py-7">
              <div className="numeral text-[22px] leading-none">0{i + 1}</div>
              <h3 className="mt-4 text-[17px] font-medium tracking-tight text-white">{s.title}</h3>
              <p className="copy mt-2 text-[14px]">{s.desc}</p>
            </div>
          ))}
        </RevealSection>

        <p className="copy mt-4 max-w-2xl border-t border-white/10 pt-6 text-[13px]">
          <span className="text-white">Execution support, when needed.</span> We can support pilot
          execution and scale planning with your internal team or preferred partners. Our positioning
          remains consulting-first.
        </p>
      </div>
    </section>
  );
}

// ── Why us ───────────────────────────────────────────────────────────────────

const whyPoints = [
  { title: 'Consulting-first', desc: 'We start with decisions: use cases, KPIs, governance, and adoption — before tools.' },
  { title: 'Infrastructure-aware', desc: 'Architecture guidance grounded in real constraints: security boundaries, latency, and cost.' },
  { title: 'Production readiness', desc: 'We advise on monitoring, evaluation, and operating models so systems stay reliable over time.' },
  { title: 'Vendor-neutral', desc: 'We align with your existing stack and partners — no forced platforms.' },
];

function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="wrap">
        <RevealSection>
          <h2 className="h-display">
            Strategy <em>x</em> Delivery
          </h2>
        </RevealSection>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <RevealSection>
            <div className="scene-card aspect-[5/4] lg:aspect-square">
              <ConstellationScene />
            </div>
          </RevealSection>

          <RevealSection stagger className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-1">
            {whyPoints.map((p) => (
              <div key={p.title}>
                <div className="kicker">{p.title}</div>
                <p className="mt-3 text-[16px] leading-relaxed text-white/85">{p.desc}</p>
              </div>
            ))}
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

// ── Approach ─────────────────────────────────────────────────────────────────

const steps = [
  { title: 'Discovery Sprint', duration: '1–2 weeks', desc: 'Use-case selection, constraints mapping, data readiness, KPI definition.' },
  { title: 'Blueprint & Governance', duration: '2–4 weeks', desc: 'Target architecture, guardrails, evaluation plan, and operating model.' },
  { title: 'Pilot Advisory', duration: 'Optional', desc: 'Guidance to execute a pilot with clear success criteria and risk controls.' },
  { title: 'Scale Readiness', duration: 'Roadmap', desc: 'Production checklist, monitoring plan, cost/perf tradeoffs, rollout strategy.' },
];

const deliverables = [
  { title: 'Use-case prioritization', desc: 'Ranked AI use cases with success metrics and effort/value mapping.' },
  { title: 'Target architecture', desc: 'Infra guidance for on-prem, cloud, or hybrid — with cost and security tradeoffs.' },
  { title: 'Governance controls', desc: 'RBAC guidance, auditability, vendor-risk inputs, and responsible AI controls.' },
  { title: 'Evaluation plan', desc: 'Quality, safety, and reliability assessment for models and pipelines.' },
  { title: 'Scale readiness checklist', desc: 'Monitoring, drift planning, incident playbooks, and lifecycle updates.' },
];

function Approach() {
  return (
    <section id="approach" className="section">
      <div className="wrap">
        <RevealSection className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="h-display">
            How we <em>work</em>
          </h2>
          <p className="copy max-w-sm">
            A pragmatic consulting approach that reduces risk and accelerates outcomes — from first
            question to production.
          </p>
        </RevealSection>

        <RevealSection stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="panel flex flex-col p-6">
              <div className="flex items-baseline justify-between">
                <span className="numeral text-[40px] leading-none">{i + 1}</span>
                <span className="kicker">{s.duration}</span>
              </div>
              <h3 className="mt-10 text-[17px] font-medium tracking-tight text-white">{s.title}</h3>
              <p className="copy mt-2 text-[14px]">{s.desc}</p>
            </div>
          ))}
        </RevealSection>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[4fr_7fr] lg:gap-16">
          <RevealSection>
            <div className="kicker">What you get</div>
            <h3 className="h-title mt-3">
              Deliverables you can <em>act on</em>
            </h3>
            <p className="copy mt-4 max-w-sm">
              Consulting-first outputs designed to de-risk adoption and make AI initiatives
              production-ready.
            </p>
          </RevealSection>

          <RevealSection>
            <dl className="rule-list">
              {deliverables.map((d) => (
                <div key={d.title} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="text-[15px] font-medium text-white">{d.title}</dt>
                  <dd className="copy text-[14px]">{d.desc}</dd>
                </div>
              ))}
            </dl>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

// ── Blog ─────────────────────────────────────────────────────────────────────

function BlogCard({ title, excerpt, meta, tag, href, image }) {
  return (
    <Link href={href} className="group block">
      <div className="scene-card aspect-[16/10]">
        {image ? (
          <img
            src={image}
            alt=""
            className="scene object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <ConstellationScene />
        )}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="kicker" style={{ color: 'var(--gold)' }}>{tag}</span>
        {meta && <span className="kicker">{meta}</span>}
      </div>
      <h3 className="mt-2 line-clamp-2 text-[18px] font-medium leading-snug tracking-tight text-white transition-colors group-hover:text-white/75">
        {title}
      </h3>
      {excerpt && <p className="copy mt-2 line-clamp-2 text-[14px]">{excerpt}</p>}
    </Link>
  );
}

async function Blog() {
  let posts = [];
  try {
    const raw = await client.fetch(allPostsQuery);
    posts = raw.slice(0, 3).map((p) => ({
      tag: p.category ?? 'Insights',
      meta: p.publishedAt ? formatDate(p.publishedAt) : '',
      title: p.title,
      excerpt: p.excerpt ?? '',
      href: `/blog/${p.slug}`,
      image: p.mainImage ?? null,
    }));
  } catch {}

  return (
    <section id="blogs" className="section">
      <div className="wrap">
        <RevealSection className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h-display">
            Latest <em>insights</em>
          </h2>
          <Link href="/blog" className="btn btn-outline self-start sm:self-auto">
            View all <Arrow size={14} />
          </Link>
        </RevealSection>

        {posts.length > 0 ? (
          <RevealSection stagger className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.href} {...p} />
            ))}
          </RevealSection>
        ) : (
          <p className="copy mt-8">No posts published yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}

// ── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <RevealSection>
          <div className="scene-card flex min-h-[420px] items-center justify-center px-6 py-16 text-center">
            <HorizonScene />
            <div className="relative flex flex-col items-center">
              <div className="kicker">Contact</div>
              <h2 className="h-hero mt-4" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                Talk <em>to us</em>
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/80">
                Share your use case and constraints. We&apos;ll suggest the right next step —
                discovery, blueprint, or review.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Get in touch <Arrow size={14} />
                </Link>
                <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-outline">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Approach />
      <Blog />
      <Contact />
    </>
  );
}
