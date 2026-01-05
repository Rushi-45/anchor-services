'use client';

import Head from 'next/head';
import { useRouter } from 'next/router';
import StepperForm from '@/components/StepperForm';
import SuccessScreen from '@/components/SuccessScreen';
import Footer from '@/components/Footer';
import Confetti from '@/components/Confetti';
import { Toaster } from '@/lib/toast';
import { AnchorRequestFormData } from '@/types/form';
import { useState, useCallback } from 'react';
import {
  generateWebPageSchema,
  generateContactPageSchema,
  generateBreadcrumbSchema,
} from '@/utils/schema-utils';

export default function FormPage() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [submittedFormData, setSubmittedFormData] =
    useState<AnchorRequestFormData | null>(null);

  // WhatsApp number - update this with your actual WhatsApp number (without + or country code)
  // Example: '1234567890' for US number, '919876543210' for Indian number
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

  const handleFormComplete = useCallback((data: AnchorRequestFormData) => {
    setSubmittedFormData(data);
    setFormCompleted(true);
    setShowConfetti(true);
    console.log('Form submitted with data:', data);
  }, []);

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false);
  }, []);

  const handleBackToHome = useCallback(() => {
    router.push('/');
  }, [router]);

  const WEBSITE_URL =
    process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://anchor-services.vercel.app';
  const COMPANY_NAME =
    process.env.NEXT_PUBLIC_COMPANY_NAME || 'Professional Anchoring Services';
  const pageUrl = `${WEBSITE_URL}/form`;
  const pageTitle = `Request an Anchor | ${COMPANY_NAME}`;
  const pageDescription =
    'Fill out our form to request professional anchoring services for your event, show, or conference. Get a professional anchor for your next event.';
  const ogImage = `${WEBSITE_URL}/og-image.jpg`;

  // Generate schemas
  const webPageSchema = generateWebPageSchema(
    pageUrl,
    pageTitle,
    pageDescription
  );

  const contactPageSchema = generateContactPageSchema(pageUrl);

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: WEBSITE_URL },
    { name: 'Request an Anchor', url: pageUrl },
  ]);

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

        {/* Company Meta Tags */}
        <meta name="copyright" content={COMPANY_NAME} />
        <meta name="distribution" content="Global" />
        <meta name="author" content={COMPANY_NAME} />

        {/* Keywords */}
        <meta
          name="keywords"
          content="anchor request, anchor booking, event anchor form, professional anchor services, MC booking, event hosting request, anchor contact form"
        />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta name="twitter:title" content={pageTitle} key="twitter:title" />
        <meta
          name="twitter:description"
          content={pageDescription}
          key="twitter:description"
        />
        <meta name="twitter:image" content={ogImage} key="twitter:image" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={pageUrl} key="canonical" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} key="og:title" />
        <meta
          property="og:description"
          content={pageDescription}
          key="og:description"
        />
        <meta property="og:url" content={pageUrl} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content={ogImage} key="og:image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={COMPANY_NAME} />

        {/* Structured Data - WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          key="webpage-schema"
        />

        {/* Structured Data - ContactPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPageSchema),
          }}
          key="contactpage-schema"
        />

        {/* Structured Data - Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          key="breadcrumb-schema"
        />
      </Head>

      <main className="flex flex-col min-h-screen">
        {formCompleted && submittedFormData ? (
          <>
            <Confetti
              trigger={showConfetti}
              onComplete={handleConfettiComplete}
            />
            <div className="flex-1">
              <SuccessScreen
                formData={submittedFormData}
                whatsappNumber={whatsappNumber}
                onBackToHome={handleBackToHome}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex-1">
              <StepperForm onComplete={handleFormComplete} />
            </div>
            {/* Link to home page */}
            <div className="fixed top-4 left-4 z-50">
              <button
                onClick={() => router.push('/')}
                className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 font-medium shadow-md transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer"
              >
                ← Home
              </button>
            </div>
          </>
        )}
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
