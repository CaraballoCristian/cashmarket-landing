"use client";
// Hooks
import { useState } from "react";
// Utils
import { motion } from "framer-motion";
import { useHashObserver } from "@/hooks/useHashObserver";

const Nav = ({ links, navStyles, linkStyles }) => {
  const [activeSection, setActiveSection] = useState("");

  /* Handles the hash navigation & the highlighted link on scroll */
  useHashObserver(links, setActiveSection);

  return (
    <nav className={`${navStyles ? navStyles : "flex gap-4 xl:gap-8"}`}>
      {links.map((link, i) => {
        const isActive = link.path === activeSection;

        return (
          <motion.a
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + i * 0.2,
            }}
            href={link.path}
            key={i}
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
