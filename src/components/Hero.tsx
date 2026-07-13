import { motion } from "motion/react";
import { Button } from "./Button";
import { openCal } from "../hooks/useCal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-surface-lowest">
      {/* Background Decor - World Map abstraction/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-[center_top] md:bg-bottom bg-[length:180%] md:bg-[length:110%] opacity-75 invert mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
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
          <span className="text-[3.5rem] sm:text-6xl md:text-[4.5rem] lg:text-[6rem] leading-[1.1] sm:leading-none text-brand-accent mb-4 md:mb-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.2)] text-center">GROWING FASTER</span>
          <span className="text-3xl sm:text-2xl md:text-5xl text-white/90 text-center">THAN OPERATIONS.</span>
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
            className="bg-transparent hover:bg-brand-accent hover:text-brand-surface border border-white/10 hover:border-brand-accent hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(173,198,255,0.6)] transition-all duration-300"
          >
            Schedule Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
