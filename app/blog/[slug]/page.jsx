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
  try {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug });
    if (post) return { title: `${post.title} — IndianSight Blog` };
  } catch {}
  return { title: 'Blog — IndianSight' };
}

// Portable Text component overrides — styled to match the site
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-sm text-white/65 leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[18px] font-black uppercase tracking-wide text-white mt-10 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[14px] font-black uppercase tracking-wide text-white mt-7 mb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 pl-5 my-5 italic text-white/50 text-sm leading-relaxed" style={{ borderColor: '#F47A35' }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-2 mb-5 mt-1">{children}</ul>,
    number: ({ children }) => <ol className="space-y-2 mb-5 mt-1 list-decimal list-inside">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2 text-sm text-white/65 leading-relaxed">
        <span className="mt-0.5 text-white/30 shrink-0">—</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-sm text-white/65 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white/90 font-semibold">{children}</strong>,
    em: ({ children }) => <em className="text-white/70 italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-[12px] font-mono text-white/80">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-white/80 hover:text-white transition-colors"
        style={{ textDecorationColor: '#F47A35' }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <div className="my-7 overflow-hidden rounded-[18px]">
          <img src={value.asset.url} alt={value.alt || ''} className="w-full object-cover" />
        </div>
      ) : null,
  },
};

export default async function BlogPostPage({ params }) {
  let post = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug: params.slug });
  } catch (e) {
    console.error('Sanity fetch error:', e.message);
  }

  if (!post) {
    return (
      <div className="space-y-6">
        <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/50 hover:text-white/80 mb-5">
            ← BACK TO BLOG
          </Link>
          <h1 className="text-[32px] font-black uppercase text-white">Post not found</h1>
          <p className="mt-3 text-sm text-white/60">This article doesn't exist or hasn't been published yet.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/50 hover:text-white/80 mb-5 transition-colors"
        >
          ← BACK TO BLOG
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {post.category && (
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
              {post.category.toUpperCase()}
            </span>
          )}
        </div>

        {post.mainImage && (
          <div className="mb-6 overflow-hidden rounded-[18px]">
            <img src={post.mainImage} alt={post.title} className="h-64 w-full object-cover" />
          </div>
        )}

        <h1 className="text-[32px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[44px]">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">{post.excerpt}</p>
        )}

        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <div
            className="grid h-10 w-10 place-items-center rounded-full text-[13px] font-black text-black"
            style={{ background: 'linear-gradient(135deg, #F8B432, #E8342C)' }}
          >
            {post.author?.[0] ?? 'I'}
          </div>
          <div>
            <div className="text-[12px] font-black uppercase tracking-wide text-white">{post.author ?? 'IndianSight'}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">
              {post.publishedAt ? formatDate(post.publishedAt) : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="rounded-[28px] bg-white/5 p-8 ring-1 ring-white/10">
        <div className="max-w-2xl">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-sm text-white/60">Content coming soon.</p>
          )}
        </div>
      </section>

      {/* Bottom nav */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors"
        >
          ← More Articles
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
        >
          Talk to Our Team →
        </Link>
      </div>
    </div>
  );
}
