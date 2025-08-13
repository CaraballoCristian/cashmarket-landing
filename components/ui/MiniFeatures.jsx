/* Este componente esta listo */

"use client";

//Utils
import { motion } from "framer-motion";

// UI
import {
  FaRegCreditCard,
  FaRegClipboard,
  FaRegKeyboard,
} from "react-icons/fa6";

const iconStyles = "text-bg dark:text-bg-dark text-xl";

const miniFeatures = [
  {
    icon: <FaRegCreditCard className={iconStyles} />,
    title: "Credit Card",
    description:
      "Rewards and benefits without the downsides of a credit card. Simplicity and transparency built right in.",
  },
  {
    icon: <FaRegKeyboard className={iconStyles} />,
    title: "Management",
    description:
      "Institutional-grade fund offerings across active and passive strategies to get in paid flash payments.",
  },
  {
    icon: <FaRegClipboard className={iconStyles} />,
    title: "Application",
    description:
      "Mobile banking throws out the rule book and gives you a precision tool for managing your finances.",
  },
];

export default function MiniFeatures() {
  return (
    <section id="features" className="relative z-20 py-20">
      <div className="max-w-6xl mx-auto p-6 overflow-hidden">
        {/* Top Texts */}
        <div className="text-center mb-16">
          {/* Title */}
          {
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
              WHAT MAKES US{" "}
              <span className="text-bg dark:text-accent-dark">DIFFERENT</span>
            </motion.h2>
          }

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
            Fast, flexible, and built for modern crypto investors. From seamless
            management to intelligent tools, we redefine portfolio tracking.
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
              <div className="bg-accent dark:bg-accent-dark p-4 rounded-full shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
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
