"use client";

import { useEffect, useState, useCallback } from "react";
import sections from "@/sections";
import { scrollToPosition, scrollToTop } from "@/components/animation/scroll";
import ScrollProgress from "./ui/scroll_progress";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useSectionContext } from "@/context/SectionContext";

const SCROLL_OFFSET = -130;
const lightThemeName = "winter";
const darkThemeName = "dim";

export default function Navbar() {
  const { activeSection } = useSectionContext();

  /*
  |--------------------------------------------------------------------------
  | THEME
  |--------------------------------------------------------------------------
  */

  type Theme = typeof lightThemeName | typeof darkThemeName;

  const [theme, setTheme] = useState<Theme>(lightThemeName);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkThemeName
      : lightThemeName;
    setTheme(systemTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) =>
      prev === lightThemeName ? darkThemeName : lightThemeName
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /*
  |--------------------------------------------------------------------------
  | NAVIGATION
  |--------------------------------------------------------------------------
  */

  const handleClick = useCallback((id: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (id === "about") {
      scrollToTop(700);
      return;
    }

    const el = document.getElementById(id);

    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;

    scrollToPosition(y, 700);
  }, []);

  return (
    <header
      className="
        sticky
        top-0
        left-0
        z-999
        backdrop-blur
        transition
        duration-500
        bg-base-100
        shadow-md
        shadow-base-300
      "
    >
      <ScrollProgress />

      <div className="mx-auto grid w-full max-w-8xl px-4">
        <div className="flex h-(--header-height) items-center">

          <nav className="items-center hidden lg:flex">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(section.id, e)}
                  className={`
                    relative
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition-colors
                    duration-300

                    ${isActive
                      ? "text-primary font-semibold"
                      : `
                          font-medium
                          text-primary/80
                          hover:text-primary
                          hover:text-shadow-primary
                          hover:text-shadow
                          hover:translate-y-[1px]
                          transition-transform
                          duration-200
                        `
                    }
                  `}
                >
                  {section.title}

                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-[5px]
                        h-0.5
                        w-full
                        bg-primary
                        rounded-4xl
                      "
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            onClick={toggleTheme}
            className="
              ml-auto
              rounded-full
              text-primary/80
              hover:text-primary
              transition-colors
              duration-300
            "
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
