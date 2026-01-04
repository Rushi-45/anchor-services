'use client';

import Head from 'next/head';
import AnchorHero from '@/components/AnchorHero';
import { Toaster } from '@/lib/toast';

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Anchoring Services | Request an Anchor</title>
        <meta
          name="description"
          content="Request professional anchoring services for your events, shows, and conferences. Experienced anchor available for all types of events."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="anchor, anchoring services, event anchor, professional anchor, hosting services, event management"
        />
        <meta name="author" content="Professional Anchoring Services" />

        {/* Favicon - Multiple formats for better browser support */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Professional Anchoring Services | Request an Anchor"
        />
        <meta
          property="og:description"
          content="Request professional anchoring services for your events, shows, and conferences."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://anchor-services.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Anchoring Services" />
        <meta
          name="twitter:description"
          content="Request professional anchoring services for your events"
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#fff8e7" />
        <link rel="canonical" href="https://anchor-services.vercel.app" />
      </Head>

      <main className="min-h-screen">
        <AnchorHero />
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
