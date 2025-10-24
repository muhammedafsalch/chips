// File: app/page.jsx (or pages/index.jsx)
"use client";

import React, { useState } from "react";
import { 
  Menu, X, Phone, Mail, MapPin, 
  CheckCircle, Zap, Shield, Star, 
  Leaf, Package, Award
} from "lucide-react";

// --- Data Definitions (Updated with PDF Info) ---
const CONTACT_PHONE_PDF = "+91 93465 50555";
const CONTACT_ADDRESS_PDF = "Kizhisseri, Malappuram, Kerala, India - 673641";
const CONTACT_EMAIL = "info@uktradings.com";
const CONTACT_WEBSITE = "www.uktradings.com";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Nutrition", href: "#nutrition" },
  { name: "Why Kripzo", href: "#why" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const productCards = [
  {
    title: "Kerala Banana Chips",
    desc: "Crispy, lightly salted, made from premium Nendran bananas and fried in 100% coconut oil.",
    icon: CheckCircle,
  },
  {
    title: "Traditional Kerala Chips",
    desc: "The authentic, homemade-style chips featuring the perfect crunch and golden color.",
    icon: Zap,
  },
  {
    title: "Specialty Snacks",
    desc: "A range of Spicy Banana Chips, Sweet Chips, and Mixed Kerala Snacks for every craving.",
    icon: Shield,
  },
];

const whyPoints = [
  { title: "100% Pure Coconut Oil Frying", icon: "🥥" },
  { title: "Authentic Kerala Taste", icon: "🌶️" },
  { title: "Direct from Source — Freshly Made Daily", icon: "📦" },
  { title: "No Artificial Colours or Preservatives", icon: "🛡️" },
  { title: "Hygienic & Modern Packaging", icon: "✨" },
  { title: "Trusted Brand of UK Group", icon: "🏆" },
];

const reviews = [
  { text: "The best banana chips I’ve ever tasted! Pure Kerala flavor.", author: "Abdul Rahman", location: "Dubai" },
  { text: "Fresh, crunchy, and packed beautifully. Love the golden color.", author: "Neha Sharma", location: "Mumbai" },
  { text: "Tastes exactly like homemade Kerala chips. Highly recommended!", author: "Sameer Khan", location: "Oman" },
];

const nutritionFacts = {
  energy: '490 kcal',
  carbohydrates: '52g',
  protein: '2g',
  totalFat: '36g',
  saturatedFat: '29g',
  cholesterol: '0mg',
  fiber: '4g',
  sodium: '10mg',
  ingredients: ['Nendran Bananas', 'Coconut Oil', 'Salt'],
};

// --- Utility & Themed Components ---

// Custom CSS keyframes for animations
const MotionStyles = () => (
  <style jsx global>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
  `}</style>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm font-semibold text-gray-100 hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const Section = ({ id, title, children }) => (
  <section 
    id={id} 
    className="py-20 px-6 container mx-auto scroll-mt-24 text-gray-100 bg-[#023d24]/[0.9]"
  >
    <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12 relative pb-3">
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
    </h2>
    {children}
  </section>
);

const ProductCard = ({ title, desc, Icon }) => (
  <div className="bg-[#023d24] p-8 rounded-2xl border border-yellow-800 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-900/40 shadow-xl transition-all duration-300 hover:scale-[1.03] flex flex-col items-start space-y-4">
    <Icon size={36} className="text-yellow-400" />
    <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
    <p className="text-gray-300 text-base">{desc}</p>
  </div>
);

const ReviewCard = ({ text, author, location }) => (
  <div className="bg-[#023d24] p-6 rounded-2xl border border-yellow-800 hover:border-yellow-400 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
    <div className="text-yellow-400 text-xl mb-3 flex space-x-0.5">
      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
    </div>
    <p className="italic text-gray-200 mb-4 flex-grow">“{text}”</p>
    <p className="text-sm text-gray-400 border-t border-gray-700 pt-2">— {author}, {location}</p>
  </div>
);

const ContactInfo = ({ Icon, content, href }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel="noopener noreferrer"
    className="flex items-center space-x-4 text-gray-200 hover:text-yellow-400 transition-colors duration-200 group"
  >
    <Icon size={24} className="text-yellow-400 group-hover:scale-110 transition-transform duration-200" />
    <span className="text-lg">{content}</span>
  </a>
);

// --- Main Page ---
export default function KripzoDark() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-green-950 text-gray-100 font-sans min-h-screen">
      <MotionStyles />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-green-900/90 backdrop-blur border-b border-yellow-800 py-4 px-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-yellow-400">KRIPZO 🍌</h1>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
            ))}
          </div>
          <button
            className="md:hidden text-gray-300 p-2 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-green-950/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in">
          <button
            className="absolute top-6 right-6 text-gray-300 p-2 hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            <X size={36} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-extrabold text-gray-100 hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <main>
        {/* Hero */}
        <section className="pt-28 pb-32 bg-cover bg-center bg-fixed text-center border-b border-yellow-800" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/kerala-banana-field-placeholder.jpg')" }}>
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-6xl sm:text-8xl font-black text-white leading-none tracking-tight">
              <span className="text-yellow-400 drop-shadow-lg">THE GOLDEN CRUNCH</span>
            </h2>
            <h3 className="text-3xl font-semibold italic text-yellow-300/90 drop-shadow-md">
              from God’s Own Country
            </h3>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto pt-4">
              Authentic Kerala banana chips made with **100% pure coconut oil** — fresh, crispy, and full of tradition.
            </p>
            <a
              href="#products"
              className="inline-block mt-8 px-12 py-4 bg-yellow-400 text-green-950 font-extrabold text-xl rounded-full shadow-2xl shadow-yellow-500/40 hover:bg-yellow-300 transform hover:scale-105 transition duration-300"
            >
              Explore Our Products 🥇
            </a>
            <p className="text-sm text-gray-400 pt-2">(A UK Group Product)</p>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="Our Story">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed border-l-4 border-yellow-400 pl-4 mx-auto">
              Kripzo is a premium Kerala-based snacks brand under **UK Group**, dedicated to producing authentic banana chips and traditional Kerala-style snacks. We hand-select **Nendran bananas** and uphold strict quality standards.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our commitment is to freshness and purity. Every batch is fried in **100% pure coconut oil**, ensuring the genuine flavor of Kerala reaches customers across India and abroad. We connect tradition with modern hygiene and packaging.
            </p>
            <blockquote className="text-2xl font-semibold italic text-yellow-400 pt-4">
              “Purity, Freshness, and natural goodness in every bite.”
            </blockquote>
          </div>
        </Section>

        {/* Products */}
        <Section id="products" title="Authentic Kerala Delights">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCards.map((p) => (
              <ProductCard key={p.title} title={p.title} desc={p.desc} Icon={p.icon} />
            ))}
          </div>
        </Section>
        
        {/* Nutrition & Ingredients */}
        <Section id="nutrition" title="Purity & Nutritional Facts">
          <div className="max-w-4xl mx-auto bg-green-950 p-8 rounded-3xl border border-yellow-800 shadow-2xl">
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Ingredients */}
              <div className="md:col-span-1 space-y-4">
                <h3 className="text-2xl font-bold text-yellow-400 flex items-center">
                  <Leaf size={28} className="mr-2"/> Ingredients
                </h3>
                <ul className="space-y-2 text-lg text-gray-200 list-inside">
                  {nutritionFacts.ingredients.map((item, i) => (
                    <li key={i} className="flex items-center">
                       <span className="text-yellow-400 mr-2">●</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-yellow-300 italic pt-4">
                  *No preservatives or artificial flavours.
                </p>
              </div>

              {/* Nutritional Info Table */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-yellow-400 flex items-center mb-4">
                   <Package size={28} className="mr-2"/> Values (per 100g approx.)
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {Object.entries(nutritionFacts).filter(([key]) => key !== 'ingredients').map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center pb-2 border-b border-gray-700">
                      <span className="font-semibold capitalize text-gray-300">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-bold text-yellow-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section id="why" title="The Kripzo Promise">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((b, i) => (
              <div key={i} className="flex items-center p-5 bg-green-950 border border-yellow-800 rounded-xl hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-yellow-400 text-3xl mr-3">{b.icon}</span>
                <p className="text-lg font-medium text-gray-200">{b.title}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Reviews */}
        <Section id="reviews" title="The Golden Feedback">
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <ReviewCard key={i} text={r.text} author={r.author} location={r.location} />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Connect with Us">
          <div className="grid md:grid-cols-2 gap-12 bg-green-950 p-10 rounded-3xl border border-yellow-800 shadow-2xl">
            <div className="space-y-8">
              <p className="text-gray-300 text-xl">
                For bulk orders, distribution inquiries, or simply to share your feedback, reach out to the **UK Trading LLP** team.
              </p>
              <div className="space-y-6">
                <ContactInfo 
                  Icon={Phone} 
                  content={CONTACT_PHONE_PDF} 
                  href={`tel:${CONTACT_PHONE_PDF.replace(/\s/g, '')}`} 
                />
                <ContactInfo 
                  Icon={Mail} 
                  content={CONTACT_EMAIL} 
                  href={`mailto:${CONTACT_EMAIL}`} 
                />
                <ContactInfo 
                  Icon={MapPin} 
                  content={CONTACT_ADDRESS_PDF} 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS_PDF)}`}
                />
                <ContactInfo
                  Icon={Award}
                  content={CONTACT_WEBSITE}
                  href={`https://${CONTACT_WEBSITE}`}
                />
              </div>
            </div>

            <form className="space-y-6 bg-[#023d24] p-6 rounded-xl border border-yellow-900 shadow-inner">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-green-950 border border-yellow-800 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-green-950 border border-yellow-800 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <textarea
                rows="5"
                placeholder="Your Inquiry (e.g., Bulk Order, Feedback)"
                className="w-full bg-green-950 border border-yellow-800 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-green-950 font-extrabold text-lg py-3 rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.01] shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-center py-8 border-t border-yellow-900 text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} **Kripzo** (A UK Group Product). All Rights Reserved.
        </p>
        <p className="text-xs mt-1 text-gray-500">
          Manufacturing & Marketing: UK Trading LLP, {CONTACT_ADDRESS_PDF}
        </p>
      </footer>
    </div>
  );
}