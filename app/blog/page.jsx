import Link from 'next/link';
import { client, formatDate } from '../../lib/sanity';
import { allPostsQuery } from '../../lib/queries';

export const metadata = {
  title: 'Blog — IndianSight',
  description: "Insights on AI strategy, governance, and production readiness from IndianSight's consulting team.",
};

// Revalidate every hour
export const revalidate = 3600;

function BlogArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await client.fetch(allPostsQuery);
  } catch (e) {
    console.error('Sanity fetch failed:', e.message);
  }

  if (!posts.length) {
    return (
      <div className="space-y-6">
        <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
            INSIGHTS & IDEAS
          </div>
          <h1 className="mt-4 text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
            THE INDIAN
            <br />
            SIGHT BLOG
          </h1>
          <p className="mt-4 text-sm text-white/60">No posts published yet — check back soon.</p>
        </section>
      </div>
    );
  }

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
        <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/60">
          Deep dives, practical guides, and strategic thinking on AI from our consulting team.
        </p>
      </section>

      {/* Featured post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group relative overflow-hidden rounded-[28px] p-7 ring-1 ring-white/10 transition hover:bg-white/8 block"
        style={{ background: 'rgba(244, 122, 53, 0.12)' }}
      >
        {featured.mainImage && (
          <div className="mb-5 overflow-hidden rounded-[18px]">
            <img
              src={featured.mainImage}
              alt={featured.title}
              className="h-52 w-full object-cover transition group-hover:scale-[1.02]"
            />
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {featured.category && (
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
              {featured.category.toUpperCase()}
            </span>
          )}
          <span className="inline-flex items-center rounded-full bg-[#F47A35]/40 px-3 py-1 text-[10px] font-semibold tracking-widest text-white ring-1 ring-[#F47A35]/50">
            FEATURED
          </span>
        </div>
        <div className="text-[22px] font-black uppercase tracking-tight text-white sm:text-[28px]">
          {featured.title}
        </div>
        {featured.excerpt && (
          <p className="mt-2 max-w-2xl text-sm text-white/65 leading-relaxed">{featured.excerpt}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-white/50">
            {featured.author && <span className="font-semibold text-white/70">{featured.author}</span>}
            {featured.author && featured.publishedAt && <span>·</span>}
            {featured.publishedAt && <span>{formatDate(featured.publishedAt)}</span>}
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:rotate-[6deg]">
            <BlogArrow />
          </div>
        </div>
      </Link>

      {/* Post grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/8 block"
            >
              {post.mainImage && (
                <div className="mb-4 overflow-hidden rounded-[14px]">
                  <img
                    src={post.mainImage}
                    alt={post.title}
                    className="h-36 w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {post.category && (
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
                        {post.category.toUpperCase()}
                      </span>
                    )}
                    {post.publishedAt && (
                      <span className="text-[10px] font-semibold tracking-widest text-white/40">
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 line-clamp-2 text-[13px] font-black uppercase tracking-wide text-white">
                    {post.title}
                  </div>
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-white/60">{post.excerpt}</p>
                  )}
                </div>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:rotate-[6deg]">
                  <BlogArrow />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Newsletter */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10 text-center">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-2">Newsletter</div>
        <div className="text-2xl font-black uppercase tracking-tight text-white mb-2">Stay Ahead of the AI Curve</div>
        <p className="text-sm text-white/60 max-w-md mx-auto mb-5">
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
            className="rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
