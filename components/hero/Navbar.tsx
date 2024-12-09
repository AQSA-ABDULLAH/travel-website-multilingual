"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState, useEffect } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="max-w-screen pt-12 flex justify-between items-center">
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

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-80 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col mt-12 space-y-4 px-6">
          <Link href={`/${locale}/`} className="text-gray-800">
            {t("home")}
          </Link>
          <Link href={`/${locale}/about`} className="text-gray-800">
            {t("about")}
          </Link>
          <Link href={`/${locale}/about/profile`} className="text-gray-800">
            {t("profile")}
          </Link>
          <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg">
            Sign up
          </button>
          <select
            value={locale}
            onChange={handleLanguageChange}
            className="bg-transparent text-gray-800 border-2 border-gray-800 rounded-md p-2"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </nav>
      </div>

      {/* Overlay to Close Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-1000"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;

