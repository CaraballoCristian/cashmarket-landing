"use client";
// Styles
import "./globals.css";
// Fonts
import { Inter, Archivo } from "next/font/google";
// Hooks
import { useState, useEffect } from "react";
// Context
import { ModalProvider } from "@/context/ModalContext";
import { DarkProvider } from "@/context/DarkContext";
// i18n
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { IntlProvider } from "next-intl";
import en from "../public/locales/en.json";
import es from "../public/locales/es.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

function IntlWrapper({ children }) {
  const [timeZone, setTimeZone] = useState("UTC");
  const { locale } = useLanguage();
  const messages = locale === "en" ? en : es;

  useEffect(() => {
    // Detect user timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimeZone) {
      setTimeZone(userTimeZone);
    }
  }, []);

  return (
    <IntlProvider messages={messages} locale={locale} timeZone={timeZone}>
      {children}
    </IntlProvider>
  );
}

export default function ClientProvider({ children }) {
  return (
    <LanguageProvider>
      <IntlWrapper>
        <div className={`${archivo.variable} ${inter.variable} antialiased`}>
          <DarkProvider>
            <ModalProvider>{children}</ModalProvider>
          </DarkProvider>
        </div>
      </IntlWrapper>
    </LanguageProvider>
  );
}
