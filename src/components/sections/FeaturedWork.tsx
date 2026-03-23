import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThreeDFileCard } from '@/src/components/ui/3DFileCard';

const projects = [
  {
    id: 1,
    title: "Vogue Editorial",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Leica Monochrom",
    category: "Product",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Urban Silence",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1449156001935-d25a4925395e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Aether Campaign",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const FeaturedWork = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#080808]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="px-24 mb-12 absolute top-24 left-0 z-10">
          <h2 className="text-sm font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4">Selected Works</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Cinematic Narratives.</h3>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-24">
          {projects.map((project) => (
            <ThreeDFileCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              className="flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
