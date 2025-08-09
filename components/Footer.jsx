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
    <footer className="bg-black text-white overflow-hidden px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-bold">
              <span className="text-accent">$</span>Cashmarket
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Take Control of Your Crypto, <br />
            Gain Clarity, <br />
            Grow With Confidence.
          </p>

          <div className="flex gap-3">
            {socials.map((social, i) => (
              <Link
                key={social.name}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f1f1f] p-2 rounded-md hover:bg-[#333]"
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Center Section (Links) */}
        <div className="flex flex-[2] justify-between">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2026 Cashmarket. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
        </div>
      </div>
    </footer>
  );
}
