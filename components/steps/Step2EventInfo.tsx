'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnchorRequestFormData } from '@/types/form';
import { showToast } from '@/lib/toast';

interface Step2EventInfoProps {
  data: AnchorRequestFormData['eventInfo'];
  onChange: (data: AnchorRequestFormData['eventInfo']) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step2EventInfo({
  data,
  onChange,
  onNext,
  onPrevious,
}: Step2EventInfoProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!data.eventName.trim()) {
      newErrors.eventName = 'Event name is required';
    }

    if (!data.eventType.trim()) {
      newErrors.eventType = 'Event type is required';
    }

    if (!data.eventDescription.trim()) {
      newErrors.eventDescription = 'Event description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    } else {
      showToast.error('Please fill in all required fields correctly');
    }
  };

  const handleChange = (field: keyof typeof data, value: string) => {
    onChange({ ...data, [field]: value });
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
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
          Event Details
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Tell us about the event or show you need anchoring for
        </p>
      </div>

      <div className="space-y-5">
        {/* Event Name */}
        <div>
          <label
            htmlFor="eventName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Event/Show Name <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="text"
            id="eventName"
            value={data.eventName}
            onChange={(e) => handleChange('eventName', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.eventName ? 'border-red-300' : 'border-gray-200'}
              cursor-text
            `}
            placeholder="e.g., Annual Corporate Awards Night"
          />
          {errors.eventName && (
            <p className="mt-1 text-sm text-red-500">{errors.eventName}</p>
          )}
        </div>

        {/* Event Type */}
        <div>
          <label
            htmlFor="eventType"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Event Type <span className="text-[#f04299]">*</span>
          </label>
          <select
            id="eventType"
            value={data.eventType}
            onChange={(e) => handleChange('eventType', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.eventType ? 'border-red-300' : 'border-gray-200'}
              cursor-pointer
            `}
          >
            <option value="">Select event type</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Conference">Conference</option>
            <option value="Seminar">Seminar</option>
            <option value="Awards Ceremony">Awards Ceremony</option>
            <option value="Product Launch">Product Launch</option>
            <option value="TV Show">TV Show</option>
            <option value="Radio Show">Radio Show</option>
            <option value="Live Streaming">Live Streaming</option>
            <option value="Wedding">Wedding</option>
            <option value="Cultural Event">Cultural Event</option>
            <option value="Sports Event">Sports Event</option>
            <option value="Other">Other</option>
          </select>
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-500">{errors.eventType}</p>
          )}
        </div>

        {/* Event Description */}
        <div>
          <label
            htmlFor="eventDescription"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Event Description <span className="text-[#f04299]">*</span>
          </label>
          <textarea
            id="eventDescription"
            value={data.eventDescription}
            onChange={(e) => handleChange('eventDescription', e.target.value)}
            rows={5}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.eventDescription ? 'border-red-300' : 'border-gray-200'}
              cursor-text resize-none
            `}
            placeholder="Describe the event, its purpose, and what kind of anchoring you need..."
          />
          {errors.eventDescription && (
            <p className="mt-1 text-sm text-red-500">{errors.eventDescription}</p>
          )}
        </div>

      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <motion.button
          onClick={onPrevious}
          className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gray-200 text-gray-700 text-sm sm:text-base font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#f04299] text-white text-sm sm:text-base font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95 hover:shadow-pink-300/50 focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next Step →
        </motion.button>
      </div>
    </motion.div>
  );
}

