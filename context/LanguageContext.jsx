"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale) {
      setLocale(storedLocale);
      return;
    }

    const browserLang = navigator.language.split("-")[0]; 
    const supportedLangs = ["en", "es", "de", "pt"];
      
    setLocale(supportedLangs.includes(browserLang) ? browserLang : "en");

    localStorage.setItem(
      "locale",
      supportedLangs.includes(browserLang) ? browserLang : "en"
    );
  }, []);

  const changeLocale = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
