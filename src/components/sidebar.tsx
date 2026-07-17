"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import sections from "@/sections";
import { useSectionContext } from "@/context/SectionContext";

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY) {
        setScrollDir("down");
      } else if (y < lastY) {
        setScrollDir("up");
      }
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollDir;
}

export default function Sidebar() {
  const { activeSection } = useSectionContext();
  const scrollDir = useScrollDirection();

  const currentSection =
    sections.find((section) => section.id === activeSection) || sections[0];

  // console.log("SideBar:Active Section ", activeSection);
  const SidebarContent = currentSection.Sidebar;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{
            opacity: 0,
            y: scrollDir === "down" ? 40 : -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: scrollDir === "down" ? -40 : 40,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        >
          <SidebarContent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
