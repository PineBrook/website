import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Loader2, ChevronDown, Search } from "lucide-react";
import { useInquiryModal } from "../contexts/InquiryModalContext";
import { COUNTRIES, Country } from "../lib/countries";

// Pre-compiled regex patterns for O(1) validation of bounded strings
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_CHARS_REGEX = /^[0-9\s\-()]+$/;

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
  const [formData, setFormData] = useState({ firstName: "", lastName: "", company: "", location: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ firstName: "", lastName: "", company: "", location: "", email: "", phone: "", global: "" });
  const [touched, setTouched] = useState({ firstName: false, lastName: false, company: false, location: false, email: false, phone: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Default to India
  const defaultCountry = useMemo(() => COUNTRIES.find(c => c.code === "IN") || COUNTRIES[0], []);
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // Filter countries in O(N) but since N is small (~200) and query is fast, it runs instantly
  const filteredCountries = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Set initial focus & reset state
  useEffect(() => {
    if (!isOpen) return;

    setFormData({ firstName: "", lastName: "", company: "", location: "", email: "", phone: "" });
    setErrors({ firstName: "", lastName: "", company: "", location: "", email: "", phone: "", global: "" });
    setTouched({ firstName: false, lastName: false, company: false, location: false, email: false, phone: false });
    setStatus(hasSubmitted ? "success" : "idle");
    setErrorMessage("");
    setShowCountryDropdown(false);
    setSearchQuery("");

    if (hasSubmitted) return;

    // Set focus to First Name input
    setTimeout(() => {
      firstNameRef.current?.focus();
    }, 100);
  }, [isOpen, hasSubmitted]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (showCountryDropdown) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [showCountryDropdown]);

  // Handle ESC closing
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCountryDropdown) {
          setShowCountryDropdown(false);
        } else {
          closeModal();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal, showCountryDropdown]);

  // O(1) Validation Logic
  const validateField = (fieldName: string, value: string, currentCountry = selectedCountry) => {
    let error = "";
    if (fieldName === "firstName") {
      if (!value.trim()) {
        error = "First name is compulsory";
      } else if (value.trim().length < 2) {
        error = "First name must be at least 2 characters";
      }
    } else if (fieldName === "company") {
      if (!value.trim()) {
        error = "Company name is compulsory";
      }
    } else if (fieldName === "email") {
      if (value.trim()) {
        if (!EMAIL_REGEX.test(value)) {
          error = "Please enter a valid email address";
        }
      }
    } else if (fieldName === "phone") {
      if (!value.trim()) {
        error = "Phone number is compulsory";
      } else {
        const cleanVal = value.trim();
        if (!PHONE_CHARS_REGEX.test(cleanVal)) {
          error = "Phone number can only contain digits, spaces, hyphens, and parentheses";
        } else {
          const digits = cleanVal.replace(/\D/g, "");
          // Special validations for a few common ones, standard ITU-T E.164 (6-15 digits) fallback for all others
          if (currentCountry.code === "IN") {
            if (digits.length !== 10 || !/^[6-9]/.test(digits)) {
              error = "Invalid format for India (10 digits starting with 6-9)";
            }
          } else if (currentCountry.code === "US" || currentCountry.code === "CA") {
            if (digits.length !== 10) {
              error = "Invalid format for United States / Canada (10 digits)";
            }
          } else {
            if (digits.length < 6 || digits.length > 15) {
              error = "Invalid format (must be 6 to 15 digits)";
            }
          }
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

  const selectCountry = (country: Country) => {
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
    const companyError = validateField("company", formData.company);
    const emailError = validateField("email", formData.email);
    const phoneError = validateField("phone", formData.phone);

    setErrors({
      firstName: fNameError,
      lastName: "",
      company: companyError,
      location: "",
      email: emailError,
      phone: phoneError,
      global: "",
    });

    setTouched({ firstName: true, lastName: true, company: true, location: true, email: true, phone: true });

    if (fNameError || companyError || emailError || phoneError) {
      return;
    }

    setStatus("submitting");
    try {
      const payload = {
        firstname: formData.firstName.trim(),
        lastname: formData.lastName.trim(),
        companyName: formData.company.trim(),
        location: formData.location.trim(),
        email: formData.email.trim(),
        phoneExtension: selectedCountry.dialCode,
        phoneNumber: formData.phone.trim(),
      };

      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let msg = "Failed to submit inquiry";
        try {
          const data = await response.json();
          msg = data.message || msg;
        } catch (_) {}
        throw new Error(msg);
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
                      onKeyDown={(e) => handleInputKeyDown(e, companyRef)}
                    />
                  </div>

                  {/* Company & Location Split Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      inputRef={companyRef}
                      label="Company Name *"
                      type="text"
                      name="company"
                      value={formData.company}
                      error={errors.company}
                      onChange={handleChange}
                      onBlur={() => handleBlur("company")}
                      onKeyDown={(e) => handleInputKeyDown(e, locationRef)}
                    />
                    <FormField
                      inputRef={locationRef}
                      label="Location"
                      type="text"
                      name="location"
                      value={formData.location}
                      error={errors.location}
                      onChange={handleChange}
                      onBlur={() => handleBlur("location")}
                      onKeyDown={(e) => handleInputKeyDown(e, phoneRef)}
                    />
                  </div>

                  {/* Phone with Country selector (Compulsory) */}
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
                              {/* Overlay backing to handle clicks outside */}
                              <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setShowCountryDropdown(false)}
                              />
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute left-0 bottom-full mb-2 z-50 w-64 bg-[#0c0f17] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-2"
                              >
                                {/* Country Search Box */}
                                <div className="relative flex items-center bg-white/[0.02] border border-white/10 rounded-lg px-2.5 py-1.5 focus-within:border-brand-primary transition-all">
                                  <Search className="w-4 h-4 text-brand-text-muted mr-2" />
                                  <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search country..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-transparent border-none text-white text-xs w-full focus:outline-none placeholder-brand-text-muted"
                                  />
                                </div>
                                
                                {/* Scrollable List */}
                                <div className="max-h-48 overflow-y-auto custom-scrollbar flex flex-col gap-0.5 pr-1">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                      <button
                                        key={`${country.code}-${country.dialCode}`}
                                        type="button"
                                        onClick={() => selectCountry(country)}
                                        className="w-full px-3 py-2 text-left text-xs text-white hover:bg-white/5 flex items-center gap-2.5 rounded-lg transition-colors cursor-pointer"
                                      >
                                        <span className="text-base">{country.flag}</span>
                                        <span className="font-medium flex-1 truncate">{country.name}</span>
                                        <span className="text-[10px] text-brand-text-muted font-semibold">{country.dialCode}</span>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="text-[11px] text-brand-text-muted py-3 text-center">
                                      No countries found
                                    </div>
                                  )}
                                </div>
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
                          onKeyDown={(e) => handleInputKeyDown(e, emailRef)}
                          className={`peer w-full px-4 py-3.5 bg-white/[0.02] hover:bg-white/[0.04] border ${
                            errors.phone 
                              ? "border-red-500/50 focus:border-red-500" 
                              : "border-white/10 focus:border-brand-primary"
                          } rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 text-sm focus:shadow-[0_0_15px_rgba(0,122,255,0.15)] h-[50px]`}
                          placeholder={selectedCountry.placeholder}
                        />
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm
                            ${formData.phone 
                              ? "top-[-10px] text-xs text-brand-primary bg-[#0c0f17] px-1.5 font-medium" 
                              : "top-3.5 text-brand-text-muted"
                            } ${errors.phone ? "text-red-400/70" : ""}`}
                        >
                          {`Phone Number * (${selectedCountry.placeholder})`}
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

                  {/* Email Address (Optional) */}
                  <FormField
                    inputRef={emailRef}
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    error={errors.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    onKeyDown={(e) => handleInputKeyDown(e, submitButtonRef)}
                  />

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
