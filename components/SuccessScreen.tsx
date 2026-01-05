'use client';

import { motion } from 'framer-motion';
import { AnchorRequestFormData } from '@/types/form';
import { generateWhatsAppMessage } from '@/lib/email';

interface SuccessScreenProps {
  formData: AnchorRequestFormData;
  whatsappNumber?: string; // WhatsApp number in format: 1234567890 (without + or country code)
  onBackToHome?: () => void;
}

export default function SuccessScreen({
  formData,
  whatsappNumber = '1234567890', // Default number - you should set this
  onBackToHome,
}: SuccessScreenProps) {
  const whatsappMessage = generateWhatsAppMessage(formData);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      className="min-h-[calc(100vh-200px)] bg-[#fff8e7] flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl border border-pink-200 p-8 sm:p-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Success Icon */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          >
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#1b0d14] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Form Submitted Successfully! 🎉
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Thank you for your interest! We have received your request and will
            get back to you soon.
          </motion.p>

          <motion.p
            className="text-gray-500 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            A confirmation email has been sent to{' '}
            <span className="font-semibold text-gray-700">
              {formData.clientInfo.email}
            </span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* WhatsApp Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Message on WhatsApp
            </motion.a>

            {/* Back to Home Button */}
            {onBackToHome && (
              <motion.button
                onClick={onBackToHome}
                className="px-8 py-4 rounded-full bg-gray-800 text-white font-semibold shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back to Home
              </motion.button>
            )}
          </motion.div>

          {/* Summary Card */}
          <motion.div
            className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Request Summary
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Event:</span>{' '}
                {formData.eventInfo.eventName}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{' '}
                {formData.logistics.eventDate}
              </p>
              <p>
                <span className="font-semibold">Location:</span>{' '}
                {formData.logistics.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
