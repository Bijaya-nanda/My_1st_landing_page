import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: August 12, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This Privacy Policy explains how <strong>Your Brand Name</strong> collects, uses, and protects your personal data when you visit our website or use our services. By using our site, you agree to the practices outlined below.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Personal details (name, email address, phone number)</li>
              <li>Usage data (pages visited, time spent, browser type)</li>
              <li>Device information (IP address, operating system, device type)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your data may be used to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your orders and manage your account</li>
              <li>Send important updates, offers, or newsletters</li>
              <li>Analyze site usage and enhance user experience</li>
            </ul>

            <h2>3. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to remember your preferences, understand how you interact with our site, and improve our offerings. You can disable cookies in your browser settings, but some features may not work as intended.
            </p>

            <h2>4. Sharing Your Data</h2>
            <p>We only share your personal information when necessary:</p>
            <ul>
              <li>With trusted service providers who help operate our business</li>
              <li>For legal reasons or to protect our rights and safety</li>
              <li>With your consent</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes stated in this policy or as required by law.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To make such requests, please contact us at{' '}
              <a href="mailto:hello@yourbrand.com" className="text-indigo-600 hover:underline">
                hello@yourbrand.com
              </a>.
            </p>

            <h2>7. Security</h2>
            <p>
              While we take reasonable steps to protect your data, no method of online transmission is 100% secure.
            </p>

            <h2>8. Children’s Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect their personal data.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted here with an updated “Last Updated” date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@yourbrand.com" className="text-indigo-600 hover:underline">
                hello@yourbrand.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
