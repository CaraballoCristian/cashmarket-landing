"use client";
// UI
import { FaX } from "react-icons/fa6";
import Stars from "./Stars";
// Hooks
import { useEffect, useRef } from "react";
import useIsDesktop from "@/hooks/useIsDesktop";
// Context
import { useModal } from "@/context/ModalContext";
import { useDark } from "@/context/DarkContext";

export const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModal();
  const container = useRef();
  const { dark } = useDark();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    /* Blurred Screen */
    <div
      ref={container}
      onClick={() => closeModal()}
      className="fixed w-screen inset-0 z-[999] flex items-center justify-center px-4 md:px-0 bg-black/80 backdrop-blur-[10px]"
    >
      {/* Stars */}
      {isDesktop && (
        <Stars
          sectionRef={container}
          type="mouse"
          quantity={70}
          content={dark ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
        />
      )}
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-sm md:max-w-none px-6 py-8 rounded-xl bg-bg dark:bg-bg-dark dark:shadow-[0_0_10px_#48efb7] shadow-[0_0_10px_#10b981] overflow-hidden"
      >
        {/* Close Button */}
        <button onClick={closeModal} className="absolute top-4 right-4 text-xl">
          <FaX />
        </button>
        {/* Modal Content */}
        {modalContent || <p>Empty modal</p>}
      </div>
    </div>
  );
};
