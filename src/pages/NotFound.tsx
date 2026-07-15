import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-surface-lowest px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md text-center flex flex-col items-center">
        {/* Logo and Brand Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <img 
            src="/logo.webp" 
            alt="PineBrook Logo" 
            className="w-10 h-10 object-contain filter drop-shadow-[0_0_8px_rgba(0,122,255,0.3)]"
          />
          <span className="font-display font-bold text-xl text-white tracking-tight">PineBrook</span>
        </motion.div>

        {/* Glassmorphic 404 Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-full bg-[#0c0f17]/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,122,255,0.08)] flex flex-col items-center"
        >
          {/* Avatar Illustration Area */}
          <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 bg-brand-primary/10 rounded-full border border-brand-primary/30 animate-ping opacity-75" />
            
            {/* Custom Avatar Container */}
            <div className="relative w-24 h-24 rounded-full bg-brand-surface-container border border-white/15 flex items-center justify-center overflow-hidden shadow-inner">
              <span className="text-6xl" role="img" aria-label="Otter Mascot">🦦</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-3">
            Looks like you're off-grid.
          </h1>
          <p className="text-brand-text-muted text-sm leading-relaxed mb-8 max-w-xs">
            This page is off the map. Our mascot suggests heading back to base.
          </p>

          <Link to="/" className="w-full">
            <Button size="lg" className="w-full justify-center group" withArrow>
              Back to Base
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
