'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Approach', href: '/#approach' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => !href.includes('#') && pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      <div
        className="mx-auto max-w-[820px] rounded-[26px] border transition-colors duration-300"
        style={{
          background: scrolled || open ? 'rgba(6,8,14,0.82)' : 'rgba(6,8,14,0.35)',
          borderColor: 'rgba(255,255,255,0.16)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <div className="flex h-[52px] items-center justify-between gap-4 pl-3 pr-2">
          {/* Brand */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-full pr-2">
            <span className="h-7 w-7 overflow-hidden rounded-full bg-white">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-full w-full object-cover" />
            </span>
            <span className="text-[14px] font-semibold tracking-tight text-white">IndianSight</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-[13px] md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-white ${isActive(item.href) ? 'text-white' : 'text-white/65'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-1.5">
            <a
              href="mailto:business@indiansight.in"
              className="hidden rounded-full px-3 py-2 text-[13px] text-white/75 transition-colors hover:text-white md:inline-flex"
            >
              Email us
            </a>
            <Link href="/contact" className="btn btn-outline px-4 py-2">
              Contact
            </Link>

            {/* Mobile burger */}
            <button
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`block h-[1.5px] w-4 rounded-full bg-white transition-all ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] w-4 rounded-full bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] w-4 rounded-full bg-white transition-all ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:business@indiansight.in"
              className="block py-3 text-[15px] text-white/75 transition-colors hover:text-white"
            >
              Email us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
