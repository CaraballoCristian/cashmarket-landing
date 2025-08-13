/* This Component is Ready */

"use client"

// Hooks
import { useState } from "react";
// Contexts
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";
import { useLanguage } from "@/context/LanguageContext";
// Utils
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// UI
import Link from "next/link";
import Button from "../ui/button";
import LanguageSwitcher from "../ui/languageSwitcher";
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// Modals
import LoginModalContent from "../modals/LoginModalContent";
import SignUpModalContent from "../modals/SignUpModalContent";

//Links
const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "features",
    path: "#features",
  },
  {
    name: "testimonials",
    path: "#testimonials",
  },
  {
    name: "FAQ",
    path: "#faq",
  },
  {
    name: "prototype",
    path: "#prototype",
  },
];

const Header = () => {
  const { openModal } = useModal();
  const { toggleDark, dark } = useDark();
  const { setLocale } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  /* Hide Header on Scroll */
  useMotionValueEvent(scrollY, "change", (last) => {
    const prev = scrollY.getPrevious();
    if (last > prev && last > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 z-[888] w-screen h-[48px] px-4 backdrop-blur-[4px] bg-white dark:bg-bg-dark dark:text-text-dark"
    >
      {/* Container */}
      <div className="container flex justify-between items-center h-full mx-auto">
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
            className="text-2xl flex gap-1"
          >
            <img
              src={dark ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
              alt="logo"
              className="size-[24px]"
            />
            Cashmarket.
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

        {/* Right Side */}
        <div className="relative hidden lg:flex items-center gap-6">
          {/* Wrapper Dark & Lang */}
          <div className="flex">
            {/* Dark Mode Switch */}
            <div className="mr-auto">
              <button
                className="p-2 text-[20px] cursor-pointer"
                onClick={toggleDark}
              >
                {dark ? "🌙" : "🌞"}
              </button>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher setLocale={setLocale} />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              textValue={"Login"}
              handler={() => openModal(<LoginModalContent />)}
            />
            <Button
              variant="accent"
              textValue={"Sign Up!"}
              handler={() => openModal(<SignUpModalContent />)}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
