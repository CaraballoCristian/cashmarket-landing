/* This Component is Ready */

// Contexts
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";
// Utils
import { motion } from "framer-motion";
// UI
import Link from "next/link";
import { Button } from "./ui/button";
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// Modals
import LoginModalContent from "./LoginModalContent";
import SignUpModalContent from "./SignUpModalContent";

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

  return (
    <header className="fixed top-0 z-[888] w-screen h-[48px] px-4 backdrop-blur-[4px] bg-bg/80 dark:bg-bg-dark dark:text-text-dark">
      {/* Container */}
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
            <span className="text-accent dark:text-accent-dark">$</span>Cashmarket.
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
        <div className="hidden lg:flex items-center gap-8">
          {/* Dark Mode Switch */}
          <div className="mr-auto">
            <button 
            className="p-2 text-[20px] cursor-pointer"
            onClick={toggleDark}>{dark ? "🌙" : "🌞"}</button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() => openModal(<LoginModalContent />)}
            >
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
      </div>
    </header>
  );
};

export default Header;
