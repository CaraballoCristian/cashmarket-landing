import FeatureCard from "@/components/FeatureCard";
import React from "react";
import { FaBell, FaRegClock, FaRobot, FaWallet } from "react-icons/fa6";
import MiniFeatures from "./MiniFeatures";

const features = [
  {
    icon: <FaRegClock className="text-bg text-3xl md:text-4xl mt-2" />,
    title: "Real-Time Portfolio Monitoring",
    description:
      "Stay on top of your investments with precision. Our platform delivers live updates, advanced interactive charts, and seamless data sync across all your wallets and exchanges—so you’re always in control, no matter where you are.",
    image: "/assets/Features-1.jpg",
  },
  {
    icon: <FaRobot className="text-bg text-3xl md:text-4xl  mt-2" />,
    title: "AI Insights & Predictions",
    description:
      "Go beyond the numbers with AI-driven intelligence. Our system analyzes market patterns in real time to provide accurate forecasts, risk profiling, and personalized strategic suggestions—helping you make smarter decisions with confidence.",
    image: "/assets/Features-2.jpg",
  },
  {
    icon: <FaWallet className="text-bg  text-3xl md:text-4xl  mt-2" />,
    title: "Multi-Exchange & Wallet Sync",
    description:
      "Bring all your crypto assets together in one powerful dashboard. Connect multiple wallets and exchanges effortlessly, track your performance in real time, and enjoy enterprise-grade encryption that keeps your data safe and private.",
    image: "/assets/Features-3.jpg",
  },
  {
    icon: <FaBell className="text-bg  text-3xl md:text-4xl  mt-2" />,
    title: "Smart Alerts & Notifications",
    description:
      "React at the right moment with intelligent alerts tailored to your strategy. Set custom rules and receive real-time notifications on key price movements, volume spikes, or portfolio milestones—so you never miss a beat in the market.",
    image: "/assets/Features-4.jpg",
  },
];

const Features = () => {
  return (
    <section className="relative">
      {/* Gradient */}
      <div className="absolute top-0 z-[-1] w-full h-[400px] bg-gradient-to-b from-accent to-bg" />
      {/* Mini Features */}
      <MiniFeatures />
      {/* Feature Cards */}
      {features.map((feature, i) => {
        const targetScale = 1 - (features.length - i) * 0.05;
        return (
          <FeatureCard
            key={i}
            i={i}
            {...feature}
            isEven={i % 2 === 0}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Features;
