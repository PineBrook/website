import { lazy, Suspense } from "react";
import { Hero } from "../components/Hero";

// Lazy load below-the-fold components
const Statistics = lazy(() => import("../components/Statistics").then(m => ({ default: m.Statistics })));
const ExecutionGap = lazy(() => import("../components/ExecutionGap").then(m => ({ default: m.ExecutionGap })));
const CorePillars = lazy(() => import("../components/CorePillars").then(m => ({ default: m.CorePillars })));
const Comparison = lazy(() => import("../components/Comparison").then(m => ({ default: m.Comparison })));
const AIProductivity = lazy(() => import("../components/AIProductivity").then(m => ({ default: m.AIProductivity })));
const LeadOffer = lazy(() => import("../components/LeadOffer").then(m => ({ default: m.LeadOffer })));
const CaseStudies = lazy(() => import("../components/CaseStudies").then(m => ({ default: m.CaseStudies })));

function SectionLoader({ height = "h-[400px]" }: { height?: string }) {
  return (
    <div className={`w-full ${height} bg-brand-surface-lowest flex items-center justify-center border-y border-brand-border/30`}>
      <div className="w-6 h-6 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export function Home() {
  return (
    <>
      {/* Priority Hero renders instantly */}
      <Hero />
      
      {/* Deferred sections load asynchronously */}
      <Suspense fallback={<SectionLoader height="h-[120px]" />}>
        <Statistics />
      </Suspense>
      
      <Suspense fallback={<SectionLoader height="h-[500px]" />}>
        <ExecutionGap />
      </Suspense>
      
      <Suspense fallback={<SectionLoader height="h-[600px]" />}>
        <CorePillars />
      </Suspense>
      
      <Suspense fallback={<SectionLoader height="h-[500px]" />}>
        <Comparison />
      </Suspense>
      
      <Suspense fallback={<SectionLoader height="h-[600px]" />}>
        <AIProductivity />
      </Suspense>
      
      <Suspense fallback={<SectionLoader height="h-[400px]" />}>
        <LeadOffer />
      </Suspense>
      
      <Suspense fallback={<SectionLoader height="h-[450px]" />}>
        <CaseStudies />
      </Suspense>
    </>
  );
}

