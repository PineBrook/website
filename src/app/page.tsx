import { Hero } from "../components/Hero";
import { Statistics } from "../components/Statistics";
import { ExecutionGap } from "../components/ExecutionGap";
import { CorePillars } from "../components/CorePillars";
import { Comparison } from "../components/Comparison";
import { AIProductivity } from "../components/AIProductivity";
import { LeadOffer } from "../components/LeadOffer";
import { CaseStudies } from "../components/CaseStudies";

export default function Page() {
  return (
    <>
      <Hero />
      <Statistics />
      <ExecutionGap />
      <CorePillars />
      <Comparison />
      <AIProductivity />
      <LeadOffer />
      <CaseStudies />
    </>
  );
}
