import React, { createContext, useContext, useState } from "react";

interface InquiryModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <InquiryModalContext.Provider value={{ isOpen, openModal, closeModal }}>
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
