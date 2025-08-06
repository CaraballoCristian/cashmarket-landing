import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

//Links
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "#",
  },
  {
    name: "services",
    path: "#",
  },
  {
    name: "pricing",
    path: "#",
  },
  {
    name: "contact",
    path: "#",
  },
];

const Header = () => {
  return (
    <header className="h-[48px] px-4 ">
      <div className="container flex justify-between items-center h-full mx-auto ">
        {/* Logo */}
        <Link href="/">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="text-2xl"
          >
            <span className="text-accent">$</span>Cashmarket.
          </motion.h1>
        </Link>
        {/* Nav */}
        <div className="hidden lg:flex">
          <Nav links={links} />
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav links={links} />
        </div>
        {/* CTA */}
        <div className="hidden lg:flex gap-3">
          <Button className=" cursor-pointer">Login</Button>
          <Button className="bg-accent cursor-pointer">Sign Up!</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
