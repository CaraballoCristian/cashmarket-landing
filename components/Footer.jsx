/* Este Componente esta terminado */

// UI
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Explore",
    links: [
      {
        name: "Dashboard Overview",
        url: "#",
      },
      {
        name: "Real-Time Tracking",
        url: "#",
      },
      {
        name: "AI Predictions",
        url: "#",
      },
      {
        name: "Alerts & Notifications",
        url: "#",
      },
      {
        name: "Pricing Plans",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Knowledge Base",
        url: "#",
      },
      {
        name: "Tutorials",
        url: "#",
      },
      {
        name: "Security & Privacy",
        url: "#",
      },
      {
        name: "FAQs",
        url: "#",
      },
      {
        name: "Contact Support",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About CashMarket",
        url: "#",
      },
      {
        name: "Careers",
        url: "#",
      },
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Terms of Service",
        url: "#",
      },
      {
        name: "Privacy Policy",
        url: "#",
      },
    ],
  },
];

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
  return (
    <footer className="px-6 py-12 overflow-hidden bg-black text-text-dark">
      {/* Upper Footer */}
      <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-12 mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex md:flex-col justify-evenly">
          <div className="flex items-center gap-3 mb-4 text-xl font-bold">
            <span className="text-accent dark:text-accent-dark">$</span>
            Cashmarket
          </div>

          <div className="">
            {/* Paragraph */}
            <p className="text-sm text-muted-dark mb-6">
              Take Control of Your Crypto, <br />
              Gain Clarity, <br />
              Grow With Confidence.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <Link
                  key={social.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-md hover:bg-accent dark:hover:bg-accent-dark"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-[2] justify-between">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-sm text-muted-dark">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="hover:text-text-dark">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Footer */}
      <div className="text-center md:text-start mt-12 pt-6 text-sm border-t border-muted-dark/50 text-muted-dark/80">
        <p>© 2026 Cashmarket. All rights reserved.</p>
      </div>
    </footer>
  );
}
