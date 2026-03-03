import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client, formatDate } from '../../../lib/sanity';
import { postBySlugQuery, allSlugsQuery } from '../../../lib/queries';

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(allSlugsQuery);
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    if (post) return { title: `${post.title} — IndianSight Blog` };
  } catch {}
  return { title: 'Blog — IndianSight' };
}

const CATEGORY_COLORS = {
  strategy:    { bg: 'rgba(244,122,53,0.15)', text: '#F47A35', border: 'rgba(244,122,53,0.35)' },
  governance:  { bg: 'rgba(116,119,255,0.15)', text: '#9B9EFF', border: 'rgba(116,119,255,0.35)' },
  engineering: { bg: 'rgba(34,197,94,0.12)', text: '#4ADE80', border: 'rgba(34,197,94,0.3)' },
  research:    { bg: 'rgba(232,82,10,0.15)', text: '#F87171', border: 'rgba(232,82,10,0.35)' },
  product:     { bg: 'rgba(234,179,8,0.12)', text: '#FCD34D', border: 'rgba(234,179,8,0.3)' },
};

function categoryStyle(cat = '') {
  return CATEGORY_COLORS[cat?.toLowerCase()] ?? { bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.7)', border: 'rgba(255,255,255,0.15)' };
}

const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[15px] text-white/65 leading-[1.8] mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[20px] font-bold text-white mt-10 mb-3 leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[16px] font-semibold text-white mt-7 mb-2 leading-snug">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="pl-5 my-6 text-[15px] italic text-white/55 leading-relaxed"
        style={{ borderLeft: '3px solid #F47A35' }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-2.5 mb-5 mt-1">{children}</ul>,
    number: ({ children }) => <ol className="space-y-2.5 mb-5 mt-1 list-decimal list-inside">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-[15px] text-white/65 leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F47A35' }} />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[15px] text-white/65 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white/90 font-semibold">{children}</strong>,
    em: ({ children }) => <em className="text-white/70 italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px] font-mono text-white/80">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        style={{ textDecoration: 'underline', textDecorationColor: '#F47A35', textUnderlineOffset: '3px' }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <figure className="my-8 overflow-hidden rounded-xl">
          <img src={value.asset.url} alt={value.alt || ''} className="w-full object-cover" />
          {value.caption && (
            <figcaption className="mt-2 text-center text-[12px] text-white/35">{value.caption}</figcaption>
          )}
        </figure>
      ) : null,
  },
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch (e) {
    console.error('Sanity fetch error:', e.message);
  }

  if (!post) {
    return (
      <div>
        <div className="py-8 border-b border-white/10 mb-8">
          <Link href="/blog" className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors">
            ← Back to Insights
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-white">Post not found</h1>
        <p className="mt-3 text-sm text-white/50">This article doesn't exist or hasn't been published yet.</p>
      </div>
    );
  }

  const catStyle = categoryStyle(post.category);

  return (
    <div>
      {/* Back nav */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white/35 hover:text-white/65 transition-colors"
        >
          ← Insights
        </Link>
      </div>

      {/* Article header */}
      <header className="mb-8 pb-8 border-b border-white/10">
        {post.category && (
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-4"
            style={{ background: catStyle.bg, color: catStyle.text, border: `1px solid ${catStyle.border}` }}
          >
            {post.category}
          </span>
        )}

        <h1 className="text-[28px] sm:text-[36px] font-bold leading-snug text-white">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-[15px] leading-relaxed text-white/50 max-w-2xl">{post.excerpt}</p>
        )}

        {/* Author row */}
        <div className="mt-6 flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full grid place-items-center text-[13px] font-black text-black shrink-0"
            style={{ background: 'linear-gradient(135deg, #F8B432, #E8342C)' }}
          >
            {post.author?.[0] ?? 'I'}
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white/80">{post.author ?? 'IndianSight'}</div>
            <div className="text-[11px] text-white/35">
              {post.publishedAt ? formatDate(post.publishedAt) : ''}
            </div>
          </div>
        </div>
      </header>

      {/* Hero image */}
      {post.mainImage && (
        <div className="mb-8 overflow-hidden rounded-xl">
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full object-cover"
            style={{ maxHeight: '440px' }}
          />
        </div>
      )}

      {/* Article body */}
      <article className="max-w-2xl">
        {post.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : (
          <p className="text-sm text-white/50">Content coming soon.</p>
        )}
      </article>

      {/* Bottom nav */}
      <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors"
        >
          ← More Articles
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          style={{ background: '#F47A35' }}
        >
          Talk to Our Team →
        </Link>
      </div>
    </div>
  );
}
