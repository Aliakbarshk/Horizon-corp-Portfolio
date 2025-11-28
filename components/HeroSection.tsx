import React, { useRef, useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        setPosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            {children}
        </button>
    );
};

export const HeroSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-gray-300 text-xs font-bold tracking-[0.2em] uppercase">The Future of Digital</span>
        </div>

        {/* Massive Hero Text with subtle hover interaction */}
        <div className="group cursor-default mb-10">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] transition-all duration-700">
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-[1.02] transition-transform duration-500 ease-out origin-bottom">
                CREATE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 pb-4 group-hover:scale-[1.02] transition-transform duration-500 delay-75 ease-out origin-top">
                BEYOND.
            </span>
            </h1>
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-2xl mb-14 leading-relaxed font-light">
          Horizon Corp automates the impossible. 
          <span className="block mt-2 text-white font-normal">
            Bulk Automation. Pixar-Grade Animation. Premium Web.
          </span>
        </p>

        {/* Interactive Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="no-underline">
            <MagneticButton className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </MagneticButton>
          </a>
          
          <div onClick={() => setShowVideo(true)}>
            <MagneticButton className="group px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg flex items-center gap-3 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Showreel</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 animate-in fade-in duration-300">
            <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 text-white hover:text-blue-500 transition-colors"
            >
                <X size={32} />
            </button>
            <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                   <p className="text-lg">Showreel Video Placeholder (Embed)</p>
                   {/* In a real app, embed YouTube/Vimeo iframe here */}
                </div>
            </div>
        </div>
      )}
    </section>
  );
};