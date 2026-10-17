import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Calendar, User, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#06040b]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0b1f] border border-purple-500/30 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 animate-in zoom-in-95 duration-300 custom-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#0a0715]/80 border border-purple-500/30 text-zinc-300 hover:text-white flex items-center justify-center hover:bg-purple-900/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Project Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#140f29] overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1f] via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 sm:left-8">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600/90 text-white backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" />
                Client
              </span>
              <p className="text-sm font-bold text-white">{project.client}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                Year
              </span>
              <p className="text-sm font-bold text-white">{project.year}</p>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-purple-400" />
                Focus
              </span>
              <p className="text-sm font-bold text-purple-300">{project.category}</p>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400">
              Key Deliverables & Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-purple-950/40 border border-purple-500/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer CTA inside Modal */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400 text-center sm:text-left">
              Want a similar visual standard for your brand or YouTube channel?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              <span>Discuss This Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
