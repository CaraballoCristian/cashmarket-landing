"use client";
// Hooks
import { useRef, useEffect } from "react";
// Utils
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stars = ({
  sectionRef,
  content,
  type = "scroll",
  quantity,
  bgColor = "white",
}) => {
  const starsRef = useRef([]);
  const stars = quantity; /* stars quantity */

  useEffect(() => {
    if (type === "scroll") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const staticSectionRef = sectionRef.current;
    let handleMouseMove = null;

    starsRef.current.forEach((star, i) => {
      /* Stars Size Limit */
      const baseSize = 5 + Math.random() * 20; // 5px & 25px
      const size = Math.random() < 0.1 ? 45 : baseSize; // 10% of the stars are bigger

      gsap.set(star, {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: bgColor,
        opacity: 0.2 + Math.random() * 0.4,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      });
    });

    // Scroll-based animation
    if (type === "scroll") {
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

      // Mouse movement animation
    } else if (type === "mouse") {
      handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Normalize mouse position (-1 to 1)
        const normalizedX = (clientX / innerWidth) * 2 - 1;
        const normalizedY = (clientY / innerHeight) * 2 - 1;

        starsRef.current.forEach((star, index) => {
          // Different movement intensity for each star
          const intensity = ((index % 5) + 1) * 0.5; // 0.5 to 2.5
          const moveX = normalizedX * intensity * 50; // Max 125px movement
          const moveY = normalizedY * intensity * 50;

          gsap.to(star, {
            x: -moveX,
            y: -moveY,
            rotation: normalizedX * intensity * 10, // Slight rotation based on mouse X
            duration: 0.2,
            ease: "power2.out",
          });
        });
      };

      // Mouse move listener
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (type === "scroll") {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === staticSectionRef) {
            // Clean up the ScrollTrigger instances
            trigger.kill();
          }
        });
      } else if (type === "mouse" && handleMouseMove) {
        // Clean up mouse listener
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [type]);

  /* Check for every star to exist and not to be in starRef already, then it pushes the star to starRef */
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
          {content && <img src={content} className="size-full object-cover" />}
        </div>
      ))}
    </div>
  );
};

export default Stars;
