"use client";
import FeaturesSection from "@/components/FeaturesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompaniesSection from "@/components/CompaniesSection";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <Header />
        {/* Hero Page */}
        <Hero />
        {/* Proof Section */}
        <CompaniesSection />
        {/* Features Section */}
        <FeaturesSection />
        {/* Testimonials */}
         <Testimonials /> 
      </motion.div>
    </>
  );
}
