import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ContactUs from './pages/ContactUs';
import RefundReturns from './pages/RefundReturns';
import ShippingCancellation from './pages/ShippingCancellation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/refund-returns" element={<RefundReturns />} />
        <Route path="/shipping-cancellation" element={<ShippingCancellation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;