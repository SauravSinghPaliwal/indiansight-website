import Link from 'next/link';

const posts = {
  'llm-enterprise-india': {
    tag: 'STRATEGY',
    meta: 'Roadmap • 4 min',
    title: "AI Roadmap ≠ Tool Shopping List",
    author: 'Arjun Sharma',
    role: 'Founder & CEO',
    date: 'January 28, 2025',
    content: `
Large language models have been available to enterprises since late 2022. Yet as of early 2024,
widespread enterprise adoption in India remained limited — held back by data privacy concerns,
language barriers, and a shortage of internal AI talent.

That's changing rapidly.

## What Shifted in 2024

Three converging factors have pushed Indian enterprises past the adoption threshold:

**1. On-premise and private cloud deployment options**

With providers like AWS Bedrock, Azure OpenAI, and open-source models like Llama 3.1, companies
can now deploy LLMs entirely within their own infrastructure — resolving data residency and
DPDP compliance concerns.

**2. Indian language support has matured**

Models like IndicBERT, Krutrim, and multilingual GPT-4o now handle Hindi, Tamil, Telugu,
Bengali, and 10+ other languages with acceptable quality for enterprise use cases.

**3. The cost of inference dropped by 90%+ since 2023**

What cost ₹10 per 1,000 API calls in 2023 now costs less than ₹1. This makes previously
uneconomic use cases — like real-time call centre AI or document processing at scale — viable.

## The Most Promising Use Cases

Based on our work with 40+ enterprise clients, the highest-ROI LLM applications in India today are:

- **Customer support automation** — handling Tier 1 queries in regional languages
- **Document processing** — extracting data from invoices, contracts, and regulatory filings
- **Internal knowledge bases** — making institutional knowledge searchable via chat
- **Code generation** — accelerating developer productivity by 30–50%
- **Sales enablement** — generating personalised proposals and follow-ups at scale

## What to Watch Out For

LLMs are powerful but not magic. Indian enterprises should be cautious about hallucinations in
high-stakes domains like legal, medical, or financial advice. Prompt injection attacks when LLMs
interact with user-supplied data are also a real risk. And hidden costs — inference at scale,
fine-tuning, and human oversight — add up quickly.

## Our Recommendation

Start narrow. Pick one high-volume, well-defined use case. Build a proof of concept in 4–6 weeks.
Measure it rigorously. Then scale what works.

The enterprises that will win are those who treat LLM adoption as a strategic capability to
build — not a one-time project to ship.
    `,
  },
  'rag-vs-finetuning': {
    tag: 'GENAI / RAG',
    meta: 'Guardrails • 5 min',
    title: 'RAG That Stays Grounded (and Safe)',
    author: 'Priya Iyer',
    role: 'Chief AI Scientist',
    date: 'January 14, 2025',
    content: `
Retrieval-Augmented Generation (RAG) is now the default architecture for enterprise knowledge
assistants. It's relatively easy to prototype — but surprisingly hard to make production-safe.

## The Core Problem

Most RAG demos work on clean, curated datasets with broad questions. Production systems face:

- **Messy, inconsistent source data** — scanned PDFs, mixed formats, outdated docs
- **Permission-aware retrieval** — not all documents should be accessible to all users
- **Hallucination at the seams** — the LLM "fills in" when retrieval comes up short
- **Evaluation gaps** — teams ship without clear quality benchmarks

## A Practical Checklist

**Grounding:**
- Define what "out of scope" looks like and make the system say so
- Use confidence thresholds and fallback to "I don't know"
- Cite sources in every response so users can verify

**Permissions:**
- Enforce document-level access controls at retrieval time, not just UI time
- Audit who retrieved what and when

**Evaluation:**
- Define a golden dataset of 50–100 test questions before go-live
- Track faithfulness (did the answer come from the docs?) and relevance separately

## Rollout Pattern That Works

Start with a closed beta of 20–30 internal users. Give them a feedback mechanism. Fix the top
failure modes before opening wider. Don't promise accuracy you haven't measured.
    `,
  },
};

// Fallback content for slugs without full articles
function getFallback(slug) {
  return {
    tag: 'INSIGHTS',
    meta: '5 min read',
    title: slug.replace(/-/g, ' ').toUpperCase(),
    author: 'IndianSight Team',
    role: 'Consulting',
    date: '2025',
    content: `This article is coming soon. In the meantime, reach out to us directly at business@indiansight.in to discuss this topic.`,
  };
}

export async function generateMetadata({ params }) {
  const post = posts[params.slug] || getFallback(params.slug);
  return { title: `${post.title} — IndianSight Blog` };
}

export default function BlogPostPage({ params }) {
  const post = posts[params.slug] || getFallback(params.slug);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/50 hover:text-white/80 mb-5"
        >
          ← BACK TO BLOG
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
            {post.tag}
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-white/55">{post.meta}</span>
        </div>

        <h1 className="text-[32px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[44px]">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F47A35] text-[13px] font-black text-white">
            {post.author[0]}
          </div>
          <div>
            <div className="text-[12px] font-black uppercase tracking-wide text-white">{post.author}</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest">{post.role} · {post.date}</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="rounded-[28px] bg-white/5 p-8 ring-1 ring-white/10">
        <div className="max-w-2xl space-y-0">
          {post.content.trim().split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return (
                <h2 key={i} className="text-[18px] font-black uppercase tracking-wide text-white mt-8 mb-3">
                  {block.slice(3)}
                </h2>
              );
            }
            if (block.includes('\n- ')) {
              const items = block.split('\n').filter((l) => l.startsWith('- '));
              return (
                <ul key={i} className="space-y-2 mb-4 mt-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                      <span className="mt-0.5 text-white/40 shrink-0">—</span>
                      <span dangerouslySetInnerHTML={{
                        __html: item.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/90">$1</strong>'),
                      }} />
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="text-sm text-white/70 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{
                  __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/90">$1</strong>'),
                }}
              />
            );
          })}
        </div>
      </section>

      {/* Bottom nav */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/15"
        >
          ← More Articles
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black"
        >
          Talk to Our Team →
        </Link>
      </div>
    </div>
  );
}
