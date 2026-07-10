import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { openCal } from "../hooks/useCal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Default Transparent Fixed Navbar (visible when NOT scrolled) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 py-6 px-6 bg-transparent"
        }`}
      >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-3">
        <div className="flex items-center justify-start">
          <Link to="/" className="premium-wordmark-container bg-white/95 backdrop-blur-sm px-4 py-1 rounded-xl border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden relative flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="PineBrook Logo Icon" 
                className="h-full w-auto object-contain object-left absolute left-0 top-0" 
              />
            </div>
            <div className="h-15 w-20 overflow-visible relative flex-shrink-0"> 
              <img
                src="/pinebrook_logo.png"
                alt="PineBrook Text"
                className="h-full w-auto object-contain object-left absolute left-0 top-0 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]"
              />            
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-12">
          {["Solutions", "Industries", "Mission"].map((item) => (
            <Link
              key={item}
              to={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
              className="text-m font-medium text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-4">
          <Button 
            className="group"
            onClick={openCal}
            data-cal-link="pinebrook"
            data-cal-config='{"layout":"month_view"}'
          >
            Inquire
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      </header>

      {/* 2. Floating Dock Navbar (slides down when scrolled, showing ONLY the 3 menu links) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
            className="fixed top-4 left-1/2 z-50 rounded-full bg-brand-surface-container/60 backdrop-blur-lg border border-brand-border/40 py-2.5 px-8 shadow-2xl flex items-center justify-center gap-8"
          >
            {["Solutions", "Industries", "Mission"].map((item) => (
              <Link
                key={item}
                to={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
                className="text-m font-medium text-white transition-colors relative group px-2"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Mobile menu toggle inside the floating dock for small screens */}
            <button className="md:hidden text-white ml-2" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-brand-surface p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="premium-wordmark-container">
                  <div className="h-8 w-8 overflow-hidden relative flex-shrink-0">
                    <img 
                      src="/logo.png" 
                      alt="PineBrook Logo Icon" 
                      className="h-full w-auto object-contain object-left absolute left-0 top-0" 
                    />
                  </div>
                  <div className="flex flex-col justify-center leading-none">
                    <div className="premium-wordmark-title text-lg select-none">
                      <span className="text-[#007AFF]">Pine</span>
                      <span className="text-[#5AC8FA]">Brook</span>
                    </div>
                    <div className="font-sans italic text-[9px] tracking-wider text-[#5AC8FA]/90 mt-0.5 select-none font-medium">
                      Technologies
                    </div>
                  </div>
                </Link>
              </div>
              <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 flex-1">
              {["Solutions", "Industries", "Mission"].map((item) => (
                <Link
                  key={item}
                  to={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
                  className="text-2xl font-display font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button 
                className="w-full justify-center group"
                onClick={openCal}
                data-cal-link="pinebrook"
                data-cal-config='{"layout":"month_view"}'
              >
                Inquire
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
