"use client";

// Utils
import { motion } from "framer-motion";

// Hooks
import { useEffect } from "react";

// Context
import { Modal } from "@/components/ui/Modal";

// Components
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import CompaniesSection from "@/components/sections/CompaniesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";

const Main = () => {
  useEffect(() => {
    // Return scroll to top
    window.scrollTo(0, 0);
    // Clear Hash
    if (window.location.hash) {
      const cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, null, cleanUrl);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      }}
      className="bg-bg dark:bg-bg-dark"
    >
      {/* Modal */}
      <Modal />
      {/* Header */}
      <Header />
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
      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
export default Main;