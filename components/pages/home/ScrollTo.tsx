"use client";

import React, { useEffect } from "react";
import { GoArrowDown } from "react-icons/go";

export default function ScrollTo() {
  const scrollEnabled = true;
  const [isOnHeroSection, setIsOnHeroSection] = React.useState(true);
  // Track if user is on hero section
  useEffect(() => {
    if (!scrollEnabled) return; // Don't track until scrolling is enabled

    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight; // Hero section is full viewport height
      const scrollPosition = window.scrollY;

      // Update state based on scroll position
      if (scrollPosition < heroSectionHeight * 0.8) {
        // Still on hero section (with 20% buffer)
        setIsOnHeroSection(true);
      } else {
        // Scrolled past hero section
        setIsOnHeroSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEnabled]);
  return (
    <div>
      {scrollEnabled && isOnHeroSection && (
        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "auto",
            });
          }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Scroll to next section"
        >
          <GoArrowDown className="w-6 h-6 text-gray-500" />
        </button>
      )}
    </div>
  );
}
