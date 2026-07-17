"use client";

import { useEffect } from "react";

import { useSectionContext } from "@/context/SectionContext";

export function useActiveSection() {

  const { setActiveSection } = useSectionContext();

  useEffect(() => {

    const sections = document.querySelectorAll(
        "[data-section]"
    );

    // console.log(
    //   "OBSERVED SECTIONS:",
    //   sections
    // );

    const observer =
      new IntersectionObserver(
        (entries) => {

          const visibleEntries =
            entries.filter(
              (entry) =>
                entry.isIntersecting
            );

          if (!visibleEntries.length)
            return;

          const mostVisible =
            visibleEntries.reduce(
              (prev, current) =>
                current.intersectionRatio >
                prev.intersectionRatio
                  ? current
                  : prev
            );

          const id =
            mostVisible.target.getAttribute(
              "data-section"
            );

          // console.log(
          //   "ACTIVE SECTION:",
          //   id
          // );

          if (id) {
            setActiveSection(id);
          }

        },
        {
          threshold: 0.15,

          rootMargin:
            "-15% 0px -55% 0px",
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () =>
      observer.disconnect();

  }, [setActiveSection]);
}