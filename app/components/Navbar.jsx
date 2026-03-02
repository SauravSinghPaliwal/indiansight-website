'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'AI CONSULTING', href: '/#ai-consulting' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'APPROACH', href: '/#approach' },
  { label: 'WHY US', href: '/about' },
  { label: 'BLOGS', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 21l-4.3-4.3m1.3-5.2a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6zm0 1.8l8 6 8-6"
        stroke="#111827"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="rounded-full bg-white px-5 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)] ring-1 ring-black/10">
      <div className="flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-black text-white shadow-sm">
            <span className="text-[11px] font-black tracking-widest">IS</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] font-black tracking-[0.28em]">
            <span className="text-black/70">—</span>
            <span className="text-black">INDIAN&nbsp;SIGHT</span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 text-[10px] font-semibold tracking-widest text-black/70 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-2 py-1 hover:bg-black/5 ${
                pathname === item.href ? 'text-black' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 md:inline-flex"
            aria-label="Search"
          >
            <IconSearch />
          </button>
          <a
            href="mailto:business@indiansight.in"
            className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-[10px] font-semibold tracking-widest text-black/70 hover:bg-black/5 md:inline-flex"
          >
            <IconMail />
            EMAIL
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-2 text-[10px] font-semibold tracking-widest text-white shadow-[0_14px_35px_rgba(0,0,0,0.28)] hover:-translate-y-px hover:shadow-[0_18px_45px_rgba(0,0,0,0.32)] active:translate-y-0 transition-all"
          >
            CONTACT US
          </Link>

          {/* Mobile burger */}
          <button
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full bg-black/5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block h-[2px] w-5 bg-black rounded-full transition-all" />
            <span className="block h-[2px] w-5 bg-black rounded-full transition-all" />
            <span className="block h-[2px] w-5 bg-black rounded-full transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mt-3 flex flex-col gap-1 border-t border-black/10 pt-3 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-[11px] font-semibold tracking-widest text-black/70 hover:bg-black/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
