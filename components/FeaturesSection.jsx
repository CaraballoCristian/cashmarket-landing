"use client";

import { motion } from "framer-motion";
import { FaRegClock, FaRobot, FaBell, FaWallet } from "react-icons/fa6";

const features = [
  {
    icon: FaRegClock,
    title: "Real-Time Portfolio Monitoring",
    description:
      "Stay on top of your investments with live updates, smart charts, and real-time data synced across all your wallets and exchanges.",
    image: "/assets/Features-1.jpg",
  },
  {
    icon: FaRobot,
    title: "AI Insights & Predictions",
    description:
      "Unlock powerful insights powered by AI. Get forecasts, risk assessments, and personalized suggestions to improve your strategy.",
    image: "/assets/Features-2.jpg",
  },
  {
    icon: FaWallet,
    title: "Multi-Exchange & Wallet Sync",
    description:
      "Connect all your crypto assets in one place. Unified tracking across major platforms, with bank-level security.",
    image: "/assets/Features-3.jpg",
  },
  {
    icon: FaBell,
    title: "Smart Alerts & Notifications",
    description:
      "Set your own rules and get notified instantly when the market moves. Never miss a critical moment.",
    image: "/assets/Features-4.jpg",
  },
];

export default function Features() {
  return (
    <section className=" bg-bg  ">
      <div className=" h-[400px] bg-gradient-to-b from-accent to-bg"></div>
      <div className="  max-w-6xl mx-auto px-6 pb-20">
        {/* Feature cards rendering */}
        {features.map((feature, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`flex sticky top-28 flex-col md:flex-row mb-28 items-start rounded-2xl p-8 min-h-[400px] bg-accent shadow-2xl ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Imagen */}
              <div className="w-full md:w-1/2 h-[350px] aspect-square overflow-hidden rounded-xl shadow-lg  ">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 h-[350px] px-2 text-center md:text-left">
                <div className="flex gap-2 ">
                  <feature.icon className="text-bg text-3xl mt-2" />
                  <h3 className="text-2xl md:text-3xl text-bg font-bold mt-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-text font-semibold mt-8">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
