import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../../lib/site';

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'AI strategy', href: '/#services' },
      { label: 'GenAI / RAG', href: '/#services' },
      { label: 'Governance', href: '/#services' },
      { label: 'Architecture', href: '/#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Approach', href: '/#approach' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="wrap py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="h-title">
              Indian<em>Sight</em>
            </div>
            <p className="copy mt-4 max-w-xs">
              Consulting-first AI. Built for India, ready for the world.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="kicker">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="transition-colors hover:text-white">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <div>© {new Date().getFullYear()} IndianSight</div>
        </div>
      </div>
    </footer>
  );
}
