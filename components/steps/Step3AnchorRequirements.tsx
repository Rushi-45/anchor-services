'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnchorRequestFormData } from '@/types/form';

interface Step3AnchorRequirementsProps {
  data: AnchorRequestFormData['anchorRequirements'];
  onChange: (data: AnchorRequestFormData['anchorRequirements']) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ANCHOR_STYLES = [
  'Formal/Professional',
  'Casual/Friendly',
  'Energetic/Enthusiastic',
  'Calm/Soothing',
  'Humorous/Entertaining',
  'Authoritative',
  'Bilingual/Multilingual',
];

const LANGUAGES = [
  'English',
  'Hindi',
  'Marathi',
  'Gujarati',
  'Tamil',
  'Telugu',
  'Bengali',
  'Other',
];

export default function Step3AnchorRequirements({
  data,
  onChange,
  onNext,
  onPrevious,
}: Step3AnchorRequirementsProps) {
  const toggleArrayItem = (
    array: string[],
    item: string,
    field: 'anchorStyle' | 'language'
  ) => {
    const newArray = array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
    onChange({ ...data, [field]: newArray });
  };

  const handleChange = (
    field: keyof typeof data,
    value: string | string[]
  ) => {
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
          Anchor Requirements
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          What do you need from the anchor? Select all that apply
        </p>
      </div>

      <div className="space-y-6">
        {/* Anchor Style */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Anchor Style <span className="text-[#f04299]">*</span>
            <span className="text-gray-400 text-xs font-normal ml-2">
              (Select at least one)
            </span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {ANCHOR_STYLES.map((style) => (
              <motion.button
                key={style}
                type="button"
                onClick={() =>
                  toggleArrayItem(data.anchorStyle, style, 'anchorStyle')
                }
                className={`
                  px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium
                  ${
                    data.anchorStyle.includes(style)
                      ? 'bg-[#f04299] text-white border-[#f04299] shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#f04299]'
                  }
                  cursor-pointer
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {style}
              </motion.button>
            ))}
          </div>
          {data.anchorStyle.length === 0 && (
            <p className="mt-2 text-sm text-red-500">
              Please select at least one anchor style
            </p>
          )}
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Language Requirements{' '}
            <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {LANGUAGES.map((lang) => (
              <motion.button
                key={lang}
                type="button"
                onClick={() =>
                  toggleArrayItem(data.language || [], lang, 'language')
                }
                className={`
                  px-2 py-2 sm:px-4 sm:py-3 rounded-lg border-2 transition-all text-xs sm:text-sm font-medium
                  ${
                    (data.language || []).includes(lang)
                      ? 'bg-[#f04299] text-white border-[#f04299] shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#f04299]'
                  }
                  cursor-pointer
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label
            htmlFor="additionalRequirements"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Additional Requirements{' '}
            <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <textarea
            id="additionalRequirements"
            value={data.additionalRequirements || ''}
            onChange={(e) =>
              handleChange('additionalRequirements', e.target.value)
            }
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#f04299] focus:border-transparent cursor-text resize-none"
            placeholder="Any other specific requirements or preferences for the anchor..."
          />
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
          onClick={onNext}
          disabled={data.anchorStyle.length === 0}
          className={`
            px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-md transition-all transform
            ${
              data.anchorStyle.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#f04299] text-white hover:scale-105 active:scale-95 hover:shadow-pink-300/50 focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer'
            }
          `}
          whileHover={data.anchorStyle.length > 0 ? { scale: 1.05 } : {}}
          whileTap={data.anchorStyle.length > 0 ? { scale: 0.95 } : {}}
        >
          Next Step →
        </motion.button>
      </div>
    </motion.div>
  );
}

