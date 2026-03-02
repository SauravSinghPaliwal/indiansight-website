'use client';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  'AI Strategy & Roadmap',
  'GenAI / RAG Advisory',
  'Governance & Risk',
  'Architecture & Infra Advisory',
  'MLOps & Production Readiness',
  'Enablement & Workshops',
  'Other',
];

const faq = [
  {
    q: 'How long does a typical engagement take?',
    a: 'Discovery & scoping takes 1–2 weeks. A focused blueprint is 2–4 weeks. Enterprise production advisory ranges from 3–6 months.',
  },
  {
    q: 'Do you work with startups or only large enterprises?',
    a: 'Primarily mid-market and enterprise, but we selectively work with high-growth Series B+ startups with strong data foundations.',
  },
  {
    q: 'How do you handle data security and privacy?',
    a: 'We sign NDA and DPA on day one. All work can be done within your private cloud environment under your security policies.',
  },
  {
    q: 'Can you work with our existing tech team?',
    a: 'Absolutely — co-development and knowledge transfer to your internal team is standard in most of our engagements.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[28px] p-8" style={{ background: '#2B2C30' }}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-widest text-white/85 ring-1 ring-white/10">
          GET IN TOUCH
        </div>
        <h1 className="mt-4 text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[48px]">
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          REMARKABLE
        </h1>
        <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/70">
          Tell us about your AI challenge. We&apos;ll get back to you within one business day with
          initial thoughts and next steps.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left — info */}
        <div className="space-y-4">
          <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-4">How Can We Help?</div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Whether you&apos;re just starting your AI journey or looking to scale an existing system,
              our consulting team is ready to dive in.
            </p>

            {[
              { icon: '📍', label: 'Headquarters', value: '5th Floor, Prestige Tech Park\nBengaluru, Karnataka 560103' },
              { icon: '✉️', label: 'Email', value: 'business@indiansight.in' },
              { icon: '🕐', label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 mb-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-xl">{icon}</div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-white">{label}</div>
                  <p className="mt-0.5 text-sm text-white/60" style={{ whiteSpace: 'pre-line' }}>{value}</p>
                </div>
              </div>
            ))}
          </section>

          <div className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
            <div className="text-[11px] font-black uppercase tracking-widest text-white mb-1">Also in</div>
            <p className="text-sm text-white/60">Mumbai · Delhi NCR · Hyderabad · Chennai</p>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="rounded-[28px] bg-white/5 p-8 ring-1 ring-white/10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <div className="text-2xl font-black uppercase tracking-tight text-white mb-2">Message Received!</div>
              <p className="text-sm text-white/70 max-w-sm mx-auto">
                Thank you for reaching out. One of our consultants will review your message and get
                back to you within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="text-[12px] font-black uppercase tracking-wide text-white mb-2">Send Us a Message</div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rajesh"
                    className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 ring-1 ring-white/20 outline-none focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Kumar"
                    className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 ring-1 ring-white/20 outline-none focus:ring-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rajesh@company.com"
                  className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 ring-1 ring-white/20 outline-none focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Corp"
                  className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 ring-1 ring-white/20 outline-none focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">
                  Service of Interest
                </label>
                <select
                  className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white ring-1 ring-white/20 outline-none focus:ring-white/50 appearance-none"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ background: '#1e2535', color: 'white' }}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your business challenge, the data you have, and the outcome you're looking for..."
                  className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 ring-1 ring-white/20 outline-none focus:ring-white/50 resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-white py-3 text-[11px] font-black uppercase tracking-widest text-black hover:bg-white/90 transition-colors"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section className="rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-2">FAQ</div>
        <div className="text-2xl font-black uppercase tracking-tight text-white mb-5">Common Questions</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {faq.map(({ q, a }) => (
            <div key={q} className="rounded-[22px] bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-[12px] font-black uppercase tracking-wide text-white mb-2">{q}</div>
              <p className="text-sm text-white/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
