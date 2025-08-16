// Utils
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
// UI
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Stars from "../ui/ratingStars";
// Styles
import "swiper/css";
import "swiper/css/pagination";
// i18n
import { useTranslations } from "next-intl";

const TestimonialsSection = () => {
  const t = useTranslations("testimonials-section");

  const testimonials = [
    {
      testimonial:t("testimonial-1.content"),
      charge: t("testimonial-1.charge"),
      author: "Carla Jenkins",
      src: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
    },
    {
      testimonial:t("testimonial-2.content"),
      charge: t("testimonial-2.charge"),
      author: "Luis Moreno",
      src: "https://xsgames.co/randomusers/assets/avatars/male/66.jpg",
    },
    {
      testimonial:t("testimonial-3.content"),
      charge: t("testimonial-3.charge"),
      author: "James Holloway",
      src: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
    },
    {
      testimonial:t("testimonial-4.content"),
      charge: t("testimonial-4.charge"),
      author: "Aisha Rahman",
      src: "https://xsgames.co/randomusers/assets/avatars/female/17.jpg",
    },
    {
      testimonial:t("testimonial-5.content"),
      charge: t("testimonial-5.charge"),
      author: "David Kim",
      src: "https://xsgames.co/randomusers/assets/avatars/male/61.jpg",
    },
    {
      testimonial:t("testimonial-6.content"),
      charge: t("testimonial-6.charge"),
      author: "Nina López",
      src: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 px-4 bg-gradient-to-b from-bg to-primary dark:from-bg-dark dark:to-primary-dark"
    >
      {/* Container */}
      <div className="relative z-20 container-sm mx-auto pt-0 lg:py-20 flex flex-col lg:flex-row">
        {/* Testimonials Text */}
        <div className="text-center lg:text-start w-full max-w-[500px] lg:max-w-full lg:w-1/2 mx-auto py-4 lg:px-8 ">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className=" text-accent dark:text-accent-dark text-3xl md:text-3xl lg:text-4xl pb-10"
          >
            {t("title")}
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="font-semibold xl:text-2xl lg:text-xl"
          >
            {t("subtitle.part-1")}
            <span className="text-bg dark:text-accent-dark">
              {" "}
              {t("subtitle.span-1")}
            </span>
            ,
            <span className="text-bg dark:text-accent-dark">
              {" "}
              {t("subtitle.span-2")}
            </span>
            {t("subtitle.part-3")}
            <span className="text-bg dark:text-accent-dark">
              {" "}
              {t("subtitle.span-3")}
            </span>{" "}
            {t("subtitle.part-4")}
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="w-full max-w-[500px] mx-auto lg:max-w-full lg:w-1/2 overflow-hidden rounded-2xl"
        >
          <Swiper
            pagination={true}
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 5000 }}
            className=" h-[400px] gap-2 rounded-2xl shadow-lg shadow-primary-dark dark:shadow-primary
          border border-primary-dark dark:border-primary"
          >
            {testimonials.map((testimonial, i) => {
              return (
                <SwiperSlide key={i} className="gap-4 flex ">
                  <article className="h-full flex flex-col px-6 justify-center bg-bg dark:bg-bg-dark dark:text-text-dark rounded-2xl">
                    <div className="flex justify-evenly px-2 md:px-6 lg:py-8 gap-2">
                      <FaQuoteLeft className="text-[40px]  text-accent dark:text-accent-dark" />
                      {/* Testimonial */}
                      <p className="text-md md:text-lg font-semibold max-w-[50ch] text-center">
                        {testimonial.testimonial}
                      </p>
                      <FaQuoteRight className="text-[40px] text-accent dark:text-accent-dark" />
                    </div>

                    {/* Author Data */}
                    <div className="h-1/2 w-full mx-auto flex justify-evenly items-center gap-3">
                    {/* Picture */}
                      <img
                        src={testimonial.src}
                        alt=""
                        className="max-h-[50px] md:max-h-[100px] rounded-full"
                      />
                      {/* Name & Charge */}
                      <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                        <p className="text-accent dark:text-accent-dark text-sm">
                          {testimonial.charge}
                        </p>
                        <Stars />
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
