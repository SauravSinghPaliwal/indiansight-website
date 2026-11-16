import Link from 'next/link';

export const metadata = {
  title: 'About — IndianSight',
  description:
    'Indian Sight is a consulting-first AI firm: we help teams decide what to build, how to govern it, and how to run it in production.',
  alternates: { canonical: '/about' },
};

const values = [
  { icon: '🎯', title: 'Impact-Driven', desc: 'We measure success by business outcomes — not just lines of code or model accuracy metrics.' },
  { icon: '🤝', title: 'Partnership First', desc: 'We embed ourselves in your team, share your risks, and celebrate your wins.' },
  { icon: '🔬', title: 'Research-Backed', desc: 'Our methods are grounded in cutting-edge academic research and real-world engineering.' },
  { icon: '🌱', title: 'Responsible AI', desc: 'Ethical, explainable, and bias-aware AI is non-negotiable — for us and for India.' },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <section className="rounded-[28px] p-8 shadow-[0_26px_70px_rgba(0,0,0,0.35)]" style={{ background: '#2B2C30' }}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
          ABOUT US
        </div>
        <h1 className="mt-4 text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
          AI CONSULTING
          <br />
          BUILT FOR INDIA,
          <br />
          READY FOR THE WORLD
        </h1>
        <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/70">
          Indian Sight is a consulting-first AI firm. We help leadership and technical teams
          prioritize use cases, define governance, and design infrastructure-aware architectures
          — so initiatives don&apos;t stall after the pilot.
        </p>
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
      </section>

      {/* Mission */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Our Mission</div>
        <div className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Democratising AI</div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          We believe the AI revolution should not be limited to tech giants. Mid-market and large
          enterprises in manufacturing, finance, healthcare, and retail deserve the same calibre
          of AI solutions — implemented with integrity, cultural context, and long-term thinking.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black"
        >
          Work With Us →
        </Link>
      </section>

      {/* Values */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Our Values</div>
        <div className="mt-2 text-2xl font-black uppercase tracking-tight text-white mb-4">What Drives Us</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-[12px] font-black uppercase tracking-wide text-white">{title}</div>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[28px] p-8 text-center ring-1 ring-white/10" style={{ background: '#E8342C' }}>
        <div className="text-2xl font-black uppercase tracking-tight text-black">Have a Use Case in Mind?</div>
        <p className="mt-2 text-sm text-black/70 max-w-md mx-auto">
          Share your constraints and goals — we&apos;ll suggest the right next step: discovery,
          blueprint, or review.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white"
        >
          Talk to Us →
        </Link>
      </section>
    </div>
  );
}
