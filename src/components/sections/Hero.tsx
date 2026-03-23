import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CircularRevealHeading } from '@/src/components/ui/CircularRevealHeading';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
          style={{ filter: 'brightness(0.4) contrast(1.2)' }}
        >
          <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876615707_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#080808]" />
      </div>

      {/* Content Layer */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <CircularRevealHeading 
          text="AetherFrame" 
          className="text-[clamp(4rem,12vw,12rem)] leading-[0.9] mb-8" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl text-zinc-400 font-light tracking-widest uppercase mb-12">
            Capturing the invisible. Framed in Aether.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#gallery" 
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-500 tracking-tight"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-500"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </section>
  );
};
