/* Este componente esta listo */

// UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of assets can I track with this tool?",
    answer:
      "You can monitor cryptocurrencies from any network, tokens on centralized and decentralized exchanges, stablecoins, NFTs, and even compatible tokenized assets. If it has a public address, you can integrate it.",
  },
  {
    question: "Is syncing with my wallets secure?",
    answer:
      "Yes. We use read-only connections through public APIs and encrypted keys. We never ask for access to your funds, private keys, or the ability to make transactions.",
  },
  {
    question: "How do the AI-powered predictions work?",
    answer:
      "Our system analyzes historical data, market patterns, and macroeconomic variables in real time to provide personalized insights on risk, trends, and opportunities — without replacing your own judgment.",
  },
  {
    question: "Can I receive real-time alerts?",
    answer:
      "Yes. You can set up custom alerts based on price, volume, trend shifts, unusual activity, or key events. Notifications are sent instantly via email, Telegram, or in-app messages.",
  },
  {
    question: "Do I need to connect my wallets to get started?",
    answer:
      "No. You can use the demo version or manually enter your assets. When you're ready, you can connect your wallets and supported exchanges in seconds — securely and easily.",
  },
  {
    question: "What makes this tool different from others?",
    answer:
      "We offer a clean, fast, and elegant experience with visual insights, automated AI analysis, real multi-platform syncing, and a privacy-first architecture — all in one seamless platform.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-primary dark:bg-primary-dark py-36">
      {/* Container */}
      <div className="container-sm mx-auto px-4">
        {/* Title */}
        <h2 className="text-center my-15 text-bg">
          Got Questions? <span className="text-accent-dark dark:text-accent">We've Got Answers</span>
        </h2>
        {/* Content */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="1"
        >
          {faqs.map((faq, i) => {
            return (
              <AccordionItem key={i} value={i + 1}>
                <AccordionTrigger className="font-extrabold text-xl hover:text-accent-dark dark:hover:text-shadow-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-xl font-semibold">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
