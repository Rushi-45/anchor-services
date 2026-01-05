import { AnchorRequestFormData } from '@/types/form';

// Formspree endpoint - you'll get this from https://formspree.io/
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

/**
 * Formats form data into a readable email message
 */
export function formatFormDataForEmail(data: AnchorRequestFormData): string {
  const sections = [
    '═══════════════════════════════════════',
    'NEW ANCHOR SERVICE REQUEST',
    '═══════════════════════════════════════',
    '',
    '📋 CLIENT INFORMATION',
    '───────────────────────────────────────',
    `Company Name: ${data.clientInfo.companyName}`,
    `Contact Person: ${data.clientInfo.contactPerson}`,
    `Email: ${data.clientInfo.email}`,
    `Phone: ${data.clientInfo.phone}`,
    '',
    '🎯 EVENT INFORMATION',
    '───────────────────────────────────────',
    `Event Name: ${data.eventInfo.eventName}`,
    `Event Type: ${data.eventInfo.eventType}`,
    `Description: ${data.eventInfo.eventDescription}`,
    '',
    '🎤 ANCHOR REQUIREMENTS',
    '───────────────────────────────────────',
    `Anchor Style: ${data.anchorRequirements.anchorStyle.join(', ') || 'Not specified'}`,
    `Language: ${data.anchorRequirements.language?.join(', ') || 'Not specified'}`,
    `Additional Requirements: ${data.anchorRequirements.additionalRequirements || 'None'}`,
    '',
    '📅 LOGISTICS',
    '───────────────────────────────────────',
    `Event Date: ${data.logistics.eventDate}`,
    `Event Time: ${data.logistics.eventTime}`,
    `Duration: ${data.logistics.duration}`,
    `Location: ${data.logistics.location}`,
    '',
    '💰 ADDITIONAL INFORMATION',
    '───────────────────────────────────────',
    `Budget: ${data.additionalInfo.budget || 'Not specified'}`,
    `Special Requests: ${data.additionalInfo.specialRequests || 'None'}`,
    `Notes: ${data.additionalInfo.notes || 'None'}`,
    '',
    '═══════════════════════════════════════',
    `Submitted on: ${new Date().toLocaleString()}`,
    '═══════════════════════════════════════',
  ];

  return sections.join('\n');
}

/**
 * Sends form data via Formspree
 * Formspree is a React-friendly service that handles form submissions
 */
export async function sendFormEmail(
  data: AnchorRequestFormData
): Promise<void> {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error(
      'Formspree endpoint is missing. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment variables.'
    );
  }

  const emailContent = formatFormDataForEmail(data);

  // Prepare form data for Formspree
  const formData = {
    // Main message content
    message: emailContent,
    subject: `New Anchor Service Request - ${data.eventInfo.eventName}`,

    // Structured data for easy reading
    _format: 'plain',
    company_name: data.clientInfo.companyName,
    contact_person: data.clientInfo.contactPerson,
    client_email: data.clientInfo.email,
    client_phone: data.clientInfo.phone,
    event_name: data.eventInfo.eventName,
    event_type: data.eventInfo.eventType,
    event_description: data.eventInfo.eventDescription,
    anchor_style: data.anchorRequirements.anchorStyle.join(', '),
    language: data.anchorRequirements.language?.join(', ') || 'Not specified',
    additional_requirements:
      data.anchorRequirements.additionalRequirements || 'None',
    event_date: data.logistics.eventDate,
    event_time: data.logistics.eventTime,
    duration: data.logistics.duration,
    location: data.logistics.location,
    budget: data.additionalInfo.budget || 'Not specified',
    special_requests: data.additionalInfo.specialRequests || 'None',
    notes: data.additionalInfo.notes || 'None',
  };

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error ||
          `Form submission failed with status ${response.status}`
      );
    }

    const result = await response.json();

    // Formspree returns success even if there are validation errors
    if (result.errors && result.errors.length > 0) {
      throw new Error(result.errors.map((e: any) => e.message).join(', '));
    }
  } catch (error) {
    console.error('Formspree error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to send email. Please try again later.');
  }
}

/**
 * Generates WhatsApp message with form data
 */
export function generateWhatsAppMessage(data: AnchorRequestFormData): string {
  const message = `Hello! I'm interested in your anchor services.

*Event Details:*
• Event: ${data.eventInfo.eventName}
• Type: ${data.eventInfo.eventType}
• Date: ${data.logistics.eventDate}
• Time: ${data.logistics.eventTime}
• Location: ${data.logistics.location}

*My Information:*
• Name: ${data.clientInfo.contactPerson}
• Company: ${data.clientInfo.companyName}
• Email: ${data.clientInfo.email}
• Phone: ${data.clientInfo.phone}

*Requirements:*
• Style: ${data.anchorRequirements.anchorStyle.join(', ')}
• Language: ${data.anchorRequirements.language?.join(', ') || 'Not specified'}

${data.additionalInfo.budget ? `Budget: ${data.additionalInfo.budget}` : ''}

Please let me know if you're available and we can discuss further details.`;

  return encodeURIComponent(message);
}
