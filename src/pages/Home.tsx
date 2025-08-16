import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import FAQSection from '../components/FAQSection';
import PeopleWatching from '../components/PeopleWatching';
import WhatsAppButton from '../components/WhatsAppButton';

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
      {/* Hero Section */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        {/* Logo/Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 tracking-tight">
            Corekits
          </h1>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight mb-4 sm:mb-6 px-2">
          Want to Make $10K/Month with AI?<br />
          Faceless ASMR Pages Are Doing It. (Proof Below)
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#4B5563] leading-relaxed mb-6 sm:mb-8 px-4 max-w-4xl mx-auto">
          Build your own viral AI ASMR business in 7 days —<br />
          No editing, no experience needed.<br />
          Get done-for-you reels, prompts, $10K/month blueprint, and tools.
        </p>

        {/* Call-to-Action Button */}
<div className="mb-6">
  <a
    href="https://superprofile.bio/vp/10k-month-faceless-asmr-kit"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gradient-to-r from-indigo-600 to-purple-400 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 animate-dramatic-shake">
      ⚡ Order Now at <span className="line-through text-gray-200">₹599</span> ₹299
    </button>
  </a>
</div>


        {/* Star Rating Block */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-1 mb-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-base font-medium text-gray-600">
            Rated 4.7 out of 5. (1043+ Verified Customers)
          </p>
        </div>

        {/* Persistent Countdown Timer */}
        <CountdownTimer className="mb-8" />
        <PeopleWatching />
        <div className="mb-6"></div>

        {/* Product Visual */}
<div className="mb-12">
  <div className="w-full max-w-md mx-auto aspect-square">
    <img
      src="/product-preview.png"
      alt="Product Preview"
      className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-200"
    />
  </div>
</div>

        {/* Viral Proof Section */}
        <div className="mb-16 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 py-10 md:py-16 bg-gradient-to-b from-[#6C63FF] to-[#3B82F6] rounded-2xl">
            {/* Proof Heading */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Millions of Views. Thousands of Followers. Proof Below ↓
              </h3>
            </div>

            {/* Screenshots Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Screenshot Placeholder 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-inner">
  <img
    src="/Insta-SS1.jpg"
    alt="AI ASMR KIT"
    className="w-full h-full object-cover"
  />
</div>

              </div>

              {/* Screenshot Placeholder 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-inner">
  <img
    src="/insta-ss2.jpg"
    alt="Earn money online"
    className="w-full h-full object-cover"
  />
</div>

              </div>

              {/* Screenshot Placeholder 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-inner">
  <img
    src="/insta-ss3.jpg"
    alt="Viral asmr reels"
    className="w-full h-full object-cover"
  />
</div>

              </div>

              {/* Screenshot Placeholder 4 */}
              <div className="bg-white rounded-2xl shadow-lg p-4">
               <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-inner">
  <img
    src="/insta-ss4.jpg"
    alt="how to earn $10k/month"
    className="w-full h-full object-cover"
  />
</div>

              </div>
            </div>
          </div>
        </div>

        {/* Lifetime Access Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-400 text-white font-bold text-base md:text-lg px-6 py-3 rounded-full shadow-lg inline-block">
            * Lifetime Access – One-time payment – Instant Access – 100% Risk Free *
          </div>
        </div>

        {/* Value Stack Section */}
        <div className="mb-12 text-left max-w-3xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            🎁 What You Get (Value Stack)
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl mt-1">✅</span>
              <span className="text-gray-700 font-medium flex-1">100+ Ready-to-Post Viral ASMR Reels</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl mt-1">✅</span>
              <span className="text-gray-700 font-medium flex-1">100+ AI ASMR Prompts for Viral reels</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl mt-1">✅</span>
              <span className="text-gray-700 font-medium flex-1">$10k/Month Monetization Strategy with Proof</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl mt-1">✅</span>
              <span className="text-gray-700 font-medium flex-1">Go Viral on Instagram & YouTube Shorts (Beginner Strategy)</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">💼 Business Builder Bundle:</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">"3 AI ASMR Scripts That Hit 1M+ Views with Proof"</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">AI ASMR Business Starter Checklist (PDF)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">Niche Brainstorming Prompt Kit</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">30 Viral Caption Templates</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">Canva Branding Kit (Logo, Thumbnails, Channel Assets)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">Free Tool Stack + Automation Blueprint</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <span className="text-gray-700 font-medium flex-1">Lifetime Telegram Community Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Call-to-Action Button */}
<div className="mb-6">
  <a
    href="https://superprofile.bio/vp/10k-month-faceless-asmr-kit"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gradient-to-r from-indigo-600 to-purple-400 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 animate-dramatic-shake">
      ⚡ Order Now at <span className="line-through text-gray-200">₹599</span> ₹299
    </button>
  </a>
</div>


        {/* Second Countdown Timer */}
        <CountdownTimer className="mb-8" />
        <PeopleWatching />
        <div className="mb-6"></div>

        {/* Video Player Section */}
        <div className="mb-16">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-gray-600 font-medium text-lg">YouTube Video Player</p>
                  <p className="text-sm text-gray-500 mt-2">16:9 Aspect Ratio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Everything You'll Get Inside Section */}
        <div className="mb-16 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 py-10 md:py-20 bg-gradient-to-b from-[#6C63FF] to-[#3B82F6]">
            {/* Heading Badge */}
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-4 rounded-xl bg-gradient-to-r from-[#93C5FD] to-[#E0E7FF] shadow-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  EVERYTHING YOU'LL GET INSIDE:
                </h3>
              </div>
            </div>

            
{/* First Product Preview */}
<div className="mb-12 mt-8">
  <div className="w-full max-w-2xl mx-auto">
    <div className="w-full rounded-xl overflow-hidden shadow-lg">
      <img
        src="/Product-preview1.jpg"
        alt="Product Preview"
        className="w-full h-auto object-contain"
      />
    </div>
    <div className="bg-white rounded-b-xl shadow-md py-3 px-4 text-center">
      <h4 className="text-base md:text-lg font-bold text-[#111827]">
        100+ Ready-to-Post Viral ASMR Reels
      </h4>
    </div>
  </div>
</div>


            
            {/* 10 Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
  {[
    "100+ AI ASMR Prompts for Viral reels",
    "$10K/Month Monetization Strategy with Proof",
    "Go Viral by Instagram Growth system",
    "Go Viral by Youtube shorts Growth Engine",
    "AI ASMR Business Starter Checklist (PDF)",
    "Niche Brainstorming Prompt Kit",
    "Viral Caption Vault",
    "Canva Branding Kit (Assets)",
    "Free Tool Stack + Automation Blueprint",
    "Lifetime Whatsapp Community Access"
  ].map((productName, index) => (
    <div
      key={index}
      className="group cursor-pointer transition-transform duration-200 hover:-translate-y-1 w-full"
    >
      <div className="w-full aspect-square bg-[#E0E7FF] rounded-xl shadow-lg overflow-hidden">
        <img
          src={`/Product-preview${index + 2}.jpg`}
          alt={`Product ${index + 2}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white rounded-b-xl shadow-md py-3 px-3 text-center">
        <h4 className="text-base md:text-lg font-bold text-[#111827] leading-tight">
          {productName}
        </h4>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>


      {/* Done For You Heading */}
      <div className="mb-4 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Everything is <em>100% DONE FOR YOU!</em>
        </h3>
      </div>

      {/* Third Call-to-Action Button */}
<div className="mb-6 text-center">
  <a
    href="https://superprofile.bio/vp/10k-month-faceless-asmr-kit"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gradient-to-r from-indigo-600 to-purple-400 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 animate-dramatic-shake">
      ⚡ Order Now at <span className="line-through text-gray-200">₹599</span> ₹299
    </button>
  </a>
</div>


      {/* Final Countdown Timer */}
      <div className="text-center">
        <CountdownTimer className="mb-8" />
        <PeopleWatching />
        <div className="mb-6"></div>
      </div>

        {/* Why This Works Section */}
        <div className="mb-16 px-4 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why This Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📈</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  ASMR is exploding — and nobody's doing it right with AI
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🎯</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  No experience needed
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  No fancy mic or camera — your phone + AI = magic
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  AI + viral psychology does the heavy lifting (saves time & money)
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🚀</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  Proven to grow YouTube Shorts + IG in 2025
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">💎</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  Trendy niche with low competition & massive demand
                </p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🔄</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  Repurpose 1 reel into 4 platforms: IG, YT Shorts, Facebook & TikTok
                </p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <p className="text-black font-bold leading-relaxed">
                  Passive growth system: schedule & grow while you sleep
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="mb-16 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              What Our Customers Are Saying 💬
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              (Real Feedback. Real Results.)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">💬</div>
                  <p className="text-gray-600 font-medium text-sm">WhatsApp Screenshot 1</p>
                  <p className="text-xs text-gray-500 mt-1">Mobile 9:16 Ratio</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600 text-center">
                "Got 2.3M views in 9 days 😭"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
  <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center mb-3 overflow-hidden">
    <img 
      src="/testi1.png" 
      alt="WhatsApp Screenshot 1" 
      className="w-full h-full object-cover rounded-xl" 
    />
  </div>
  <p className="text-sm font-semibold text-gray-600 text-center">
    "Got 2.3M views in 9 days 😭"
  </p>
</div>


            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">💬</div>
                  <p className="text-gray-600 font-medium text-sm">WhatsApp Screenshot 3</p>
                  <p className="text-xs text-gray-500 mt-1">Mobile 9:16 Ratio</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600 text-center">
                "This actually works! 🔥"
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">💬</div>
                  <p className="text-gray-600 font-medium text-sm">WhatsApp Screenshot 4</p>
                  <p className="text-xs text-gray-500 mt-1">Mobile 9:16 Ratio</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600 text-center">
                "Made ₹15K in my first month!"
              </p>
            </div>
          </div>
        </div>

       {/* 100% Satisfaction Guarantee Section */}
<div className="mb-16 px-4 max-w-4xl mx-auto">
  <div className="w-full bg-gradient-to-b from-[#6C63FF] to-[#3B82F6] rounded-2xl py-12 px-6 text-center">
    {/* Image Upload Space */}
    <div className="mb-8">
      <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
        <img
          src="/productgurantee.jpg"  // Replace this with the actual image path
          alt="Guarantee Badge"
          className="w-full h-full object-cover"
        />
      </div>
    </div>


            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Your Satisfaction is our NO. 1 Priority!
            </h3>

            {/* Body Text */}
            <div className="max-w-2xl mx-auto">
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
                We stand fully behind the value of this product. If you don't feel it gives you a powerful edge in growing your content, just reach out within 7 days and we'll make it right—no questions asked.
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium">
                Your success is our mission. This is a zero-risk, high-reward investment in your content journey.
              </p>
            </div>
          </div>
        </div>

        {/* Final Offer + CTA Section */}
        <div className="mb-16 px-4 max-w-4xl mx-auto">
          <div className="w-full bg-gradient-to-b from-[#6C63FF] to-[#3B82F6] rounded-2xl py-12 px-6 text-center">
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              💸 One-Time Price — No Surprises
            </h3>

            {/* Price Stack */}
            <div className="mb-8">
              {/* Crossed Out Price */}
              <div className="text-xl md:text-2xl text-white/60 line-through mb-2">
                ₹599
              </div>
              
              {/* Main Price */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-6">
                ₹299 Only
              </div>

              {/* Benefits List */}
              <div className="space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="text-green-400 text-lg">✅</span>
                  <span className="font-medium">Get Everything for ₹499 only</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="text-yellow-400 text-lg">🔓</span>
                  <span className="font-medium">Instant access + all files delivered</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="text-blue-300 text-lg">🧾</span>
                  <span className="font-medium">No subscription. Yours forever.</span>
                </div>
              </div>
            </div>

            {/* Final CTA Button */}
<div className="mb-4">
  <a
    href="https://superprofile.bio/vp/10k-month-faceless-asmr-kit" // Replace with your actual payment URL
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-lg mx-auto block"
  >
    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg md:text-xl px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
      <span>👉 Yes, I Want the AI ASMR Empire Kit</span>
    </button>
  </a>
  <p className="text-white/80 text-sm mt-2 font-medium">
    [Instant Download + Join Community]
  </p>
</div>


            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
              <span className="text-green-400">🔒</span>
              <span>Secure Checkout • SSL Protected</span>
            </div>
          </div>
        </div>

        {/* 3 Steps Process Section */}
        <div className="mb-16 px-4 max-w-4xl mx-auto">
          {/* Top Heading */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              You're Now Just 3 Clicks Away
            </h3>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              from accessing the AI ASMR Empire Kit
            </p>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              {/* Illustration Placeholder */}
              <div className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
                <div className="text-center p-4">
                  <div className="text-2xl mb-2 text-gray-400">🖼️</div>
                  <p className="text-gray-500 font-medium text-sm">Insert Illustration Here</p>
                  <p className="text-gray-400 text-xs mt-1">600x300 px</p>
                </div>
              </div>
              
              {/* Step Title */}
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                STEP 1 — Click Order Now!
              </h4>
              
              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">
                Click on the Order Now button below and you'll be redirected to the payment page. Just fill in your details and complete the payment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              {/* Illustration Placeholder */}
              <div className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
                <div className="text-center p-4">
                  <div className="text-2xl mb-2 text-gray-400">🖼️</div>
                  <p className="text-gray-500 font-medium text-sm">Insert Illustration Here</p>
                  <p className="text-gray-400 text-xs mt-1">600x300 px</p>
                </div>
              </div>
              
              {/* Step Title */}
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                STEP 2 — Access Your Purchase
              </h4>
              
              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">
                After payment, you'll be automatically redirected to a Thank You Page with the download link. Read the instructions there carefully to access your files.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              {/* Illustration Placeholder */}
              <div className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
                <div className="text-center p-4">
                  <div className="text-2xl mb-2 text-gray-400">🖼️</div>
                  <p className="text-gray-500 font-medium text-sm">Insert Illustration Here</p>
                  <p className="text-gray-400 text-xs mt-1">600x300 px</p>
                </div>
              </div>
              
              {/* Step Title */}
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                STEP 3 — Download and Use
              </h4>
              
              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">
                You'll get a video guide to help you use everything. Click the download link to get all your files instantly — it's super simple!
              </p>
            </div>
          </div>

          {/* Final Paragraph */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-center">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Your purchase comes with a Lifetime Updates Policy.</strong><br />
              You will receive all the product updates on your email.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also send out random gifts and early access products to our buyers, so keep an eye out for our emails.
            </p>
          </div>

        {/* Final CTA Button */}
<div className="text-center">
  <a
    href="https://superprofile.bio/vp/10k-month-faceless-asmr-kit" // 🔁 Replace with your actual payment URL
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-gradient-to-r from-indigo-600 to-purple-400 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 animate-dramatic-shake">
      👉 Order Now & Start Instantly
    </button>
  </a>
</div>

        </div>


        {/* FAQ Section */}
        <FAQSection />
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
};

export default Home;
