import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Loader2, ChevronDown } from "lucide-react";
import { useInquiryModal } from "../contexts/InquiryModalContext";

// Pre-compiled regex patterns for O(1) validation of bounded strings
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_CHARS_REGEX = /^[0-9\s\-()]+$/;

interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  placeholder: string;
  validate: (val: string) => boolean;
}

const COUNTRIES: CountryCode[] = [
  { 
    code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", placeholder: "98765 43210", 
    validate: (v) => v.replace(/\D/g, "").length === 10 && /^[6-9]/.test(v.replace(/\D/g, "")) 
  },
  { 
    code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", placeholder: "(555) 000-0000", 
    validate: (v) => v.replace(/\D/g, "").length === 10 
  },
  { 
    code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", placeholder: "7123 456789", 
    validate: (v) => v.replace(/\D/g, "").length === 10 && v.replace(/\D/g, "").startsWith("7")
  },
  { 
    code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪", placeholder: "50 123 4567", 
    validate: (v) => v.replace(/\D/g, "").length === 9 && v.replace(/\D/g, "").startsWith("5")
  },
  { 
    code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬", placeholder: "8123 4567", 
    validate: (v) => v.replace(/\D/g, "").length === 8 && /^[89]/.test(v.replace(/\D/g, "")) 
  },
  { 
    code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪", placeholder: "170 1234567", 
    validate: (v) => {
      const len = v.replace(/\D/g, "").length;
      return len >= 10 && len <= 11 && v.replace(/\D/g, "").startsWith("1");
    }
  },
];

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

