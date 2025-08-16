"use client";
// Hooks
import { useState } from "react";
// Contexts
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";
import { useLanguage } from "@/context/LanguageContext";
// Utils
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// UI
import Button from "../ui/button";
import LanguageSwitcher from "../ui/languageSwitcher";
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// Modals
import LoginModalContent from "../modals/LoginModalContent";
import SignUpModalContent from "../modals/SignUpModalContent";
// i18n
import { useTranslations } from "next-intl";
import DarkModeSwitcher from "../ui/DarkModeSwitcher";
import Logo from "../ui/Logo";

const Header = () => {
  const { openModal } = useModal();
  const { toggleDark, dark } = useDark();
  const { setLocale } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const t = useTranslations("header");

  //Links
  const links = [
    {
      name: t("links.home"),
      path: "#home",
    },
    {
      name: t("links.features"),
      path: "#features",
    },
    {
      name: t("links.testimonials"),
      path: "#testimonials",
    },
    {
      name: t("links.faqs"),
      path: "#faq",
    },
    {
      name: t("links.prototype"),
      path: "#prototype",
    },
  ];

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
      <div className="w-full max-w-[1536px] flex justify-between items-center h-full mx-auto">

        {/* Logo Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          >
          {/* Logo */}
            <Logo dark={dark} size="size-[24px]" styles="text-xl flex gap-1" />
        </motion.div>

        {/* Nav */}
        <div className="hidden lg:flex">
          <Nav links={links} />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav links={links} />
        </div>

        {/* Right Side */}
        <div className="relative hidden lg:flex items-center gap-2">
          
          {/* Wrapper Dark & Lang */}
          <div className="flex">
            {/* Dark Mode Switch */}
            <div className="mr-auto">
              <DarkModeSwitcher toggleDark={toggleDark} dark={dark} />
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher setLocale={setLocale} />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              textValue={t("login")}
              handler={() => openModal(<LoginModalContent />)}
            />
            <Button
              variant="accent"
              textValue={t("signup")}
              handler={() => openModal(<SignUpModalContent />)}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
