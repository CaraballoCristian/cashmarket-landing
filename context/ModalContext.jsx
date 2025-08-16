"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Important: Do not touch overflow-x!
  // it breakes overflow-hidden and horizontal-scroll breaks UI
  useEffect(() => {
    // Prevent scroll when modal is open
    if (isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "unset";

    // Cleanup
    return () => (document.body.style.overflowY = "unset");
  }, [isOpen]);

  const openModal = (content = null) => {
    setIsOpen(true);
    if (content) setModalContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
