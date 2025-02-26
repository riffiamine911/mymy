"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface NavLink {
  href: string;
  label: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks: NavLink[] = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#faq", label: t.nav.faq },
    { href: "#footer", label: t.nav.contact },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-50 transition-transform hover:scale-105"
          aria-label="Home"
        >
          <svg width="55" height="46" viewBox="0 0 55 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-white fill-black">
            <path d="M0.43 21L9.61 -1.43051e-06H16.57L25.75 21H18.43L11.65 3.36H14.41L7.63 21H0.43ZM5.89 17.34L7.69 12.24H17.35L19.15 17.34H5.89ZM26.8799 21V-1.43051e-06H32.6999L41.0999 13.71H38.0399L46.1999 -1.43051e-06H52.0199L52.0799 21H45.6299L45.5699 9.72H46.5899L41.0099 19.11H37.8899L32.0699 9.72H33.3299V21H26.8799ZM2.71 46V25H9.79V46H2.71ZM13.1983 46V25H19.0183L29.6983 37.78H26.9983V25H33.8983V46H28.0783L17.3983 33.22H20.0983V46H13.1983ZM43.7896 32.8H53.1496V37.9H43.7896V32.8ZM44.2696 40.66H54.7696V46H37.3096V25H54.3796V30.34H44.2696V40.66Z" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-border/50 p-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${link.href === "#footer" ? "bg-primary text-white hover:bg-primary/90" : "hover:bg-white/10"}
                  group
                `}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="relative ml-2 group">
              <button
                onClick={() => setLanguage(language === "en" ? "de" : "en")}
                className="p-2 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                aria-label="Toggle Language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === "en" ? "EN" : "DE"}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 py-2 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => setLanguage("en")}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors flex items-center gap-2 ${
                    language === "en" ? "text-primary" : ""
                  }`}
                >
                  🇬🇧 English
                  {language === "en" && <span className="ml-auto">✓</span>}
                </button>
                <button
                  onClick={() => setLanguage("de")}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors flex items-center gap-2 ${
                    language === "de" ? "text-primary" : ""
                  }`}
                >
                  🇩🇪 Deutsch
                  {language === "de" && <span className="ml-auto">✓</span>}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.style.overflow = !isOpen ? "hidden" : "unset";
          }}
          className="md:hidden relative z-50 p-2 -mr-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-background/80 backdrop-blur-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language button at bottom */}
            <div className="mt-12">
              <div className="relative ml-2 group">
                <button
                  onClick={() => setLanguage(language === "en" ? "de" : "en")}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                  aria-label="Toggle Language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === "en" ? "EN" : "DE"}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 py-2 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors flex items-center gap-2 ${
                      language === "en" ? "text-primary" : ""
                    }`}
                  >
                    🇬🇧 English
                    {language === "en" && <span className="ml-auto">✓</span>}
                  </button>
                  <button
                    onClick={() => setLanguage("de")}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors flex items-center gap-2 ${
                      language === "de" ? "text-primary" : ""
                    }`}
                  >
                    🇩🇪 Deutsch
                    {language === "de" && <span className="ml-auto">✓</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 