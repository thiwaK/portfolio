import { JSX, useState, useEffect } from "react";
import { scrollToPosition, scrollToTop } from "@/components/animation/scroll";

import Image from "next/image";

import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";

const technologies = portfolioConfig.projects.map(edu => edu.tags).reduce((acc, skills) => acc.concat(skills), []);

function FilterControls({ tagsList }: { tagsList: string[] }) {
  const [activeTag, setActiveTag] = useState<string>("all");

  const handleFilter = (tag: string) => {
    setActiveTag(tag);

    const SCROLL_OFFSET = -130;
    const el = document.getElementById("projects");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
      scrollToPosition(y, 700);
    }

    const cards = document.querySelectorAll<HTMLDivElement>(
      ".card-container .card"
    );
    cards.forEach((card) => {
      const cardTags = (card.dataset.tags || "")
        .split(" ")
        .map((t) => t.trim());
      if (tag === "all") {
        card.style.display = "flex";
      } else {
        card.style.display = cardTags.includes(tag) ? "flex" : "none";
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      <button
        className={`btn text-xs badge badge-soft badge-md border-2 border-transparent font-normal ${activeTag === "all"
          ? "text-base-100 bg-primary hover:bg-primary"
          : "btn-ghost hover:bg-primary/30"
          }`}
        onClick={() => handleFilter("all")}
      >
        All
      </button>

      {/* TODO: Need improvements */}
      {tagsList.map((tag) => {
        const isActive = activeTag === tag;
        const isLanguage = ["python", "javascript", "sql", "kotlin"].includes(
          tag
        );
        const isHighlights = ["featured", "in-progress"].includes(tag);
        const is = ["featured", "in-progress"].includes(tag);

        // Determine base classes
        let classes =
          "btn text-xs badge badge-soft badge-md border-2 border-transparent font-mono font-normal";

        // Active tag colors
        if (isActive) {
          if (isLanguage) classes += " bg-blue-600 text-base-200";
          else if (isHighlights) classes += " bg-green-600 text-base-200";
          else classes += " text-base-100 bg-primary hover:bg-primary"; // default active

          // Inactive tag colors
        } else {
          if (isLanguage) classes += " text-blue-500 hover:bg-blue-400/30";
          else if (isHighlights)
            classes += " text-green-500 hover:bg-green-400/30";
          else classes += " btn-ghost hover:bg-primary/30"; // default inactive
        }

        return (
          <button
            key={tag}
            className={classes}
            onClick={() => handleFilter(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
export default function ProjectSidebar() {

  return (
    <div className="sidebar-content">
      <h2 className="text-xl font-semibold mb-3">Technologies</h2>
      <div>
        {/* Filter Controls */}
        <FilterControls
          tagsList={technologies}
        />
      </div>
    </div>
  );
}
