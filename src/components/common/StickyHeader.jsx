import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Menu } from "lucide-react";
import { Button } from "../ui/button";

const StickyHeader = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Membership", href: "/membership" },
    { name: "Events", href: "/meetings" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 bg-saffron rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-neutral-800">API</span>
                  <span className="text-xs text-neutral-500 block">Since 1944</span>
                </div>
              </Link>

              {/* Navigation Links - Hidden on Mobile */}
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-neutral-700 hover:text-saffron font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  className="bg-saffron hover:bg-saffron-dark text-white rounded-lg px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/membership">Join API</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
