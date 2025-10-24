"use client";

import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, CheckCircle, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Data ---
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Brand", href: "#brand" },
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
    className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-amber-500 transition-colors"
  >
    {children}
  </a>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-6 container mx-auto scroll-mt-24 text-gray-900">
    <h2 className="text-4xl font-extrabold text-center mb-12 relative pb-3 text-blue-900">
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400 rounded-full"></span>
    </h2>
    {children}
  </section>
);

const ProductCard = ({ title, desc, Icon }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition"
  >
    <Icon size={32} className="text-amber-500 mb-3" />
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm">{desc}</p>
  </motion.div>
);

const ReviewCard = ({ text, author, location }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-amber-200 transition"
  >
    <p className="text-amber-500 text-lg mb-3">★★★★★</p>
    <p className="italic text-gray-800 mb-4">“{text}”</p>
    <p className="text-sm text-gray-500">— {author}, {location}</p>
  </motion.div>
);

const ContactInfo = ({ Icon, content }) => (
  <div className="flex items-center space-x-4 text-gray-800">
    <Icon size={22} className="text-blue-700" />
    <span>{content}</span>
  </div>
);


const GallerySection = () => {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.webp",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-amber-50 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-3">Our Gallery</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A glimpse into the world of <span className="text-amber-500 font-semibold">Kripzo</span> —  
          from the golden chips to the hands that make them.
        </p>
        <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 container mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


// --- Main Page ---
export default function KripzoLight() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 py-4 px-6 shadow-sm">
  <nav className="container mx-auto flex justify-between items-center">
    {/* --- Logo + Brand --- */}
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-md">
        <Image
          src="/logo.png"
          alt="Kripzo Logo"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl font-extrabold text-blue-900">
        KRIP<span className="text-amber-500">ZO</span>
      </h1>
    </div>

    {/* --- Desktop Navigation --- */}
    <div className="hidden md:flex space-x-6">
      {navLinks.map((link) => (
        <NavLink key={link.name} href={link.href}>
          {link.name}
        </NavLink>
      ))}
    </div>

    {/* --- Mobile Menu Button --- */}
    <button
      className="md:hidden text-gray-700 p-2 hover:text-blue-600"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </nav>
</header>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-blue-900 hover:text-amber-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero */}
     <section className="pt-28 pb-32 text-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-b border-gray-200 relative overflow-hidden">
  {/* Glistening animation overlay for heading */}
  <style jsx>{`
    .gleam {
      position: absolute;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.5) 50%,
        transparent 100%
      );
      transform: skewX(-25deg);
      animation: gleam 2s infinite;
    }

    @keyframes gleam {
      0% { left: -100%; }
      50% { left: 100%; }
      100% { left: 100%; }
    }
  `}</style>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto space-y-6 relative z-10"
  >
    <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight relative inline-block">
      <span
        className="bg-gradient-to-r from-amber-500 via-orange-400 to-red-400 bg-clip-text text-transparent"
      >
        The Golden Crunch
      </span>{" "}
      from God’s Own Country

      {/* Gleam effect */}
      <div className="gleam"></div>
    </h2>

    <p className="text-gray-800 text-lg max-w-2xl mx-auto">
      Authentic Kerala banana chips made with 100% pure coconut oil — fresh, crispy, and full of tradition.
    </p>

    <a
      href="#products"
      className="inline-block mt-8 px-10 py-4 bg-amber-500 text-white font-bold rounded-full shadow-lg hover:bg-amber-600 hover:scale-105 transition-transform"
    >
      Explore Products 🍌
    </a>
  </motion.div>
</section>


      {/* Brand Showcase Section */}
    <Section id="brand" title="Our Brand">
  <div className="relative">
    {/* Soft luxury background */}
    <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-white to-blue-50 rounded-[2rem] blur-3xl opacity-50"></div>

    <div className="relative grid md:grid-cols-3 gap-10 items-center">
      {["/chips1.png", "/chips2.png", "/chips3.png"].map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="relative group">
            {/* Glowing hover effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-400 via-white to-blue-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

            {/* Image Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-700 group-hover:scale-[1.05] group-hover:shadow-amber-200/70">
              <Image
                src={src}
                alt={`Kripzo Banana Chips Packet ${index + 1}`}
                width={420}
                height={420}
                className="rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="text-center text-gray-700 mt-12 max-w-3xl mx-auto leading-relaxed text-base md:text-lg"
    >
      A vibrant <span className="text-blue-900 font-semibold">showcase</span> of our premium packaging — reflecting the{" "}
      <span className="text-blue-900 font-semibold">freshness</span> and{" "}
      <span className="text-blue-900 font-semibold">purity</span> of Kripzo snacks.{" "}
      <span className="text-amber-500 font-medium">Crafted with care</span> to preserve the golden crunch and the{" "}
      <span className="text-blue-700 font-semibold">spirit of Kerala</span>.
    </motion.p>
  </div>
</Section>


      {/* About */}
      <Section id="about" title="Our Story">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Kripzo is a premium Kerala-based snacks brand under UK Group, known for producing authentic banana chips
            and traditional Kerala-style snacks using carefully selected Nendran bananas fried in 100% pure coconut oil.
          </p>
          <blockquote className="text-xl italic text-blue-800 border-l-4 border-amber-400 pl-4">
            “From Kerala to the World — bringing tradition, taste, and trust together.”
          </blockquote>
        </motion.div>
      </Section>


<GallerySection/>

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
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-center p-4 bg-amber-50 border border-gray-200 rounded-lg hover:border-blue-400"
            >
              <span className="text-blue-700 text-xl mr-3">✅</span>
              <p className="text-gray-800">{b}</p>
            </motion.div>
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
  <div className="grid md:grid-cols-2 gap-12 bg-amber-50 p-8 rounded-3xl border border-gray-200 shadow-lg">
    {/* Left Info Section */}
    <div className="space-y-6">
      <p className="text-gray-700 text-lg">
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
        className="text-blue-800 hover:text-amber-500 text-sm font-medium"
      >
        🌐 www.uktradings.com
      </a>
    </div>

    {/* WhatsApp Contact Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        const text = ` *From Kripzo™*%0A_Hi, I’d like to place my order._%0A%0A*Name:* ${name || "N/A"}%0A*Email:* ${email || "N/A"}%0A*Message:* ${message || "—"}`;
        const whatsappUrl = `https://wa.me/919946550555?text=${text}`;
        window.open(whatsappUrl, "_blank");
      }}
      className="space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
      <textarea
        rows="4"
        name="message"
        placeholder="Message"
        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-amber-500 hover:text-black transition"
      >
        Send via WhatsApp
      </button>
    </form>
  </div>
</Section>


      {/* Footer */}
      <footer className="bg-blue-900 text-center py-8 text-white">
        <p>© {new Date().getFullYear()} Kripzo (A UK Group Product). All Rights Reserved.</p>
        <p className="text-xs mt-1 text-amber-300">
          The Golden Crunch from God’s Own Country
        </p>
      </footer>
    </div>
  );
}
