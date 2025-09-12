"use client";
import { useEffect, useState } from "react";
import { scrollToPosition  } from "@/components/animation/scroll";
import ScrollProgress from "./ui/scroll_progress";

const sections = ["focus", "projects", "experience", "education", "contact"];



export default function Navbar() {
  const [active, setActive] = useState("focus");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.8 } // sensitivity
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

 const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -64; // adjust for navbar height
      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset;
      scrollToPosition(y, 700);
    }
  };

  return (
    <header className="bg-white fixed top-0 left-0 z-999 w-full border-b border-gray-200">
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
                  ${active === id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}
                `}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                {/* underline indicator */}
                {active === id && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 rounded-4xl"></span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}