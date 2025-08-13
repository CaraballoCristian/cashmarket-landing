/* Este componente esta listo */

// Utils
import { motion } from "framer-motion";

// Context
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";

// Modal
import CtaModalContent from "../modals/CtaModalContent";
import Button from "../ui/button";

const CtaSection = () => {
  const { openModal } = useModal();
  const { dark } = useDark();

  return (
    <section
      id="prototype"
      className="relative py-12 px-6 bg-gradient-to-b from-primary to-bg dark:from-primary-dark dark:to-bg-dark"
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 mt-16 mx-auto rounded-2xl shadow-lg shadow-accent-dark dark:shadow-accent text-white dark:text-black border border-accent-dark dark:border-accent bg-gradient-to-r dark:from-primary dark:to-accent to-accent from-primary-dark"
      >
        {/* Texts */}
        <div className="max-w-xl">
          {/* Upper Text */}
          <p className="text-sm text-primary dark:text-primary-dark font-extrabold mb-2 uppercase">
            Final Touch
          </p>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold my-4">
            Built with passion for innovation.
          </h2>
          {/* Paragraph */}
          <p className="text-lg mb-6 text-white/80 dark:text-black/80 font-semibold">
            Discover how Cashmarket empowers crypto investors through sleek
            design and seamless UX.
          </p>
          
          {/* Button */}
          <Button
            variant="cta"
            textValue={"Explore the Prototype"}
            handler={() => openModal(<CtaModalContent />)}
          />
        </div>

        {/* Imagen o ilustración opcional */}
        <div className="w-full md:w-1/2">
          <img
            src={dark ? "/assets/dark.png" : "/assets/light.png"}
            alt="Cashmarket App Preview"
            className="rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
