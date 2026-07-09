import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-panel border-none" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="premium-wordmark-container">
            <div className="h-9 w-9 overflow-hidden relative flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="PineBrook Logo Icon" 
                className="h-full w-auto object-contain object-left absolute left-0 top-0" 
              />
            </div>
            <div className="h-20 w-20 overflow-hidden relative flex-shrink-0"> 
              <img
                src="/pinebrook_logo.png"
                alt="PineBrook Text"
                className="h-full w-auto object-contain object-left absolute left-0 top-0"
              />            
            </div>
            {/* <div className="flex flex-col justify-center leading-none">
              <div className="premium-wordmark-title select-none">
                <span className="text-[#007AFF]">Pine</span>
                <span className="text-[#5AC8FA]">Brook</span>
              </div>
              <div className="font-sans italic text-[10px] tracking-wider text-[#5AC8FA]/90 mt-0.5 select-none font-medium">
                Technologies
              </div>
            </div> */}
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Solutions", "Industries", "Mission"].map((item) => (
            <Link
              key={item}
              to={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-text-muted hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="group" withArrow>Inquire</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

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
              <Button className="w-full justify-center group" withArrow>Inquire</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
