"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function Main() {
  const t = useTranslations("Main");

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [animationStage, setAnimationStage] = useState(0); // Track animation progress

  // Animation triggered on initial mount
  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationStage(1), 500),
      setTimeout(() => setAnimationStage(2), 1500),
      setTimeout(() => setAnimationStage(3), 2500),
      setTimeout(() => setAnimationStage(4), 3500),
      setTimeout(() => setAnimationStage(5), 4500),
    ];

    // Cleanup timeouts on unmount or re-render
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="sm:min-h-screen flex items-center justify-center py-24 sm:py-16">
      <div className="max-w-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div
          ref={leftSectionRef}
          className={`w-full md:w-[55%] 2xl:w-[600px] lg:w-[55%] flex flex-col lg:items-start items-center text-center lg:text-left`}
        >
          <span
            className={`text-[14px] sm:text-[22px] lg:text-[20px] 2xl:text-[24px] text-[#DF6951] uppercase font-semibold mb-8 ${
              animationStage >= 1 ? "animate-fadeLeftToRight" : "opacity-0"
            }`}
          >
            {t("heading")}
          </span>
          <h1
            className={`text-[32px] px-20 sm:px-0 sm:text-[88px] lg:text-[96px] 2xl:text-[84px] text-center lg:text-left text-[#181E4B] font-volkhov font-black leading-tight sm:leading-loose 2xl:leading-large-loose desktop:leading-extra-loose mb-8 z-10 ${
              animationStage >= 2 ? "animate-fadeLeftToRight" : "opacity-0"
            }`}
          >
            {t("title")}
          </h1>
          <p
            className={`text-[12px] px-20 sm:px-0 sm:text-[20px] lg:text-[17px] 2xl:text-[16px] desktop:text-[22px] text-[#5E6282] w-[480px] 2xl:w-[600px] desktop:w-[800px] tracking-wider font-medium mb-6 ${
              animationStage >= 3 ? "animate-fadeLeftToRight" : "opacity-0"
            }`}
          >
            {t("paragraph")}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center ${
              animationStage >= 4 ? "animate-fadeInBottom" : "opacity-0"
            }`}
          >
            <button
              className={`text-white hover:bg-orange-600 text-[18px] 2xl:text-[20px] bg-[#F1A501] px-6 py-4 rounded-lg sm:mr-4`}
            >
              {t("button1")}
            </button>
            <button className="mt-6 sm:mt-2 mr-11 sm:mr-0">
              <img
                src="/assest/hero/Play Demo.png"
                alt="Play Demo"
                className={`w-[100px] sm:w-full 2xl:w-[200px]`}
              />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={rightSectionRef}
          className={`mt-12 md:mt-0 md:w-[45%] 2xl:w-[58%] hidden sm:block flex items-center justify-end ${
            animationStage >= 5 ? "animate-fadeRightToLeft" : "opacity-0"
          }`}
        >
          <img
            src="/assest/hero/Image.png"
            alt="Travel"
            className={`w-[300px] sm:w-full h-auto 2xl:w-[653.87px] 2xl:h-[786px] desktop:w-[700px] desktop:h-[880px] object-cover mt-12 lg:mt-2`}
          />
        </div>
      </div>
    </div>
  );
}





