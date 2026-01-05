/**
 * SEO Schema Utilities
 * Reusable functions for generating structured data (JSON-LD)
 */

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://anchor-services.vercel.app';
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Professional Anchoring Services';

/**
 * Generate WebPage Schema with Website context
 */
export const generateWebPageSchema = (
  pageUrl: string,
  title: string,
  description: string,
  datePublished?: string,
  dateModified?: string
) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${WEBSITE_URL}/#website`,
      url: `${WEBSITE_URL}/`,
      name: COMPANY_NAME,
      description: 'Professional anchoring services for events, shows, and conferences.',
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${WEBSITE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      isPartOf: { '@id': `${WEBSITE_URL}/#website` },
      datePublished: datePublished || new Date().toISOString(),
      dateModified: dateModified || new Date().toISOString(),
      description: description,
      inLanguage: 'en-US',
    },
  ],
});

/**
 * Generate Breadcrumb Schema
 */
export const generateBreadcrumbSchema = (breadcrumbData: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbData.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: {
      '@type': 'WebPage',
      '@id': item.url,
    },
  })),
});

/**
 * Generate FAQ Schema
 * @param faqData - Array of FAQ items with question and answer
 */
export const generateFaqSchema = (faqData: Array<{ question: string; answer: string }>) => {
  if (!faqData || faqData.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

/**
 * Generate Service Schema
 * For service-based businesses
 */
export const generateServiceSchema = (
  serviceName: string,
  description: string,
  serviceType: string = 'ProfessionalService'
) => ({
  '@context': 'https://schema.org',
  '@type': serviceType,
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: process.env.NEXT_PUBLIC_COUNTRY_CODE || 'United States',
  },
});

/**
 * Generate ContactPage Schema
 */
export const generateContactPageSchema = (pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: 'Request an Anchor - Contact Form',
  description: 'Fill out our form to request professional anchoring services for your event, show, or conference.',
  mainEntity: {
    '@type': 'Organization',
    name: COMPANY_NAME,
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@anchorservices.com',
    telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 234 567 8900',
  },
});

