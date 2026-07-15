/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Mission } from "./pages/Mission";
import { NotFound } from "./pages/NotFound";
import { useCalEmbed } from "./hooks/useCal";
import { InquiryModalProvider } from "./contexts/InquiryModalContext";
import { InquiryModal } from "./components/InquiryModal";
import { Toast } from "./components/Toast";

export default function App() {
  useCalEmbed();

  return (
    <InquiryModalProvider>
      <Router>
        <div className="min-h-screen bg-brand-surface selection:bg-brand-primary/30 selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
          <InquiryModal />
          <Toast />
        </div>
      </Router>
    </InquiryModalProvider>
  );
}


