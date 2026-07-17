import { JSX, useState, useEffect } from "react";
import Image from "next/image";

import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";

export default function ContactSidebar() {

  return (
    <div className="sidebar-content">
      <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
      <p>Email: example@email.com</p>
      <p>LinkedIn: /your-profile</p>
    </div>
  );
}
