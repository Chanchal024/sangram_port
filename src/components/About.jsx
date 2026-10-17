import React from 'react';
import { Award, Layers, Video, Palette, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, skills } = portfolioData;
  const stats = personal.stats;

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-purple-500/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-purple-400">
              ABOUT THE ARTIST
            </span>
            <span className="w-8 h-[1px] bg-purple-500/60 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
            Crafting Impactful <span className="purple-gradient-text">Visual Stories</span>
          </h2>
        </div>

        {/* 2-column layout: Bio & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-white text-lg sm:text-xl">
              Hey there! I'm Nikhil Barik, a multidisciplinary Graphic Designer, Video Editor, and Motion Designer based in India.
            </p>
            <p className="text-zinc-400">
              Over the past 4+ years, I have collaborated with content creators, agencies, and high-growth consumer brands worldwide to create visuals that don't just look pretty — they hold attention, provoke curiosity, and convert viewers into loyal fans.
            </p>
            <p className="text-zinc-400">
              From crafting thumb-stopping YouTube thumbnails to fast-paced viral video edits and immersive 3D motion pieces, my obsession is translating raw ideas into compelling narratives.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {[
                'Pixel-perfect attention to detail',
                'Fast turnaround & dependable communication',
                'Data-driven design that maximizes CTR & watch time',
                'End-to-end creative direction & asset delivery',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e0a1f]/80 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/40 transition-all text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-semibold tracking-wider text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Software & Tools Proficiency */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0919]/60 backdrop-blur-md border border-purple-500/20">
          <h3 className="text-lg uppercase tracking-widest font-bold text-white mb-8 flex items-center gap-3">
            <span>Core Toolstack & Proficiency</span>
            <span className="w-12 h-[1px] bg-purple-500/40"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-zinc-200">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-purple-950/40 rounded-full overflow-hidden border border-purple-900/30">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
