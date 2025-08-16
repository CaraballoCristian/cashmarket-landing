// Utils
import { motion } from "framer-motion";
// Context
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";
// Modal
import CtaModalContent from "../modals/CtaModalContent";
import Button from "../ui/button";
// Hooks
import useIsDesktop from "@/hooks/useIsDesktop";
// i18n
import { useTranslations } from "next-intl";

const CtaSection = () => {
  const { openModal } = useModal();
  const { dark } = useDark();
  const isDesktop = useIsDesktop();
  const t = useTranslations("cta-section");

  const initial = isDesktop ? { opacity: 0, y: 100 } : { opacity: 0};
  const whileInView = isDesktop ? { opacity: 1, y: 0 } : { opacity: 1};

  return (
    <section
      id="prototype"
      className="relative py-12 px-6 bg-gradient-to-b from-primary to-bg dark:from-primary-dark dark:to-bg-dark"
    >
      {/* Card */}
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative md:max-w-2xl lg:max-w-6xl flex flex-col md:flex-row items-center justify-between p-8 lg:p-12 mt-16 mx-auto rounded-2xl shadow-lg shadow-accent-dark dark:shadow-accent text-white dark:text-black border border-accent-dark dark:border-accent bg-gradient-to-r dark:from-primary dark:to-accent to-accent from-primary-dark"
      >
        {/* Texts & Mobile img */}
        <div className=" flex flex-col justify-between lg:max-w-1/2 lg:h-[280px]">
          {/* Upper Text */}
          <p className="text-sm text-primary dark:text-primary-dark font-extrabold mb-2 uppercase">
            {t("top")}
          </p>
          {/* Title */}
          <h2 className="text-2xl my-3 lg:my-0 md:text-4xl font-bold">
            {t("title")}
          </h2>
          {/* Paragraph */}
          <p className="text-md md:text-lg mb-6 text-white/80 dark:text-black/80 font-semibold">
            {t("subtitle")}
          </p>

          {/* Image mobile */}
          {!isDesktop && (
            <div className="w-full">
              <img
                src={dark ? "/assets/dark.png" : "/assets/light.png"}
                alt="Cashmarket App Preview"
                className="rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Button */}
          <Button
            variant="black&white"
            textValue={t("button")}
            handler={() => openModal(<CtaModalContent />)}
          />
        </div>

        {/* Imag desktop */}
        {isDesktop && (
          <div className="lg:h-[280px] w-full lg:w-1/2">
            <img
              src={dark ? "/assets/dark.png" : "/assets/light.png"}
              alt="Cashmarket App Preview"
              className="rounded-xl shadow-lg ml-auto lg:h-full"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default CtaSection;
