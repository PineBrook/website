import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Loader2 } from "lucide-react";
import { useInquiryModal } from "../contexts/InquiryModalContext";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

function FormField({ label, type, name, value, error, onChange, onBlur }: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6 relative">
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          className={`peer w-full px-4 py-3.5 bg-white/[0.02] hover:bg-white/[0.04] border ${
            error 
              ? "border-red-500/50 focus:border-red-500" 
              : "border-white/10 focus:border-brand-primary"
          } rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 text-sm focus:shadow-[0_0_15px_rgba(0,122,255,0.15)]`}
          placeholder={label}
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm
            ${(isFocused || value) 
              ? "top-[-10px] text-xs text-brand-primary bg-[#0c0f17] px-1.5 font-medium" 
              : "top-3.5 text-brand-text-muted"
            } ${error && !(isFocused || value) ? "text-red-400/70" : ""}`}
        >
          {label}
        </label>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400 mt-1.5 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export function InquiryModal() {
  const { isOpen, closeModal } = useInquiryModal();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and ESC key handler
  useEffect(() => {
    if (!isOpen) return;

    // Reset state on open
    setFormData({ name: "", email: "", phone: "" });
    setErrors({ name: "", email: "", phone: "" });
    setTouched({ name: false, email: false, phone: false });
    setStatus("idle");
    setErrorMessage("");

    const previousFocus = document.activeElement as HTMLElement;

    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Focus first input (skip close button)
    if (focusableElements && focusableElements.length > 1) {
      setTimeout(() => {
        focusableElements[1]?.focus();
      }, 50);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "Tab" && focusableElements) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, closeModal]);

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (value.trim().length < 2) {
        error = "Name must be at least 2 characters";
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = "Email address is required";
      } else if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (name === "phone") {
      const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
      if (!value.trim()) {
        error = "Phone number is required";
      } else if (!phoneRegex.test(value)) {
        error = "Please enter a valid phone number";
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation for all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true });

    if (newErrors.name || newErrors.email || newErrors.phone) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to submit inquiry");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-md bg-[#0c0f17] border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,122,255,0.15)] overflow-hidden z-10"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-brand-text-muted hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 bg-brand-secondary/10 border border-brand-secondary/30 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 id="modal-title" className="text-2xl font-display font-semibold text-white mb-3">
                  Inquiry Received
                </h3>
                <p className="text-brand-text-muted text-sm max-w-xs mb-8">
                  Thank you for reaching out. A PineBrook partner will contact you shortly to discuss your requirements.
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary outline-none w-full"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-8">
                  <h3 id="modal-title" className="text-2xl font-display font-semibold text-white mb-2">
                    Submit Inquiry
                  </h3>
                  <p className="text-brand-text-muted text-sm">
                    Provide your details below to scale your operations.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    error={errors.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                  />

                  <FormField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    error={errors.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                  />

                  <FormField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    error={errors.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-400 mb-6 bg-red-950/20 border border-red-500/10 p-3 rounded-lg">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="relative w-full py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand-primary outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Inquire Now</span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
