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
  reference
}) => {
  const container = useRef(null);
  const Icon = icon;

  /* Works for every card */
  const { scrollYProgress: scrollImg } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  /* Works on the father container */
  const { scrollYProgress: scrollCard } = useScroll({
    target: reference,
    offset: ["start start", "end end"],
  });

  const range = [i * 0.2, 1];

  const imgScale = useTransform(scrollImg, [0, 1], [2, 1]);
  const cardScale = useTransform(scrollCard, range, [1, targetScale]);

  return (
    /* Container */
    <div
      ref={container}
      className="sticky top-0 h-screen flex items-center justify-center px-4"
    >
      {/* Card */}
      <motion.article
        /* Stacking */
        style={{ scale: cardScale, top: `calc(-10% + ${i * 25}px)` }}
        className={`relative flex flex-col justify-center items-center gap-12 md:flex-row  h-fit max-h-[80%] md:h-[450px] w-full lg:w-[1150px] p-4 md:p-6 rounded-2xl shadow-lg border border-primary-dark dark:border-primary shadow-primary-dark dark:shadow-primary bg-gradient-to-r from-accent to-primary
          ${!isEven && "md:flex-row-reverse"}`}
      >
        {/* Picture */}
        <div className="relative w-full md:w-1/2 bg-amber-600 h-[280px] md:h-full overflow-hidden aspect-square rounded-xl ">
          <motion.img
            style={{ scale: imgScale }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 h-full text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-2">
            {/* Icon */}
            <Icon className="text-2xl md:text-3xl font-bold text-bg mt-0 md:mt-2"/>
            {/* Title */}
            <h3 className="text-[18px] md:text-xl lg:text-2xl xl:text-3xl font-bold text-bg mt-0 md:mt-2">
              {title}
            </h3>
          </div>
          {/* Description */}
          <p className="text-muted dark:text-bg text-[14px] md:text-xl lg:text-2xl mt-8">
            {description}
          </p>
        </div>
      </motion.article>
    </div>
  );
};

export default FeatureCard;