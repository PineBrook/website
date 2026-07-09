import { Button } from "./Button";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-surface pt-24 pb-12 border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center mb-6">
              <div className="premium-wordmark-container">
                <div className="h-9 w-9 overflow-hidden relative flex-shrink-0">
                  <img 
                    src="/logo.png" 
                    alt="PineBrook Logo Icon" 
                    className="h-full w-auto object-contain object-left absolute left-0 top-0" 
                  />
                </div>
                <div className="flex flex-col justify-center leading-none">
                  <div className="premium-wordmark-title select-none">
                    <span className="text-[#007AFF]">Pine</span>
                    <span className="text-[#5AC8FA]">Brook</span>
                  </div>
                  <div className="font-sans italic text-[10px] tracking-wider text-[#5AC8FA]/90 mt-0.5 select-none font-medium">
                    Technologies
                  </div>
                </div>
              </div>
            </div>
            <p className="text-brand-text-muted text-sm leading-relaxed max-w-xs mb-8">
              Simplifying IT. Accelerating Growth. Enterprise expertise and practical execution from Uttarakhand to the world.
            </p>
              <div className="mt-6 pt-6 border-t border-brand-border space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center bg-brand-surface-low text-brand-text-muted flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] eyebrow text-brand-text-muted">Location</span>
                    <span className="text-white font-medium">518, 519 CPL-1 Tower, 43-A, IT Park, Dehradun, India, 248001</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center bg-brand-surface-low text-brand-text-muted flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] eyebrow text-brand-text-muted">Mail</span>
                    <a href="mailto:mail@pinebrooktechnologies.com" className="text-white hover:text-brand-primary transition-colors font-medium">mail@pinebrooktechnologies.com</a>
                  </div>
                </div>
              </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-white hover:border-brand-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-white hover:border-brand-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              --  
            </div>
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
              <Button size="sm" className="w-full">Quick Assessment</Button>
            </div>
          </div>

        </div>

        {/* Jony Ive Inspired Map Section */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-container/20 backdrop-blur-md transition-all duration-500 hover:border-brand-primary/30">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d539.9770747203743!2d78.0880842!3d30.3653618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d76678504689%3A0x2568cd7dfedfd167!2sPineBrook%20Technologies!5e1!3m2!1sen!2sin!4v1783490942652!5m2!1sen!2sin" 
            width="100%" 
            height="200" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)" }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="PineBrook Technologies Office Map"
            className="w-full block hover:filter-none transition-all duration-700"
          ></iframe>
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
