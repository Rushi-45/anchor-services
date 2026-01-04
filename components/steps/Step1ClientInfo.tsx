'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnchorRequestFormData } from '@/types/form';
import { showToast } from '@/lib/toast';

interface Step1ClientInfoProps {
  data: AnchorRequestFormData['clientInfo'];
  onChange: (data: AnchorRequestFormData['clientInfo']) => void;
  onNext: () => void;
}

export default function Step1ClientInfo({
  data,
  onChange,
  onNext,
}: Step1ClientInfoProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!data.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
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
          Company Information
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Tell us about your company or organization
        </p>
      </div>

      <div className="space-y-5">
        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Company/Organization Name <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            value={data.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.companyName ? 'border-red-300' : 'border-gray-200'}
              cursor-text
            `}
            placeholder="Enter your company name"
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person */}
        <div>
          <label
            htmlFor="contactPerson"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Contact Person Name <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="text"
            id="contactPerson"
            value={data.contactPerson}
            onChange={(e) => handleChange('contactPerson', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.contactPerson ? 'border-red-300' : 'border-gray-200'}
              cursor-text
            `}
            placeholder="Your full name"
          />
          {errors.contactPerson && (
            <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.email ? 'border-red-300' : 'border-gray-200'}
              cursor-text
            `}
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number <span className="text-[#f04299]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`
              w-full px-4 py-3 rounded-lg border-2 transition-all
              focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent
              ${errors.phone ? 'border-red-300' : 'border-gray-200'}
              cursor-text
            `}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

      </div>

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
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

