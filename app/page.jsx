import RequestForm from '../components/RequestForm';
import {
  BUSINESS,
  CITIES,
  FAQS,
  NAV_LINKS,
  SERVICES,
  TESTIMONIALS,
} from '../lib/site-data';

const PHONE_HREF = BUSINESS.phoneHref;
const PHONE_DISPLAY = BUSINESS.phoneDisplay;

// Safety orange + near-black text = ~7.5:1 contrast (white on orange is only ~2.9:1)
const btnCall =
  'inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-xl bg-safety px-6 py-3.5 text-lg font-black tracking-tight text-steel-dark shadow-cta transition hover:bg-safety-dark active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety sm:w-auto';

const btnCallCompact =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-safety px-5 py-3 text-base font-extrabold text-steel-dark shadow-cta transition hover:bg-safety-dark';

// Inline SVG only — zero image requests, so the page paints instantly on 4G.
const ICONS = {
  droplet: <path d="M12 3.2 6.9 8.6a7.2 7.2 0 1 0 10.2 0L12 3.2Z" />,
  house: (
    <>
      <path d="M3.5 10.8 12 4l8.5 6.8" />
      <path d="M5.5 10.2V20h13v-9.8" />
      <path d="M9.5 20v-4.5a2.5 2.5 0 0 1 5 0V20" />
    </>
  ),
  heater: (
    <>
      <rect x="7" y="3.5" width="10" height="13" rx="3.2" />
      <path d="M12 16.5V20.5" />
      <path d="M9.5 7.5h5" />
    </>
  ),
  flame: <path d="M12 3.5c2.9 3.1 4.7 5.4 4.7 8.1a4.7 4.7 0 1 1-9.4 0c0-2.7 1.8-5 4.7-8.1Z" />,
  sink: (
    <>
      <path d="M4 11h16" />
      <path d="M6 11v4.5A3.5 3.5 0 0 0 9.5 19h5a3.5 3.5 0 0 0 3.5-3.5V11" />
      <path d="M12 11V6.5A2.5 2.5 0 0 1 14.5 4" />
    </>
  ),
  tag: (
    <>
      <path d="M4 12.5 12.5 4H20v7.5L11.5 20 4 12.5Z" />
      <circle cx="16" cy="8" r="1.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4 3 7.2 7 8.5 4-1.3 7-4.5 7-8.5V6l-7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9.5" r="2.5" />
      <path d="M15.2 19a4.6 4.6 0 0 1 5.6-4.2" />
    </>
  ),
  phone: (
    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  ),
  check: <path d="m4.5 12.75 6 6 9-13.5" />,
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
};

function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function Stars({ className = 'text-gold' }) {
  return (
    <span className={`text-base leading-none tracking-tight ${className}`}>
      <span aria-hidden="true">★★★★★</span>
      <span className="sr-only">Rated {BUSINESS.rating} out of 5 stars</span>
    </span>
  );
}

