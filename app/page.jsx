"use client";

// Utils
import { motion } from "framer-motion";

// Context 
import { Modal } from "@/components/Modal";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompaniesSection from "@/components/CompaniesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition:{
      duration:0.3,
      ease: "easeIn",
    }}}
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
