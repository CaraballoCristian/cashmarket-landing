"use client";
// Hooks
import { useState } from "react";
// Utils
import { motion } from "framer-motion";
import { useHashObserver } from "@/hooks/useHashObserver";
import useIsDesktop from "@/hooks/useIsDesktop";

const Nav = ({ links, navStyles, linkStyles, open = false, setOpen }) => {
  const [activeSection, setActiveSection] = useState("");
  const isDesktop = useIsDesktop();

  /* Handles the hash navigation & the highlighted link on scroll */
  useHashObserver(links, setActiveSection);

  const handleClick = () => {
    if (open) setOpen(false);
  };

  return (
    <nav className={`${navStyles ? navStyles : "flex gap-4 xl:gap-8"}`}>
      {links.map((link, i) => {
        const isActive = link.path === activeSection;

        return (
          <motion.a
            onClick={handleClick}
            initial={isDesktop ? { opacity: 0, y: -20 } : { opacity: 0, x: 20 }}
            animate={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: isDesktop ? 0.7 + i * 0.2 : 0.4 + i * 0.2,
            }}
            href={link.path}
            // force remount when isDesktop changes to ensure Framer Motion applies the initial animation correctly
            key={`${link.name}-${isDesktop}`}
            className={`
              ${
                isActive &&
                "text-accent border-b-2 border-accent dark:text-accent-dark dark:border-accent-dark "
              }
              ${
                linkStyles
                  ? linkStyles
                  : "capitalize font-medium hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
              }
           `}
          >
            {link.name}
          </motion.a>
        );
      })}
    </nav>
  );
};
export default Nav;
