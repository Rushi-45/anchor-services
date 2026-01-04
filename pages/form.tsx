'use client';

import Head from 'next/head';
import { useRouter } from 'next/router';
import StepperForm from '@/components/StepperForm';
import Confetti from '@/components/Confetti';
import { Toaster } from '@/lib/toast';
import { AnchorRequestFormData } from '@/types/form';
import { useState, useCallback } from 'react';

export default function FormPage() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  const handleFormComplete = useCallback((data: AnchorRequestFormData) => {
    setFormCompleted(true);
    setShowConfetti(true);
    console.log('Form submitted with data:', data);
  }, []);

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false);
  }, []);

  return (
    <>
      <Head>
        <title>Request an Anchor | Professional Anchoring Services</title>
        <meta
          name="description"
          content="Fill out our form to request professional anchoring services for your event, show, or conference."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="anchor, request, form, event, hosting" />
      </Head>

      <main className="min-h-screen">
        <StepperForm onComplete={handleFormComplete} />
        <Confetti trigger={showConfetti} onComplete={handleConfettiComplete} />

        {formCompleted && (
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 rounded-full bg-gray-800 text-white font-semibold shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer"
            >
              ← Back to Home
            </button>
          </div>
        )}

        {/* Link to home page */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 font-medium shadow-md transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer"
          >
            ← Home
          </button>
        </div>
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
