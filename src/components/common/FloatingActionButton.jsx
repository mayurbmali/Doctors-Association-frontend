import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, UserPlus } from "lucide-react";

const FloatingActionButton = () => {
  const [showFAB, setShowFAB] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFAB(scrollPosition > 300);
      setShowScrollTop(scrollPosition > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-neutral-700 hover:bg-neutral-800 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main FAB - Join Now */}
      <AnimatePresence>
        {showFAB && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/membership">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(255, 153, 51, 0.3)",
                    "0 15px 40px rgba(255, 153, 51, 0.5)",
                    "0 10px 30px rgba(255, 153, 51, 0.3)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="w-16 h-16 bg-gradient-to-br from-saffron to-saffron-dark text-white rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
                aria-label="Join CCMP"
              >
                {/* Pulse Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-saffron rounded-full"
                />
                <UserPlus className="w-7 h-7 relative z-10" />
              </motion.button>
            </Link>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
            >
              <span className="text-sm font-medium">Join CCMP Now!</span>
              <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-neutral-800 rotate-45"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;
