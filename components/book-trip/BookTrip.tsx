"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import TripCard from "./TripCard";

const BookTrip: React.FC = () => {
  const t = useTranslations();

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

  const steps = [
    { icon: "/assest/book-section/Group 7.png" },
    { icon: "/assest/book-section/Group 12.png" },
    { icon: "/assest/book-section/Group 11.png" },
  ];

  return (
    <div className="my-28 lg:pt-0">
      <div className="max-w-screen flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side */}
        <div
          ref={leftSectionRef}
          className="lg:w-[48%] 2xl:w-[40%] desktop:w-[38%] lg:pr-12 desktop:pr-4"
        >
          {/* Animated Subtitle */}
          <h3
            className={`text-[28px] sm:text-[35px] lg:text-[20px] 2xl:text-[18px] desktop:text-[28px] text-[#5E6282] 
            font-poppins font-semibold lg:mb-2 ${isLeftVisible ? "animate-fadeLeftToRight" : "opacity-0"}`}
          >
            {t("BookTrip.subtitle")}
          </h3>

          {/* Animated Title */}
          <h2
            className={`text-[32px] sm:text-[60px] lg:text-[53px] 2xl:text-[56px] desktop:text-[65px] text-[#14183E] 
            font-volkhov font-bold mb-6 ${isLeftVisible ? "animate-fadeLeftToRight" : "opacity-0"}`}
          >
            {t("BookTrip.title")}
          </h2>

          {/* Animated Steps */}
          <div className="lg:w-[440px] 2xl:w-[600px] desktop:w-[740px] space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 sm:gap-6 ${isLeftVisible ? "animate-fadeLeftToRight opacity-100" : "opacity-50"}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex items-center justify-center rounded-lg mt-6 sm:mt-0">
                  <img
                    src={step.icon}
                    alt={`${t(`BookTrip.step${index + 1}.title`)} icon`}
                    className="sm:w-24 sm:h-20 lg:w-16 lg:h-12 2xl:w-18 2xl:h-16"
                  />
                </div>
                <div className="px-4 sm:px-0 2xl:w-[360px]">
                  <h4 className="text-[20px] sm:text-[32px] lg:text-[18px] 2xl:text-[16px] desktop:text-[20px] font-[600] font-poppins text-[#5E6282]">
                    {t(`BookTrip.step${index + 1}.title`)}
                  </h4>
                  <p className="text-[18px] sm:text-[25px] lg:text-[17px] 2xl:text-[16px] desktop:text-[20px] font-poppins leading-7 sm:leading-9 lg:leading-6 2xl:leading-9 text-[#5E6282]">
                    {t(`BookTrip.step${index + 1}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          ref={rightSectionRef}
          className={`lg:mt-4 ${isRightVisible ? "animate-zoomInUp" : "opacity-0"}`}
        >
          <TripCard />
        </div>
      </div>
    </div>
  );
};

export default BookTrip;



