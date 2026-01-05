'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FooterProps {
  developerName?: string;
  developerEmail?: string;
  developerWebsite?: string;
  developerGitHub?: string;
  developerLinkedIn?: string;
  year?: number;
}

export default function Footer({
  developerName = 'Developer Name',
  developerEmail,
  developerWebsite,
  developerGitHub,
  developerLinkedIn,
  year = new Date().getFullYear(),
}: FooterProps) {
  const currentYear = year || new Date().getFullYear();

  return (
    <motion.footer
      className="bg-[#1b0d14] text-white mt-auto relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#f04299]">
              Professional Anchoring Services
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Professional anchoring services for events, shows, and
              conferences.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Right Side - Developer Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              Developed with ❤️ by
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-end md:justify-end gap-3 sm:gap-4">
              <div className="flex flex-col items-center md:items-end">
                <p className="text-white font-semibold text-sm sm:text-base">
                  {developerName}
                </p>
                {developerEmail && (
                  <a
                    href={`mailto:${developerEmail}`}
                    className="text-[#f04299] hover:text-[#ff6bb3] text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {developerEmail}
                  </a>
                )}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4">
                {developerWebsite && (
                  <a
                    href={developerWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#f04299] transition-colors cursor-pointer"
                    aria-label="Developer Website"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </a>
                )}

                {developerGitHub && (
                  <a
                    href={developerGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#f04299] transition-colors cursor-pointer"
                    aria-label="GitHub Profile"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}

                {developerLinkedIn && (
                  <a
                    href={developerLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#f04299] transition-colors cursor-pointer"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="hover:text-[#f04299] transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/form"
                className="hover:text-[#f04299] transition-colors cursor-pointer"
              >
                Request an Anchor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
