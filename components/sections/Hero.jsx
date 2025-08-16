// Utils
import { motion } from "framer-motion";
// Context
import { useDark } from "@/context/DarkContext";
import { useModal } from "@/context/ModalContext";
// Icons
import { SiTrustpilot } from "react-icons/si";
import { GiPadlock } from "react-icons/gi";
// UI
import CountUp from "react-countup";
import Button from "../ui/button";
import Badge from "../ui/badge";
import Stars from "../ui/ratingStars";
// Modals
import WatchDemoModalContent from "../modals/WatchDemoModalContent";
import SignUpModalContent from "../modals/SignUpModalContent";
// i18n
import { useTranslations } from "next-intl";

const Hero = () => {
  const { openModal } = useModal();
  const { dark } = useDark();
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative dark:text-text-dark">
      {/* Container */}
      <div className="container w-full h-full flex flex-col items-center gap-5 mx-auto pt-30">
        {/* Badge */}
        <Badge msg={t("badge")} icon={GiPadlock} />

        {/* Text */}
        <div className=" gap-2 flex flex-col mx-auto items-center text-center px-4 xl:px-0 ">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-2xl xl:text-nowrap md:text-6xl font-bold"
          >
            {t("title-1")}{" "}
            <span className="text-accent dark:text-accent-dark text-nowrap">
              {t("span")}
            </span><br />
            {t("title-2")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="font-semibold max-w-[60ch]"
          >
            {" "}
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            textValue={t("watch-demo")}
            handler={() => openModal(<WatchDemoModalContent />)}
          />
          <Button
            variant="accent"
            textValue={t("get-started")}
            handler={() => openModal(<SignUpModalContent />)}
          />
        </div>

        {/* Bottom section */}
        <div className="relative w-screen overflow-hidden text-center z-50">
          {/* Trustpilot */}
          <div className="flex items-center justify-center gap-2 pt-2 pb-8">
            <SiTrustpilot className="h-[24px] w-[24px] text-accent dark:text-accent-dark" />
            <h3>Trustpilot</h3>

            {/* Stars */}
            <div className="mx-1">
              <Stars />
            </div>

            {/* Counter */}
            <p className="font-semibold text-lg">
              <CountUp end={4200} duration={5} delay={0.5} />{t("countup")}
            </p>
          </div>

          {/* Gradient screen */}
          <div className="absolute bottom-0 z-50 h-1/2 w-full pointer-events-none bg-gradient-to-t from-primary dark:from-primary-dark to-transparent" />

          {/* Image Container */}
          <div className=" relative container max-h-[500px] rounded-t-2xl mx-auto overflow-hidden shadow-[0_-8px_70px_#579bfe] dark:shadow-[0_-10px_70px_#0143a7]">
            <img
              src={dark ? "/assets/dark.png" : "/assets/light.png"}
              alt=""
              className="w-full px-4 md:px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
