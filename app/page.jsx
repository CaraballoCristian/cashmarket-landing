"use client";
// Utils
import { useEffect, useState } from "react";
// Layout Components
import { Modal } from "@/components/ui/Modal";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initial Load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      {/* Page Loader */}
      <PageLoader isLoading={isLoading} />

      {/* Main content */}
      {!isLoading && (
        <>
          {/* Modal */}
          <Modal />
          {/* Header */}
          <Header />
          {/* Main */}
          <Main />
          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}
