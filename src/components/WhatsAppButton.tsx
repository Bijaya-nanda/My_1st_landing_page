import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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

  // ✅ Fixed WhatsApp Icon
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-6 h-6"
      fill="white"
    >
      <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm4.936 21.506c-.372 1.041-1.836 1.906-3.019 2.156-1.003.211-2.312.375-6.709-1.397-5.272-2.144-8.625-7.625-8.891-7.991-.266-.366-2.184-2.931-2.184-5.591 0-2.661 1.441-3.966 1.916-4.431.475-.466 1-.691 1.325-.691.266 0 .522.009.756.016.234.008.447.016.625.016.178 0 .397-.075.641-.309.244-.234.934-.903 1.284-1.234.356-.331.713-.466 1.019-.466.306 0 .6.156.966.466.366.309 1.272 1.203 1.559 1.606.287.403.575 1.181.156 2.206-.419 1.025-1.906 2.234-2.609 2.734-.703.5-.509.903-.156 1.456.353.553 2.234 2.416 4.309 3.466 2.075 1.05 2.997.834 3.55.481.553-.353.906-.709 1.359-1.209.453-.5.906-.572 1.509-.334.603.238 3.794 1.784 4.444 2.109.65.325 1.084.494 1.244.772.159.278.159 1.572-.213 2.613z"/>
    </svg>
  );

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
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center group"
          aria-label="Open WhatsApp Chat"
        >
          <WhatsAppIcon />

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
                  <WhatsAppIcon />
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
