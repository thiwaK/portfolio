"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import GoToTop from "@/components/ui/scroll_to_top";
import CardFocus from "@/components/ui/card-focus";
import CardProject from "@/components/ui/card-project";
import CardCertificate from "@/components/ui/card-certificate";

import { CIcon } from "@coreui/icons-react";
import {
  cilCompass,
  cilEducation,
  cilFeaturedPlaylist,
  cilCasino,
  cilPuzzle,
  cilThumbUp,
  cilChatBubble,
  cilCloudDownload,
} from "@coreui/icons";

import { IoCompassOutline } from "react-icons/io5";
import CardExperience from "@/components/ui/card-experience";

export default function Layout() {
  const [activeSection, setActiveSection] = useState("focus");

  const education = [
    {
      title: "B.Sc. in Computer Science",
      institution: "XYZ University",
      year: "2018 - 2022",
      description:
        "Specialized in software engineering and geospatial analysis.",
      gainedSkills: ["Python", "GIS", "PostgreSQL"],
    },
    {
      title: "Full-Stack Web Development Bootcamp",
      institution: "ABC Academy",
      year: "2022",
      description: "Hands-on projects building full-stack applications.",
      gainedSkills: ["React", "Docker", "AWS"],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon",
      year: "2023",
      image:
        "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp", // path to certificate image
      link: "https://www.credly.com/badges/your-aws-link",
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      year: "2022",
      image:
        "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
      link: "https://www.credly.com/badges/your-google-link",
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      year: "2022",
      image:
        "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
      link: "https://www.credly.com/badges/your-google-link",
    },
  ];

  return (
    <div className="root">
      <div className="fade-in h-screen">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main className="bg-base-300 grid gap-6 pl-10 pr-10 pt-30 grid-cols-[2fr_5fr] grid-rows-[auto_1fr] ">
          <Sidebar activeSection={activeSection} />

          <div className="grid grid-cols-1 mt-3 text-black ">
            {/* Primary Focus */}
            <Section
              id="about"
              title="Primary Focus"
              subtitle="Exploring my core areas of expertise and innovation"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon
                  icon={cilCompass}
                  className="w-9 h-9 rotate-yoyo rotate-yoyo-180"
                />
              }
            >
              <CardFocus
                title="AI & ML Solutions"
                description="Designing and deploying intelligent systems that leverage machine learning for prediction, automation, and optimization across industries."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />

              <CardFocus
                title="Earth Observation & UAV"
                description="Harnessing drone technology and satellite imagery to monitor environments, collect geospatial data, and enable smarter decision-making."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />

              <CardFocus
                title="Data Analytics & Insights"
                description="Transforming raw data into actionable insights through advanced analytics, visualization, and storytelling for informed strategies."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />

              <CardFocus
                title="Automation & Smart Systems"
                description="Building intelligent workflows and IoT-driven solutions that enhance efficiency, reduce errors, and adapt dynamically to real-world needs."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />
            </Section>

            {/* Projects */}
            <Section
              id="projects"
              title="Projects"
              subtitle="Highlights of what I’ve built and delivered"
              gridCols="grid-cols-1 md:grid-cols-3 card-container"
              icon={<CIcon icon={cilPuzzle} className="w-9 h-9 flip-yoyo-y" />}
            >
              <CardProject
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                tags={["featured", "in-progress"]}
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />
              <CardProject
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                tags={["backend", "in-progress", "api"]}
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />
              <CardProject
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />
              <CardProject
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />
            </Section>

            {/* Experience */}
            <Section
              id="experience"
              title="Experience"
              subtitle="An overview of my professional journey"
              gridCols="grid-cols-1"
              icon={
                <CIcon
                  icon={cilCasino}
                  className="w-9 h-9 rotate-yoyo rotate-yoyo-90"
                />
              }
            >
              <CardExperience
                role="Freelancer"
                date="Jul 2025 – Present"
                description="Designed and developed geospatial and full-stack web applications for international and local clients. Delivered end-to-end solutions from requirements gathering to deployment."
                bullets={[
                  "Architected geospatial workflows for environmental and urban planning projects.",
                  "Built full-stack web apps to visualize spatial data and automate reporting.",
                  "Designed intuitive UI/UX flows improving usability for non-technical stakeholders.",
                  "Collaborated with clients across time zones to reduce manual GIS workflows.",
                ]}
                tools={[
                  "React",
                  "Node.js",
                  "PostGIS",
                  "Google Earth Engine",
                  "ArcGIS Pro",
                  "QGIS",
                ]}
              />
              <CardExperience
                role="Associate GIS Officer"
                company="GeoEDGE"
                companyUrl="https://www.geoedge.net/"
                date="Apr 2025 – Jul 2025"
                description="Supported geospatial data analysis and cloud-based data processing workflows."
                bullets={[
                  "Digitized geospatial features and developed vegetation indices.",
                  "Processed large-scale datasets on cloud platforms, improving turnaround time.",
                  "Produced high-quality outputs ensuring accuracy and consistency.",
                ]}
                tools={["Google Earth Engine", "Google Earth", "QGIS", "SNAP"]}
              />
            </Section>

            {/* Education */}
            <Section
              id="education"
              title="Background"
              subtitle="Foundations of what I’ve learned and achieved"
              gridCols=""
              icon={
                <CIcon icon={cilEducation} className="w-9 h-9 flip-yoyo-y" />
              }
            >
              {/* Education milestones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="section-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-base-content/70">
                      {item.institution} • {item.year}
                    </p>
                    <p className="mt-2 text-base-content">{item.description}</p>
                  </div>

                  {/* Skills gained */}
                  {item.gainedSkills?.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-base-content/80 mb-1">
                        Skills Gained
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.gainedSkills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              </div>
              
              

              {/* Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <CardCertificate key={idx} cert={cert} />
                ))}

              </div>
            </Section>

            {/* Contact */}
            <Section
              id="contact"
              title="Contact"
              subtitle="Let’s connect and collaborate"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilChatBubble} className="w-9 h-9 flip-yoyo-y" />
              }
            >
              <div className="h-20 bg-white rounded-lg shadow"></div>
            </Section>
          </div>

          <GoToTop />
        </main>

        <Footer />
      </div>
    </div>
  );
}
