import Link from 'next/link';

export const metadata = {
  title: 'About — IndianSight',
  description: "Meet the team behind IndianSight, India's premier AI consulting firm.",
};

const values = [
  { icon: '🎯', title: 'Impact-Driven', desc: 'We measure success by business outcomes — not just lines of code or model accuracy metrics.' },
  { icon: '🤝', title: 'Partnership First', desc: 'We embed ourselves in your team, share your risks, and celebrate your wins.' },
  { icon: '🔬', title: 'Research-Backed', desc: 'Our methods are grounded in cutting-edge academic research and real-world engineering.' },
  { icon: '🌱', title: 'Responsible AI', desc: 'Ethical, explainable, and bias-aware AI is non-negotiable — for us and for India.' },
];

const team = [
  { emoji: '👨‍💻', name: 'Arjun Sharma', role: 'Founder & CEO', bio: 'Ex-Google Brain researcher with 12 years in ML. IIT Delhi alumnus.' },
  { emoji: '👩‍🔬', name: 'Priya Iyer', role: 'Chief AI Scientist', bio: 'PhD in NLP from IISc. Led AI at Infosys BPM before joining IndianSight.' },
  { emoji: '👨‍💼', name: 'Rahul Mehra', role: 'Head of Consulting', bio: '15 years at McKinsey & TCS. Expert in digital transformation.' },
  { emoji: '👩‍💻', name: 'Sneha Patel', role: 'VP Engineering', bio: 'Built ML infrastructure at Flipkart. Full-stack AI engineer.' },
  { emoji: '👨‍📊', name: 'Vikram Das', role: 'Director of Data', bio: 'Former HDFC data analytics lead. Specialist in financial AI.' },
  { emoji: '👩‍🎨', name: 'Meera Nair', role: 'Head of Product', bio: 'UX and product strategy across 8 years in tech startups.' },
];

const stats = [
  { label: 'Year Founded', value: '2019' },
  { label: 'AI Experts', value: '80+' },
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Cities', value: '4' },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <section className="rounded-[28px] p-8 shadow-[0_26px_70px_rgba(0,0,0,0.35)]" style={{ background: '#2B2C30' }}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
          OUR STORY
        </div>
        <h1 className="mt-4 text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
          AI CONSULTING
          <br />
          BUILT FOR INDIA,
          <br />
          READY FOR THE WORLD
        </h1>
        <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/70">
          Founded in 2019 by IIT and IISc alumni, IndianSight was created with one conviction:
          India&apos;s enterprises deserve world-class AI capabilities built by people who deeply
          understand the Indian market.
        </p>
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
      </section>

      {/* Mission + stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Our Mission</div>
          <div className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Democratising AI</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            We believe the AI revolution should not be limited to tech giants. Mid-market and large
            enterprises in manufacturing, finance, healthcare, and retail deserve the same calibre
            of AI solutions — implemented with integrity, cultural context, and long-term thinking.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Our team of 80+ AI engineers, data scientists, and consultants is headquartered in
            Bengaluru with offices in Mumbai, Delhi, and Hyderabad.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black"
          >
            Work With Us →
          </Link>
        </section>

        <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-4">By the numbers</div>
          <div className="space-y-3">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10"
              >
                <span className="text-sm text-white/65">{label}</span>
                <span className="text-2xl font-black uppercase text-white" style={{ color: '#7477FF' }}>{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

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

      {/* Team */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">The Team</div>
        <div className="mt-2 text-2xl font-black uppercase tracking-tight text-white mb-1">
          Built by India&apos;s Best AI Minds
        </div>
        <p className="text-sm text-white/70 mb-5">
          Our leadership team combines deep AI research with real-world enterprise transformation experience.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(({ emoji, name, role, bio }) => (
            <div key={name} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10 text-center">
              <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-white/10 text-3xl">{emoji}</div>
              <div className="text-[12px] font-black uppercase tracking-wide text-white">{name}</div>
              <div className="mt-1 text-[11px] font-semibold text-[#7477FF] uppercase tracking-wider">{role}</div>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[28px] p-8 text-center ring-1 ring-white/10" style={{ background: '#F35F4E' }}>
        <div className="text-2xl font-black uppercase tracking-tight text-black">Join Our Growing Team</div>
        <p className="mt-2 text-sm text-black/70 max-w-md mx-auto">
          We&apos;re always looking for brilliant AI engineers, researchers, and consultants who want
          to make a real impact.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white"
        >
          View Open Roles →
        </Link>
      </section>
    </div>
  );
}
