import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';  // ✅ Official WhatsApp Icon

const WhatsAppButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button with animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    window.open('https://wa.me/919337168486', '_blank');
    setIsPopupOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <button
          onClick={togglePopup}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center group"
          aria-label="Open WhatsApp Chat"
        >
          <FaWhatsapp className="w-6 h-6" /> {/* ✅ Replaced icon */}

          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </button>

        {/* Chat Popup */}
        {isPopupOpen && (
          <div
            className={`absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 ${
              isPopupOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            {/* Header */}
            <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-5 h-5 text-green-500" /> {/* ✅ Replaced icon */}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Corekits Support</h3>
                  <p className="text-green-100 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={togglePopup}
                className="text-white hover:text-green-100 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Content */}
            <div className="p-4">
              <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                <p className="text-gray-800 font-medium text-sm leading-relaxed">
                  Hello 👋🏼 Can we help you?
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleOpenChat}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Open Chat</span>
                <span>➤</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for mobile */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={togglePopup}
        />
      )}
    </>
  );
};

export default WhatsAppButton;
