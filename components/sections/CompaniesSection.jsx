// Utils
import { motion } from "framer-motion";
// UI
import Marquee from "react-fast-marquee";
import { SiBinance } from "react-icons/si";
import {
  FaCcStripe,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcPaypal,
} from "react-icons/fa";
// Context
import { useDark } from "@/context/DarkContext";
// i18n
import { useTranslations } from "next-intl";

const brands = [
  {
    name: "Stripe",
    logo: FaCcStripe,
  },
  {
    name: "Visa",
    logo: FaCcVisa,
  },
  {
    name: "Binance",
    logo: SiBinance,
  },
  {
    name: "PayPal",
    logo: FaCcPaypal,
  },
  {
    name: "Amazon",
    logo: FaCcAmazonPay,
  },
];

const CompaniesSection = () => {
  const { dark } = useDark();
  const t = useTranslations("companies-section");

  return (
    <section className="h-full pb-10 bg-primary dark:bg-primary-dark">
      {/* Container */}
      <div className="containe flex flex-col gap-8 p-2 mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="py-10 text-center text-text dark:text-text-dark"
        >
          {t("title-1")}{" "}
          <span className="text-bg dark:text-accent-dark">{t("span")}</span> {t("title-2")}
        </motion.h2>

        {/* Companies Marquee */}
        <Marquee
          speed={50}
          gradient={true}
          gradientColor={`${dark ? "#0143a7" : "#579bfe"}`}
          autoFill
          className="w-full text-2xl mx-auto font-semibold text-bg"
        >
          {brands.map((brand, i) => {
            const Logo = brand.logo;
            return (
              <span key={i} className="flex mx-6">
                <Logo className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 " />
              </span>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default CompaniesSection;
