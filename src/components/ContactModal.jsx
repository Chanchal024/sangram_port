import React, { useState, useEffect } from 'react';
import { X, Send, Mail, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Graphic Design',
    budget: '$500 - $1,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: 'Graphic Design',
      budget: '$500 - $1,500',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#06040b]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0f0b1f] border border-purple-500/35 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-purple-500/30 text-zinc-300 hover:text-white flex items-center justify-center hover:bg-purple-900/40 transition-colors"
          aria-label="Close contact dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Message Dispatched!</h3>
            <p className="text-zinc-300 text-sm max-w-sm">
              Thank you, <span className="text-purple-300 font-semibold">{formData.name}</span>. I've received your inquiry and will respond within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-600 text-white hover:bg-purple-500 transition-all"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-purple-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                LET'S TALK
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Start a New <span className="purple-gradient-text">Project</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Have an idea, need high-retention video editing, or want a visual identity rebrand? Let's connect!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/20 focus:border-purple-400 focus:outline-none text-sm text-white transition-colors"
                  >
                    <option value="Graphic Design" className="bg-[#0f0b1f]">Graphic Design</option>
                    <option value="Video Editing" className="bg-[#0f0b1f]">Video Editing</option>
                    <option value="Motion Design" className="bg-[#0f0b1f]">Motion Graphics / 3D</option>
                    <option value="YouTube Packaging" className="bg-[#0f0b1f]">YouTube Thumbnails</option>
                    <option value="Full Retainer" className="bg-[#0f0b1f]">Monthly Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/20 focus:border-purple-400 focus:outline-none text-sm text-white transition-colors"
                  >
                    <option value="$300 - $800" className="bg-[#0f0b1f]">$300 - $800</option>
                    <option value="$800 - $2,000" className="bg-[#0f0b1f]">$800 - $2,000</option>
                    <option value="$2,000 - $5,000" className="bg-[#0f0b1f]">$2,000 - $5,000</option>
                    <option value="$5,000+" className="bg-[#0f0b1f]">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                  Project Details / Vision *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project, target audience, timeline, or reference links..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-zinc-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Direct Contact Alternatives */}
            <div className="pt-4 border-t border-purple-900/30 text-center">
              <span className="text-xs text-zinc-400">Prefer direct email? </span>
              <a
                href="mailto:nikhilbarik.design@gmail.com"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-4 ml-1"
              >
                nikhilbarik.design@gmail.com
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
