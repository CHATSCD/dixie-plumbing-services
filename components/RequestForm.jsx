'use client';

import { useState } from 'react';
import { BUSINESS } from '../lib/site-data';

const SERVICE_OPTIONS = [
  'Emergency leak / burst pipe',
  'Under-house plumbing',
  'Water heater install / replacement',
  'Gas line repair',
  'New sink / toilet / fixture',
  'Not sure yet — please advise',
];

const URGENCY_OPTIONS = [
  'Emergency — need help now',
  'Today if possible',
  'This week',
  'Just getting an estimate',
];

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/25';

const labelClass = 'block text-sm font-bold text-steel';

// Safety orange + near-black text ≈ 7.5:1 contrast (white on orange is only ~2.9:1)
const ctaClass =
  'flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-safety px-5 py-3 text-lg font-black text-steel-dark transition hover:bg-safety-dark';

export default function RequestForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [firstName, setFirstName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real people never see this field.
    if (data.company) return;
    if (!data.name || !data.phone) return;

    setStatus('sending');
    setFirstName(String(data.name).trim().split(' ')[0]);

    try {
      const response = await fetch('/api/request-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Request failed');

      form.reset();
      setStatus('sent');
    } catch (error) {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="rounded-2xl border-2 border-emerald-300 bg-white p-6 shadow-sm"
      >
        <p className="text-lg font-black text-steel">
          Got it{firstName ? `, ${firstName}` : ''} — your request is in.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We will call you back at the number you gave us. During business hours
          ({BUSINESS.hoursShort}) that is usually within a few minutes.
        </p>
        <a href={BUSINESS.phoneHref} className={`mt-5 ${ctaClass}`}>
          Leaking right now? Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div
        role="alert"
        className="rounded-2xl border-2 border-safety-deep bg-white p-6 shadow-sm"
      >
        <p className="text-lg font-black text-steel">
          Online requests are briefly unavailable.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Nothing was lost — we just could not send it from here. So we do not
          leave you waiting, call us directly and we will take the details over
          the phone.
        </p>
        <a href={BUSINESS.phoneHref} className={`mt-5 ${ctaClass}`}>
          Call Now: {BUSINESS.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="First and last name"
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Best phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="(228) 000-0000"
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            What do you need?
          </label>
          <select id="service" name="service" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="urgency">
            How urgent is it?
          </label>
          <select id="urgency" name="urgency" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose urgency
            </option>
            {URGENCY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="city">
            City or ZIP <span className="font-medium text-slate-500">(optional)</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder="Long Beach, Gulfport or Pass Christian"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="details">
            Anything else we should know?{' '}
            <span className="font-medium text-slate-500">(optional)</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={3}
            placeholder="Where is the leak? Is the water shut off? Is anyone home?"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-safety px-5 py-3.5 text-lg font-black tracking-tight text-steel-dark shadow-cta transition hover:bg-safety-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : 'Send My Request'}
      </button>

      <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
        We only use this to contact you about your plumbing. No spam, no lists.
        Need help right now?{' '}
        <a href={BUSINESS.phoneHref} className="font-bold text-safety-deep underline">
          Call {BUSINESS.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
