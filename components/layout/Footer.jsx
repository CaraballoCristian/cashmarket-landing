"use client";
// UI
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../ui/Logo";
// Context
import { useDark } from "@/context/DarkContext";
// i18n
import { useTranslations } from "next-intl";

const socials = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "#",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    url: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "#",
  },
];

export default function Footer() {
  const { dark } = useDark();
  const t = useTranslations("footer");

  const footerLinks = [
    {
      title: t("links-1.title"),
      links: [
        {
          name: t("links-1.links.1"),
          url: "#",
        },
        {
          name: t("links-1.links.2"),
          url: "#",
        },
        {
          name: t("links-1.links.3"),
          url: "#",
        },
        {
          name: t("links-1.links.4"),
          url: "#",
        },
        {
          name: t("links-1.links.5"),
          url: "#",
        },
      ],
    },
    {
      title: t("links-2.title"),
      links: [
        {
          name: t("links-2.links.1"),
          url: "#",
        },
        {
          name: t("links-2.links.2"),
          url: "#",
        },
        {
          name: t("links-2.links.3"),
          url: "#",
        },
        {
          name: t("links-2.links.4"),
          url: "#",
        },
        {
          name: t("links-2.links.5"),
          url: "#",
        },
      ],
    },
    {
      title: t("links-3.title"),
      links: [
        {
          name: t("links-3.links.1"),
          url: "#",
        },
        {
          name: t("links-3.links.2"),
          url: "#",
        },
        {
          name: t("links-3.links.3"),
          url: "#",
        },
        {
          name: t("links-3.links.4"),
          url: "#",
        },
        {
          name: t("links-3.links.5"),
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer className="md:px-6 py-12 overflow-hidden bg-black text-text-dark">
      {/* Upper Footer */}
      <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-12 mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex md:flex-col justify-evenly">

          {/* Logo */}
          <Logo
          styles="flex items-center gap-1 mb-4 text-xl font-bold"
          size="size-[24px]"
          dark={dark}
          />

          <div className="w-1/2">
            {/* Slogan */}
            <p className="text-sm text-muted-dark mb-6">
              {t("subtitle-1")} <br />
              {t("subtitle-2")} <br />
              {t("subtitle-3")}
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={social.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-md hover:bg-accent dark:hover:bg-accent-dark"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="flex md:flex-[2] px-2 justify-between text">
          {/* Column */}
          {footerLinks.map((column) => (
            <div key={column.title} className="p-1">
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-[10px] md:text-sm text-muted-dark">
                {/* Link */}
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="hover:text-text-dark">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Footer */}
      <div className="text-center md:text-start mt-12 pt-6 text-sm border-t border-muted-dark/50 text-muted-dark/80">
        <p>{t("bottom")}</p>
      </div>
    </footer>
  );
}
