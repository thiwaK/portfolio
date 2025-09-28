"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import { scrollToPosition, scrollToTop } from "@/components/animation/scroll";
import ScrollProgress from "./ui/scroll_progress";
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

const SCROLL_OFFSET = -130; // adjust for navbar height
const OBSERVER_THRESHOLD = 0.6;
const lightThemeName = "winter";
const darkThemeName = "dim";

export default function Navbar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  type Theme = typeof lightThemeName | typeof darkThemeName;

  const [theme, setTheme] = useState<Theme>(lightThemeName);

  const toggleTheme = useCallback(() => {
    setTheme((prev) =>
      prev === lightThemeName ? darkThemeName : lightThemeName
    );
  }, []);

  const sections = useMemo(
    () => ["about", "projects", "experience", "education", "contact"],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: OBSERVER_THRESHOLD }
    );

    const elements: HTMLElement[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [setActiveSection, sections]);

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved === "light" || saved === "dark") setTheme(saved);
  // }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = useCallback((id: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (id === "about") {
      scrollToTop(700);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y =
          el.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
        scrollToPosition(y, 700);
      }
    }
  }, []);

  return (
    <header className="bg-base-100 shadow-md fixed top-0 left-0 z-999 w-full border-b border-transparent">
      <ScrollProgress />
      <div className="px-6">
        <div className="flex h-(--header-height) items-center">
          <nav className="items-center hidden lg:flex">
            {sections.map((id) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  onClick={(e) => handleClick(id, e)}
                  href={`#${id}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-primary/80 hover:text-primary hover:text-shadow-primary hover:text-shadow hover:translate-y-[1px] transition-transform duration-200"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  {isActive && (
                    <span className="absolute left-0 -bottom-[5px] h-0.5 w-full bg-primary rounded-4xl"></span>
                  )}
                </a>
              );
            })}
          </nav>

          <button
            onClick={toggleTheme}
            className="ml-auto rounded-full text-primary/80 hover:text-primary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === lightThemeName ? (
              <MdLightMode size={24} />
            ) : (
              <MdDarkMode size={24} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
