import Link from 'next/link';

export const metadata = {
  title: 'Case Studies — IndianSight',
  description: "Explore IndianSight's AI project portfolio across manufacturing, fintech, healthcare, and more.",
};

const cases = [
  {
    emoji: '🏭',
    tag: 'MANUFACTURING AI',
    title: 'Smart Manufacturing at Scale',
    client: 'Tata Group Subsidiary',
    desc: 'Deployed a predictive maintenance platform across 12 factories, reducing downtime by 43% and saving ₹18 Cr annually.',
    kpis: ['43% less downtime', '₹18 Cr / yr', '12 factories'],
    wide: true,
    bg: '#2B2C30',
  },
  {
    emoji: '🏦',
    tag: 'FINTECH AI',
    title: 'Fraud Detection Engine',
    client: 'Leading Private Bank',
    desc: 'ML-powered real-time fraud detection processing 2M+ transactions per day with 99.7% accuracy.',
    kpis: ['99.7% accuracy', '2M txns/day'],
    bg: '#1e2a3a',
  },
  {
    emoji: '🛒',
    tag: 'RETAIL AI',
    title: 'Personalisation Engine',
    client: 'Top D2C E-commerce Brand',
    desc: 'LLM-powered product recommendations increased AOV by 28% and reduced cart abandonment by 19%.',
    kpis: ['+28% AOV', '-19% abandonment'],
    bg: '#1a2e2a',
  },
  {
    emoji: '🏥',
    tag: 'HEALTHTECH AI',
    title: 'Medical Imaging AI',
    client: 'Apollo Diagnostics',
    desc: 'Computer vision model detecting early-stage diabetic retinopathy from fundus images across 80 clinics.',
    kpis: ['94% sensitivity', '80 clinics'],
    bg: '#2a1e2e',
  },
  {
    emoji: '🚚',
    tag: 'SUPPLY CHAIN AI',
    title: 'Route Optimisation',
    client: 'Logistics Unicorn',
    desc: 'AI dispatch system reduced last-mile delivery costs by 31% while improving on-time delivery to 96%.',
    kpis: ['-31% cost', '96% on-time'],
    bg: '#1e2a1e',
  },
  {
    emoji: '💬',
    tag: 'CONVERSATIONAL AI',
    title: 'Multilingual Support Bot',
    client: 'Telecom Provider',
    desc: 'Hindi & English multilingual LLM chatbot handling 70% of queries autonomously with 4.6/5 CSAT.',
    kpis: ['70% automation', '4.6/5 CSAT', '11 languages'],
    bg: '#2a2a1e',
  },
  {
    emoji: '⚡',
    tag: 'ENERGY AI',
    title: 'Energy Load Forecasting',
    client: 'State Electricity Board',
    desc: 'Deep learning model for daily electricity demand forecasting, reducing procurement mismatch by 22%.',
    kpis: ['-22% mismatch', '98.1% accuracy'],
    bg: '#1e2226',
  },
];

const industries = [
  { icon: '🏦', label: 'Banking & Finance' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🛒', label: 'Retail & E-commerce' },
  { icon: '🚚', label: 'Logistics' },
  { icon: '⚡', label: 'Energy & Utilities' },
  { icon: '📱', label: 'Telecom' },
  { icon: '🎓', label: 'EdTech' },
];

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
          PORTFOLIO
        </div>
        <h1 className="mt-4 text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
          REAL AI.
          <br />
          REAL IMPACT.
        </h1>
        <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/70">
          Browse our case studies and see how IndianSight has delivered transformative AI solutions
          across India&apos;s top industries.
        </p>
      </section>

      {/* Case studies grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cases.map(({ emoji, tag, title, client, desc, kpis, wide, bg }) => (
          <div
            key={title}
            className={`group relative overflow-hidden rounded-[22px] p-6 ring-1 ring-white/10 transition hover:-translate-y-0.5${wide ? ' sm:col-span-2' : ''}`}
            style={{ background: bg }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{emoji}</span>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
                    {tag}
                  </span>
                </div>
                <div className="text-[14px] font-black uppercase tracking-wide text-white">{title}</div>
                <div className="mt-1 text-[11px] font-semibold text-white/50 uppercase tracking-wider">{client}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-xl">{desc}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {kpis.map((kpi) => (
                <span
                  key={kpi}
                  className="rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black"
                  style={{ background: '#F8B432' }}
                >
                  {kpi}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Industries */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">Industries</div>
        <div className="text-2xl font-black uppercase tracking-tight text-white mb-5">Sectors We Serve</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {industries.map(({ icon, label }) => (
            <div
              key={label}
              className="rounded-[18px] bg-white/5 p-4 text-center ring-1 ring-white/10"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-[11px] font-semibold text-white/75 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[28px] p-8 text-center ring-1 ring-white/10" style={{ background: '#E8342C' }}>
        <div className="text-2xl font-black uppercase tracking-tight text-black">Got a Project in Mind?</div>
        <p className="mt-2 text-sm text-black/70 max-w-sm mx-auto">
          Tell us your challenge — we&apos;ll show you what AI can do.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white"
        >
          Discuss Your Project →
        </Link>
      </section>
    </div>
  );
}
