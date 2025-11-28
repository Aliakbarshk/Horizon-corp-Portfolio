import React, { useState } from 'react';
import { Cpu, Zap, Layers, ChevronRight, Activity } from 'lucide-react';
import { soundManager } from '../utils/SoundManager';

const Step = ({ icon: Icon, number, title, description }: { icon: any, number: string, title: string, description: string }) => (
    <div className="relative p-6 group">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-2xl -skew-x-6 border border-white/5 group-hover:border-blue-500/30 group-hover:bg-white/10 transition-all duration-500"></div>
        
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-4xl font-black text-white/5 select-none">{number}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

export const ProcessSection: React.FC = () => {
    const [active, setActive] = useState(false);

    const handleProtocolClick = () => {
        soundManager.playReverbTing();
        setActive(true);
        setTimeout(() => setActive(false), 2000);
    };

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
                    <div className="md:w-1/2">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            The Horizon <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Protocol</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We don't just "work". We deploy a systematic algorithmic approach to creativity. 
                            By defining strict parameters and utilizing neural networks, we ensure consistent excellence at scale.
                        </p>
                        
                        <button 
                            onClick={handleProtocolClick}
                            onMouseEnter={() => soundManager.playHover()}
                            className={`group relative px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-300 ${active ? 'border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.5)]' : 'hover:border-white'}`}
                        >
                            <span className={`absolute inset-0 bg-blue-600 transform origin-left transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            <span className="relative z-10 flex items-center gap-3">
                                {active ? 'Protocol Active' : 'Initialize Protocol'} 
                                {active ? <Activity className="w-4 h-4 animate-pulse" /> : <ChevronRight className="w-4 h-4" />}
                            </span>
                        </button>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 gap-6">
                        <Step 
                            number="01"
                            icon={Layers}
                            title="Structure Analysis"
                            description="We deconstruct your brand's DNA into data points. Understanding your visual language allows us to replicate it infinitely."
                        />
                        <Step 
                            number="02"
                            icon={Cpu}
                            title="Neural Automation"
                            description="Tasks are fed into our custom AI pipelines. From scripting to 3D rendering, machines handle the heavy lifting."
                        />
                        <Step 
                            number="03"
                            icon={Zap}
                            title="Human Amplification"
                            description="Final touches are applied by expert artists. We use technology to remove limitations, not the human soul."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
