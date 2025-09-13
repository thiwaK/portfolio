"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import GoToTop from "@/components/ui/scroll_to_top";

import { CIcon } from '@coreui/icons-react';
import { cilCompass, cilEducation, cilFeaturedPlaylist, cilCasino, cilPuzzle, cilThumbUp, cilChatBubble,
 cilCloudDownload
 } from "@coreui/icons";

import { IoCompassOutline } from 'react-icons/io5';


export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("focus");

  return (
    <div className="root">
      <div className="fade-in h-screen">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>

        <main className="bg-base-300 grid gap-6 pl-10 pr-10 pt-30 grid-cols-[2fr_5fr] grid-rows-[auto_1fr]">
          <Sidebar activeSection={activeSection}/>

          <div
            className="grid grid-cols-1 mt-3 gap-6
               text-black "
          >
            {/* Primary Focus */}
            <Section
              id="focus"
              title="Primary Focus"
              subtitle="Showcasing major areas of interest"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilCompass} className="w-9 h-9 text-gray-900 transition-transform rotate-yoyo rotate-yoyo-180"/>
                // <IoCompassOutline className="w-9 h-9 text-gray-900 transition-transform duration-500 ease-in-out hover:rotate-180"/>
              }
            >
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
            </Section>

            {/* Projects */}
            <Section
              id="projects"
              title="Projects"
              subtitle="Showcasing what I have done"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilPuzzle} className="w-9 h-9 text-gray-900 flip-yoyo-y"/>
              }
            >
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
            </Section>

            {/* Experience */}
            <Section
              id="experience"
              title="Experience"
              subtitle="What I have work on"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilCasino} className="w-9 h-9 text-gray-900 rotate-yoyo rotate-yoyo-90"/>
              }
            >
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
              <div className="h-40 bg-white rounded-lg shadow"></div>
            </Section>

            {/* Education */}
            <Section
              id="education"
              title="Education"
              subtitle="Showcasing what I have learned"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilEducation} className="w-9 h-9 text-gray-900 flip-yoyo-y"/>
              }
            >
              <div className="h-32 bg-white rounded-lg shadow"></div>
              <div className="h-32 bg-white rounded-lg shadow"></div>
            </Section>

            {/* Contact */}
            <Section
              id="contact"
              title="Contact"
              subtitle="Reach me"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <CIcon icon={cilChatBubble} className="w-9 h-9 text-gray-900 flip-yoyo-y"/>
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
