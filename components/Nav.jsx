"use client";

import Link from "next/link";
import { motion } from "framer-motion";
//Hooks
import { usePathname } from "next/navigation";

const Nav = ({ links }) => {
  const pathname = usePathname();

  console.log(typeof links);
  return (
    <nav className="flex gap-8">
      {links.map((link, i) => {
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
              link.path === pathname && "text-accent border-b-2 border-accent"
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
