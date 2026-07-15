import React, { createContext, useContext, useState, useEffect } from "react";

interface ToastMessage {
  id: string;
  message: string;
}

interface InquiryModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toast: ToastMessage | null;
  showToast: (message: string) => void;
  hasSubmitted: boolean;
  setSubmitted: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const submitted = sessionStorage.getItem("pb_inquiry_submitted") === "true";
      setHasSubmitted(submitted);
    }
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToast({ id, message });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 5000);
  };

  const setSubmitted = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pb_inquiry_submitted", "true");
      setHasSubmitted(true);
    }
  };

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        toast,
        showToast,
        hasSubmitted,
        setSubmitted,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error("useInquiryModal must be used within an InquiryModalProvider");
  }
  return context;
}
