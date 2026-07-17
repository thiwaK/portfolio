import { portfolioConfig } from "@/config/portfolio.config";
import React from "react";
import { JSX } from "react";
const Footer = () => {
  return (
    <footer className="mt-16 border-t border-base-300 bg-base-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Brand / Name */}
          <div>
            <h2 className="text-lg font-semibold text-base-content">
              {portfolioConfig.name}
            </h2>
            <p className="text-sm text-base-content/60">
              {portfolioConfig?.title?.map((title, i) => (
                <span key={title}>
                  {title}
                  {i < portfolioConfig.title.length - 1 && " · "}
                </span>
              ))}
            </p>
          </div>

          {/* Center: Links (optional) */}
          <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Right: Status / Badge */}
          <div className="text-sm text-base-content/60">
            Built with Next.js + Tailwind
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-base-content/50">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p>Designed and engineered for geospatial systems</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
