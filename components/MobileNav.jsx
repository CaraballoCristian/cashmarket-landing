"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const MobileNav = ({links}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className=" flex justify-center items-center "
        onClick={() => setOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col  ">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link onClick={() => setOpen(false)} href="/">
            <h1 className="text-4xl font-semibold">
              <span className="text-accent">$</span>Cashmarket.{" "}
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, i) => {
            return (
              <Link
                onClick={() => setOpen(false)}
                href={link.path}
                key={i}
                className="text-xl capitalize hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* Buttons */}
        <div className="flex flex-col px-6 mb-8 mt-auto gap-3 ">
          <Button className=" cursor-pointer">Login</Button>
          <Button className="bg-accent cursor-pointer">Sign Up!</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
