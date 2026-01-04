'use client';

import { motion } from 'framer-motion';
import { AnchorRequestFormData } from '@/types/form';

interface Step5AdditionalInfoProps {
  data: AnchorRequestFormData['additionalInfo'];
  onChange: (data: AnchorRequestFormData['additionalInfo']) => void;
  onPrevious: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function Step5AdditionalInfo({
  data,
  onChange,
  onPrevious,
  onSubmit,
  isSubmitting,
}: Step5AdditionalInfoProps) {
  const handleChange = (field: keyof typeof data, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1b0d14] mb-2">
          Additional Information
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Any other details about your requirements
        </p>
      </div>

      <div className="space-y-5">
        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Budget Range <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <select
            id="budget"
            value={data.budget || ''}
            onChange={(e) => handleChange('budget', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent cursor-pointer"
          >
            <option value="">Select budget range</option>
            <option value="Under ₹10,000">Under ₹10,000</option>
            <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
            <option value="₹1,00,000+">₹1,00,000+</option>
            <option value="To be discussed">To be discussed</option>
          </select>
        </div>

        {/* Special Requests */}
        <div>
          <label
            htmlFor="specialRequests"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Special Requests <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <textarea
            id="specialRequests"
            value={data.specialRequests || ''}
            onChange={(e) => handleChange('specialRequests', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent cursor-text resize-none"
            placeholder="Any special requests or requirements for the anchor..."
          />
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Additional Notes <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <textarea
            id="notes"
            value={data.notes || ''}
            onChange={(e) => handleChange('notes', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent cursor-text resize-none"
            placeholder="Any other information you'd like to share..."
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <motion.button
          onClick={onPrevious}
          disabled={isSubmitting}
          className={`
            px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-md transition-all transform
            ${
              isSubmitting
                ? 'bg-gray-100 text-gray-400 cursor-wait'
                : 'bg-gray-200 text-gray-700 hover:scale-105 active:scale-95 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer'
            }
          `}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          ← Previous
        </motion.button>
        <motion.button
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`
            px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-md transition-all transform
            ${
              isSubmitting
                ? 'bg-[#f04299]/70 text-white cursor-wait'
                : 'bg-[#f04299] text-white hover:scale-105 active:scale-95 hover:shadow-pink-300/50 focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer'
            }
          `}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form ✨'}
        </motion.button>
      </div>
    </motion.div>
  );
}

