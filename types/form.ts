export interface AnchorRequestFormData {
  // Step 1: Company/Client Information
  clientInfo: {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
  };

  // Step 2: Event/Show Details
  eventInfo: {
    eventName: string;
    eventType: string;
    eventDescription: string;
  };

  // Step 3: Anchor Requirements
  anchorRequirements: {
    anchorStyle: string[];
    language?: string[];
    additionalRequirements?: string;
  };

  // Step 4: Event Logistics
  logistics: {
    eventDate: string;
    eventTime: string;
    duration: string;
    location: string;
  };

  // Step 5: Additional Information
  additionalInfo: {
    budget?: string;
    specialRequests?: string;
    notes?: string;
  };
}

export type FormStep = 1 | 2 | 3 | 4 | 5;

export interface StepValidation {
  isValid: boolean;
  errors: Record<string, string>;
}

// Keep old type for backward compatibility during transition
export type AnchorFormData = AnchorRequestFormData;

