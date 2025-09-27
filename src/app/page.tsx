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
              id="focus"
              title="Primary Focus"
              subtitle="Showcasing major areas of interest"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon
                  icon={cilCompass}
                  className="w-9 h-9 rotate-yoyo rotate-yoyo-180"
                />
              }
            >
              <CardFocus
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />

              <CardFocus
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />

              <CardFocus
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />

              <CardFocus
                title="Card Title"
                description="A card component has a figure, a body part, and inside body there are title and actions parts."
                imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                buttonText="Show More"
                onButtonClick={() => alert("Button clicked!")}
              />
            </Section>

            {/* Projects */}
            <Section
              id="projects"
              title="Projects"
              subtitle="Showcasing what I have done"
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
              subtitle="My professional journey"
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
              title="Education"
              subtitle="Showcasing what I have learned"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilEducation} className="w-9 h-9 flip-yoyo-y" />
              }
            >
              {/* Education Card 1 */}
              <div className="bg-info/5 p-6 rounded-lg transform duration-400 hover:scale-[101%] shadow-md hover:shadow-xl">
                <h3 className="text-lg font-bold text-primary mb-1">
                  BSc in Geomatics
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  University of Colombo
                </p>
                <p className="text-sm text-gray-600">2015 - 2019</p>
                <p className="mt-2 text-gray-700 text-sm">
                  Specialized in GIS, Remote Sensing, and Spatial Data Analysis.
                </p>
              </div>

              {/* Education Card 2 */}
              <div className="bg-info/5 p-6 rounded-lg transform duration-400 hover:scale-[101%] shadow-md hover:shadow-xl">
                <h3 className="text-lg font-bold text-primary mb-1">
                  Diploma in GIS & Remote Sensing
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  National Institute of Technology
                </p>
                <p className="text-sm text-gray-600">2020</p>
                <p className="mt-2 text-gray-700 text-sm">
                  Focused on practical GIS applications, satellite image
                  analysis, and spatial modeling.
                </p>
              </div>
            </Section>

            {/* Contact */}
            <Section
              id="contact"
              title="Contact"
              subtitle="Reach me"
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
