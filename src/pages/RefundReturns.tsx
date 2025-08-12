import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundReturns: React.FC = () => {
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
            Refund and Returns Policy
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Since https://[YourDomainName].com/ offers non-tangible irrevocable goods we do not issue refunds once the order is accomplished and the product download will be available and accessible via mail or download. The nature of digital media means that once you have downloaded a product there's really no way to 'return' it. So all payments at this website are non refundable and any request or dispute will be rejected without any communication.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a customer you are responsible for understanding this upon purchasing any item at our site. There will be no refund if the product or service is downloadable or usable online in real-time and our records shows that product or service has been downloaded or used through our system.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We stand behind our products and your satisfaction with them is important to us. However, because our products are digital goods delivered via Internet download we generally offer no refunds. However, we realize that exceptional circumstance can take place with regard to the character of the product we supply.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Download and Unzipping Issues</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              It may happen so that you are having problems while downloading the product or its unzipping. Claims regarding such issues must be submitted within 24 hours. If you do not properly contact us during this period, you agree that we may construe silence as a successful download of the product with no further right of redress or refund for a "download issue" reason.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In case the if you have not able unzip the product, please contact us immediately. We will be happy to mail you the product to download. Please contact us on <a href="mailto:hello@yourdomain.com" className="text-indigo-600 hover:text-indigo-700 hover:underline">hello@[YourDomainName].com</a> for the same.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundReturns;
