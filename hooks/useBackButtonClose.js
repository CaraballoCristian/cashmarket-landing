import { useEffect } from "react";

export function useBackButtonClose(closeModal) {
  useEffect(() => {
    window.history.pushState({ modal: true }, "");

    const handlePopState = (e) => {
      if (e.state && e.state.modal) closeModal();
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [closeModal]);
}
