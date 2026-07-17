import { JSX, useState, useEffect } from "react";
import Image from "next/image";

import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";

const skills = portfolioConfig.education.map(edu => edu.skills).reduce((acc, skills) => acc.concat(skills), []);

export default function EducationSidebar() {
  return (
    <div className="sidebar-content">
      <h2 className="text-xl font-semibold mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-base-200 text-base-content rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
