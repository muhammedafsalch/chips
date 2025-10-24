"use client";

import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, CheckCircle, Zap, Shield } from "lucide-react";

// --- Data ---
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Why Kripzo", href: "#why" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const productCards = [
  {
    title: "Kerala Banana Chips",
    desc: "Crispy, lightly salted, made from Nendran bananas and fried in 100% coconut oil.",
    icon: CheckCircle,
  },
  {
    title: "Kerala Chips",
    desc: "Traditional homemade-style chips with authentic Kerala crunch.",
    icon: Zap,
  },
  {
    title: "Specialty Snacks",
    desc: "Spicy Banana Chips, Sweet Chips, and Mixed Kerala Snacks — perfect for every mood.",
    icon: Shield,
  },
];

const whyPoints = [
  "100% Pure Coconut Oil Frying",
  "Authentic Kerala Taste",
  "Direct from Source — Freshly Made Daily",
  "No Artificial Colours or Preservatives",
  "Hygienic & Modern Packaging",
  "Trusted Brand of UK Group",
];

const reviews = [
  {
    text: "The best banana chips I’ve ever tasted! Pure Kerala flavor.",
    author: "Abdul Rahman",
    location: "Dubai",
  },
  {
    text: "Fresh, crunchy, and packed beautifully. Love the golden color.",
    author: "Neha Sharma",
    location: "Mumbai",
  },
  {
    text: "Tastes exactly like homemade Kerala chips. Highly recommended!",
    author: "Sameer Khan",
    location: "Oman",
  },
];

// --- Components ---
const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm font-semibold text-gray-200 hover:text-yellow-400 transition-colors"
  >
    {children}
  </a>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-6 container mx-auto scroll-mt-24 text-gray-100">
    <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12 relative pb-3">
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
    </h2>
    {children}
  </section>
);

const ProductCard = ({ title, desc, Icon }) => (
  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-yellow-400 hover:shadow-yellow-900/50 shadow-lg transition-transform hover:scale-[1.02] flex flex-col items-start space-y-3">
    <Icon size={32} className="text-yellow-400" />
    <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
    <p className="text-gray-300 text-sm">{desc}</p>
  </div>
);

const ReviewCard = ({ text, author, location }) => (
  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-yellow-400 transition-transform hover:scale-[1.02]">
    <p className="text-yellow-400 text-lg mb-3">★★★★★</p>
    <p className="italic text-gray-200 mb-4">“{text}”</p>
    <p className="text-sm text-gray-400">— {author}, {location}</p>
  </div>
);

const ContactInfo = ({ Icon, content }) => (
  <div className="flex items-center space-x-4 text-gray-200">
    <Icon size={22} className="text-yellow-400" />
    <span>{content}</span>
  </div>
);

// --- Main Page ---
export default function KripzoDark() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800 py-4 px-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-yellow-400">KRIPZO</h1>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
            ))}
          </div>
          <button
            className="md:hidden text-gray-300 p-2 hover:text-yellow-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-gray-100 hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="pt-28 pb-32 bg-gradient-to-br from-black via-gray-950 to-black text-center border-b border-gray-900">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-6xl sm:text-7xl font-extrabold text-white leading-tight">
            <span className="text-yellow-400">The Golden Crunch</span> from God’s Own Country
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Authentic Kerala banana chips made with 100% pure coconut oil — fresh, crispy, and full of tradition.
          </p>
          <a
            href="#products"
            className="inline-block mt-8 px-10 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition"
          >
            Explore Products 🍌
          </a>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="Our Story">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-300">
            Kripzo is a premium Kerala-based snacks brand under UK Group, known for producing authentic banana chips
            and traditional Kerala-style snacks using carefully selected Nendran bananas fried in 100% pure coconut oil.
          </p>
          <blockquote className="text-xl italic text-yellow-400 border-l-4 border-gray-600 pl-4">
            “From Kerala to the World — bringing tradition, taste, and trust together.”
          </blockquote>
        </div>
      </Section>

      {/* Products */}
      <Section id="products" title="Our Products">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCards.map((p) => (
            <ProductCard key={p.title} title={p.title} desc={p.desc} Icon={p.icon} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section id="why" title="Why Choose Kripzo?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPoints.map((b, i) => (
            <div key={i} className="flex items-center p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-yellow-400 transition">
              <span className="text-yellow-400 text-xl mr-3">✅</span>
              <p className="text-gray-200">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="Customer Reviews">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <ReviewCard key={i} text={r.text} author={r.author} location={r.location} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in Touch">
        <div className="grid md:grid-cols-2 gap-12 bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Have a question or want to partner with us? Reach out today — we’d love to share the Golden Crunch with you!
            </p>
            <div className="space-y-4">
              <ContactInfo Icon={Phone} content="+91 9946550555" />
              <ContactInfo Icon={Mail} content="info@uktradings.com" />
              <ContactInfo Icon={MapPin} content="Kizhisseri, Kerala, India" />
            </div>
            <a
              href="https://www.uktradings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 text-sm"
            >
              🌐 www.uktradings.com
            </a>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-8 border-t border-gray-800 text-gray-400">
        <p>© {new Date().getFullYear()} Kripzo (A UK Group Product). All Rights Reserved.</p>
        <p className="text-xs mt-1 text-gray-500">
          The Golden Crunch from God’s Own Country
        </p>
      </footer>
    </div>
  );
}