function PhoneCta({ children, className = btnCall }) {
  return (
    <a href={PHONE_HREF} className={className}>
      <Icon name="phone" className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      {/* ── Compact header ───────────────────────────────────── */}
      <header className="bg-white">
        <div className="h-1.5 w-full bg-safety" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-steel text-sm font-black text-white">
              DP
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight text-steel sm:text-base">
                {BUSINESS.name}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                Long Beach · Gulfport · Pass Christian, MS
              </span>
            </span>
          </div>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-lg bg-safety px-4 py-2.5 text-sm font-black text-steel-dark transition hover:bg-safety-dark sm:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
        <nav
          aria-label="Page sections"
          className="border-t border-slate-200 bg-slate-50"
        >
          <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-1.5 text-sm font-bold text-steel [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block whitespace-nowrap rounded-lg px-2.5 py-1.5 transition hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ── Hero: everything needed to call is above the fold ── */}
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-7 sm:pt-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-400/40">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open {BUSINESS.hoursShort}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white ring-1 ring-white/25">
              <Icon name="clock" className="h-3.5 w-3.5" />
              Weekend Emergencies — Call Anytime
            </span>
          </div>

          <h1 className="mt-5 text-[30px] font-black leading-[1.08] tracking-tight sm:text-5xl">
            Emergency Plumber in{' '}
            <span className="underline decoration-safety decoration-4 underline-offset-4">
              Long Beach, MS
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-slate-200 sm:text-lg">
            Leaks, under-house plumbing, water heaters and gas lines — fixed fast
            by a local husband-and-wife team with 10+ years on the Mississippi
            Gulf Coast. Typical emergency response:{' '}
            <strong className="font-extrabold text-safety-light">
              {BUSINESS.responseTime}
            </strong>
            .
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-semibold text-slate-200">
            <Stars />
            <span>
              {BUSINESS.rating} rating · {BUSINESS.reviewCount} reviews
            </span>
          </div>

          <div className="mt-6">
            <PhoneCta className={`${btnCall} cta-pulse`}>
              Call Now: {PHONE_DISPLAY}
            </PhoneCta>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-300">
              Tap to call · A real person answers · No phone tree
            </p>
            <a
              href="#request"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-safety-light underline decoration-safety/50 underline-offset-4 transition hover:decoration-safety-light"
            >
              Or request service online
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <section
        aria-label="Why you can trust us"
        className="border-y border-slate-200 bg-slate-50"
      >
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 text-[13px] font-bold text-steel sm:grid-cols-4 sm:text-sm">
          {[
            { icon: 'shield', label: 'Licensed & Insured' },
            { icon: 'users', label: `${BUSINESS.yearsInBusiness} Years Local` },
            { icon: 'check', label: `${BUSINESS.rating}★ · ${BUSINESS.reviewCount} Reviews` },
            { icon: 'clock', label: '12-Month Guarantee' },
          ].map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <Icon name={item.icon} className="h-5 w-5 shrink-0 text-safety-deep" />
              {item.label}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Emergency "do this right now" band ──────────────── */}
      <section className="bg-safety text-steel-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold leading-snug sm:text-base">
            Water actively leaking right now? Shut it off at the main valve,
            then call us — we will walk you through the rest.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-lg bg-steel-dark px-4 py-2.5 text-base font-black text-white transition hover:bg-steel"
          >
            <Icon name="phone" className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-safety-deep">
          What we fix
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-steel sm:text-3xl">
          Straightforward plumbing help, no jargon
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          If it is leaking, backed up or not working the way it should, call. We
          will tell you straight whether it is an emergency or something we can
          schedule at your convenience.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-steel text-safety-light">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-[17px] font-extrabold leading-snug text-steel">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.desc}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-steel p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-base font-bold leading-snug">
            Not sure if it is an emergency? Call and ask. You will get a straight
            answer and a real ETA — no pressure, no sales pitch.
          </p>
          <PhoneCta className={`${btnCallCompact} w-full shrink-0 sm:w-auto`}>
            {PHONE_DISPLAY}
          </PhoneCta>
        </div>
      </section>

      {/* ── Why us + how it works ───────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-2xl font-black leading-tight tracking-tight text-steel sm:text-3xl">
            Why your neighbors call us first
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: 'users',
                title: 'Husband-and-wife team',
                desc: 'You are calling a local family business, not a call center. Jason and Ashley usually take the call and do the work.',
              },
              {
                icon: 'tag',
                title: 'Guaranteed lowest local rates',
                desc: 'Free estimates before work starts and honest pricing — you approve the number, then we start.',
              },
              {
                icon: 'shield',
                title: '12-Month Workmanship Guarantee',
                desc: 'Every repair is guaranteed for a full year. If it is not right, we come back and fix it.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-safety/15 text-safety-deep">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-[17px] font-extrabold text-steel">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-base font-extrabold text-steel">
              How it works — three steps, no runaround
            </h3>
            <ol className="mt-5 grid gap-5 sm:grid-cols-3">
              {[
                'Call or send the short request form.',
                'We confirm an arrival window and give you a free estimate.',
                'We fix it, and it is covered for 12 months.',
              ].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-steel text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm font-semibold leading-snug text-slate-700">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────── */}
      <section id="area" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-safety-deep">
          Service area
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-steel sm:text-3xl">
          Local coverage across the Gulf Coast
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          We are based right here, so we are not driving an hour to reach you.
          These are the cities and ZIP codes we cover every day.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {CITIES.map((city) => (
            <li
              key={city.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-lg font-extrabold text-steel">
                <Icon name="check" className="h-5 w-5 text-safety-deep" />
                {city.name}, MS
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                ZIP {city.zips.join(', ')}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
          Just outside these areas and still need help?{' '}
          <a href={PHONE_HREF} className="font-bold text-safety-deep underline">
            Call {PHONE_DISPLAY}
          </a>{' '}
          — we will tell you honestly whether we can get to you or point you to
          someone who can.
        </p>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section id="reviews" className="border-y border-slate-200 bg-steel text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
            Reviews
          </p>
          <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight sm:text-3xl">
            Rated {BUSINESS.rating} stars from {BUSINESS.reviewCount} reviews
          </h2>
          <p className="mt-3 text-[15px] text-slate-300">
            From Google, BBB and Angi — and from neighbors in Long Beach and
            Gulfport.
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <li
                key={testimonial.name}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/15 sm:p-6"
              >
                <Stars />
                <blockquote className="mt-3 text-[15px] font-medium leading-relaxed text-slate-100">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-4 text-sm font-bold text-white">
                  {testimonial.name}
                  <span className="font-medium text-slate-300">
                    {' '}
                    · {testimonial.city}, MS
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <PhoneCta className={`${btnCallCompact} w-full sm:w-auto`}>
              Talk to us now: {PHONE_DISPLAY}
            </PhoneCta>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-black leading-tight tracking-tight text-steel sm:text-3xl">
          Questions people ask before they call
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          Straight answers — including the ones other plumbers dodge.
        </p>

        <div className="mt-7 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {FAQS.map((faq, index) => (
            <details key={faq.q} className="group px-4 py-4 sm:px-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] font-extrabold leading-snug text-steel marker:hidden">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-xl font-black leading-none text-safety-deep transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          Still have a question?{' '}
          <a href={PHONE_HREF} className="font-bold text-safety-deep underline">
            Call {PHONE_DISPLAY}
          </a>{' '}
          — talking to a plumber beats reading about one.
        </p>
      </section>

      {/* ── Secondary CTA: request service form ─────────────── */}
      <section id="request" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-safety-deep">
              Request service
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-steel sm:text-3xl">
              Prefer not to call? Send us the details.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Fill this out and we will call you back — usually within a few
              minutes during business hours. If it is an active leak, calling is
              still the fastest way to reach us.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Free estimates before any work starts',
                'Guaranteed lowest local rates',
                '12-Month Workmanship Guarantee on repairs',
                'Licensed, insured and locally owned',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-safety-deep" />
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={PHONE_HREF}
              className="mt-7 inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-xl border-2 border-steel px-6 py-3.5 text-lg font-black tracking-tight text-steel transition hover:bg-steel hover:text-white sm:w-auto"
            >
              <Icon name="phone" className="h-5 w-5 shrink-0" />
              Call instead: {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {BUSINESS.hoursLong} · {BUSINESS.weekendNote}
            </p>
          </div>

          <RequestForm />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-steel-dark text-slate-300">
        <div className="mx-auto max-w-6xl px-4 pb-28 pt-12 sm:pb-32">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-base font-extrabold tracking-tight text-white">
                {BUSINESS.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                Local, licensed and insured plumbers serving the Mississippi
                Gulf Coast for {BUSINESS.yearsInBusiness} years. Husband-and-wife
                owned and operated.
              </p>
              <p className="mt-3 text-sm font-bold text-white">
                {BUSINESS.rating}★ from {BUSINESS.reviewCount} reviews
              </p>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-wider text-white">
                Services
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {SERVICES.slice(0, 5).map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-wider text-white">
                Service Area
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {CITIES.map((city) => (
                  <li key={city.name}>
                    {city.name}, MS {city.zips[0]}
                  </li>
                ))}
                <li>+ surrounding Gulf Coast areas</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-wider text-white">
                Call or Text
              </p>
              <a
                href={PHONE_HREF}
                className="mt-3 inline-block text-xl font-black tracking-tight text-white underline decoration-safety decoration-2 underline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>
              <ul className="mt-3 space-y-2 text-sm">
                <li>{BUSINESS.hoursLong}</li>
                <li>{BUSINESS.weekendNote}</li>
                <li>{BUSINESS.guarantee}</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-400">
            © {new Date().getFullYear()} {BUSINESS.name}. Licensed &amp; insured.
            All repairs backed by our {BUSINESS.guarantee}. Serving {BUSINESS.city},
            Gulfport and Pass Christian, Mississippi.
          </p>
        </div>
      </footer>

      {/* ── Sticky call bar: always one tap from a phone call ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-6px_20px_-8px_rgba(0,0,0,0.25)] backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-stretch gap-2 px-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-2.5">
          <a
            href="#request"
            className="flex shrink-0 items-center gap-1.5 rounded-xl border-2 border-steel px-3 text-[13px] font-bold text-steel transition hover:bg-slate-100"
          >
            Request
            <span className="hidden sm:inline">Service</span>
          </a>
          <a
            href={PHONE_HREF}
            className="flex min-h-[52px] min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-safety px-3 py-3 text-[15px] font-black tracking-tight text-steel-dark shadow-cta transition hover:bg-safety-dark sm:text-base"
          >
            <Icon name="phone" className="h-5 w-5 shrink-0" />
            <span className="truncate">Call Now: {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </>
  );
}
