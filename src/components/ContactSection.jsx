import React from 'react';
import { ArrowRight, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onOpenContact }) {
  const { socials } = portfolioData;

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-purple-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        {/* Pre-title badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>

        {/* Big CTA Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight max-w-3xl mx-auto mb-6 leading-tight font-sans">
          Let’s Make Something <span className="purple-gradient-text">Unforgettable</span>
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you need a high-converting YouTube package, motion design for your brand, or an ongoing creative collaboration, let’s talk.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] transition-all transform active:scale-95"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:nikhilbarik.design@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-zinc-300 bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:text-white transition-all"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>COPY EMAIL</span>
          </a>
        </div>

        {/* Social Link Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0f0b20]/60 backdrop-blur-md border border-purple-500/15 hover:border-purple-400/40 hover:bg-purple-950/20 transition-all group flex flex-col items-center justify-center space-y-1"
            >
              <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors uppercase tracking-wider">
                {social.name}
              </span>
              <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300">
                {social.handle}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
