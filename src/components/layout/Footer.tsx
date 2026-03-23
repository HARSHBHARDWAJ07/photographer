import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative py-24 px-6 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Ready to define your <br />
              <span className="text-[#D4AF37]">visual legacy?</span>
            </h2>
            <button className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-500 text-lg">
              Start a Project
            </button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex gap-8 text-zinc-400 font-mono text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Vimeo</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            
            <div className="text-right">
              <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
                © 2026 AetherFrame Studio. <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
          <div className="relative">
            <span className="text-8xl md:text-[12rem] font-bold text-white/5 tracking-tighter select-none">
              AETHER
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#D4AF37] blur-md opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};
