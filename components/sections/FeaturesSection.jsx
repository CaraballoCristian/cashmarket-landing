// UI
import { FaBell, FaRegClock, FaRobot, FaWallet } from "react-icons/fa6";
// Components
import Stars from "@/components/ui/Stars";
import MiniFeatures from "@/components/ui/MiniFeatures";
import FeatureCard from "@/components/ui/FeatureCard";
// Hooks
import { useRef } from "react";
import useIsDesktop from "@/hooks/useIsDesktop";
// Context
import { useDark } from "@/context/DarkContext";
// i18n
import { useTranslations } from "next-intl";
import FeatureCardMobile from "../ui/FeatureCardMobile";

const Features = () => {
  const staticSectionRef = useRef();
  const { dark } = useDark();
  const t = useTranslations("features-section.cards");
  const isDesktop = useIsDesktop();

  const features = [
    {
      icon: FaRegClock,
      title: t("card-1.title"),
      description: t("card-1.subtitle"),
      image: "/assets/Features-1.jpg",
    },
    {
      icon: FaRobot,
      title: t("card-2.title"),
      description: t("card-2.subtitle"),
      image: "/assets/Features-2.jpg",
    },
    {
      icon: FaWallet,
      title: t("card-3.title"),
      description: t("card-3.subtitle"),
      image: "/assets/Features-3.jpg",
    },
    {
      icon: FaBell,
      title: t("card-4.title"),
      description: t("card-4.subtitle"),
      image: "/assets/Features-4.jpg",
    },
  ];

  return (
    <section className="relative">
      {/* Gradient */}
      <div className="absolute top-0 z-10 w-full h-[400px] bg-gradient-to-b from-primary to-transparent dark:from-primary-dark" />

      {/* Mini Features */}
      <MiniFeatures />

      {/* All Cards Container */}
      <div ref={staticSectionRef} className="relative h-full w-screen">
        {/* Stars */}
        {isDesktop && (
          <Stars
            sectionRef={staticSectionRef}
            content={dark ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
            quantity={200}
          />
        )}

        {/* Feature Cards */}
        {features.map((feature, i) => {
          const targetScale = 1 - (features.length - i) * 0.05;

          return isDesktop ? (
            <FeatureCard
              key={i}
              i={i}
              {...feature}
              isEven={i % 2 === 0}
              targetScale={targetScale}
              referece={staticSectionRef}
              />
            ) : (
              <FeatureCardMobile
              key={i}
              i={i}
              {...feature}
              isEven={i % 2 === 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
