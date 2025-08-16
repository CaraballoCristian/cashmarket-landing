import { useEffect } from "react";

export function useHashObserver(links, setActiveSection) {
  
  useEffect(() => {
    const handleHash = () =>
      setActiveSection(window.location.hash || "#home");

    window.addEventListener("hashchange", handleHash);
    handleHash();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    links.forEach((link) => {
      const el = document.querySelector(link.path);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, [links, setActiveSection]);
}