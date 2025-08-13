"use client";
import { createContext, useContext, useState, useEffect } from "react";

const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark((prev) => !prev);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Read previously saved user preference
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        // If StoredTheme === "dark" returns true
        setDark(storedTheme === "dark");
      } else {
        // If no saved preference, use system setting
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        // mediaQuery.matches returns true when preferred colos schema = "dark"
        setDark(mediaQuery.matches);

        // e.matches = true when theme = "dark"
        const handleChange = (e) => setDark(e.matches);

        // adds a "change" event listener to window.matchMedia
        mediaQuery.addEventListener("change", handleChange);

        // Remove the event listener 
        return () => mediaQuery.removeEventListener("change", handleChange);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save user preference
      localStorage.setItem("theme", dark ? "dark" : "light");

      // Apply or remove "dark" class to <html>
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [dark]);

  return (
    <DarkContext.Provider value={{ dark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDark = () => useContext(DarkContext);
