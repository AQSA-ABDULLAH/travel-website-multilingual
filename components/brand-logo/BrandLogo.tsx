"use client";
import React, { useEffect, useRef, useState } from "react";

export default function BrandLogos() {
  const brands = [
    { name: "Axon", logo: "/assest/brand-logo/image 31.png" },
    { name: "Jetstar", logo: "/assest/brand-logo/image 30.png" },
    { name: "Expedia", logo: "/assest/brand-logo/image 29.png" },
    { name: "Qantas", logo: "/assest/brand-logo/image 28.png" },
    { name: "Alitalia", logo: "/assest/brand-logo/image 27.png" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation
          } else {
            setIsVisible(false); // Reset animation
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mb-32 mt-48 bg-white ${
        isVisible ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      <div className="max-w-screen">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="p-4 transition-transform hover:scale-110 hover:bg-white hover:shadow-lg hover:rounded-lg"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-40 sm:w-auto sm:h-10 2xl:h-12 desktop:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}