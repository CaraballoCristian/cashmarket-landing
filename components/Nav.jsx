"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav = ({ links }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHash = () => {
      setActiveSection(window.location.hash || "#home");
    };

    // Si se clickea un anchor
    window.addEventListener("hashchange", handleHash);
    handleHash(); // Inicial

    // Observador para scroll
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
        threshold: 0.6, // 60% del elemento visible
      }
    );

    // Observar todas las secciones con ID
    links.forEach((link) => {
      const el = document.querySelector(link.path);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, [links]);

  return (
    <nav className="flex gap-8">
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
            className={`${
              isActive ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-colors duration-300`}
          >
            {link.name}
          </motion.a>
        );
      })}
    </nav>
  );
};
export default Nav;
