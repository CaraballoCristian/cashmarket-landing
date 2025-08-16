// Utils
import { motion } from "framer-motion";
// UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// i18n
import { useTranslations } from "next-intl";


const FaqSection = () => {
  const t = useTranslations("faq-section");

  const faqs = [
    {
      question: t("questions.question-1"),
      answer: t("questions.answer-1"),
    },
    {
      question: t("questions.question-2"),
      answer: t("questions.answer-2"),
    },
    {
      question: t("questions.question-3"),
      answer: t("questions.answer-3"),
    },
    {
      question: t("questions.question-4"),
      answer: t("questions.answer-4"),
    },
    {
      question: t("questions.question-5"),
      answer: t("questions.answer-5"),
    },
    {
      question: t("questions.question-6"),
      answer: t("questions.answer-6"),
    },
  ];

  return (
    <section id="faq" className="bg-primary dark:bg-primary-dark py-36">
      {/* Container */}
      <div className="container-sm mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="text-center my-15 text-bg"
        >
          {t("title")}{" "}
          <span className="text-accent-dark dark:text-accent">
            {t("span")}
          </span>
        </motion.h2>
        
        {/* Content */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="1"
        >
          {faqs.map((faq, i) => {
            return (
              /* Motion Wrapper */
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2 * i,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="border-b border-accent"
              >
                <AccordionItem value={i + 1}>
                  <AccordionTrigger className="font-extrabold text-xl hover:text-accent-dark dark:hover:text-shadow-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-xl font-semibold">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
