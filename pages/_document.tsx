import { Html, Head, Main, NextScript } from 'next/document';

// Get website URL from environment or use default
const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://anchor-services.vercel.app';
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Professional Anchoring Services';
const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@anchorservices.com';
const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 234 567 8900';

export default function Document() {
  // Organization Schema - Global company information
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/favicon.svg`,
    description: 'Professional anchoring services for events, shows, and conferences. Experienced anchor available for all types of events.',
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    sameAs: [
      // Add your social media URLs here
      // process.env.NEXT_PUBLIC_FACEBOOK_URL,
      // process.env.NEXT_PUBLIC_TWITTER_URL,
      // process.env.NEXT_PUBLIC_LINKEDIN_URL,
      // process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressCountry: process.env.NEXT_PUBLIC_COUNTRY_CODE || 'US',
      // Add more address details if available
      // streetAddress: 'Your Street Address',
      // addressLocality: 'City',
      // postalCode: 'POSTAL_CODE',
    },
  };

  // LocalBusiness Schema - For local SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    image: `${WEBSITE_URL}/favicon.svg`,
    description: 'Professional anchoring services for events, shows, and conferences.',
    priceRange: '$$', // Adjust based on your pricing
    address: {
      '@type': 'PostalAddress',
      addressCountry: process.env.NEXT_PUBLIC_COUNTRY_CODE || 'US',
      // Add more address details if available
    },
    // Add service area if applicable
    // areaServed: {
    //   '@type': 'Country',
    //   name: 'United States',
    // },
  };

  // Website Schema - Search functionality
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    description: 'Professional anchoring services for events, shows, and conferences.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${WEBSITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Global Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

