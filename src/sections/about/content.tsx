"use client";

import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";

import CardFocus from "@/components/ui/card-focus";
import { portfolioConfig } from "@/config/portfolio.config";
import { getAssetPath } from "@/utils/basePath";
// import { ContourNoiseCanvas, ContourNoiseCard } from "@/components/animation/flows";

export default function AboutContent() {
  const age = new Date().getFullYear() - 1999;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = -130;
      const y = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* ==========================================================================
          MOBILE PROFILE BANNER (Only visible on screens smaller than 'lg')
          ========================================================================== */}
      <div className="block lg:hidden w-full space-y-4 mt-2">
        {/* Profile Card */}
        <div className="section-card p-6 text-center flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-md shrink-0">
            <Image
              className="rounded-full bg-base-300 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              src={getAssetPath("/avatar.png")}
              alt="Profile image"
              width={150}
              height={150}
              priority
            />
          </div>

          <h2 className="tracking-tight text-transparent text-xl font-bold sm:text-2xl bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text">
            {portfolioConfig.name}
          </h2>

          <div className="text-xs text-base-content/70 mb-4 mt-2 font-mono flex flex-wrap justify-center gap-1.5">
            {portfolioConfig.title.map((title) => (
              <span
                key={title}
                className="px-2 py-0.5 whitespace-nowrap badge badge-soft badge-dash badge-sm"
              >
                {title}
              </span>
            ))}
          </div>

          <a
            href={getAssetPath("/resume.pdf")}
            download
            className="my-primary-btn group relative w-full text-center inline-flex items-center justify-center py-2"
          >
            <span className="group-hover:text-base-100 text-sm font-semibold">Download Resume</span>
          </a>
        </div>

        {/* Social Links & Bio Panel */}
        <div className="grid grid-cols-2 gap-3">
          <div className="section-card flex flex-row justify-center items-center gap-3 p-4">
            <a
              href={portfolioConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="my-primary-svg-btn"
              aria-label="GitHub"
            >
              <FaGithubAlt className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="my-primary-svg-btn"
              aria-label="Medium"
            >
              <FaMedium className="w-5 h-5" />
            </a>
            <a
              href={portfolioConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="my-primary-svg-btn"
              aria-label="LinkedIn"
            >
              <BiLogoLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="my-primary-svg-btn"
              aria-label="Email"
            >
              <BiLogoGmail className="w-5 h-5" />
            </a>
          </div>

          <div className="section-card p-4">
            <dl className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
              {portfolioConfig.bio.map((bio) => (
                <>
                  <dt className="font-semibold text-primary text-right">{bio.label}</dt>
                  <dd className="text-base-content/80 text-left">{bio.value}</dd>
                </>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          ELEVATOR PITCH (Targeting Hiring Managers and Startup CEOs)
          ========================================================================== */}
      <div className="relative bg-primary/5 p-6 rounded-xl shadow-sm overflow-hidden">

        {/* left side border effect */}
        {/* <div className="absolute inset-y-0 left-0 w-1 bg-primary"></div> */}

        <div className="relative z-10">
          <h4 className="text-base font-semibold text-primary uppercase tracking-wider mb-2">
            Executive Summary
          </h4>
          <p className="text-[1.0rem] text-base-content/80 leading-relaxed font-sans">
            {portfolioConfig.executiveSummary}
          </p>
        </div>

      </div>

      {/* ==========================================================================
          IMPACT METRICS GRID (Showcasing Concrete Geospatial Value)
          ========================================================================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-2 pt-4">

        {portfolioConfig.impact.map((impact) => (
          <div
            key={impact.id}
            className="group relative overflow-hidden rounded-lg border border-base-300/60 bg-base-100/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
          >
            {/* Ghost watermark number — anchored to card bottom-right */}
            <span className="absolute bottom-1 right-2 text-6xl font-black text-base-300/15 select-none group-hover:text-base-300/30 transition-colors duration-300 leading-none">
              {String(impact.id).padStart(2, "0")}
            </span>

            {/* Gradient header band */}
            <div className="relative flex items-center px-4 py-3 bg-gradient-to-r from-primary to-accent overflow-hidden">
              {/* Subtle shimmer overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="relative z-10 text-[0.9rem] font-bold uppercase tracking-[0.2em] text-white drop-shadow-sm leading-tight">
                {impact.title}
              </h3>
            </div>

            {/* Value area */}
            <div className="px-4 py-4">
              <p className="relative z-10 text-sm leading-5 text-base-content/80">
                {impact.value}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* ==========================================================================
          FLOW FIELD ANIMATION
          ========================================================================== */}
      {/* <div className="my-6 h-64 border rounded-xl border-base-300/60 bg-base-100/90">
        <ContourNoiseCard />
      </div> */}

      {/* ==========================================================================
          CORE FOCUS CARDS (Redesigned with custom illustrations)
          ========================================================================== */}
      <div>
        <h4 className="text-base text-center font-semibold text-base-content/80 uppercase tracking-wider mb-4 pt-4">
          How I Can Help You
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioConfig.focusAreas.map((focus) => (
            <CardFocus
              key={focus.id}
              title={focus.title}
              description={focus.description}
              imageUrl={focus.imgUrl}
              buttonText={focus.buttonText}
              onButtonClick={() => scrollToSection(focus.buttonLink)}
            />
          ))}
          {/* <CardFocus
            title="Geospatial Cloud & Automation"
            description="Developing automated spatial pipelines to process massive remote sensing archives. Experienced in writing scalable Google Earth Engine scripts and Python automation workflows to compute environmental indices (NDVI, NDWI) and extract insights."
            imageUrl="/focus_cloud_automation.png"
            buttonText="View Experience"
            onButtonClick={() => scrollToSection("experience")}
          />

          <CardFocus
            title="Full-Stack Web Mapping"
            description="Building high-performance interactive maps and spatial dashboards. Architecting database structures with PostgreSQL/PostGIS and developing responsive user interfaces using Next.js, Tailwind CSS, Leaflet, and Mapbox."
            imageUrl="/focus_web_mapping.png"
            buttonText="View Projects"
            onButtonClick={() => scrollToSection("projects")}
          />

          <CardFocus
            title="Cartography & Modeling"
            description="Applying scientific geographic principles to cartographic design and terrain analysis. Contributed to government initiatives by modeling complex slope factors for agricultural zoning and boundary definitions."
            imageUrl="/focus_cartography.png"
            buttonText="View Background"
            onButtonClick={() => scrollToSection("education")}
          />

          <CardFocus
            title="Automation & ETL Pipelines"
            description="Eliminating repetitive manual digitizing and GIS processes. Developing Python scripting tools, database triggers, and automation routines that convert complex spatial data formats into clean, structured datasets."
            imageUrl="/focus_python_pipeline.png"
            buttonText="Get In Touch"
            onButtonClick={() => scrollToSection("contact")}
          /> */}
        </div>
      </div>
    </div>
  );
}