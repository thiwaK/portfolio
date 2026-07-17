import Image from "next/image";

import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";
import { getAssetPath } from '@/utils/basePath';

export default function AboutSidebar() {
  const age = new Date().getFullYear() - 1999;

  return (
    <div className="text-center flex flex-col gap-3">

      {/* <div className="red h-15"></div> */}

      {/* Profile Card */}
      <div className="profile-card relative pt-24 text-center">
        <div className="avatar w-36 h-36 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="rounded-full bg-base-100 border-4 border-base-300">
            <Image
              className="rounded-full bg-base-300 border-4 border-base-100 shadow transform duration-400 hover:scale-110 hover:shadow-lg"
              // src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              src={getAssetPath('/avatar.png')}
              alt="Profile image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        <h2 className="inline tracking-tight text-transparent text-xl font-semibold sm:text-2xl leading-snug pb-2 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text">
          {portfolioConfig.name}
        </h2>
        <div className="text-sm text-base-content/70 mb-6 mt-2 font-mono flex flex-wrap justify-center gap-2 leading-relaxed">
          {portfolioConfig.title.map((title) => (
            <span
              key={title}
              className="text-xs whitespace-nowrap badge badge-soft badge-dash badge-md"
            >
              {title}
            </span>
          ))}
        </div>

        <a
          href={getAssetPath("/resume.pdf")}
          download
          className="my-primary-btn group relative w-full text-center inline-flex items-center justify-center"
        >
          <span className="group-hover:text-base-100">Download Resume</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="profile-card-body flex flex-row justify-center gap-4 ">
        <a
          href={portfolioConfig.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="my-primary-svg-btn"
          aria-label="GitHub"
        >
          <FaGithubAlt className="w-7 h-7 rounded-full" />
        </a>
        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="my-primary-svg-btn"
          aria-label="Medium"
        >
          <FaMedium className="w-7 h-7 rounded-full" />
        </a>
        <a
          href={portfolioConfig.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="my-primary-svg-btn"
          aria-label="LinkedIn"
        >
          <BiLogoLinkedin className="w-7 h-7 rounded-full" />
        </a>
        <a
          href={`mailto:${portfolioConfig.email}`}
          className="my-primary-svg-btn"
          aria-label="Email"
        >
          <BiLogoGmail className="w-7 h-7 rounded-full" />
        </a>
      </div>

      {/* Bio */}
      <div className="profile-card-body">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-right">
          {portfolioConfig.bio.map((bio) => (
            <>
              <dt className="font-medium text-primary">{bio.label}</dt>
              <dd className="text-base-content/80 text-left">{bio.value}</dd>
            </>
          ))}
        </dl>
      </div>
    </div>
  );
}
