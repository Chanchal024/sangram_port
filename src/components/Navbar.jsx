import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08070d]/85 backdrop-blur-md border-b border-purple-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="group flex flex-col items-start select-none">
          <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-purple-300 transition-colors flex items-center gap-1">
            Nikhil
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          </span>
          <span className="text-[10px] tracking-[0.32em] uppercase text-zinc-400 font-semibold -mt-1 group-hover:text-purple-400 transition-colors">
            GRAPHIX
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase font-medium tracking-[0.16em] text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-purple-300 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call to action button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-transparent border border-purple-500/40 hover:border-purple-400 hover:bg-purple-950/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 active:scale-95"
          >
            <span>LET'S TALK</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-white/5 border border-purple-500/20 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0814]/95 backdrop-blur-xl border-b border-purple-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm uppercase font-semibold tracking-widest text-zinc-300 hover:text-purple-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          >
            <span>LET'S TALK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
