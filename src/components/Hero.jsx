import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, MapPin, Mouse } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenContact }) {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge-intro', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from('.hero-title-line', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
      }, '-=0.3')
      .from('.hero-role-tags', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-cta-group', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-scroll-indicator', {
        opacity: 0,
        y: 15,
        duration: 0.6,
      }, '-=0.3')
      .from(cardRef.current, {
        opacity: 0,
        scale: 0.94,
        x: 30,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.8')
      .from([badge1Ref.current, badge2Ref.current], {
        opacity: 0,
        scale: 0.8,
        y: 15,
        stagger: 0.2,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.4');

      // Floating idle animation for badges
      gsap.to(badge1Ref.current, {
        y: -6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(badge2Ref.current, {
        y: 6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const target = document.querySelector('#work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient neon glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/15 filter blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-purple-500/20 filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-indigo-600/10 filter blur-[100px] pointer-events-none" />

      {/* Grid overlay texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Tagline */}
            <div className="hero-badge-intro">
              <span className="text-xs uppercase tracking-[0.28em] font-bold text-purple-400/90 flex items-center gap-2">
                HELLO, I'M
              </span>
            </div>

            {/* Massive Heading */}
            <div className="space-y-1">
              <h1 className="hero-title-line font-black tracking-tight text-white leading-none text-5xl sm:text-6xl md:text-7xl xl:text-8xl select-none font-sans">
                NIKHIL
              </h1>
              <h1 className="hero-title-line font-black tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl xl:text-8xl select-none font-sans purple-gradient-text drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                BARIK
              </h1>
            </div>

            {/* Roles with Bullet Points */}
            <div className="hero-role-tags pt-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-widest text-zinc-300 uppercase">
                <span>GRAPHIC DESIGNER</span>
                <span className="text-purple-500">•</span>
                <span>VIDEO EDITOR</span>
                <span className="text-purple-500">•</span>
                <span>MOTION DESIGNER</span>
              </div>
            </div>

            {/* Sub-description */}
            <p className="hero-desc text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              Turning ideas into visual stories that make an impact.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] transition-all duration-300 transform active:scale-95"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-zinc-200 bg-white/[0.04] border border-white/15 hover:border-purple-400 hover:bg-purple-950/25 hover:text-white transition-all duration-300 active:scale-95"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator pt-10 hidden sm:flex items-center gap-3">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group flex items-center gap-3 text-zinc-500 hover:text-purple-400 transition-colors"
              >
                <div className="w-6 h-10 rounded-full border border-zinc-600 group-hover:border-purple-400 flex items-start justify-center p-1.5 transition-colors">
                  <div className="w-1.5 h-2.5 rounded-full bg-purple-400 animate-bounce" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-purple-300 transition-colors">
                  SCROLL DOWN
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Neon Glowing Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Ambient Backlight Halo around Card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-purple-800/30 rounded-[2.5rem] filter blur-2xl opacity-75 animate-pulse-slow" />

            {/* Main Portrait Card */}
            <div
              ref={cardRef}
              className="relative w-full max-w-sm sm:max-w-md rounded-[2rem] p-2 bg-gradient-to-b from-purple-500/30 via-purple-800/10 to-transparent border border-purple-400/30 shadow-[0_20px_60px_-15px_rgba(147,51,234,0.35)] backdrop-blur-md overflow-visible group"
            >
              {/* Inner Image Container */}
              <div className="relative rounded-[1.6rem] overflow-hidden bg-[#0e0a1e] aspect-[3/4] flex items-center justify-center">
                <img
                  src="/images/hero-nikhil.jpg"
                  alt="Nikhil Barik — Graphic & Motion Designer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070d]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Top-Left Floating Badge: 4+ Years Experience */}
              <div
                ref={badge1Ref}
                className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-[#0e0a1f]/90 backdrop-blur-md border border-purple-500/30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Zap className="w-4 h-4 fill-purple-400/30" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300">
                    4+ YEARS
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">
                    EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Bottom-Right Floating Badge: Based in India */}
              <div
                ref={badge2Ref}
                className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 bg-[#0e0a1f]/90 backdrop-blur-md border border-purple-500/30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300">
                    BASED IN
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">
                    INDIA
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
