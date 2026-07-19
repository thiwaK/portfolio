"use client";

// import { useEffect, useState } from "react";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import Section from "@/components/section";
import sections from "@/sections";

import GoToTop from "@/components/ui/scroll_to_top";

// import { Demo } from "@/components/timeline/time-line";
// import { TimelineSegment } from "@/components/timeline/types";

import { SectionProvider } from "@/context/SectionContext";
import { useActiveSection } from "@/hooks/useActiveSection";

function LayoutContent() {
  useActiveSection();

  return (
    <div className="root">
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div> */}
      <div className="fade-in relative">
        <Navbar />

        <main className="mb-10 max-w-7xl mx-auto">
          <div
            className="
                grid
                items-start
                gap-6
                px-4 sm:px-6 lg:px-10 pt-20 lg:pt-30
                grid-cols-1 lg:grid-cols-[2fr_5fr]
              "
          >
            {/* LEFT COLUMN */}
            <aside className="sticky top-33 self-start hidden lg:sticky lg:top-24 lg:block">
              <Sidebar />
            </aside>

            {/* RIGHT COLUMN */}
            <div className="grid grid-cols-1 text-base-content max-w-5xl">
              {sections.map((section) => {
                const Content = section.Content;

                return (
                  <Section
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    subtitle={section.subtitle}
                    gridCols={section.gridCols}
                    icon={section.icon}
                  >
                    <Content />
                  </Section>
                );
              })}
            </div>
          </div>

          <GoToTop />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <SectionProvider>
      <LayoutContent />
    </SectionProvider>
  );
}
