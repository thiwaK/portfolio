import { JSX, useState, useEffect } from "react";
import Image from "next/image";

import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";
import { getAssetPath } from "@/utils/basePath";

export default function ContactSidebar() {
  // Use your real credentials matching your portfolio config
  const emailAddress = "thiwanka.munasinghe@hotmail.com";
  const linkedinHandle = "thiwankamunasinghe";
  const githubHandle = "thiwaK";

  return (
    <div className="sidebar-content">

      <div>
        <h3 className="font-bold text-lg text-base-content mb-1">Get in Touch</h3>
        <p className="text text-base-content/60">
          Available for freelance consulting, full-stack dev contracts, and GIS support.
        </p>
      </div>

      {/* Contact Channels */}
      <div className="space-y-3.5 text-sm text-left">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-0.5">Email</span>
          <a
            href={`mailto:${emailAddress}?subject=Geospatial%20Project%20Inquiry`}
            className="text-base-content/80 hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            <BiLogoGmail className="w-5 h-5" /> {emailAddress}
          </a>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-0.5">LinkedIn</span>
          <a
            href={portfolioConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/80 hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            <BiLogoLinkedin className="w-5 h-5" /> /{linkedinHandle}
          </a>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-0.5">GitHub</span>
          <a
            href={`https://github.com/{githubHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/80 hover:text-primary transition-colors font-mono flex items-center gap-1"
          >
            <FaGithubAlt className="w-4 h-4" /> /{githubHandle}
          </a>
        </div>
      </div>

      {/* Primary Action Trigger */}
      <div className="pt-2 border-t border-base-200">
        <a
          href={getAssetPath("/resume.pdf")}
          download
          className="my-primary-btn group relative w-full text-center inline-flex items-center justify-center"
        >
          <span className="group-hover:text-base-100">Download Resume</span>
        </a>
      </div>

    </div>
  );
}
