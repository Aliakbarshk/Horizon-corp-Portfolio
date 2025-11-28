import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-6xl font-bold text-white mb-2 font-mono flex items-center justify-center">
      {count}{suffix}
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section id="automation" className="py-24 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      {/* Decorative background line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
            <AnimatedCounter end={30} suffix="+" />
            <div className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Videos Per Day</div>
            <p className="text-gray-500 text-sm leading-relaxed">Our automated pipelines churn out high-quality educational content non-stop with AI precision.</p>
          </div>

          <div className="p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 border-l border-r border-white/5 md:border-x">
            <AnimatedCounter end={24} suffix="h" />
            <div className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-4">Turnaround</div>
            <p className="text-gray-500 text-sm leading-relaxed">From concept to final render, our streamlined workflow ensures rapid delivery.</p>
          </div>

          <div className="p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
            <AnimatedCounter end={4} suffix="K" />
            <div className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-4">Resolution</div>
            <p className="text-gray-500 text-sm leading-relaxed">We don't compromise on pixels. Every frame is crisp, every sound is engineered for clarity.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
