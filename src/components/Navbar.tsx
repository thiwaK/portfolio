"use client";
import { useEffect, useState } from "react";
import { scrollToPosition } from "@/components/animation/scroll";
import { scrollToTop } from "@/components/animation/scroll";
import ScrollProgress from "./ui/scroll_progress";

import { RiContrast2Fill, RiContrast2Line } from "react-icons/ri";

const sections = ["focus", "projects", "experience", "education", "contact"];

export default function Navbar({ activeSection, setActiveSection }) {
  const [theme, setTheme] = useState<"nord" | "dim">("nord");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "nord" ? "dim" : "nord"));
  };

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (id === "focus") {
      // special case: go to top
      scrollToTop(700);
    } else {
      // normal smooth scroll with offset
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -64; // adjust for navbar height
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        scrollToPosition(y, 700);
      }
    }
  };

  return (
    <header className="bg-base-100 shadow-md fixed top-0 left-0 z-999 w-full border-b border-transparent">
      <ScrollProgress />
      <div className="px-6">
        <div className="flex h-(--header-height) items-center gap-2">
          <nav className="items-center gap-2 hidden lg:flex">
            {sections.map((id) => (
              <a
                key={id}
                onClick={(e) => handleClick(id, e)}
                href={`#${id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors 
                  ${
                    activeSection === id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                {/* underline indicator */}
                {activeSection === id && (
                  <span className="absolute left-0 -bottom-[5px] h-0.5 w-full bg-blue-600 rounded-4xl"></span>
                )}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            className="rounded-full bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "nord" ? (
              <RiContrast2Line size={24} />
            ) : (
              <RiContrast2Fill size={24} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
