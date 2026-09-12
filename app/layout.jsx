import { Inter } from 'next/font/google';
import './globals.css';
import { BUSINESS, CITIES, FAQS, SERVICES, TESTIMONIALS } from '../lib/site-data';

// Self-hosted by next/font at build time: no external request, no layout shift.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Emergency Plumbing Long Beach MS | Dixie Plumbing Services',
  description:
    'Emergency plumber in Long Beach, MS — 30–60 minute response for pipe leaks, under-house plumbing, water heaters and gas lines. Licensed & insured, free estimates. Call (228) 861-3440.',
  keywords: [
    'emergency plumber Long Beach MS',
    'plumber Gulfport MS',
    'plumber Pass Christian MS',
    'emergency pipe leak repair',
    'under-house plumbing',
    'water heater installation Mississippi Gulf Coast',
    'gas line repair Long Beach MS',
  ],
  authors: [{ name: BUSINESS.name }],
  category: 'Emergency Plumbing Services',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: BUSINESS.name,
    title: 'Emergency Plumber in Long Beach, MS | Dixie Plumbing Services',
    description:
      'Local husband-and-wife plumbers, 10+ years on the Mississippi Gulf Coast. 30–60 minute emergency response, free estimates, 12-month workmanship guarantee. Call (228) 861-3440.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Emergency Plumber in Long Beach, MS | Dixie Plumbing Services',
    description:
      '30–60 minute emergency response in Long Beach, Gulfport & Pass Christian, MS. Free estimates. Call (228) 861-3440.',
  },
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#152C4A',
};

// ─────────────────────────────────────────────────────────────
// schema.org structured data — LocalBusiness (Plumber) + FAQPage
// ─────────────────────────────────────────────────────────────
const localBusiness = {
  '@type': ['Plumber', 'LocalBusiness'],
  '@id': '#business',
  name: BUSINESS.name,
  description: BUSINESS.description,
  telephone: BUSINESS.phoneE164,
  priceRange: '$',
  slogan: 'Fixed fast and backed by a 12-Month Workmanship Guarantee.',
  currenciesAccepted: 'USD',
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  areaServed: CITIES.map((city) => ({
    '@type': 'City',
    name: `${city.name}, ${BUSINESS.region}`,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  specialOpeningHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    description: 'Emergency weekend and holiday scheduling by phone',
    opens: '00:00',
    closes: '23:59',
  },
  paymentAccepted: 'Cash, Check, Credit Card',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: t.quote,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.desc,
      },
    })),
  },
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': '#faq',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [localBusiness, faqPage],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
