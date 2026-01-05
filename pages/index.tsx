'use client';

import Head from 'next/head';
import AnchorHero from '@/components/AnchorHero';
import Footer from '@/components/Footer';
import { Toaster } from '@/lib/toast';
import { generateWebPageSchema, generateServiceSchema } from '@/utils/schema-utils';

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://anchor-services.vercel.app';
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Professional Anchoring Services';

export default function Home() {
  const pageUrl = WEBSITE_URL;
  const pageTitle = `${COMPANY_NAME} | Request an Anchor`;
  const pageDescription = 'Request professional anchoring services for your events, shows, and conferences. Experienced anchor available for all types of events.';
  const ogImage = `${WEBSITE_URL}/og-image.jpg`;

  // Generate schemas
  const webPageSchema = generateWebPageSchema(
    pageUrl,
    pageTitle,
    pageDescription,
    new Date().toISOString(),
    new Date().toISOString()
  );

  const serviceSchema = generateServiceSchema(
    'Professional Anchoring Services',
    'Professional anchoring services for events, shows, conferences, and corporate gatherings. Experienced anchor with expertise in multiple languages and event types.',
    'ProfessionalService'
  );

  // Site Navigation Schema
  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: ['Home', 'Request an Anchor'],
    url: [WEBSITE_URL, `${WEBSITE_URL}/form`],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{pageTitle}</title>
        <meta name="description" content={pageDescription} key="description" />

        {/* Essential Meta Tags */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="profile" href="https://gmpg.org/xfn/11" />

        {/* Search Engine Verification - Add your codes */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
          />
        )}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta
            name="msvalidate.01"
            content={process.env.NEXT_PUBLIC_BING_VERIFICATION}
          />
        )}

        {/* Company Meta Tags */}
        <meta name="copyright" content={COMPANY_NAME} />
        <meta name="distribution" content="Global" />
        <meta name="author" content={COMPANY_NAME} />
        <meta name="Owner" content={WEBSITE_URL.replace('https://', '').replace('http://', '')} />

        {/* Keywords */}
        <meta
          name="keywords"
          content="anchor, anchoring services, event anchor, professional anchor, hosting services, event management, MC services, event hosting, conference anchor, show anchor"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={pageTitle} key="twitter:title" />
        <meta
          name="twitter:description"
          content={pageDescription}
          key="twitter:description"
        />
        <meta name="twitter:image" content={ogImage} key="twitter:image" />
        {process.env.NEXT_PUBLIC_TWITTER_SITE && (
          <meta name="twitter:site" content={process.env.NEXT_PUBLIC_TWITTER_SITE} />
        )}

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={pageUrl} key="canonical" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} key="og:title" />
        <meta property="og:description" content={pageDescription} key="og:description" />
        <meta property="og:url" content={pageUrl} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content={ogImage} key="og:image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={COMPANY_NAME} />

        {/* Additional SEO */}
        <meta name="theme-color" content="#fff8e7" />

        {/* Structured Data - WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          key="webpage-schema"
        />

        {/* Structured Data - Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          key="service-schema"
        />

        {/* Structured Data - Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
          key="navigation-schema"
        />
      </Head>

      <main className="flex flex-col">
        <div className="flex-1">
          <AnchorHero />
        </div>
        <Footer
          developerName={process.env.NEXT_PUBLIC_DEVELOPER_NAME}
          developerEmail={process.env.NEXT_PUBLIC_DEVELOPER_EMAIL}
          developerWebsite={process.env.NEXT_PUBLIC_DEVELOPER_WEBSITE}
          developerGitHub={process.env.NEXT_PUBLIC_DEVELOPER_GITHUB}
          developerLinkedIn={process.env.NEXT_PUBLIC_DEVELOPER_LINKEDIN}
        />
      </main>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--primary)',
            color: 'var(--text)',
            borderRadius: '12px',
            padding: '12px 20px',
            fontSize: '14px',
          },
        }}
      />
    </>
  );
}
