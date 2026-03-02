import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 sm:flex-row sm:items-center">
      <div className="text-xs text-white/70">
        <span className="font-semibold text-white/85">Contact:</span>{' '}
        <a href="mailto:business@indiansight.in" className="hover:text-white transition-colors">
          business@indiansight.in
        </a>
      </div>
      <div className="flex flex-wrap gap-2 text-[10px] font-semibold tracking-widest text-white/70">
        {[
          { label: 'AI STRATEGY', href: '/#services' },
          { label: 'GENAI / RAG', href: '/#services' },
          { label: 'GOVERNANCE', href: '/#services' },
          { label: 'ARCHITECTURE', href: '/#services' },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
