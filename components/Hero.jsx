"use client";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { SiTrustpilot } from "react-icons/si";
import { GiPadlock } from "react-icons/gi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section>
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
          <Button className="bg-accent cursor-pointer">Get Started</Button>
          <Button className="cursor-pointer">Watch Demo</Button>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-2 py-2">
          <SiTrustpilot className="h-[24px] w-[24px] text-accent" />
          <h3>Trustpilot</h3>
          <Rating defaultValue={5}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-500" key={index} />
            ))}
          </Rating>
          <p className="font-semibold">
            <CountUp 
              end={4200}
              duration={5}
              delay={0.5}
            />
            + 5 Stars
          </p>
        </div>

        {/* Images */}
        <div className="relative w-screen overflow-hidden text-center  ">
          {/* Gradient screen */}
          <div className="absolute h-full top-0 z-50 pointer-events-none w-full bg-gradient-to-t from-accent to-transparent" />
          <div className="container mx-auto rounded-t-2xl shadow-2xl max-h-[500px] overflow-hidden relative">
            <img src="\assets\light.png" alt="" className="w-full px-4 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
