import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShippingCancellation: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shipping & Cancellation Policy
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Digital Product Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The shipping is not applicable on this website as we only sell Digital Products. Your orders will be delivered immediately after the purchase to your email. We will send a message on your WhatsApp as well.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Due to the nature of the products, cancellation and refunds are not applicable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please reach out to us on our support email: <a href="mailto:corekits@gmail.com" className="text-indigo-600 hover:text-indigo-700 hover:underline">hello@corekits@gmail.com</a>, and we will solve your queries in less than 24 hours.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCancellation;
