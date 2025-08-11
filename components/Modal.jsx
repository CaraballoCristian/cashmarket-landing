// components/Modal.jsx
"use client";
import { useModal } from "@/context/ModalContext";
import { useEffect } from "react";
import { FaX } from "react-icons/fa6";

export const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModal();
  
  useEffect(()=> {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    }

    if (isOpen) document.addEventListener("keydown", handleEsc);
    
    return () => document.removeEventListener("keydown", handleEsc);
    
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div 
    onClick={() => closeModal()}
    className="fixed top-0 w-screen inset-0 z-[999] bg-black/60 backdrop-blur-[10px] px-4 md:px-0 flex items-center justify-center">
      <div 
       onClick={(e) => e.stopPropagation()}
      className="bg-white px-6 max-w-sm md:max-w-none py-8 rounded-xl relative">
        <button onClick={closeModal} className="absolute top-4 right-4 text-xl">
          <FaX/>
        </button>
        {modalContent || <p>Default content</p>}
      </div>
    </div>
  );
};
