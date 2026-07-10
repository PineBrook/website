import { Button } from "./Button";
import { MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { openCal } from "../hooks/useCal";

export function Footer() {
  return (
    <footer className="bg-brand-surface pt-14 pb-12 border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center mb-6">
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
            <p className="text-brand-text-muted text-sm leading-relaxed max-w-xs mb-8">
              Simplifying IT. <br />
              Accelerating Growth. <br />
              Enterprise expertise.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="eyebrow text-xs text-white mb-6">SOLUTIONS</h4>
            <ul className="space-y-4">
              {["Managed Operations", "AI & Automation", "Digital Advisory", "Global Delivery"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-text-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="eyebrow text-xs text-white mb-6">COMPANY</h4>
            <ul className="space-y-4">
              {["About Us", "Case Studies", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-text-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Col */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-xl bg-brand-surface-container border border-brand-border transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)]">
              <h4 className="font-semibold text-white mb-2">Scale Operations</h4>
              <p className="text-xs text-brand-text-muted mb-6">Discover hidden productivity gains with our 2-week quick assessment.</p>
              <Button 
                size="sm" 
                className="w-full"
                onClick={openCal}
                data-cal-link="pinebrook"
                data-cal-config='{"layout":"month_view"}'
              >
                Quick Assessment
              </Button>
            </div>
          </div>

        </div>

        {/* Jony Ive Inspired Map Section */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-container/20 backdrop-blur-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d539.9770747203743!2d78.0880842!3d30.3653618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d76678504689%3A0x2568cd7dfedfd167!2sPineBrook%20Technologies!5e1!3m2!1sen!2sin!4v1783490942652!5m2!1sen!2sin" 
            width="100%" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="PineBrook Technologies Office Map"
            className="w-full block"
          ></iframe>
        </div>

        {/* Contact details in one line */}
        <div className="py-6 border-t border-brand-border flex flex-col md:flex-row flex-wrap items-center justify-between gap-x-8 gap-y-4 text-xs text-brand-text-muted">
          <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-white">Location:</span> 
              <span>518, 519 CPL-1 Tower, 43-A, IT Park, Dehradun, India, 248001</span>
            </span>
            <span className="hidden md:inline text-brand-border">|</span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-white">Mail:</span>
              <a href="mailto:info@pinebrooktechnologies.com" className="hover:text-brand-primary transition-colors text-brand-text">info@pinebrooktechnologies.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>LinkedIn</span>
            </a>
            <span className="text-brand-border">|</span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted">© 2026 PINEBROOK TECHNOLOGIES PVT LTD.</p>
          <div className="flex items-center gap-6 text-xs text-brand-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
