/* Este componente esta listo */

// UI
import { FaBell, FaRegClock, FaRobot, FaWallet } from "react-icons/fa6";
// Components
import FeatureCard from "@/components/ui/FeatureCard";
import MiniFeatures from "../ui/MiniFeatures";
import Stars from "../ui/Stars";
// Hooks
import { useRef } from "react";
// Context
import { useDark } from "@/context/DarkContext";

const iconStyles = "text-bg text-3xl md:text-4xl mt-2";

const features = [
  {
    icon: <FaRegClock className={iconStyles} />,
    title: "Real-Time Portfolio Monitoring",
    description:
      "Stay on top of your investments with precision. Our platform delivers live updates, advanced interactive charts, and seamless data sync across all your wallets and exchanges—so you’re always in control, no matter where you are.",
    image: "/assets/Features-1.jpg",
  },
  {
    icon: <FaRobot className={iconStyles} />,
    title: "AI Insights & Predictions",
    description:
      "Go beyond the numbers with AI-driven intelligence. Our system analyzes market patterns in real time to provide accurate forecasts, risk profiling, and personalized strategic suggestions—helping you make smarter decisions with confidence.",
    image: "/assets/Features-2.jpg",
  },
  {
    icon: <FaWallet className={iconStyles} />,
    title: "Multi-Exchange & Wallet Sync",
    description:
      "Bring all your crypto assets together in one powerful dashboard. Connect multiple wallets and exchanges effortlessly, track your performance in real time, and enjoy enterprise-grade encryption that keeps your data safe and private.",
    image: "/assets/Features-3.jpg",
  },
  {
    icon: <FaBell className={iconStyles} />,
    title: "Smart Alerts & Notifications",
    description:
      "React at the right moment with intelligent alerts tailored to your strategy. Set custom rules and receive real-time notifications on key price movements, volume spikes, or portfolio milestones—so you never miss a beat in the market.",
    image: "/assets/Features-4.jpg",
  },
];

const Features = () => {
  const staticSectionRef = useRef();
  const { dark } = useDark();

  return (
    <section className="relative">
      {/* Gradient */}
      <div className="absolute top-0 z-10 w-full h-[400px] bg-gradient-to-b from-primary to-transparent dark:from-primary-dark" />

      {/* Mini Features */}
      <MiniFeatures />

      {/* Stars Container */}
      <div ref={staticSectionRef} className="relative h-full w-screen">
        {/* Stars */}
        <Stars
          sectionRef={staticSectionRef}
          content={dark ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
        />

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
      </div>
    </section>
  );
};

export default Features;
