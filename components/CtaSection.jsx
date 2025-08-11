import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import CtaModalContent from "./CtaModalContent";
import { useDark } from "@/context/DarkContext";

const CtaSection = () => {
  const { openModal } = useModal();
    const { dark } = useDark();


  return (
    <section id="prototype" className="relative py-12 px-6">
      {/* Gradient */}
      <div className="absolute z-0 top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-accent to-bg dark:to-bg-dark" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="bg-[#0e0e0e] shadow-[0_0_50px_rgba(0,0,0,0.2)] relative text-bg dark:bg-primary dark:text-text dark:shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-16 mx-auto max-w-6xl"
      >
        {/* Texto */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-accent dark:text-accent mb-2 uppercase">
            Final Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 dark:text-dark">
            Built with passion for innovation.
          </h2>
          <p className="text-lg text-bg/80 dark:text-text/80 mb-6">
            Discover how{" "}
            <span className="text-accent dark:text-accent font-medium">Cashmarket</span> empowers
            crypto investors through sleek design and seamless UX. This
            prototype was created to demonstrate real-world UI/UX and frontend
            skills.
          </p>
          <button
            onClick={() =>
              openModal(<CtaModalContent/>)
            }
            className="bg-accent text-black font-semibold px-6 py-3 rounded-full transition hover:brightness-110"
          >
            Explore the Prototype
          </button>
        </div>

        {/* Imagen o ilustración opcional */}
        <div className="w-full md:w-1/2">
          <img
            src={ dark ? "/assets/dark.png" : "/assets/light.png"}
            alt="Cashmarket App Preview"
            className="rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
