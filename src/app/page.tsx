import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import GoToTop from "@/components/ui/to_top"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <div className="fade-in h-screen">
        <Navbar />

        <main className="grid gap-6 pl-10 pr-10 pt-30 bg-white grid-cols-[2fr_5fr] grid-rows-[auto_1fr] ">
          <Sidebar />

          <div
            className="grid grid-cols-1 mr-6 mt-3 bg-green-100 p-6 gap-6 
               text-black rounded-tl-lg rounded-tr-lg shadow-md"
          >
            {/* Primary Focus */}
            <Section
              id="focus"
              title="Primary Focus"
              subtitle="Showcasing major areas of interest"
              gridCols="grid-cols-1 md:grid-cols-2"
              icon={
                <svg
                  className="w-6 h-6 stroke-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
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
                <svg
                  className="w-6 h-6 stroke-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
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
                <svg
                  className="w-6 h-6 stroke-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
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
                <svg
                  className="w-6 h-6 stroke-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
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
                <svg
                  className="w-6 h-6 stroke-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              }
            >
              <div className="h-20 bg-white rounded-lg shadow"></div>
            </Section>
          </div>

          <GoToTop/>
        </main>

        <Footer />
      </div>
    </div>
  );
}
