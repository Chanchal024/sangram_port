import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#06040b] z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start select-none">
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
              Nikhil
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            </span>
            <span className="text-[10px] tracking-[0.32em] uppercase text-zinc-400 font-semibold -mt-1">
              GRAPHIX
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-semibold text-zinc-400">
            <a href="#work" className="hover:text-purple-300 transition-colors">Work</a>
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-300 transition-colors">Services</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-white group px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/40 bg-white/[0.02] transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Nikhil Barik. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Designed & Engineered with <span className="text-purple-400 font-medium">React, Tailwind & GSAP</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
