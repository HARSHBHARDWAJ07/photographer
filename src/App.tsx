import React from 'react';
import { useLenis } from './hooks/useLenis';
import { LimelightNav } from './components/layout/LimelightNav';
import { Hero } from './components/sections/Hero';
import { FeaturedWork } from './components/sections/FeaturedWork';
import InteractiveBentoGallery from './components/sections/InteractiveBentoGallery';
import { PricingPage } from './components/sections/PricingPage';
import { Footer } from './components/layout/Footer';
import { Home, Image as ImageIcon, Briefcase, DollarSign, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: <Home />, label: 'Home', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'work', icon: <Briefcase />, label: 'Work', onClick: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'gallery', icon: <ImageIcon />, label: 'Gallery', onClick: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'pricing', icon: <DollarSign />, label: 'Pricing', onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'contact', icon: <Mail />, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
];

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Ethereal Light",
    desc: "A study in natural diffusion and atmospheric depth.",
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Cinematic Reel 2026",
    desc: "Our latest visual explorations for global brands.",
    url: "https://cdn.pixabay.com/video/2023/11/14/188981-884178521_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Obsidian Architecture",
    desc: "Minimalist structures captured through a high-contrast lens.",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Golden Hour",
    desc: "The fleeting moment where light becomes liquid gold.",
    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Motion Study",
    desc: "Exploring the fluidity of human movement in high-speed.",
    url: "https://cdn.pixabay.com/video/2021/08/13/84916-587232231_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "The Void",
    desc: "Abstract compositions in the absence of light.",
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Nature's Pulse",
    desc: "Macro cinematography of the living world.",
    url: "https://cdn.pixabay.com/video/2023/09/25/182229-868172935_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];

export default function App() {
  useLenis();

  return (
    <main className="bg-[#080808] min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100]">
        <LimelightNav items={navItems} />
      </div>

      {/* Sections */}
      <div id="hero">
        <Hero />
      </div>

      <div id="work">
        <FeaturedWork />
      </div>

      <div id="gallery">
        <InteractiveBentoGallery 
          mediaItems={mediaItems} 
          title="The Archive" 
          description="A curated collection of visual stories, physically manipulatable and infinitely immersive."
        />
      </div>

      <div id="pricing">
        <PricingPage />
      </div>

      <Footer />

      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[200]" />
    </main>
  );
}
