"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaCcStripe,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcPaypal,
} from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import MiniFeatures from "./MiniFeatures";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Stripe",
    logo: FaCcStripe,
  },
  {
    name: "Visa",
    logo: FaCcVisa,
  },
  {
    name: "Binance",
    logo: SiBinance,
  },
  {
    name: "PayPal",
    logo: FaCcPaypal,
  },
  {
    name: "Amazon",
    logo: FaCcAmazonPay,
  },
];

const CompaniesSection = () => {
  return (
    <section className="h-full  bg-accent">
      <div className="containe p-2 mx-auto flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="text-text text-center py-10"
        >
          Trusted by <span className="text-bg">2600+</span> Growing Companies
        </motion.h2>
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#10b981"
          autoFill
          className="w-full mx-auto text-2xl font-semibold text-bg/80"
        >
          {brands.map((brand, i) => {
            const Logo = brand.logo;
            return (
              <span key={i} className="mx-6 flex ">
                <Logo className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
              </span>
            );
          })}
        </Marquee>
      </div>
      {/* Mini Features */}
      <MiniFeatures />
    </section>
  );
};

export default CompaniesSection;
