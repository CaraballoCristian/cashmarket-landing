"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FeatureCard = ({ icon, title, description, image, isEven, i, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress: scrollImg } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: scrollCard } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const range = [i * 1/3 ,1];

  const imgScale = useTransform(scrollImg, [0, 1], [2, 1]);
  const cardScale = useTransform(scrollCard, range, [1, targetScale]);
  return (
    <article
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 mx-auto "
    >
      <motion.div
        style={{scale: cardScale, top:`calc(${i * 25}px)`}}
        className={`relative flex flex-col items-center justify-center md:flex-row h-2/3 md:h-[500px] w-full md:w-[1280px] rounded-2xl border  shadow-[0_0_50px_rgba(0,0,0,0.2)] p-6 bg-accent ${
          !isEven && "md:flex-row-reverse"
        } items-center gap-12`}
      >
        {/* Imagen */}
        <div className="relative w-full md:w-1/2 h-full overflow-hidden aspect-square rounded-xl shadow-lg">
          <motion.img
            style={{ scale: imgScale }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 h-full text-center md:text-left">
          <div className="flex gap-2">
            {icon}
            <h3 className="text-2xl text-nowrap md:text-4xl text-bg font-bold mt-2">
              {title}
            </h3>
          </div>
          <p className="text-text/80  md:text-2xl font-semibold mt-8">{description}</p>
        </div>
      </motion.div>
    </article>
  );
};

export default FeatureCard;
