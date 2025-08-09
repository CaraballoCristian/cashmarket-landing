"use client";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { SiTrustpilot } from "react-icons/si";
import { GiPadlock } from "react-icons/gi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useModal } from "@/context/ModalContext";

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section id="home">
      {/* Container */}
      <div className="container mx-auto h-full flex flex-col gap-5 pt-30 items-center">
        {/* Badge */}
        <Badge
          variant="outline"
          className="font-semibold rounded-full border-black/20"
        >
          <GiPadlock className="text-accent h-[9px] w-[9px] mr-1" />
          Bank-level security
        </Badge>

        {/* text */}
        <div className="max-w-[800px] gap-2 flex flex-col mx-auto items-center text-center px-4 xl:px-0 ">
          {/* <h1 className="xl:text-6xl">
            Track, Analyze and <span className="text-accent">Grow</span> Your
            Crypto Assets
          </h1> */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-4xl md:text-6xl font-bold"
          >
            Track, Analyze and <span className="text-accent">Grow</span> Your
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
            onClick={() => openModal(<p>¡Get Started desde el Hero!!</p>)}
            className="bg-accent cursor-pointer"
          >
            Get Started
          </Button>

          <Button
            onClick={() => openModal(<p>¡Watch Demo desde el Hero!!</p>)}
            className="cursor-pointer"
          >
            Watch Demo
          </Button>
        </div>


        {/* Images */}
        <div className="relative w-screen overflow-hidden text-center z-50">
        {/* Stars */}
        <div className="flex items-center justify-center gap-2 pt-2 pb-8">
          <SiTrustpilot className="h-[24px] w-[24px] text-accent" />
          <h3>Trustpilot</h3>
          <Rating defaultValue={5}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-500" key={index} />
            ))}
          </Rating>
          <p className="font-semibold">
            <CountUp end={4200} duration={5} delay={0.5} />+ 5 Stars
          </p>
        </div>
          {/* Gradient screen */}
          <div className="absolute h-1/2 bottom-0 z-50 pointer-events-none w-full bg-gradient-to-t from-accent to-transparent " />
          <div className="container mx-auto rounded-t-2xl  max-h-[500px] overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.2)]">
            <img src="\assets\light.png" alt="" className="w-full px-4 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
