import Timeline from "@/components/ui/experience-item";
import { ExperienceItem } from "@/components/ui/experience-item";

import { JSX, useState, useEffect } from "react";
import Image from "next/image";

import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";


export default function ExperienceSidebar() {
  return (
    <div className="sidebar-content">
      {/* <h3 className="font-bold text-lg mb-2">Experience</h3> */}
      <h2 className="text-xl font-semibold mb-3">Career Progression</h2>
      <Timeline items={portfolioConfig.experiences} />;
    </div>
  );
}
