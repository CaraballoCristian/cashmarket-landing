"use client";
// Utils
import { motion } from "framer-motion";
// Hooks
import { useEffect } from "react";
// Layout Components
import { Modal } from "@/components/ui/Modal";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";

export default function App() {
  /* On reload */
  useEffect(() => {
    // Return scroll to top
    window.scrollTo(0, 0);
    // Clear Hash
    if (window.location.hash) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, null, cleanUrl);
    }
  }, []);

  return (
    /* Page Loader */
    <PageLoader>
      {/* Modal */}
      <Modal />
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </PageLoader>
  );
}
