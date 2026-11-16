import Link from 'next/link';
import { client, formatDate } from '../../lib/sanity';
import { allPostsQuery } from '../../lib/queries';

export const metadata = {
  title: 'Blog — IndianSight',
  description: "Insights on AI strategy, governance, and production readiness from IndianSight's consulting team.",
};

export const revalidate = 3600;

const CAT_COLOR = {
  strategy:    '#F47A35',
  governance:  '#9B9EFF',
  engineering: '#4ADE80',
  research:    '#F87171',
  product:     '#FCD34D',
};
function catColor(cat = '') {
  return CAT_COLOR[cat?.toLowerCase()] ?? '#F47A35';
}

function CatLabel({ cat, size = 'sm' }) {
  if (!cat) return null;
  const color = catColor(cat);
  return (
    <span
      className={`font-bold uppercase tracking-widest ${size === 'xs' ? 'text-[9px]' : 'text-[10px]'}`}
      style={{ color }}
    >
      {cat}
    </span>
  );
}

function Meta({ author, date }) {
  return (
    <p className="text-[11px] text-white/35 flex items-center gap-1.5 flex-wrap">
      {author && <span className="text-white/50">{author}</span>}
      {author && date && <span>·</span>}
      {date && <span>{formatDate(date)}</span>}
    </p>
  );
}

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await client.fetch(allPostsQuery);
  } catch (e) {
    console.error('Sanity fetch failed:', e.message);
  }

  // Split: hero = first, sidebar = next 4, grid = the rest
  const [hero, ...remaining] = posts;
  const sidebar = remaining.slice(0, 4);
  const grid    = remaining.slice(4);

  if (!posts.length) {
    return (
      <div className="wrap page">
        <Masthead />
        <div className="mt-12 text-center py-16 text-white/30 text-sm">
          No posts published yet — check back soon.
        </div>
      </div>
    );
  }

  return (
    <div className="wrap page">
      <Masthead />

      {/* ── Hero zone ─────────────────────────────────── */}
      <section className="mt-10 flex flex-col lg:flex-row gap-0 border border-white/10 rounded-[24px] overflow-hidden">

        {/* LEFT — Hero article */}
        <Link
          href={`/blog/${hero.slug}`}
          className="group lg:w-[63%] flex flex-col border-b lg:border-b-0 lg:border-r border-white/8"
          style={{ background: '#0A0B0F' }}
        >
          {hero.mainImage ? (
            <div className="overflow-hidden" style={{ height: '300px' }}>
              <img
                src={hero.mainImage}
                alt={hero.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div
              className="flex items-center justify-center"
              style={{ height: '200px', background: 'linear-gradient(135deg,rgba(244,122,53,.15),rgba(116,119,255,.1))' }}
            >
              <span className="text-7xl font-black text-white/5 uppercase">{hero.title?.[0] ?? 'I'}</span>
            </div>
          )}

          <div className="p-6 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CatLabel cat={hero.category} />
                {hero.category && (
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">· Latest</span>
                )}
              </div>
              <h2 className="font-serif text-[28px] sm:text-[36px] leading-[1.1] text-white group-hover:text-white/80 transition-colors">
                {hero.title}
              </h2>
              {hero.excerpt && (
                <p className="mt-2 text-sm text-white/45 leading-relaxed line-clamp-2">{hero.excerpt}</p>
              )}
            </div>
            <Meta author={hero.author} date={hero.publishedAt} />
          </div>
        </Link>

        {/* RIGHT — Sidebar compact list */}
        {sidebar.length > 0 && (
          <div className="lg:w-[37%] flex flex-col divide-y divide-white/8" style={{ background: '#06070A' }}>
            {sidebar.map((post) => (
              <SidebarItem key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* ── More Articles grid ─────────────────────────── */}
      {grid.length > 0 && (
        <section className="mt-10">
          <SectionHead>More Articles</SectionHead>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 border border-white/10 rounded-[24px] overflow-hidden">
            {grid.map((post) => (
              <GridCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ── Contact CTA ───────────────────────────────── */}
      <section className="panel mt-16 px-6 py-14 text-center">
        <div className="kicker">Stay in touch</div>
        <h3 className="h-title mt-3">
          Want these tailored <em>to your industry?</em>
        </h3>
        <p className="copy mx-auto mt-4 max-w-sm">
          Tell us what you&apos;re working on and we&apos;ll point you to the most relevant notes.
        </p>
        <Link href="/contact" className="btn btn-primary mt-7">
          Talk to our team
        </Link>
      </section>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────── */

function Masthead() {
  return (
    <header className="pb-8 border-b border-white/10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="kicker mb-3">IndianSight</p>
          <h1 className="h-hero" style={{ fontSize: 'clamp(3.2rem, 8vw, 6rem)' }}>
            <em>Insights</em>
          </h1>
        </div>
        <p className="copy max-w-[280px] text-[14px]">
          AI strategy, governance &amp; production readiness — from our team.
        </p>
      </div>
    </header>
  );
}

function SectionHead({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="kicker">{children}</span>
      <div className="flex-1 h-px bg-white/8" />
    </div>
  );
}

function SidebarItem({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-3 p-4 hover:bg-white/3 transition-colors"
    >
      {/* Small thumbnail */}
      {post.mainImage ? (
        <div className="shrink-0 overflow-hidden rounded-md" style={{ width: '76px', height: '56px' }}>
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.06]"
          />
        </div>
      ) : (
        <div
          className="shrink-0 rounded-md flex items-center justify-center"
          style={{ width: '76px', height: '56px', background: 'rgba(244,122,53,0.08)' }}
        >
          <span className="text-lg font-black text-white/10 uppercase">{post.title?.[0] ?? 'I'}</span>
        </div>
      )}

      {/* Text */}
      <div className="min-w-0 flex flex-col gap-1">
        <CatLabel cat={post.category} size="xs" />
        <h3 className="text-[13px] font-semibold text-white leading-snug line-clamp-2 group-hover:text-white/75 transition-colors">
          {post.title}
        </h3>
        <Meta date={post.publishedAt} />
      </div>
    </Link>
  );
}

function GridCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col p-5 transition-colors"
      style={{ background: '#0A0B0F' }}
    >
      {post.mainImage ? (
        <div className="overflow-hidden rounded-lg mb-3" style={{ height: '130px' }}>
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full h-full object-cover transition duration-400 group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div
          className="rounded-lg mb-3 flex items-center justify-center"
          style={{ height: '130px', background: 'rgba(244,122,53,0.07)' }}
        />
      )}
      <CatLabel cat={post.category} size="xs" />
      <h3 className="mt-1.5 text-[14px] font-semibold text-white leading-snug line-clamp-2 group-hover:text-white/80 transition-colors">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="mt-1.5 text-[12px] text-white/40 leading-relaxed line-clamp-2">{post.excerpt}</p>
      )}
      <div className="mt-3">
        <Meta author={post.author} date={post.publishedAt} />
      </div>
    </Link>
  );
}
