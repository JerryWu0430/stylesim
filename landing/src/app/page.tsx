import {
  Navigation,
  Hero,
  ProblemSection,
  SolutionSection,
  BentoFeatures,
  StatsSection,
  CTASection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BentoFeatures />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
