import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SelectedWork({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'BRANDING', 'SOCIAL MEDIA', 'THUMBNAILS', 'MOTION'];

  const filteredProjects = activeFilter === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-700/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-purple-400">
                SELECTED WORK
              </span>
              <span className="w-8 h-[1px] bg-purple-500/60 inline-block"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
              Ideas to <span className="purple-gradient-text drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">Visuals</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed hidden sm:block">
              A few projects that showcase my creative process and style.
            </p>
            <div className="w-12 h-12 rounded-full border border-purple-500/30 bg-purple-950/20 flex items-center justify-center text-purple-300 group hover:border-purple-400 hover:bg-purple-900/40 transition-all cursor-pointer">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] scale-105'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/10 hover:border-purple-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2x2 Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-[#0d091a]/80 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_45px_rgba(147,51,234,0.25)] transition-all duration-500 transform hover:-translate-y-1.5"
            >
              {/* Media Container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] bg-[#140f29]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090713]/90 via-[#090713]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover overlay action badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#090713]/80 backdrop-blur-md border border-purple-400/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-purple-300" />
                </div>
              </div>

              {/* Bottom Card Info bar (matching the reference image layout) */}
              <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] inline-block animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-zinc-200 group-hover:text-purple-300 transition-colors">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-zinc-400 group-hover:text-purple-400 transition-colors">
                  <span className="text-xs uppercase font-medium tracking-wider hidden sm:inline">
                    View
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
