"use client";
// Styles
import "./globals.css";
// Fonts
import { Inter, Archivo } from "next/font/google";
// Context
import { ModalProvider } from "@/context/ModalContext";
import { DarkProvider } from "@/context/DarkContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
// i18n
import { IntlProvider } from "next-intl";
import en from "../public/locales/en.json";
import es from "../public/locales/es.json";
import de from "../public/locales/de.json";
import pt from "../public/locales/pt.json";

/* Primary font setting */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/* Secondary font setting */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

/* Wrapper, to a */
function IntlWrapper({ children }) {
  const { locale } = useLanguage();

  const languages = { es, de, pt, en };
  const messages = languages[locale] || languages.en;

  return (
    <IntlProvider messages={messages} locale={locale}>
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
