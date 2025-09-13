import { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CIcon } from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";
import { FaGithubAlt } from 'react-icons/fa6';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaMedium } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

import { portfolioConfig } from "@/config/portfolio.config";

const sidebarContent: Record<string, JSX.Element> = {
  focus: (
    <div className="text-center flex flex-col gap-5">
      {/* Profile Card */}
      <div className="card relative bg-base-100 rounded-lg shadow-md p-6 pt-24 text-center">
        <div className="avatar w-32 h-32 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="rounded-full bg-base-100 border-4 border-base-300">
            <img
              className="rounded-full bg-base-300 border-4 border-base-100 shadow transform duration-400 hover:scale-110 hover:shadow-lg"
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>

        {/* <div className="avatar absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 avatar-online">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div> */}

        <h2 className="text-base text-base-content truncate mt-4 font-semibold">
          {portfolioConfig.name}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{portfolioConfig.title}</p>

        <button className="btn btn-primary group text-base-100 rounded shadow relative overflow-hidden">
          {/* Text */}
          <span className="transition duration-400 opacity-100 group-hover:opacity-0">
            Resume
          </span>
          {/* Icon */}
          <CIcon
            icon={cilCloudDownload}
            className="w-7 h-7 absolute inset-0 m-auto opacity-0 transition duration-400 group-hover:opacity-100"
          />
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <div className="rounded-full border-3 p-1 bg-primary transform duration-400 hover:scale-110 hover:shadow-lg">
          <FaGithubAlt className="w-8 h-8 rounded-full bg-primary"/>
          </div>
        <div className="rounded-full border-3 p-1 bg-primary transform duration-400 hover:scale-110 hover:shadow-lg">
          <FaMedium className="w-8 h-8 rounded-full bg-primary"/>
          </div>
        <div className="rounded-full border-3 p-1 bg-primary transform duration-400 hover:scale-110 hover:shadow-lg">
          <BiLogoLinkedin className="w-8 h-8 rounded-full bg-primary"/>
          </div>
          <div className="rounded-full border-3 p-1 bg-primary transform duration-400 hover:scale-110 hover:shadow-lg">
          <BiLogoGmail className="w-8 h-8 rounded-full bg-primary"/>
          </div>
      </div>

      {/* Bio */}
      <div className="bg-white p-4 rounded-md shadow">
        <p className="text-sm text-gray-600">
          Short bio goes here. Describe yourself in a few lines.
        </p>
      </div>
    </div>
  ),
  projects: (
    <div className="relative bg-indigo-50 rounded-lg shadow-md p-6 pt-24 text-center">
      <h3 className="font-bold text-lg mb-2">Projects</h3>
      <ul className="list-disc pl-5">
        <li>Featured case studies</li>
        <li>GitHub repos</li>
        <li>Live demos</li>
      </ul>
    </div>
  ),
  experience: (
    <div>
      <h3 className="font-bold text-lg mb-2">Experience</h3>
      <p>Quick timeline of my career and achievements.</p>
    </div>
  ),
  education: (
    <div>
      <h3 className="font-bold text-lg mb-2">Education</h3>
      <p>Degrees, certifications, and continuous learning paths.</p>
    </div>
  ),
  contact: (
    <div>
      <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
      <p>Email: example@email.com</p>
      <p>LinkedIn: /your-profile</p>
    </div>
  ),
};

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY) {
        setScrollDir("down");
      } else if (y < lastY) {
        setScrollDir("up");
      }
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollDir;
}

const Sidebar = ({ activeSection }: { activeSection: string }) => {
  const [visible, setVisible] = useState(true);
  const scrollDir = useScrollDirection();

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeSection]);

  return (
    <aside className="sticky top-33 flex flex-col gap-6 h-fit">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{
            opacity: 0,
            y: scrollDir === "down" ? 40 : -40, // slide from bottom if scrolling down
          }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: scrollDir === "down" ? -40 : 40, // slide opposite direction when leaving
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {sidebarContent[activeSection] || (
            <div>
              <h3 className="font-bold text-lg mb-2">Hello!</h3>
              <p>Scroll to see more info.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </aside>
  );
};
export default Sidebar;