function FormField({ label, type, name, value, error, onChange, onBlur, onKeyDown, inputRef }: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-5 relative">
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          onKeyDown={onKeyDown}
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
  const { isOpen, closeModal, hasSubmitted, setSubmitted, showToast } = useInquiryModal();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "", phone: "", global: "" });
  const [touched, setTouched] = useState({ firstName: false, lastName: false, email: false, phone: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // Set initial focus & reset state
  useEffect(() => {
    if (!isOpen) return;

    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    setErrors({ firstName: "", lastName: "", email: "", phone: "", global: "" });
    setTouched({ firstName: false, lastName: false, email: false, phone: false });
    setStatus(hasSubmitted ? "success" : "idle");
    setErrorMessage("");
    setShowCountryDropdown(false);

    if (hasSubmitted) return;

    // Set focus to First Name input
    setTimeout(() => {
      firstNameRef.current?.focus();
    }, 100);
  }, [isOpen, hasSubmitted]);

  // Handle ESC closing and click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // O(1) Validation Logic
  const validateField = (fieldName: string, value: string, currentCountry = selectedCountry) => {
    let error = "";
    if (fieldName === "firstName") {
      if (!value.trim()) {
        error = "First name is compulsory";
      } else if (value.trim().length < 2) {
        error = "First name must be at least 2 characters";
      }
    } else if (fieldName === "email") {
      if (value.trim()) {
        if (!EMAIL_REGEX.test(value)) {
          error = "Please enter a valid email address";
        }
      }
    } else if (fieldName === "phone") {
      if (value.trim()) {
        const cleanVal = value.trim();
        if (!PHONE_CHARS_REGEX.test(cleanVal)) {
          error = "Phone number can only contain digits, spaces, hyphens, and parentheses";
        } else if (!currentCountry.validate(cleanVal)) {
          error = `Invalid format for ${currentCountry.name} (e.g. ${currentCountry.placeholder})`;
        }
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, global: "" }));
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

  // Navigates inputs when user presses Enter
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement | HTMLButtonElement | null>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  const selectCountry = (country: CountryCode) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    
    // Revalidate phone number with the new country settings if it has content
    if (formData.phone) {
      const error = validateField("phone", formData.phone, country);
      setErrors((prev) => ({ ...prev, phone: error }));
    }
    
    phoneRef.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Revalidate all fields
    const fNameError = validateField("firstName", formData.firstName);
    const emailError = validateField("email", formData.email);
    const phoneError = validateField("phone", formData.phone);
    let globalError = "";

    // Validation: at least one of Email or Phone is compulsory
    if (!formData.email.trim() && !formData.phone.trim()) {
      globalError = "Either email or phone number is compulsory";
    }

    setErrors({
      firstName: fNameError,
      lastName: "",
      email: emailError,
      phone: phoneError,
      global: globalError,
    });

    setTouched({ firstName: true, lastName: true, email: true, phone: true });

    if (fNameError || emailError || phoneError || globalError) {
      return;
    }

    setStatus("submitting");
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone ? `${selectedCountry.dialCode} ${formData.phone}` : "",
      };

      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to submit inquiry");
      }

      setSubmitted(); // Lock session
      showToast("PineBrook team will reach out to you shortly.");
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
            className="relative w-full max-w-md bg-[#0c0f17] border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,122,255,0.15)] overflow-visible z-10"
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

            {status === "success" || hasSubmitted ? (
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
                  You have already submitted an inquiry during this session. A PineBrook partner will contact you shortly.
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
                <div className="mb-6">
                  <h3 id="modal-title" className="text-2xl font-display font-semibold text-white mb-2">
                    Submit Inquiry
                  </h3>
                  <p className="text-brand-text-muted text-sm">
                    Provide your details below to scale your operations.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Name Split Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      inputRef={firstNameRef}
                      label="First Name *"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      error={errors.firstName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("firstName")}
                      onKeyDown={(e) => handleInputKeyDown(e, lastNameRef)}
                    />
                    <FormField
                      inputRef={lastNameRef}
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      error={errors.lastName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("lastName")}
                      onKeyDown={(e) => handleInputKeyDown(e, emailRef)}
                    />
                  </div>

                  {/* Email Address */}
                  <FormField
                    inputRef={emailRef}
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    error={errors.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    onKeyDown={(e) => handleInputKeyDown(e, phoneRef)}
                  />

                  {/* Phone with Country selector */}
                  <div className="mb-5 relative">
                    <div className="flex gap-2">
                      {/* Flag Dropdown Selector */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className="flex items-center gap-1 px-3 py-3.5 bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] text-white rounded-lg text-sm transition-all focus:outline-none focus:border-brand-primary h-[50px] cursor-pointer"
                        >
                          <span className="text-lg leading-none">{selectedCountry.flag}</span>
                          <span className="text-xs text-brand-text-muted font-medium">{selectedCountry.dialCode}</span>
                          <ChevronDown className="w-3.5 h-3.5 text-brand-text-muted ml-0.5" />
                        </button>

                        <AnimatePresence>
                          {showCountryDropdown && (
                            <>
                              <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setShowCountryDropdown(false)}
                              />
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute left-0 bottom-full mb-2 z-50 w-52 bg-[#0c0f17] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1.5"
                              >
                                {COUNTRIES.map((country) => (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => selectCountry(country)}
                                    className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/5 flex items-center gap-3 transition-colors cursor-pointer"
                                  >
                                    <span className="text-base">{country.flag}</span>
                                    <span className="font-medium flex-1">{country.name}</span>
                                    <span className="text-xs text-brand-text-muted">{country.dialCode}</span>
                                  </button>
                                ))}
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone input field */}
                      <div className="relative flex-1">
                        <input
                          ref={phoneRef}
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur("phone")}
                          onKeyDown={(e) => handleInputKeyDown(e, submitButtonRef)}
                          className={`peer w-full px-4 py-3.5 bg-white/[0.02] hover:bg-white/[0.04] border ${
                            errors.phone 
                              ? "border-red-500/50 focus:border-red-500" 
                              : "border-white/10 focus:border-brand-primary"
                          } rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 text-sm focus:shadow-[0_0_15px_rgba(0,122,255,0.15)] h-[50px]`}
                          placeholder="Phone Number"
                        />
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm
                            ${formData.phone 
                              ? "top-[-10px] text-xs text-brand-primary bg-[#0c0f17] px-1.5 font-medium" 
                              : "top-3.5 text-brand-text-muted"
                            } ${errors.phone ? "text-red-400/70" : ""}`}
                        >
                          Phone Number
                        </label>
                      </div>
                    </div>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400 mt-1.5 ml-1"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                  {errors.global && (
                    <p className="text-xs text-red-400 mb-5 bg-red-950/20 border border-red-500/10 p-3 rounded-lg">
                      {errors.global}
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-xs text-red-400 mb-5 bg-red-950/20 border border-red-500/10 p-3 rounded-lg">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    ref={submitButtonRef}
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
