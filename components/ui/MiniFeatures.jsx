//Utils
import { motion } from "framer-motion";
// UI
import {
  FaRegCreditCard,
  FaRegClipboard,
  FaRegKeyboard,
} from "react-icons/fa6";
// i18n
import { useTranslations } from "next-intl";

export default function MiniFeatures() {
  const t = useTranslations("features-section.mini-features");

  const miniFeatures = [
    {
      icon: FaRegCreditCard,
      title: t("card-1.title"),
      description: t("card-1.subtitle"),
    },
    {
      icon: FaRegKeyboard,
      title: t("card-2.title"),
      description: t("card-2.subtitle"),
    },
    {
      icon: FaRegClipboard,
      title: t("card-3.title"),
      description: t("card-3.subtitle"),
    },
  ];

  return (
    <section id="features" className="relative z-20 py-20">
      <div className="max-w-6xl mx-auto p-6 overflow-hidden">
        {/* Top Texts */}
        <div className="text-center mb-16">

          {/* Title */}
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark"
          >
            {t("title")}{" "}
            <span className="text-bg dark:text-accent-dark">{t("span")}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="max-w-xl mx-auto mt-4 font-semibold text-text dark:text-text-dark"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {miniFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: i * 0.2,
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              className="relative flex flex-col items-center gap-6 p-4 rounded-2xl shadow-md shadow-bg-dark dark:shadow-bg border border-primary-dark dark:border-primary bg-primary dark:bg-primary-dark dark:text-text-dark overflow-hidden"
            >
              {/* Icon */}
              <div className="bg-accent dark:bg-accent-dark p-4 rounded-full shadow-md">
                <item.icon className="text-bg dark:text-bg-dark text-xl" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {/* Description */}
              <p className="text-muted dark:text-muted-dark font-semibold text-sm max-w-xs">
                {item.description}
              </p>
              {/* Gradient */}
              <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-accent to-primary-dark dark:from-accent-dark dark:to-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
