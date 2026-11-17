import Link from 'next/link';
import { HorizonScene, ConstellationScene } from '../components/Scenes';

export const metadata = {
  title: 'About — IndianSight',
  description:
    'Indian Sight is a consulting-first AI firm: we help teams decide what to build, how to govern it, and how to run it in production.',
  alternates: { canonical: '/about' },
};

const values = [
  { title: 'Impact-Driven', desc: 'We measure success by business outcomes — not just lines of code or model accuracy metrics.' },
  { title: 'Partnership First', desc: 'We embed ourselves in your team, share your risks, and celebrate your wins.' },
  { title: 'Research-Backed', desc: 'Our methods are grounded in cutting-edge academic research and real-world engineering.' },
  { title: 'Responsible AI', desc: 'Ethical, explainable, and bias-aware AI is non-negotiable — for us and for India.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden">
        <HorizonScene fadeBottom />
        <div className="wrap relative pb-28 pt-40 text-center sm:pb-36 sm:pt-48">
          <div className="kicker">About us</div>
          <h1 className="h-hero mx-auto mt-5 max-w-4xl" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
            Built for India, <em>ready for the world</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] text-[14px] leading-relaxed text-white/80">
            Indian Sight is a consulting-first AI firm. We help leadership and technical teams
            prioritize use cases, define governance, and design infrastructure-aware architectures
            — so initiatives don&apos;t stall after the pilot.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <div className="scene-card aspect-[5/4]">
            <ConstellationScene />
          </div>
          <div>
            <div className="kicker">Our mission</div>
            <h2 className="h-display mt-3">
              Democratising <em>AI</em>
            </h2>
            <p className="copy mt-5 max-w-xl text-[16px]">
              We believe the AI revolution should not be limited to tech giants. Mid-market and large
              enterprises in manufacturing, finance, healthcare, and retail deserve the same calibre
              of AI solutions — implemented with integrity, cultural context, and long-term thinking.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="wrap">
          <div className="kicker">Our values</div>
          <h2 className="h-display mt-3">
            What <em>drives us</em>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {values.map(({ title, desc }, i) => (
              <div key={title} className="border-t border-white/10 py-7">
                <div className="numeral text-[22px] leading-none">0{i + 1}</div>
                <h3 className="mt-4 text-[17px] font-medium tracking-tight text-white">{title}</h3>
                <p className="copy mt-2 text-[14px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="panel px-6 py-14 text-center">
            <h2 className="h-title">
              Have a use case <em>in mind?</em>
            </h2>
            <p className="copy mx-auto mt-4 max-w-md">
              Share your constraints and goals — we&apos;ll suggest the right next step: discovery,
              blueprint, or review.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
