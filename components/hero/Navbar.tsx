"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState, useEffect, useRef } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Initially visible
  const navbarRef = useRef<HTMLElement>(null);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  // Observe when Navbar enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersection State:", entry.isIntersecting); // Debug
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
  
    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }
  
    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);
  

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header
    ref={navbarRef}
    className={`max-w-screen pt-12 flex justify-between items-center transition-all duration-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
    }`}
  >
  
      {/* Logo Section */}
      <section>
        <div className="flex items-center space-x-2">
          <img src="/assest/Logo.png" className="2xl:w-[114px]" alt="Logo" />
        </div>
      </section>

      {/* Navigation Links */}
      <section className="flex justify-between items-center gap-6">
        <nav className="text-[18px] 2xl:text-[17px] text-[#212832] font-Google Sans font-medium hidden md:flex space-x-16">
          <a href="#">{t("destinations")}</a>
          <a href="#">{t("hotels")}</a>
          <a href="#">{t("flights")}</a>
          <a href="#">{t("bookings")}</a>
          <a href="#">{t("login")}</a>
        </nav>

        <div className="hidden md:block">
          <button className="2xl:text-[17px] border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-2 rounded-lg">
            {t("signup")}
          </button>
        </div>

        {/* Language Selector Dropdown */}
        <div className="2xl:text-[17px] hidden md:block">
          <select
            value={locale}
            onChange={handleLanguageChange}
            className="bg-transparent text-gray-800 rounded-md"
          >
            <option value="en">EN</option>
            <option value="fr">CH</option>
            <option value="ur">UR</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;




