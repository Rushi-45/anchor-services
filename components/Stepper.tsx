'use client';

import { motion } from 'framer-motion';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{ label: string; description?: string }>;
}

export default function Stepper({
  currentStep,
  totalSteps,
  steps,
}: StepperProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-4 sm:top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
          <motion.div
            className="h-full bg-[#f04299]"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </div>

        {/* Step indicators */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div
              key={stepNumber}
              className="flex flex-col items-center flex-1 relative z-10 min-w-0"
            >
              {/* Step circle */}
              <motion.div
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm
                  transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-[#f04299] text-white shadow-md cursor-pointer'
                      : isCurrent
                        ? 'bg-[#f04299] text-white shadow-lg scale-110 cursor-default'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }
                `}
                whileHover={isCompleted ? { scale: 1.1 } : {}}
                initial={{ scale: 1 }}
                animate={{ scale: isCurrent ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  stepNumber
                )}
              </motion.div>

              {/* Step label */}
              <div className="mt-1 sm:mt-2 text-center max-w-full px-1">
                <p
                  className={`
                    text-[10px] sm:text-xs font-medium truncate w-full
                    ${isCurrent ? 'text-[#f04299]' : 'text-gray-500'}
                  `}
                  title={step.label}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-[9px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 hidden sm:block truncate">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
