import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Globe, Check, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();
  const langDropdownRef = useRef(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision", href: "/vision-mission" },
    { name: "History", href: "/history-achieve" },
    { name: "Trustees", href: "/trustees" },
    { name: "Leadership", href: "/leadership" },
    { name: "Membership", href: "/membership" },
    { name: "Meetings", href: "/meetings" },
    { name: "Updates", href: "/notifications" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check current language from URL parameter on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam === 'mr') {
      setCurrentLang('mr');
    } else {
      setCurrentLang('en');
    }
  }, [location]);

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setLangDropdownOpen(false);
    
    // Use the global helper function
    if (window.triggerGoogleTranslate) {
      window.triggerGoogleTranslate(langCode);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Left */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 flex-shrink-0"
          >
            <img 
              src="/ccmp-logo.png" 
              alt="CCMP Homoeopathic Doctors Association Logo" 
              className="h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-green leading-tight">
                CCMP
              </h1>
              <p className="text-xs font-medium text-gray-600">
                Maharashtra
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    isActive(item.href)
                      ? "text-saffron bg-saffron/10"
                      : "text-neutral-800 hover:text-saffron hover:bg-saffron/5"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-saffron transition-all duration-300 ${
                    isActive(item.href) 
                      ? "w-6 opacity-100" 
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Join CCMP Button + Language Menu */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            {/* Hidden Google Translate element */}
            <div id="google_translate_element" className="hidden"></div>
            
            {/* Join CCMP Button */}
            <Button 
              asChild 
              className="bg-saffron hover:bg-saffron-dark text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/membership" className="flex items-center space-x-2">
                <span>Join CCMP</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </Button>
            
            {/* Language Dropdown - Rightmost */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-saffron hover:bg-saffron/5 transition-all duration-300 group"
              >
                <Globe className="w-4 h-4 text-gray-600 group-hover:text-saffron transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-saffron transition-colors">
                  {languages.find(l => l.code === currentLang)?.flag}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 animate-slideDown">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center justify-between px-4 py-3 hover:bg-saffron/10 transition-all duration-200 ${
                          currentLang === lang.code ? 'bg-saffron/5' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{lang.flag}</span>
                          <span className={`text-sm font-medium ${
                            currentLang === lang.code ? 'text-saffron' : 'text-gray-700'
                          }`}>
                            {lang.name}
                          </span>
                        </div>
                        {currentLang === lang.code && (
                          <Check className="w-4 h-4 text-saffron" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-700 hover:text-saffron hover:bg-saffron/10 rounded-lg transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white rounded-xl mx-2 mb-4 shadow-lg border border-gray-100">
            {/* Navigation Links */}
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-saffron bg-saffron/10 shadow-sm"
                    : "text-neutral-800 hover:text-saffron hover:bg-saffron/5"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <ChevronDown className="w-4 h-4 transform -rotate-90" />
                </div>
              </Link>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="px-2 pt-2 border-t border-gray-200 mt-2">
              <p className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">Language</p>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentLang === lang.code 
                        ? 'bg-saffron/10 text-saffron' 
                        : 'text-gray-700 hover:bg-saffron/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                    {currentLang === lang.code && (
                      <Check className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Join CCMP Button */}
            <div className="px-2 pt-4">
              <Button 
                asChild 
                className="w-full bg-saffron hover:bg-saffron-dark text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link 
                  to="/membership" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Join CCMP Today</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
