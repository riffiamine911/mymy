"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
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

  // Handle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks: NavLink[] = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
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
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "DE" : "EN"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 rounded-lg hover:bg-secondary/20 transition-colors"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-between transform transition-all duration-300">
            <span className={`bg-foreground h-0.5 w-full transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`} />
            <span className={`bg-foreground h-0.5 w-full transform transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`} />
            <span className={`bg-foreground h-0.5 w-full transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-background/98 backdrop-blur-lg transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === "en" ? "de" : "en");
                handleLinkClick();
              }}
              className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Globe className="w-6 h-6" />
              {language === "en" ? "Deutsch" : "English"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 