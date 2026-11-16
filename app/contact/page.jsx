'use client';
import { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../../lib/site';

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
    a: 'A discovery sprint takes 1–2 weeks and a blueprint 2–4 weeks. Pilot advisory and scale readiness are optional and scoped to your roadmap.',
  },
  {
    q: 'Can you work with our existing tech team?',
    a: 'Yes. We are consulting-first, and when execution support is needed we work alongside your internal team or preferred partners.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // There is no backend mail service, so hand the message to the visitor's
  // email app, addressed to us, rather than silently discarding it.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k) => String(data.get(k) ?? '').trim();
    const subject = `Enquiry from ${get('firstName')} ${get('lastName')} (${get('company')})`;
    const body = [
      `Name: ${get('firstName')} ${get('lastName')}`,
      `Work email: ${get('email')}`,
      `Company: ${get('company')}`,
      `Service of interest: ${get('service') || 'Not specified'}`,
      '',
      get('message'),
    ].join('\r\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="wrap page">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_6fr] lg:gap-16">
        {/* Left — intro + contact details */}
        <div>
          <div className="kicker">Get in touch</div>
          <h1 className="h-hero mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            Let&apos;s build something <em>remarkable</em>
          </h1>
          <p className="copy mt-6 max-w-md">
            Tell us about your AI challenge. We&apos;ll get back to you within one business day with
            initial thoughts and next steps. Whether you&apos;re just starting your AI journey or
            looking to scale an existing system, our consulting team is ready to dive in.
          </p>

          <dl className="rule-list mt-10 max-w-md">
            {[
              { label: 'Phone', value: CONTACT_PHONE_DISPLAY, href: `tel:${CONTACT_PHONE}` },
              { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="kicker">{label}</dt>
                <dd>
                  <a href={href} className="text-[15px] text-white/85 transition-colors hover:text-white">
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="panel p-8 text-center sm:p-12">
              <h2 className="h-title">
                Almost <em>done</em>
              </h2>
              <p className="copy mx-auto mt-4 max-w-sm">
                Your email app should have opened with your message ready — press send there to
                reach us. If nothing opened, email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline">{CONTACT_EMAIL}</a>.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-7">
                Back to the form
              </button>
            </div>
          ) : (
            <form className="panel space-y-5 p-6 sm:p-8" onSubmit={handleSubmit}>
              <div className="text-[17px] font-medium tracking-tight text-white">Send us a message</div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-firstName" className="label">First name *</label>
                  <input
                    id="contact-firstName"
                    name="firstName"
                    autoComplete="given-name"
                    type="text"
                    required
                    placeholder="Rajesh"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="contact-lastName" className="label">Last name *</label>
                  <input
                    id="contact-lastName"
                    name="lastName"
                    autoComplete="family-name"
                    type="text"
                    required
                    placeholder="Kumar"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="label">Work email *</label>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  placeholder="rajesh@company.com"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="contact-company" className="label">Company *</label>
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  type="text"
                  required
                  placeholder="Acme Corp"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="label">Service of interest</label>
                <select id="contact-service" name="service" className="field appearance-none">
                  <option value="" style={{ background: '#0A0B0F', color: 'white' }}>Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ background: '#0A0B0F', color: 'white' }}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="label">Tell us about your project *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your business challenge, the data you have, and the outcome you're looking for..."
                  className="field resize-y"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full py-3.5">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-24">
        <div className="kicker">FAQ</div>
        <h2 className="h-display mt-3">
          Common <em>questions</em>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {faq.map(({ q, a }) => (
            <div key={q} className="border-t border-white/10 py-7">
              <h3 className="text-[17px] font-medium tracking-tight text-white">{q}</h3>
              <p className="copy mt-2 text-[14px]">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
