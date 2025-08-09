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
    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div 
       onClick={(e) => e.stopPropagation()}
      className="bg-white p-6 rounded-xl max-w-md w-full relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-xl">
          <FaX/>
        </button>
        {modalContent || <p>Default content</p>}
      </div>
    </div>
  );
};
