import Link from 'next/link';
import { HorizonScene } from './components/Scenes';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <HorizonScene fadeBottom />
      <div className="wrap relative py-40 text-center">
        <div className="kicker">Error 404</div>
        <h1 className="h-hero mt-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
          Page <em>not found</em>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[14px] text-white/80">
          This page doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/blog" className="btn btn-outline">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
