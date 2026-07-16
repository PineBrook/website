"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home } from "lucide-react";
import { openCal } from "../hooks/useCal";
import { useInquiryModal } from "../contexts/InquiryModalContext";
 
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useInquiryModal();
 
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
          <Link href="/" className="premium-wordmark-container bg-white/95 backdrop-blur-sm px-0.1 py-01 rounded-xl border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white flex items-center gap-0.5">
            <div className="h-11 w-11 overflow-hidden relative flex-shrink-0">
              <img 
                src="/logo.webp" 
                alt="PineBrook Logo Icon" 
                loading="lazy"
                className="h-full w-auto object-contain object-left absolute left-0 top-0" 
              />
            </div>
            <div className="h-11 w-22 overflow-visible relative flex-shrink-0"> 
              <img
                src="/pinebrook_logo.webp"
                alt="PineBrook Text"
                loading="lazy"
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
              href={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
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
            onClick={openModal}
          >
            Get in Touch
          </Button>
        </div>
 
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      </header>
 
      {/* 2. Floating Dock Navbar (slides down when scrolled, showing ONLY the 3 menu links, desktop only) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
            className="hidden md:flex fixed top-4 left-1/2 z-50 rounded-full bg-brand-surface-container/60 backdrop-blur-lg border border-brand-border/40 py-2.5 px-6 shadow-2xl items-center justify-center gap-4"
          >
            <Link 
              href="/" 
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-white hover:text-brand-primary transition-colors flex items-center justify-center relative group p-1.5 rounded-full hover:bg-white/5"
            >
              <Home className="w-5 h-5" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 ease-out group-hover:w-1/2"></span>
            </Link>
            <div className="w-px h-5 bg-brand-border/30"></div>
            {["Solutions", "Industries", "Mission"].map((item) => (
              <Link
                key={item}
                href={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
                className="text-m font-medium text-white transition-colors relative group px-2"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Floating Mobile Hamburger Trigger (visible when scrolled on mobile viewports) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="md:hidden fixed top-6 right-6 z-50 p-3 rounded-full bg-brand-surface-container/80 backdrop-blur-lg border border-brand-border/40 shadow-xl text-white hover:bg-brand-surface-container transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="premium-wordmark-container bg-white/95 backdrop-blur-sm px-0.1 py-01 rounded-xl border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white flex items-center gap-0.5">
                <div className="h-11 w-11 overflow-hidden relative flex-shrink-0">
                  <img 
                    src="/logo.webp" 
                    alt="PineBrook Logo Icon" 
                    loading="lazy"
                    className="h-full w-auto object-contain object-left absolute left-0 top-0" 
                  />
                </div>
                <div className="h-11 w-22 overflow-visible relative flex-shrink-0"> 
                  <img
                    src="/pinebrook_logo.webp"
                    alt="PineBrook Text"
                    loading="lazy"
                    className="h-full w-auto object-contain object-left absolute left-0 top-0 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]"
                  />            
                </div>
              </Link>
              <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col items-center justify-center gap-8 flex-1 my-8">
              {["Solutions", "Industries", "Mission"].map((item) => (
                <Link
                  key={item}
                  href={item === "Mission" ? "/mission" : `/#${item.toLowerCase()}`}
                  className="text-3xl font-display font-medium text-white hover:text-brand-primary transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
              <Button 
                className="w-full justify-center group py-4 text-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
