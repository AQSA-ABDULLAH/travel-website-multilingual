"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    const footerSection = document.querySelector("#footer-section");
    if (footerSection) {
      observer.observe(footerSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer-section"
      className={`bg-white py-16 mt-16 ${isVisible ? "animate-fadeUp" : "opacity-0"}`}
    >
      <div className="max-w-screen">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start flex-wrap justify-center md:justify-between gap-10">
          
          {/* Left Section with fadeLeftToRight animation */}
          <div
            className={`max-w-[200px] 2xl:max-w-[290px] desktop:max-w-[350px] ${
              isVisible ? "animate-fadeLeftToRight" : "opacity-0"
            }`}
          >
            <h1 className="text-[54px] sm:text-[46px] 2xl:text-[44px] desktop:text-[60px] text-[#181E4B] font-bold tracking-wider mt-[-9px] pb-4">
              Jadoo.
            </h1>
            <p className="text-[18px] sm:text-[12px] 2xl:text-[13px] desktop:text-[20px] text-[#5E6282] font-medium">
              {t("description")}
            </p>
          </div>

          {/* Middle Sections with fadeRightToLeft animation */}
          <div className="flex flex-col sm:flex-row gap-16">
            <div
              className={`${
                isVisible ? "animate-fadeUp" : "opacity-0"
              }`}
            >
              <h3 className="text-[26px] sm:text-[22px] 2xl:text-[21px] desktop:text-[30px] text-[#080809] font-extrabold tracking-wide mb-9">
                {t("company.title")}
              </h3>
              <ul className="text-[22px] sm:text-[19px] 2xl:text-[18px] desktop:text-[26px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>{t("company.links.about")}</li>
                <li>{t("company.links.careers")}</li>
                <li>{t("company.links.mobile")}</li>
              </ul>
            </div>

            <div
              className={`${
                isVisible ? "animate-fadeUp" : "opacity-0"
              }`}
            >
              <h3 className="text-[26px] sm:text-[22px] 2xl:text-[21px] desktop:text-[30px] text-[#080809] font-extrabold tracking-wide mb-9 ">
                {t("contact.title")}
              </h3>
              <ul className="text-[22px] sm:text-[19px] 2xl:text-[18px] desktop:text-[26px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>{t("contact.links.helpFaq")}</li>
                <li>{t("contact.links.press")}</li>
                <li>{t("contact.links.affiliates")}</li>
              </ul>
            </div>

            <div
              className={`${
                isVisible ? "animate-fadeUp" : "opacity-0"
              }`}
            >
              <h3 className="text-[26px] sm:text-[22px] 2xl:text-[21px] desktop:text-[30px] text-[#080809] font-extrabold tracking-wide mb-9">
                {t("more.title")}
              </h3>
              <ul className="text-[22px] sm:text-[19px] 2xl:text-[18px] desktop:text-[26px] text-[#5E6282] font-medium tracking-wide space-y-2">
                <li>{t("more.links.airlineFees")}</li>
                <li>{t("more.links.airline")}</li>
                <li>{t("more.links.lowFareTips")}</li>
              </ul>
            </div>
          </div>

          {/* Right Section with fadeUp animation */}
          <div
            className={`${
              isVisible ? "animate-fadeRightToLeft" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Social Media Icons */}
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social.png" className="2xl:w-[85px] desktop:w-[120px]" />
              </div>
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social1.png" className="2xl:w-[85px] desktop:w-[120px]" />
              </div>
              <div className="rounded-full flex items-center justify-center">
                <img src="/assest/footer/Social2.png" className="2xl:w-[85px] desktop:w-[120px]" />
              </div>
            </div>
            <h3 className="text-[20px] desktop:text-[28px] text-[#5E6282] font-medium tracking-wide mb-5">
              {t("socialMedia.heading")}
            </h3>
            <div className="flex gap-4">
              {/* App Store Buttons */}
              <img
                src="/assest/footer/Google Play.png"
                alt="Google Play"
                className="2xl:w-[140px] desktop:w-[160px]"
              />
              <img
                src="/assest/footer/Play Store.png"
                alt="Apple Store"
                className="2xl:w-[140px] desktop:w-[160px]"
              />
            </div>
          </div>
        </div>
        <div className="text-[18px] 2xl:text-[13px] desktop:text-[30px] text-[#5E6282] mt-20 text-center">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
