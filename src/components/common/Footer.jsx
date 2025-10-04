import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  const platformLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/vision-mission" },
    { name: "Pricing & Plans", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Account", href: "/membership" },
    { name: "Tools", href: "/meetings" },
    { name: "Newsletter", href: "/notifications" },
    { name: "FAQ", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Guides", href: "/history-achieve" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Licensing", href: "#" },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 4, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-[#0f1419] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-green/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 py-16 lg:py-20">
          {/* Left Column - CTA Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/ccmp-logo.png" 
                  alt="CCMP Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold">CCMP</h3>
                  <p className="text-sm text-gray-400">Maharashtra</p>
                </div>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                CCMP helps you grow your homoeopathic practice with excellence.
              </h4>
              <Button 
                asChild 
                className="bg-transparent border-2 border-white/30 hover:border-saffron hover:bg-saffron/10 text-white rounded-lg px-6 py-5 transition-all duration-300 group"
              >
                <Link to="/membership">
                  Start Your Journey Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Platform</h3>
              <ul className="space-y-3">
                {platformLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-saffron transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-saffron transition-all duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-saffron transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-saffron transition-all duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Legals</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-saffron transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="border-b border-transparent group-hover:border-saffron transition-all duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer - Social Links */}
        <div className="border-t border-white/10 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us on:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-saffron/20 border border-white/10 hover:border-saffron/50 rounded-lg text-gray-400 hover:text-saffron transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Association of Physicians of India. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
