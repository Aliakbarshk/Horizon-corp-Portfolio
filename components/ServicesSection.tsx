import React, { useRef, useState } from 'react';
import { Video, Youtube, Clapperboard, Monitor, Palette, Bot } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'yt-automation',
    title: 'Bulk Automation',
    description: 'We scale your content production. Capable of creating 30+ high-quality YouTube tutorial videos daily with consistent quality.',
    icon: Youtube,
    gradient: 'from-red-500 to-orange-600'
  },
  {
    id: 'ai-animation',
    title: '3D AI Animation',
    description: 'Pixar-style animations powered by AI, complete with custom scored songs and lip-syncing for viral storytelling.',
    icon: Clapperboard,
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'web-dev',
    title: 'Premium Web',
    description: 'Interactive, high-performance websites built with React and Three.js that convert visitors into clients.',
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Thumbnails, branding, and UI assets that capture attention instantly. High CTR designs for digital platforms.',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional post-production services. We turn raw footage into engaging masterpieces with dynamic motion graphics.',
    icon: Video,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'automation-tech',
    title: 'Tech Solutions',
    description: 'Custom scripts and workflows to automate your business processes, saving you hours of manual work every day.',
    icon: Bot,
    gradient: 'from-amber-500 to-yellow-500'
  }
];

const TiltCard: React.FC<{ service: Service }> = ({ service }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation based on cursor position relative to center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
        setGlowPos({ x, y });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div 
            className="perspective-1000 w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                ref={cardRef}
                className="relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-200 ease-out transform-style-3d overflow-hidden group"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                }}
            >
                {/* Dynamic Spotlight Glow */}
                <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle 300px at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.15), transparent)`,
                        opacity: isHovered ? 1 : 0
                    }}
                />

                {/* Background Gradient Blob */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-20 blur-[50px] -z-10 transition-opacity duration-500 group-hover:opacity-40`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm font-medium group-hover:text-gray-300">
                    {service.description}
                </p>
                
                {/* Bottom Border Highlight */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-300 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
            </div>
        </div>
    );
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Dominance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            We merge artistic creativity with industrial-grade automation to deliver results at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <TiltCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};