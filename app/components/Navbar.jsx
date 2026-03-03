'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'SERVICES', href: '/#services' },
  { label: 'APPROACH', href: '/#approach' },
  { label: 'WHY US', href: '/about' },
  { label: 'CASE STUDIES', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'rgba(10,10,10,0.75)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-5 py-3 sm:px-8">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-9 w-9 overflow-hidden rounded-full bg-white">
            <Image src="/logo.png" alt="IndianSight" width={36} height={36} className="h-full w-full object-cover" />
          </div>
          <span className="text-[12px] font-black tracking-[0.22em] text-white">
            INDIAN<span className="text-white/40 mx-1">—</span>SIGHT
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-[10px] font-semibold tracking-widest text-white/60 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-white ${
                pathname === item.href ? 'text-white' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:business@indiansight.in"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/70 transition hover:border-white/30 hover:text-white md:inline-flex"
          >
            EMAIL US
          </a>
          <Link
            href="/contact"
            className="rounded-full px-5 py-2 text-[10px] font-black tracking-widest text-black transition hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #F8B432 0%, #F47A35 50%, #E8342C 100%)' }}
          >
            CONTACT US
          </Link>

          {/* Mobile burger */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] w-4 bg-white rounded-full transition-all ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] w-4 bg-white rounded-full transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-4 bg-white rounded-full transition-all ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t px-5 pb-4 pt-3 lg:hidden"
          style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(10,10,10,0.97)' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[11px] font-semibold tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-full px-5 py-2.5 text-[10px] font-black tracking-widest text-black"
            style={{ background: 'linear-gradient(135deg, #F8B432 0%, #F47A35 50%, #E8342C 100%)' }}
          >
            CONTACT US
          </Link>
        </nav>
      )}
    </header>
  );
}
