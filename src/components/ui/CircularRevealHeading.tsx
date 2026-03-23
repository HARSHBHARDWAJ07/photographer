import React from 'react';
import { motion } from 'framer-motion';

interface CircularRevealHeadingProps {
  text: string;
  className?: string;
}

export const CircularRevealHeading: React.FC<CircularRevealHeadingProps> = ({ text, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.h1
        className="text-white font-bold tracking-tighter"
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        whileInView={{ clipPath: 'circle(100% at 50% 50%)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      >
        {text}
      </motion.h1>
      
      {/* Subtle glow effect following the reveal */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent -z-10"
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};
