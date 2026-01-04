'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnchorRequestFormData } from '@/types/form';
import { showToast } from '@/lib/toast';

interface Step4LogisticsProps {
  data: AnchorRequestFormData['logistics'];
  onChange: (data: AnchorRequestFormData['logistics']) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step4Logistics({
  data,
  onChange,
  onNext,
  onPrevious,
}: Step4LogisticsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!data.eventDate.trim()) {
      newErrors.eventDate = 'Event date is required';
    }

    if (!data.eventTime.trim()) {
      newErrors.eventTime = 'Event time is required';
    }

    if (!data.duration.trim()) {
      newErrors.duration = 'Duration is required';
    }

    if (!data.location.trim()) {
      newErrors.location = 'Location is required';
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
          Event Logistics
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          When and where will the event take place?
        </p>
      </div>

      <div className="space-y-5">
        {/* Event Date */}
        <div>
          <label
            htmlFor="eventDate"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Event Date <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="date"
            id="eventDate"
            value={data.eventDate}
            onChange={(e) => handleChange('eventDate', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.eventDate ? 'border-red-300' : 'border-gray-200'}
              cursor-pointer
            `}
          />
          {errors.eventDate && (
            <p className="mt-1 text-sm text-red-500">{errors.eventDate}</p>
          )}
        </div>

        {/* Event Time */}
        <div>
          <label
            htmlFor="eventTime"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Event Time <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="time"
            id="eventTime"
            value={data.eventTime}
            onChange={(e) => handleChange('eventTime', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.eventTime ? 'border-red-300' : 'border-gray-200'}
              cursor-pointer
            `}
          />
          {errors.eventTime && (
            <p className="mt-1 text-sm text-red-500">{errors.eventTime}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Duration <span className="text-[#f04299]">*</span>
          </label>
          <select
            id="duration"
            value={data.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.duration ? 'border-red-300' : 'border-gray-200'}
              cursor-pointer
            `}
          >
            <option value="">Select duration</option>
            <option value="1-2 hours">1-2 hours</option>
            <option value="2-4 hours">2-4 hours</option>
            <option value="4-6 hours">4-6 hours</option>
            <option value="Full day (6+ hours)">Full day (6+ hours)</option>
            <option value="Multiple days">Multiple days</option>
          </select>
          {errors.duration && (
            <p className="mt-1 text-sm text-red-500">{errors.duration}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Location/Venue <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="text"
            id="location"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.location ? 'border-red-300' : 'border-gray-200'}
              cursor-text
            `}
            placeholder="Enter venue address or location"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-500">{errors.location}</p>
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

