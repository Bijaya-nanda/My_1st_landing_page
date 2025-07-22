import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is this a one-time payment?",
    answer: "Yes, the ₹299 payment provides lifetime access to all the assets and the video editing course."
  },
  {
    question: "Do I need any prior experience to use this bundle?",
    answer: "No, the bundle is designed for both beginners and experienced creators. The included guide will help you get started."
  },
  {
    question: "How do I access the assets after purchase?",
    answer: "After purchasing, you will receive instant access to download all the assets and guide materials."
  },
  {
    question: "Can I share the assets with others?",
    answer: "No, the assets are licensed for individual use only. Sharing them with others is prohibited."
  },
  {
    question: "What if I have trouble accessing the assets?",
    answer: "If you encounter any issues, you can contact customer support for assistance."
  },
  {
    question: "Can I use these assets for commercial projects?",
    answer: "Yes, the assets are royalty-free and can be used for personal and commercial projects."
  },
  {
    question: "How can I access your other bundles?",
    answer: "We will be launching our shop soon. For now, you can visit our Instagram page!"
  }
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="mb-16 px-4 max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          GOT QUESTIONS? WE GOT ANSWERS!!!
        </h3>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border-2 border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 flex-1 pr-4">
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
                <span className="text-lg font-bold text-gray-800">
                  {faq.question}
                </span>
              </div>
            </button>

            {/* Answer */}
            {openItems.includes(index) && (
              <div className="px-6 pb-4 border-t border-gray-100">
                <p className="text-gray-700 font-medium leading-relaxed pt-3">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;