import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { InquiryModalProvider } from "../contexts/InquiryModalContext";
import { InquiryModal } from "../components/InquiryModal";
import { Toast } from "../components/Toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../index.css";

export const metadata: Metadata = {
  title: "PineBrook | Scalable GCC, AI Automation & Digital Advisory",
  description: "PineBrook streamlines precision AI engineering, builds scalable Global Capability Centres (GCC), and provides strategic digital advisory to eliminate operational bottlenecks.",
  keywords: ["PineBrook", "GCC setup", "AI automation", "digital advisory", "digital acceleration", "technology roadmaps", "precision engineering", "Uttarakhand tech ecosystem"],
  robots: "index, follow",
  alternates: {
    canonical: "https://pinebrooktechnologies.com/",
  },
  openGraph: {
    type: "website",
    url: "https://pinebrooktechnologies.com/",
    title: "PineBrook | Scalable GCC, AI Automation & Digital Advisory",
    description: "Eliminate bottlenecks, scale workflows, and optimize operations. Explore our Global Capability Centre (GCC), Automation, and Digital Advisory pillars.",
    images: [
      {
        url: "https://pinebrooktechnologies.com/logo.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PineBrook | Scalable GCC, AI Automation & Digital Advisory",
    description: "Eliminate bottlenecks, scale workflows, and optimize operations with veteran technology leadership.",
    images: ["https://pinebrooktechnologies.com/logo.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PineBrook",
    "url": "https://pinebrooktechnologies.com/",
    "logo": "https://pinebrooktechnologies.com/logo.webp",
    "description": "PineBrook streamlines precision AI engineering, builds scalable Global Capability Centres (GCC), and provides strategic digital advisory to eliminate operational bottlenecks.",
    "sameAs": [
      "https://github.com/PineBrook",
      "https://www.linkedin.com/company/pinebrook"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Developer tools blocker script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.addEventListener("contextmenu", (e) => e.preventDefault());
                window.addEventListener("keydown", (e) => {
                  if (e.key === "F12") e.preventDefault();
                  if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) e.preventDefault();
                  if (e.ctrlKey && (e.key === "U" || e.key === "u")) e.preventDefault();
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-surface selection:bg-brand-primary/30 selection:text-white">
        <InquiryModalProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <InquiryModal />
            <Toast />
            <Analytics />
            <SpeedInsights />
          </div>
        </InquiryModalProvider>
      </body>
    </html>
  );
}
