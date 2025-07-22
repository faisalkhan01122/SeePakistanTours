"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Deals", link: "/honeymoon-deals" },
  {
    title: "Destinations",
    link: "/destinations",
    dropdown: [
      { title: "Azad Kashmir Tours", link: "/destination/azad-kashmir-tours" },
      {
        title: "Chitral Valley Tours",
        link: "/destination/chitral-valley-tours",
      },
      {
        title: "Fairy Meadows Tours",
        link: "/destination/fairy-meadows-pakistan",
      },
      { title: "Hunza Valley Tours", link: "/destination/hunza-valley-tours" },
      { title: "Murree Tours", link: "/destination/murree-tours" },
      { title: "Naran Kaghan Tours", link: "/destination/naran-kaghan-tours" },
      {
        title: "Skardu Valley Tours",
        link: "/destination/skardu-valley-tours",
      },
      { title: "Swat Valley Tours", link: "/destination/swat-valley-tours" },
    ],
  },
  {
    title: "Tours Type",
    dropdown: [
      { title: "1 Day Tours", link: "/destination/1-day-tour" },
      { title: "Foreigner Tours", link: "/destination/foreigner-tours" },
    ],
  },
  { title: "Car Rentals", link: "/car-rentals-2" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg bg-white/80 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/zuftalogo.png"
            alt="See Pakistan Tours"
            className="h-16 "
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                to={item.link || "#"}
                className="text-gray-700 font-semibold hover:text-primary-500 flex items-center gap-1 transition"
              >
                {item.title}
                {item.dropdown && <FaChevronDown className="text-xs" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && dropdownOpen === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-3 bg-white/90 backdrop-blur border shadow-lg rounded-lg w-56 py-2 z-50"
                  >
                    {item.dropdown.map((sub, subIndex) => (
                      <Link
                        to={sub.link}
                        key={subIndex}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:text-primary-500 transition"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Search + CTA */}
        <div className="flex items-center gap-3">
          {/* Search Toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-600 hover:text-primary-600 text-lg"
          >
            <FaSearch />
          </button>

          {/* CTA */}
          <a
            href="/get-a-quote"
            className="hidden md:inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-black font-semibold px-4 py-2 rounded-md shadow hover:scale-105 transition transform"
          >
            Enquire Now
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 text-xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Search Box */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 pb-4"
          >
            <form
              action="#"
              method="get"
              className="flex justify-end max-w-7xl mx-auto"
            >
              <input
                type="search"
                name="s"
                placeholder="Search Itinerary..."
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden px-4 pb-4 space-y-3 bg-white/80 backdrop-blur-sm border-t"
          >
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.link || "#"}
                  className="block text-gray-800 font-semibold py-2"
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((sub, subIndex) => (
                      <Link
                        to={sub.link}
                        key={subIndex}
                        className="block text-sm text-gray-600 hover:text-primary-600"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/get-a-quote"
              className="block text-center mt-4 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-full font-semibold transition"
            >
              Enquire Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
