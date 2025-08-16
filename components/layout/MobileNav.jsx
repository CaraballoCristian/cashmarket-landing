"use client";
// Hooks
import { useEffect, useState } from "react";
// Context
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";
// Ui
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "../ui/button";
import Logo from "../ui/Logo";
import DarkModeSwitcher from "../ui/DarkModeSwitcher";
import LanguageSwitcher from "../ui/languageSwitcher";
// Modals
import LoginModalContent from "../modals/LoginModalContent";
import SignUpModalContent from "../modals/SignUpModalContent";
// i18n
import { useLanguage } from "@/context/LanguageContext";
// Utils
import Nav from "./Nav";

const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false);
  const { openModal } = useModal();
  const { toggleDark, dark } = useDark();
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    /* Close on resize */
    const handleResize = () => {
      if (open) setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Accesibility */}
      <SheetHeader className="hidden">
        <SheetTitle>Mobile Nav</SheetTitle>
      </SheetHeader>

      {/* Trigger */}
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent dark:text-accent-dark" />
      </SheetTrigger>

      {/* Content */}
      <SheetContent>
        <div className="relative h-full w-full flex flex-col justify-between items-center px-4 pb-12 pt-1 ">
         





          {/* Wrapper Dark & Lang */}
          <div className="flex top-1  w-full gap-2 left-3 text-center ">
            {/* Dark Mode Switch */}
            <DarkModeSwitcher toggleDark={toggleDark} dark={dark} />

            {/* Language Switcher */}
            <LanguageSwitcher setLocale={setLocale} locale={locale} />
          </div>






          {/* Logo */}
          <div className="text-center" onClick={() => setOpen(false)}>
            <Logo
              styles="text-3xl flex gap-1 items-start font-semibold text-text dark:text-text-dark"
              size="size-[28px]"
              dark={dark}
            />
          </div>

          {/* Nav */}
          <Nav
            links={links}
            navStyles={"flex flex-col items-center gap-8 w-full py-8"}
            linkStyles={"text-xl capitalize text-text dark:text-text-dark"}
          />

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full mb-8">
            <Button
              textValue={"Login"}
              handler={() => {
                openModal(<LoginModalContent />);
                setOpen(false);
              }}
            />
            <Button
              variant="accent"
              textValue={"Sign Up!"}
              handler={() => {
                openModal(<SignUpModalContent />);
                setOpen(false);
              }}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
