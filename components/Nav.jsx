/* Requiero entender el useEffect de este componente */
/* Podria abstraerse el Use Effect ya que se usa aca y en el nav */
/* Por lo demas, ya esta terminada */

"use client";
// Hooks
import { useEffect, useState } from "react";
// Utils
import { motion } from "framer-motion";

const Nav = ({ links }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHash = () => setActiveSection(window.location.hash || "#home");

    // When an anchor is clicked
    window.addEventListener("hashchange", handleHash);

    // Initial
    handleHash();

    // Scroll Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveSection(id);
          }
        });
      },
      {
        // 60% of the element visible
        threshold: 0.6,
      }
    );

    // Observ each section that contains an ID
    links.forEach((link) => {
      const el = document.querySelector(link.path);
      if (el) observer.observe(el);
    });

    // Remove event listener and close Intersection Observer
    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, [links]);

  return (
    <nav className="flex gap-8 ml-10">
      {links.map((link, i) => {
        const isActive = link.path === activeSection;

        return (
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + i * 0.2,
            }}
            href={link.path}
            key={i}
            className={`
              ${isActive && "text-accent border-b-2 border-accent dark:text-accent-dark dark:border-accent-dark"}
               capitalize font-medium hover:text-accent dark:hover:text-accent-dark transition-colors duration-300`}
          >
            {link.name}
          </motion.a>
        );
      })}
    </nav>
  );
};
export default Nav;
