import React from 'react';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Services({ onOpenContact }) {
  const { services } = portfolioData;

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-purple-500/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-purple-400">
                WHAT I OFFER
              </span>
              <span className="w-8 h-[1px] bg-purple-500/60 inline-block"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
              Specialized <span className="purple-gradient-text">Services</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
            From single hero assets to end-to-end creative post-production systems tailored for creators & brands.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#0c0819]/80 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_45px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Number & Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-purple-400/80 font-display">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-purple-500/30 bg-purple-950/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action */}
              <div className="pt-8 mt-6 border-t border-purple-900/30 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-purple-400">
                  Ready to elevate?
                </span>
                <button
                  onClick={onOpenContact}
                  className="text-xs uppercase font-bold tracking-widest text-zinc-300 hover:text-white flex items-center gap-1 group-hover:text-purple-300"
                >
                  Inquire Now →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
