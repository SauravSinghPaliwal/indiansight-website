import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="rounded-[28px] p-8 text-center sm:p-14" style={{ background: '#1E1F24' }}>
      <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Error 404</div>
      <h1 className="mt-3 font-black uppercase tracking-tight text-white" style={{ fontSize: 'var(--display-sm)' }}>
        Page not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
        This page doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors"
        >
          Read the blog
        </Link>
      </div>
    </section>
  );
}
