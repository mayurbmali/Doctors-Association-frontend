import React from "react";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Instagram 
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Vision & Mission", href: "/vision-mission" },
    { name: "History", href: "/history-achieve" },
    { name: "Trustees", href: "/trustees" },
    { name: "Leadership", href: "/leadership" },
  ];

  const services = [
    { name: "Membership", href: "/membership" },
    { name: "CME Programs", href: "/meetings" },
    { name: "Notifications", href: "/notifications" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-saffron rounded-full">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">API</h3>
                <p className="text-sm text-white/90">Since 1944</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Association of Physicians of India - Advancing excellence in healthcare 
              through continuous education, networking, and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About API</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-saffron transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-white/80 hover:text-saffron transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                <p className="text-white/80">
                  API Headquarters<br />
                  123 Medical Complex<br />
                  New Delhi, India 110001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-saffron flex-shrink-0" />
                <p className="text-white/80">+91 11 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saffron flex-shrink-0" />
                <p className="text-white/80">info@apiindia.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm mb-4 md:mb-0">
              © 2024 Association of Physicians of India. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/90 hover:text-saffron transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/90 hover:text-saffron transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/90 hover:text-saffron transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;