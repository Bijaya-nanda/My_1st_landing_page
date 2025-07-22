import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="mt-16 px-4 max-w-4xl mx-auto">
      {/* Footer Links */}
      <div className="text-center mb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <Link 
            to="/privacy-policy" 
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-conditions" 
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <Link 
            to="/contact-us" 
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link 
            to="/refund-returns" 
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Refund and Returns Policy
          </Link>
          <Link 
            to="/shipping-cancellation" 
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Shipping & Cancellation
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <p className="text-sm text-gray-600 leading-relaxed text-center">
          This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward. All of my terms, privacy policies and disclaimers for this program and website can be accessed via the links. I feel transparency is important and I hold ourselves (you & me) to a high standard of integrity. Thanks for stopping by. I hope this training and content brings you a lot of value & results.
        </p>
      </div>
    </div>
  );
};

export default Footer;