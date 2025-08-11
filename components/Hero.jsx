/* Este componente esta terminado */
/* Se podria extraer el gradiente como componente o UI */

"use client";
// Utils
import { motion } from "framer-motion";
// Context
import { useDark } from "@/context/DarkContext";
import { useModal } from "@/context/ModalContext";
// Icons
import { SiTrustpilot } from "react-icons/si";
import { GiPadlock } from "react-icons/gi";
// UI
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import CountUp from "react-countup";
// Modals
import WatchDemoModalContent from "./WatchDemoModalContent";
import SignUpModalContent from "./SignUpModalContent";

const Hero = () => {
  const { openModal } = useModal();
  const { dark } = useDark();

  return (
    <section id="home" className="relative dark:text-text-dark">
      {/* Container */}
      <div className="container w-full h-full flex flex-col items-center gap-5 mx-auto pt-30">
        {/* Badge */}
        <Badge
          variant="outline"
          className="font-semibold rounded-full border-text/60 dark:text-text-dark dark:border-text-dark/60"
        >
          <GiPadlock className="h-[9px] w-[9px] mr-1 text-accent dark:text-accent-dark" />
          Bank-level security
        </Badge>

        {/* Text */}
        <div className="max-w-[800px] gap-2 flex flex-col mx-auto items-center text-center px-4 xl:px-0 ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-4xl md:text-6xl font-bold"
          >
            Track, Analyze and{" "}
            <span className="text-accent dark:text-accent-dark">Grow</span> Your
            Crypto Assets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="font-semibold max-w-[60ch]"
          >
            Connect your wallets and exchanges to monitor your portfolio in real
            time. Gain insights, compare assets, and optimize your crypto
            strategy
          </motion.p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="ghost"
            onClick={() => openModal(<SignUpModalContent />)}
          >
            Get Started
          </Button>

          <Button onClick={() => openModal(<WatchDemoModalContent />)}>
            Watch Demo
          </Button>
        </div>

        {/* Bottom section */}
        <div className="relative w-screen overflow-hidden text-center z-50">
          {/* Trustpilot */}
          <div className="flex items-center justify-center gap-2 pt-2 pb-8">
            <SiTrustpilot className="h-[24px] w-[24px] text-accent dark:text-accent-dark" />
            <h3>Trustpilot</h3>

            {/* Stars */}
            <Rating defaultValue={5}>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton className="text-yellow-500" key={index} />
              ))}
            </Rating>

            {/* Counter */}
            <p className="font-semibold">
              <CountUp end={4200} duration={5} delay={0.5} />+ 5 Stars
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
