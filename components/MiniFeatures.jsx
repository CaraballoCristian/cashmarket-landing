"use client";

import {
  FaRegCreditCard,
  FaRegClipboard,
  FaRegKeyboard,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const miniFeatures = [
  {
    icon: <FaRegCreditCard className="text-white text-xl" />,
    title: "Credit Card",
    description:
      "Rewards and benefits without the downsides of a credit card. Simplicity and transparency built right in.",
  },
  {
    icon: <FaRegKeyboard className="text-white text-xl" />,
    title: "Management",
    description:
      "Institutional-grade fund offerings across active and passive strategies to get in paid flash payments.",
  },
  {
    icon: <FaRegClipboard className="text-white text-xl" />,
    title: "Application",
    description:
      "Mobile banking throws out the rule book and gives you a precision tool for managing your finances.",
  },
];

export default function MiniFeatures() {
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título y subtítulo */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity:1
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-3xl md:text-4xl font-bold text-text tracking-tight"
          >
            WHAT MAKES US <span className="text-bg">DIFFERENT</span>
          </motion.h2>
          <motion.p
          initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity:1
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          className="text-white/80 font-semibold mt-4 max-w-xl mx-auto">
            Fast, flexible, and built for modern crypto investors. From seamless
            management to intelligent tools, we redefine portfolio tracking.
          </motion.p>
        </div>

        {/* Grid animado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {miniFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity:0 }}
              whileInView={{
                y: 0,
                opacity:1,
              }}
              transition={{
                delay: i * 0.2,
                duration: 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              className="flex flex-col items-center gap-6 p-4 duration-300 rounded-2xl bg-bg"
            >
              <div className="bg-accent p-4 rounded-full shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 font-semibold text-sm max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
