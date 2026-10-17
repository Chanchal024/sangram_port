import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Ticker() {
  const items = [
    'DESIGN',
    'EDIT',
    'CREATE',
    'REPEAT',
    'ANIMATE',
    'DIRECT',
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-5 border-y border-purple-500/20 bg-[#090714]/80 backdrop-blur-md z-20 select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08070d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08070d] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* We repeat the sequence twice to create a seamless infinite loop */}
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-8 sm:gap-12">
            {items.map((word, index) => (
              <div key={`${groupIndex}-${index}`} className="flex items-center gap-8 sm:gap-12">
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase text-zinc-300 hover:text-purple-300 transition-colors">
                  {word}
                </span>
                <span className="text-purple-500 text-xs sm:text-sm">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
