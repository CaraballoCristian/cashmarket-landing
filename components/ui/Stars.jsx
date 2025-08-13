"use client";
// Hooks
import { useRef, useEffect } from "react";
// Utils
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stars = ({ sectionRef, content }) => {
  const starsRef = useRef([]);
  const stars = 200; /* stars quantity */

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const staticSectionRef = sectionRef.current;

    starsRef.current.forEach((star, i) => {
      /* Stars Size Limit */
      const baseSize = 5 + Math.random() * 20; // 5px & 25px
      const size = Math.random() < 0.1 ? 45 : baseSize; // 10% of the stars are bigger

      gsap.set(star, {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "white",
        opacity: 0.2 + Math.random() * 0.4,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      });
    });

    // Floating stars animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * (-50 - index * 10)}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === staticSectionRef) {
          trigger.kill(); // Clean up the ScrollTrigger instances
        }
      });
    };
  }, []);

  /* Check for every star (div) to exist and not to be in starRef already, then it pushes the star to starRef */
  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden Z-[999]">
      {/* Stars */}
      {[...Array(stars)].map((_, i) => (
        <div
          ref={addToStars}
          key={`star-${i}`}
          className="absolute flex items-center justify-center rounded-full"
        >
          <img src={content} className="size-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Stars;
