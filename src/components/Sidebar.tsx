import { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CIcon } from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";
import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";
import { scrollToPosition, scrollToTop } from "@/components/animation/scroll";

function FilterControls({ tagsList }: { tagsList: string[] }) {
  const [activeTag, setActiveTag] = useState<string>("all");
  const languages = ["python", "javascript", "sql", "kotlin"];

  const handleFilter = (tag: string) => {
    setActiveTag(tag);

    const SCROLL_OFFSET = -130;
    const el = document.getElementById("projects");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
      scrollToPosition(y, 700);
    }

    const cards = document.querySelectorAll<HTMLDivElement>(
      ".card-container .card"
    );
    cards.forEach((card) => {
      const cardTags = (card.dataset.tags || "")
        .split(" ")
        .map((t) => t.trim());
      if (tag === "all") {
        card.style.display = "flex";
      } else {
        card.style.display = cardTags.includes(tag) ? "flex" : "none";
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      <button
        className={`btn text-xs badge badge-soft badge-md border-2 border-transparent  ${
          activeTag === "all"
            ? "text-base-100 bg-primary hover:bg-primary"
            : "btn-ghost hover:bg-primary/30"
        }`}
        onClick={() => handleFilter("all")}
      >
        All
      </button>

      {tagsList.map((tag) => {
        const isActive = activeTag === tag;
        const isLanguage = languages.includes(tag);
        const isProjectTag = ["featured", "in-progress"].includes(tag);

        // Determine base classes
        let classes =
          "btn text-xs badge badge-soft badge-md border-2 border-transparent";

        // Active tag colors
        if (isActive) {
          
          if (isLanguage) classes += " bg-blue-600 text-base-200";
          else if (isProjectTag) classes += " bg-green-600 text-base-200";
          else classes += " text-base-100 bg-primary hover:bg-primary"; // default active
        
        // Inactive tag colors
        } else {
          if (isLanguage) classes += " text-blue-400 hover:bg-blue-400/30";
          else if (isProjectTag) classes += " text-green-400 hover:bg-green-400/30";
          else classes += " btn-ghost hover:bg-primary/30"; // default inactive
        }

        return (
          <button
            key={tag}
            className={classes}
            onClick={() => handleFilter(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

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

        <h2 className="text-xl font-semibold sm:text-2xl text-primary leading-snug pb-2">
          {portfolioConfig.name}
        </h2>
        <div className="text-sm text-base-content/70 mb-6 mt-3 font-mono flex flex-wrap justify-center gap-2 leading-relaxed">
          {portfolioConfig.title.reduce<JSX.Element[]>((acc, title, i) => {
            // if (i > 0) {
            //   acc.push(
            //     <span key={`sep-${i}`} className="text-gray-400">
            //       |
            //     </span>
            //   );
            // }
            acc.push(
              <span
                key={title}
                className="text-xs whitespace-nowrap badge badge-soft badge-dash badge-md"
              >
                {title}
              </span>
            );
            return acc;
          }, [])}
        </div>

        <button className="btn btn-primary btn-outline btn-sm group rounded relative flex items-center justify-center overflow-hidden transition-all transform duration-400 hover:shadow-lg">
          <span className="group-hover:text-base-100 ">Download Resume</span>
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <div className="rounded-full border-1 border-primary p-1 bg-primary/10 text-primary transform duration-400 hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-base-100">
          <FaGithubAlt className="w-7 h-7 rounded-full" />
        </div>
        <div className="rounded-full border-1 border-primary p-1 bg-primary/10 text-primary transform duration-400 hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-base-100">
          <FaMedium className="w-7 h-7 rounded-full" />
        </div>
        <div className="rounded-full border-1 border-primary p-1 bg-primary/10 text-primary transform duration-400 hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-base-100">
          <BiLogoLinkedin className="w-7 h-7 rounded-full" />
        </div>
        <div className="rounded-full border-1 border-primary p-1 bg-primary/10 text-primary transform duration-400 hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-base-100">
          <BiLogoGmail className="w-7 h-7 rounded-full" />
        </div>
      </div>

      {/* Bio */}
      <div className="bg-base-100 p-4 rounded-md shadow">
        <p className="text-sm text-primary">
          Short bio goes here. Describe yourself in a few lines.
        </p>
      </div>
    </div>
  ),
  projects: (
    <div className="relative flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-6 pt-24 text-center">
      <h3 className="font-bold text-lg mb-2 text-primary">Tags</h3>
      <div>
        {/* Filter Controls */}
        <FilterControls
          tagsList={[
            "featured",
            "in-progress",
            "design",
            "backend",
            "frontend",
            "ui",
            "ux",
            "api",
            "devops",
            "research",
            "testing",
            "python",
            "javascript",
            "sql",
            "kotlin",
          ]}
        />
      </div>
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
