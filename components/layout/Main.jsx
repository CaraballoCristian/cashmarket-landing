// Components
import Hero from "@/components/sections/Hero";
import CompaniesSection from "@/components/sections/CompaniesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

const Main = () => {
  return (
    <main>
      {/* Hero Page */}
      <Hero />
      {/* Proof Section */}
      <CompaniesSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Testimonials */}
      <TestimonialsSection />
      {/* FAQ */}
      <FaqSection />
      {/* CtaSection */}
      <CtaSection />
    </main>
  );
};
export default Main;
