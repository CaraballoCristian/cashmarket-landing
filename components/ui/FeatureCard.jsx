/* Este componente esta listo */

"use client";
// Utils
import { motion, useScroll, useTransform } from "framer-motion";
// Hooks
import { useRef } from "react";

const FeatureCard = ({
  icon,
  title,
  description,
  image,
  isEven,
  i,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress: scrollImg } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollCard } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const range = [(i * 1) / 3, 1];

  const imgScale = useTransform(scrollImg, [0, 1], [2, 1]);
  const cardScale = useTransform(scrollCard, range, [1, targetScale]);

  return (
    /* Container */
    <div
      ref={container}
      className="sticky top-0 h-screen flex items-center justify-center"
    >
      {/* Card */}
      <motion.article
        style={{ scale: cardScale, top: `calc(${i * 25}px)` }}
        className={`relative flex flex-col justify-center items-center gap-12 md:flex-row h-2/3 md:h-[500px] w-full md:w-[1280px] p-6 rounded-2xl shadow-lg border border-primary-dark dark:border-primary shadow-primary-dark dark:shadow-primary bg-gradient-to-r from-accent to-primary
          ${!isEven && "md:flex-row-reverse"}`}
      >
        {/* Picture */}
        <div className="relative w-full md:w-1/2 h-full overflow-hidden aspect-square rounded-xl ">
          <motion.img
            style={{ scale: imgScale }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 h-full text-center md:text-left">
          <div className="flex gap-2">
            {icon}
            <h3 className="text-2xl text-nowrap md:text-4xl font-bold text-bg mt-2">
              {title}
            </h3>
          </div>
          <p className="text-muted dark:text-bg md:text-2xl font-semibold mt-8">
            {description}
          </p>
        </div>
      </motion.article>
    </div>
  );
};

export default FeatureCard;
