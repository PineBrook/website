import { motion } from "motion/react";
import { Button } from "./Button";
import { openCal } from "../hooks/useCal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-surface-lowest">
      {/* Background Decor - Premium SVG Tech Grid, 4K Network Image, & Glowing Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 4K Tech Network Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3840&auto=format&fit=crop')" }}
          aria-hidden="true"
        />
        {/* Fine-line Tech Blueprint Grid */}
        <svg 
          className="absolute inset-0 w-full h-full stroke-white/[0.025] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,white_40%,transparent_100%)]" 
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse" x="50%" y="-1">
              <path d="M.5 48V.5H48" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" strokeWidth="0" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,6,15,0.2)_0%,var(--color-brand-surface-lowest)_95%)]"></div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[10%] w-120 h-120 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-100 h-120 bg-brand-secondary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold tracking-tight mb-8 max-w-5xl flex flex-col items-center justify-center w-full"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl text-white/90 mb-3 md:mb-4">YOUR BUSINESS IS</span>
          <span className="text-[3.5rem] sm:text-6xl md:text-[4.5rem] lg:text-[6rem] leading-[1.1] sm:leading-none bg-gradient-to-r from-white via-brand-accent to-brand-secondary bg-clip-text text-transparent mb-4 md:mb-4 drop-shadow-[0_0_15px_rgba(0,122,255,0.3)] text-center pb-2">GROWING FASTER</span>
          <span className="text-3xl sm:text-4xl md:text-5xl text-white/90 text-center">THAN OPERATIONS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text-muted mb-10 max-w-2xl"
        >
          PineBrook streamlines precision AI engineering to eliminate bottlenecks, stabilize systems, and unlock enterprise-wide scalability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={openCal}
            data-cal-link="pinebrook"
            data-cal-config='{"layout":"month_view"}'
            className="bg-transparent hover:bg-brand-accent hover:text-brand-surface border border-white/10 hover:border-brand-accent shadow-[0_0_15px_rgba(0,122,255,0.15)] hover:shadow-[0_0_25px_rgba(0,122,255,0.45)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Schedule Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
