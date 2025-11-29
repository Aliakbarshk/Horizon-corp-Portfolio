import React from 'react';
import { Rocket, Target, Globe, Linkedin, Twitter, Github, User } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative py-32 overflow-hidden bg-black/40">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-3xl -z-10"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Side - Avatar Icon */}
          <div className="w-full md:w-1/2 relative group perspective-1000 flex justify-center">
            {/* Glow effect behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
              
              {/* Abstract Avatar Container */}
              <div className="relative z-20 w-64 h-64 rounded-full bg-gradient-to-b from-gray-800 via-gray-900 to-black border-2 border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] overflow-hidden">
                  {/* Internal grid pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent"></div>
                  
                  {/* The User Icon */}
                  <User className="w-32 h-32 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" strokeWidth={1.5} />
                  
                  {/* Scanning beam effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2s] ease-in-out"></div>
              </div>
              
              {/* Floating tech rings around avatar */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] z-10 scale-110"></div>
              <div className="absolute inset-4 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] z-10 scale-125"></div>
              
              {/* Name Tag floating below */}
              <div className="absolute -bottom-8 bg-black/80 backdrop-blur-md border border-blue-500/30 px-6 py-2 rounded-full z-30 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Founder Profile</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
               <Rocket className="w-4 h-4 text-blue-500" />
               <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">The Visionary</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Impossible</span>.
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Hello, I'm <strong className="text-white">Shaikh Aliakbar</strong>.
              </p>
              <p>
                My journey isn't just about code; it's about <span className="text-blue-400 font-medium">entrepreneurship</span> and breaking boundaries. I founded Horizon Corp with a singular mission: to automate the mundane so the extraordinary can flourish.
              </p>
              <p>
                From high-performance web architecture to AI-driven content pipelines, I engineer systems that scale businesses into the stratosphere. I don't just predict the future; I'm coding it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300">
                    <Target className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="text-white font-bold mb-1">Strategic Focus</h4>
                    <p className="text-xs text-gray-500">Targeting high-impact automation gaps in modern media.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
                    <Globe className="w-8 h-8 text-purple-500 mb-3" />
                    <h4 className="text-white font-bold mb-1">Global Scale</h4>
                    <p className="text-xs text-gray-500">Building solutions designed for worldwide deployment.</p>
                </div>
            </div>

            <div className="flex gap-4 mt-10">
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white text-gray-400 transition-all border border-white/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-400 hover:text-white text-gray-400 transition-all border border-white/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-gray-700 hover:text-white text-gray-400 transition-all border border-white/10">
                    <Github className="w-5 h-5" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};