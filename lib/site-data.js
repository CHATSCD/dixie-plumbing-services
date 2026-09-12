// Single source of truth for business info. Used by the page UI *and* the
// schema.org structured data in app/layout.jsx, so the two can never drift.

export const BUSINESS = {
  name: 'Dixie Plumbing Services',
  phoneDisplay: '(228) 861-3440',
  phoneHref: 'tel:+12288613440',
  phoneE164: '+1-228-861-3440',
  city: 'Long Beach',
  region: 'MS',
  postalCode: '39560',
  country: 'US',
  yearsInBusiness: '10+',
  rating: '5.0',
  reviewCount: '50+',
  responseTime: '30–60 minutes',
  hoursShort: 'Mon–Fri 7 AM–6 PM',
  hoursLong: 'Monday–Friday, 7:00 AM – 6:00 PM',
  weekendNote: 'Emergency weekend scheduling',
  guarantee: '12-Month Workmanship Guarantee',
  description:
    'Licensed and insured local plumbers serving Long Beach, Gulfport and Pass Christian, Mississippi. Emergency pipe leak repairs, under-house plumbing, water heater installs, gas line repairs and new sink and toilet setups, with 30–60 minute emergency response and a 12-month workmanship guarantee.',
};

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#area', label: 'Service Area' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#request', label: 'Request Service' },
];

export const CITIES = [
  { name: 'Long Beach', zips: ['39560'] },
  { name: 'Gulfport', zips: ['39501', '39503', '39505', '39506', '39507'] },
  { name: 'Pass Christian', zips: ['39571'] },
];

export const SERVICES = [
  {
    icon: 'droplet',
    title: 'Emergency Pipe Leak Repairs',
    desc: 'Water spraying, dripping or pooling under the house? We track down the leak and stop it — usually the same day you call.',
  },
  {
    icon: 'house',
    title: 'Under-House Plumbing',
    desc: 'Crawlspace and under-house repairs done right, with clean, straightforward work you can inspect yourself.',
  },
  {
    icon: 'heater',
    title: 'Water Heater Install & Replacement',
    desc: 'No hot water? We install and replace gas and electric water heaters, sized correctly for your home.',
  },
  {
    icon: 'flame',
    title: 'Gas Line Repairs',
    desc: 'Gas line repair and leak checks done to code and safety-first. If you smell gas, get out of the house first — then call us.',
  },
  {
    icon: 'sink',
    title: 'New Sink, Toilet & Fixture Setups',
    desc: 'New sinks, toilets and faucets installed clean and level, with the old setup hauled off and no mess left behind.',
  },
  {
    icon: 'tag',
    title: 'Free Estimates & Lowest Local Rates',
    desc: 'Free estimate before any work starts, guaranteed lowest local rates, and you approve the price before we pick up a tool.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'We were in need of real plumbing help. Made contact with others and received no reply. Jason & Ashley arrived on the money and fixed an inline water leak under the house fast.',
    name: 'Bruce D.',
    city: 'Long Beach',
  },
  {
    quote:
      'Quick response and good communication. The job was done right away with the lowest price.',
    name: 'Harry N.',
    city: 'Gulfport',
  },
];

export const FAQS = [
  {
    q: 'How fast can you actually get here?',
    a: 'For emergencies in Long Beach, Gulfport and Pass Christian, our typical response window is 30 to 60 minutes. When you call, we give you a real time window instead of a vague promise — and if we cannot get to you in a reasonable amount of time, we will tell you straight so you can make other plans.',
  },
  {
    q: 'How much will it cost, and do you charge for estimates?',
    a: 'Estimates are free, and you get the price before any work starts. You approve it, or we do not do the job. We work hard to keep the lowest local rates, and there are no surprise charges added on after the fact.',
  },
  {
    q: 'Are you open 24/7? What about weekends and holidays?',
    a: 'Our standard hours are Monday through Friday, 7:00 AM to 6:00 PM. Outside those hours — weekends and holidays included — we schedule emergencies by phone. If water is pouring out on a Sunday, call (228) 861-3440 and we will do everything we can to get to you.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Dixie Plumbing Services is fully licensed and insured, and every repair is backed by our 12-Month Workmanship Guarantee.',
  },
  {
    q: 'What if something goes wrong after the repair?',
    a: 'Call us. Every repair carries our 12-Month Workmanship Guarantee, and we will come back and make it right. That is the entire point of offering a guarantee.',
  },
  {
    q: 'Who is actually going to show up at my house?',
    a: 'We are a local husband-and-wife team — usually Jason and Ashley. No call-center runaround and no rotating subcontractors, so you know who is coming before they knock on the door.',
  },
  {
    q: 'Do you work under houses and on gas lines?',
    a: 'Yes — under-house plumbing and gas line repairs are two of the things we do most. If you think you smell gas, get everyone out of the house first, then call us from outside or from a neighbor’s phone.',
  },
];
