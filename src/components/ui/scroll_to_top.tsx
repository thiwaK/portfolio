"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "@/components/animation/scroll";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };



  return (
    <>
      {isVisible && (
        <button
          onClick={() => scrollToTop(700)}
          className="fixed bottom-10 right-3 p-3 rounded-full bg-blue-600 border-4 border-base-300 text-white hover:bg-blue-700 hover:scale-110 transition"
          aria-label="Go to top"
        >
          {/* Up arrow icon (Tailwind Heroicon or SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
