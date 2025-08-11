"use client";
import { createContext, useContext, useState, useEffect } from "react";

const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false); // estado inicial seguro

  const toggleDark = () => setDark((prev) => !prev);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1️⃣ Intentar leer la elección previa del usuario
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        setDark(storedTheme === "dark");
      } else {
        // 2️⃣ Si no hay preferencia guardada, usar la del sistema
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mediaQuery.matches);

        const handleChange = (e) => setDark(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () =>
          mediaQuery.removeEventListener("change", handleChange);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 3️⃣ Guardar la preferencia del usuario
      localStorage.setItem("theme", dark ? "dark" : "light");

      // 4️⃣ Aplicar la clase al <html>
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
