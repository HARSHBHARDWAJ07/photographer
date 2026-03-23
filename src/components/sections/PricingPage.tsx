import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Circle, Calendar } from 'lucide-react';

const pricingData = {
    dev: {
        landing: { price: "$2500", features: ["Wireframes", "Full copywriting", "Figma Design", "Unlimited 3D models", "Framer development", "Three rounds of revisions", "1 month of free support"] },
        multipage: { price: "$5000", features: ["Wireframes", "Full copywriting", "Figma Design", "Unlimited 3D models", "Framer development", "Three rounds of revisions", "1 month of free support"] }
    },
    design: {
        landing: { price: "$1500", features: ["Wireframes", "Full copywriting", "Figma Design", "Unlimited 3D models", "Three rounds of revisions"] },
        multipage: { price: "$3000", features: ["Wireframes", "Full copywriting", "Figma Design", "Unlimited 3D models", "Three rounds of revisions"] }
    }
};

const PricingCard = ({ type, mode }: { type: 'landing' | 'multipage', mode: 'dev' | 'design' }) => {
    const isLanding = type === 'landing';
    const [displayData, setDisplayData] = useState(pricingData[mode][type]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setDisplayData(pricingData[mode][type]);
            setIsAnimating(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [mode, type]);

    const title = isLanding ? 'LANDING PAGE' : 'MULTIPAGE WEBSITE';
    const priceType = isLanding ? 'FIXED PRICE' : 'PRICE MAY CHANGE';

    return (
        <div className={isLanding ? "relative group" : "relative group"}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#121212] border border-white/10 rounded-3xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                        {isLanding ? <Star className="w-5 h-5 text-[#D4AF37]" /> : <Circle className="w-5 h-5 text-[#3B82F6]" />}
                    </div>
                    <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">{title}</span>
                </div>

                <div className="mb-8">
                    <h3 className="text-6xl font-bold text-white mb-2">{displayData.price}</h3>
                    <p className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">{priceType}</p>
                </div>

                <div className="flex-1">
                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                        Crafting high-end digital experiences that define your visual legacy. Precision in every pixel.
                    </p>
                    
                    <div className={`space-y-4 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        {displayData.features.map(f => (
                            <div key={f} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                <span className="text-sm text-zinc-300">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="mt-12 w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                    <Calendar className="w-5 h-5" />
                    <span>Book a Discovery Call</span>
                </button>
            </div>
        </div>
    );
};

export const PricingPage = () => {
    const [mode, setMode] = useState<'dev' | 'design'>('dev');

    return (
        <section id="pricing" className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Investment in Excellence
                    </motion.h2>
                    
                    <div className="flex justify-center items-center gap-6">
                        <span className={`text-sm font-mono tracking-widest transition-colors ${mode === 'dev' ? 'text-white' : 'text-zinc-500'}`}>DESIGN & DEV</span>
                        <button 
                            onClick={() => setMode(mode === 'dev' ? 'design' : 'dev')}
                            className="w-16 h-8 bg-zinc-800 rounded-full p-1 relative transition-colors border border-white/10"
                        >
                            <motion.div 
                                className="w-6 h-6 bg-[#D4AF37] rounded-full shadow-lg"
                                animate={{ x: mode === 'dev' ? 0 : 32 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-mono tracking-widest transition-colors ${mode === 'design' ? 'text-white' : 'text-zinc-500'}`}>DESIGN ONLY</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <PricingCard type="landing" mode={mode} />
                    <PricingCard type="multipage" mode={mode} />
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
};
