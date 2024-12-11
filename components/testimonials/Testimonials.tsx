"use client";

import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./Card";
import { useTranslations } from "next-intl";

const Testimonials: React.FC = () => {
  const t = useTranslations();

  const [activeIndex, setActiveIndex] = useState(0);

  const leftSectionRef = useRef<HTMLDivElement>(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);

  const rightSectionRef = useRef<HTMLDivElement>(null);
  const [isRightVisible, setIsRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftSectionRef.current) {
            setIsLeftVisible(entry.isIntersecting);
          }
          if (entry.target === rightSectionRef.current) {
            setIsRightVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
    };
  }, []);

  const testimonials = [
    {
      image: "/assest/Testimonials/Image.png",
      des: t("testimonials.testimonials1.des"),
      writer: t("testimonials.testimonials1.writer"),
      location: t("testimonials.testimonials1.location"),
      name: t("testimonials.testimonials1.name"),
      pos: t("testimonials.testimonials1.pos"),
    },
    {
      image: "/assest/Testimonials/Image.png",
      des: t("testimonials.testimonials2.des"),
      writer: t("testimonials.testimonials2.writer"),
      location: t("testimonials.testimonials2.location"),
      name: t("testimonials.testimonials2.name"),
      pos: t("testimonials.testimonials2.pos"),
    },
    {
      image: "/assest/Testimonials/Image.png",
      des: t("testimonials.testimonials3.des"),
      writer: t("testimonials.testimonials3.writer"),
      location: t("testimonials.testimonials3.location"),
      name: t("testimonials.testimonials3.name"),
      pos: t("testimonials.testimonials3.pos"),
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-10">
      <div className="max-w-screen flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Title and Heading */}
        <section
          ref={leftSectionRef}
        >
          {/* Subtitle with animation */}
          <h3
            className={`text-[18px] 2xl:text-[24px] text-[#5E6282] font-poppins font-semibold mb-2 tracking-wider ${isLeftVisible ? "animate-fadeLeftToRight" : "opacity-0"
              }`}
          >
            {t("testimonials.subtitle")}
          </h3>

          {/* Title with animation */}
          <h2
            className={`text-[38px] sm:text-[49px] lg:text-[53px] 2xl:text-[63px] desktop:text-[74px] text-[#14183E] font-volkhov font-bold mb-6 ${isLeftVisible ? "animate-fadeLeftToRight" : "opacity-0"
              }`}
          >
            {t("testimonials.title")}
          </h2>

          {/* Slide Indicators */}
          <div className="flex mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 cursor-pointer rounded-full ${index === activeIndex ? "bg-black" : "bg-gray-300"
                  }`}
              ></span>
            ))}
          </div>
        </section>


        {/* Right Section - Image Carousel */}
        <section
          ref={rightSectionRef}
          className={`flex items-center justify-end mt-12 lg:mt-0 ${isRightVisible ? "animate-fadeRightToLeft" : "opacity-0"
            }`}
        >
          <div className="relative">
            {/* Display only the active testimonial */}
            <div className="w-[300px] sm:w-[560px] h-auto">
              <TestimonialCard testimonial={testimonials[activeIndex]} />
            </div>

            {/* Navigation Buttons for Large Screens */}
            <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 flex flex-col items-center space-y-4 hidden lg:flex">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25B2; {/* Up arrow */}
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25BC; {/* Down arrow */}
              </button>
            </div>

            {/* Navigation Buttons for Small Screens */}
            <div className="flex justify-center mt-40 space-x-8 lg:hidden">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25C0; {/* Left arrow */}
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
              >
                &#x25B6; {/* Right arrow */}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;

