/* Podria abstraerse el Use Effect ya que se usa aca y en el nav */
/* Mas alla de eso el componente esta listo */

"use client";
// Utils
import { CiMenuFries } from "react-icons/ci";
// Hooks
import { useState, useEffect } from "react";
// Context
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";
// Ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
// Components
import LoginModalContent from "./LoginModalContent";
import SignUpModalContent from "./SignUpModalContent";

const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false);
  const { openModal } = useModal();
  const [activeSection, setActiveSection] = useState("");
  const { toggleDark, dark } = useDark();

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
            // Sets the active section based on scroll
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

    // Observe each section defined in links
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
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Accesibility */}
      <SheetHeader className="hidden">
        <SheetTitle></SheetTitle>
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
        <div className="relative h-full w-full flex flex-col gap-12 justify-evenly items-center p-4 bg-bg dark:bg-bg-dark">
          {/* Dark Mode Switch */}
          <div className="absolute top-1 left-3 text-center mb-4">
            <button
              className="p-2 text-[20px] cursor-pointer"
              onClick={toggleDark}
            >
              {dark ? "🌙" : "🌞"}
            </button>
          </div>
          {/* Logo */}
          <div className="text-center">
            <Link onClick={() => setOpen(false)} href="/">
              <h1 className="text-3xl font-semibold text-text dark:text-text-dark">
                <span className="text-accent dark:text-accent-dark">$</span>
                Cashmarket.
              </h1>
            </Link>
          </div>

          {/* Nav */}
          <nav className="flex flex-col items-center gap-8 w-full py-8">
            {links.map((link, i) => {
              const isActive = link.path === activeSection;
              return (
                <Link
                  onClick={() => setOpen(false)}
                  href={link.path}
                  key={i}
                  className={`
                  ${
                    isActive &&
                    "text-accent border-b-2 border-accent dark:text-accent-dark dark:border-accent-dark"
                  }
                  text-xl capitalize text-text dark:text-text-dark`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <Button onClick={() => openModal(<LoginModalContent />)}>
              Login
            </Button>
            <Button
              variant="ghost"
              onClick={() => openModal(<SignUpModalContent />)}
            >
              Sign Up!
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
