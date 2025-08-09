"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    testimonial:
      "This platform has completely transformed the way our team operates. The attention to detail and performance is unmatched.",
    author: "Carla Jenkins",
    charge: "Product Manager at Stripe",
    src: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
  },
  {
    testimonial:
      "We've seen a 40% increase in client engagement since integrating this tool. It’s intuitive, elegant, and simply works.",
    author: "Luis Moreno",
    charge: "Marketing Director at HubSpot",
    src: "https://xsgames.co/randomusers/assets/avatars/male/66.jpg",
  },
  {
    testimonial:
      "As a small business owner, finding tools that are both powerful and affordable is rare. This solution hits the sweet spot perfectly.",
    author: "James Holloway",
    charge: "Founder of Holloway Studios",
    src: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
  },
  {
    testimonial:
      "Reliable, scalable, and backed by great support. It’s become an essential part of our daily operations.",
    author: "Aisha Rahman",
    charge: "Operations Lead at Zendesk",
    src: "https://xsgames.co/randomusers/assets/avatars/female/17.jpg",
  },
  {
    testimonial:
      "I was impressed by how fast we were able to integrate this into our workflow. The UX is thoughtful and seamless.",
    author: "David Kim",
    charge: "UX Designer at Airbnb",
    src: "https://xsgames.co/randomusers/assets/avatars/male/61.jpg",
  },
  {
    testimonial:
      "This is the kind of product that makes you wonder how you ever lived without it. Exceptional in every aspect.",
    author: "Nina López",
    charge: "CTO at GreenWave Tech",
    src: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 px-4 bg-gradient-to-b from-bg to-accent">
      
      {/* Container */}
      <div className="relative z-20 container-sm mx-auto flex flex-col pt-0 lg:pt-20 lg:flex-row    ">
        {/* Testimonial Text */}
        <div className="mx-auto text-center lg:text-start py-4 lg:px-8 w-full max-w-[500px] lg:max-w-full lg:w-1/2">
          <h3 className=" text-accent  lg:text-3xl py-10">
            HERE'S WHAT PEOPLE ARE SAYING
          </h3>
          <p className="font-semibold xl:text-2xl lg:text-xl">
            Whether you're managing a team of five or scaling a global
            enterprise, our tools are built to help you succeed.
            <span className="text-bg"> Real-time insights</span>,
            <span className="text-bg"> seamless integrations</span>, and
            <span className="text-bg"> bulletproof performance</span> are
            just a few of the reasons why professionals around the world choose
            us every day. Join the movement and discover what it means to work
            smarter, not harder.
          </p>
        </div>
        {/* Cards */}
        <Swiper
          pagination={true}
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 5000 }}
          className=" h-[400px] w-full max-w-[500px] lg:max-w-full lg:w-1/2 gap-2 mt-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.2)]"
        >
          {testimonials.map((testimonial, i) => {
            return (
              <SwiperSlide key={i} className="gap-4 flex ">
                <article className="h-full flex flex-col px-6 justify-center bg-bg  rounded-2xl">
                  <div className="flex justify-evenly px-6 py-8 gap-2 ">
                    <FaQuoteLeft className="text-[40px]" />
                    <p className=" text-xl font-semibold max-w-[50ch] text-center">
                      {testimonial.testimonial}
                    </p>
                    <FaQuoteRight className="text-[40px]" />
                  </div>

                  <div className="h-1/2 w-full mx-auto flex justify-evenly items-center gap-3">
                    <img
                      src={testimonial.src}
                      alt=""
                      className="max-h-[100px] rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p>{testimonial.charge}</p>
                      <Rating defaultValue={5}>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <RatingButton
                            className="text-yellow-500"
                            key={index}
                          />
                        ))}
                      </Rating>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
