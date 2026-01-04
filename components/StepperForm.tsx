'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Stepper from './Stepper';
import Step1ClientInfo from './steps/Step1ClientInfo';
import Step2EventInfo from './steps/Step2EventInfo';
import Step3AnchorRequirements from './steps/Step3AnchorRequirements';
import Step4Logistics from './steps/Step4Logistics';
import Step5AdditionalInfo from './steps/Step5AdditionalInfo';
import { AnchorRequestFormData, FormStep } from '@/types/form';
import { showToast } from '@/lib/toast';

const STEPS = [
  { label: 'Company', description: 'Your Information' },
  { label: 'Event', description: 'Event Details' },
  { label: 'Requirements', description: 'What You Need' },
  { label: 'Logistics', description: 'Date & Location' },
  { label: 'Additional', description: 'Extra Details' },
];

const initialFormData: AnchorRequestFormData = {
  clientInfo: {
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
  },
  eventInfo: {
    eventName: '',
    eventType: '',
    eventDescription: '',
  },
  anchorRequirements: {
    anchorStyle: [],
    language: [],
    additionalRequirements: '',
  },
  logistics: {
    eventDate: '',
    eventTime: '',
    duration: '',
    location: '',
  },
  additionalInfo: {
    budget: '',
    specialRequests: '',
    notes: '',
  },
};

interface StepperFormProps {
  onComplete?: (data: AnchorRequestFormData) => void;
}

export default function StepperForm({ onComplete }: StepperFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<AnchorRequestFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (step: FormStep, data: Partial<AnchorRequestFormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      showToast.success('Form submitted successfully! 🎉');
      onComplete?.(formData);
    } catch (error) {
      showToast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1ClientInfo
            data={formData.clientInfo}
            onChange={(data) =>
              updateFormData(1, { clientInfo: data })
            }
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2EventInfo
            data={formData.eventInfo}
            onChange={(data) =>
              updateFormData(2, { eventInfo: data })
            }
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <Step3AnchorRequirements
            data={formData.anchorRequirements}
            onChange={(data) => updateFormData(3, { anchorRequirements: data })}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <Step4Logistics
            data={formData.logistics}
            onChange={(data) =>
              updateFormData(4, { logistics: data })
            }
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <Step5AdditionalInfo
            data={formData.additionalInfo}
            onChange={(data) =>
              updateFormData(5, { additionalInfo: data })
            }
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8e7] py-8">
      {/* Stepper Progress */}
      <Stepper
        currentStep={currentStep}
        totalSteps={STEPS.length}
        steps={STEPS}
      />

      {/* Form Content */}
      <div className="w-full max-w-3xl mx-auto px-4 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

