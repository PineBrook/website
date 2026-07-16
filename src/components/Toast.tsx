"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useInquiryModal } from "../contexts/InquiryModalContext";

export function Toast() {
  const { toast } = useInquiryModal();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-[#0c0f17]/90 backdrop-blur-md border border-white/10 px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,122,255,0.15)] max-w-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
          <p className="text-sm font-medium text-white">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
