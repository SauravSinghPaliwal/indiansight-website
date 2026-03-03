import Link from 'next/link';

export const metadata = {
  title: 'Blog — IndianSight',
  description: "Insights on AI strategy, ML engineering, and digital transformation from IndianSight's experts.",
};

const posts = [
  {
    slug: 'llm-enterprise-india',
    tag: 'STRATEGY',
    meta: 'Roadmap • 4 min',
    title: "AI Roadmap ≠ Tool Shopping List",
    excerpt: 'How to prioritize use cases, define success metrics, and sequence delivery so AI adoption stays measurable and realistic.',
    author: 'Arjun Sharma',
    date: 'Jan 28, 2025',
    featured: true,
  },
  {
    slug: 'rag-vs-finetuning',
    tag: 'GENAI / RAG',
    meta: 'Guardrails • 5 min',
    title: 'RAG That Stays Grounded (and Safe)',
    excerpt: "A practical checklist for grounding, permissions-aware retrieval, evaluation, and rollout—without breaking governance.",
    author: 'Priya Iyer',
    date: 'Jan 14, 2025',
  },
  {
    slug: 'responsible-ai-india',
    tag: 'GOVERNANCE',
    meta: 'Risk • 6 min',
    title: "What 'AI Governance' Means in Real Projects",
    excerpt: "Policies, RBAC, audit trails, and operating models—what to decide early so adoption scales safely.",
    author: 'Rahul Mehra',
    date: 'Dec 30, 2024',
  },
  {
    slug: 'roi-ai-projects',
    tag: 'MLOPS',
    meta: 'Operations • 4 min',
    title: 'Production Readiness for AI Systems',
    excerpt: 'Monitoring, drift planning, lifecycle updates, and cost controls—so systems remain reliable after launch.',
    author: 'Sneha Patel',
    date: 'Nov 22, 2024',
  },
  {
    slug: 'multilingual-ai-india',
    tag: 'NLP',
    meta: 'Engineering • 14 min',
    title: 'Building Multilingual AI for 22 Official Indian Languages',
    excerpt: "Technical deep-dive into the challenges and solutions for building robust NLP pipelines across India's language diversity.",
    author: 'Priya Iyer',
    date: 'Dec 10, 2024',
  },
  {
    slug: 'ai-manufacturing-india',
    tag: 'MANUFACTURING',
    meta: 'Case Study • 11 min',
    title: 'Predictive Maintenance in Indian Factories',
    excerpt: 'How sensor data, edge compute, and ML models are preventing costly equipment failures across Indian shopfloors.',
    author: 'Sneha Patel',
    date: 'Dec 5, 2024',
  },
];

function BlogArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
          INSIGHTS & IDEAS
        </div>
        <h1 className="mt-4 text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
          THE INDIAN
          <br />
          SIGHT BLOG
        </h1>
        <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/70">
          Deep dives, practical guides, and strategic thinking on AI from our team of experts.
        </p>
      </section>

      {/* Featured post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group relative overflow-hidden rounded-[28px] p-7 ring-1 ring-white/10 transition hover:bg-white/10 block"
        style={{ background: 'rgba(116, 119, 255, 0.15)' }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
            {featured.tag}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F47A35]/40 px-3 py-1 text-[10px] font-semibold tracking-widest text-white ring-1 ring-[#F47A35]/50">
            FEATURED
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-white/55">{featured.meta}</span>
        </div>
        <div className="text-[22px] font-black uppercase tracking-tight text-white sm:text-[28px]">
          {featured.title}
        </div>
        <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">{featured.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-white/55">
            <span className="font-semibold text-white/70">{featured.author}</span>
            <span>·</span>
            <span>{featured.date}</span>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:rotate-[6deg]">
            <BlogArrow />
          </div>
        </div>
      </Link>

      {/* Post grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10 block"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
                    {post.tag}
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest text-white/55">{post.meta}</span>
                </div>
                <div className="mt-3 line-clamp-2 text-[13px] font-black uppercase tracking-wide text-white">
                  {post.title}
                </div>
                <p className="mt-2 line-clamp-3 text-sm text-white/70">{post.excerpt}</p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:rotate-[6deg]">
                <BlogArrow />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10 text-center">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">Newsletter</div>
        <div className="text-2xl font-black uppercase tracking-tight text-white mb-2">Stay Ahead of the AI Curve</div>
        <p className="text-sm text-white/70 max-w-md mx-auto mb-5">
          Get our best AI insights delivered to your inbox every two weeks. No spam, unsubscribe anytime.
        </p>
        <form className="flex gap-3 max-w-sm mx-auto flex-wrap justify-center">
          <input
            type="email"
            placeholder="Your work email"
            className="flex-1 min-w-[200px] rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 ring-1 ring-white/20 outline-none focus:ring-white/40"
          />
          <button
            type="submit"
            className="rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
