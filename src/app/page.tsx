import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Stats from "@/components/stats";
import Team from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-background relative">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
