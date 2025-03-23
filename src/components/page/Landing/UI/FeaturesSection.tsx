import React from 'react';
import {
  Shield,
  RefreshCw,
  Server,
  Lock,
  Eye,
  ArrowRight,
} from 'lucide-react';

export const FeaturesSection = () => {
  return (
    <div className="w-full  text-black dark:text-white transition-colors duration-500 lg:mt-10">
      {/* Security and Privacy Section */}
      <div className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Security & Privacy
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:mt-10">
            {/* Security Features Card */}
            <div className="bg-gradient  bg-gray-100 dark:bg-[#1a1a1a] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Lock className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                Security Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 mt-1 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Military-grade PAKE (Password-Authenticated Key Exchange) protocol
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 mt-1 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Perfect forward secrecy with unique session keys
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Server className="h-5 w-5 mt-1 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Direct peer-to-peer transfer with minimal server involvement
                  </span>
                </li>
              </ul>
            </div>

            {/* Privacy Guarantees Card */}
            <div className=" bg-gray-100 dark:bg-[#1a1a1a] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Eye className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                Privacy Guarantees
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 mt-1 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    End-to-end encryption ensures only intended recipients can access files
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 mt-1 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No data retention - files are deleted immediately after transfer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Server className="h-5 w-5 mt-1 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No account required - your identity remains private
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <a
          href="/main"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </a>
        <p className="mt-4 text-blue-700 dark:text-blue-400">
          No installation required for web transfers
        </p>
      </div>
    </div>
  );
};
