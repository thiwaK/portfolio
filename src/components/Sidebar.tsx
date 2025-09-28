import { JSX, useState, useEffect } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { portfolioConfig } from "@/config/portfolio.config";
import { scrollToPosition, scrollToTop } from "@/components/animation/scroll";
import { ExperienceItem } from "./ui/experience-item";
import Timeline from "./ui/experience-item";

function FilterControls({ tagsList }: { tagsList: string[] }) {
  const [activeTag, setActiveTag] = useState<string>("all");

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
        className={`btn text-xs badge badge-soft badge-md border-2 border-transparent font-normal ${
          activeTag === "all"
            ? "text-base-100 bg-primary hover:bg-primary"
            : "btn-ghost hover:bg-primary/30"
        }`}
        onClick={() => handleFilter("all")}
      >
        All
      </button>

      {/* TODO: Need improvements */}
      {tagsList.map((tag) => {
        const isActive = activeTag === tag;
        const isLanguage = ["python", "javascript", "sql", "kotlin"].includes(
          tag
        );
        const isHighlights = ["featured", "in-progress"].includes(tag);
        const is = ["featured", "in-progress"].includes(tag);

        // Determine base classes
        let classes =
          "btn text-xs badge badge-soft badge-md border-2 border-transparent font-mono font-normal";

        // Active tag colors
        if (isActive) {
          if (isLanguage) classes += " bg-blue-600 text-base-200";
          else if (isHighlights) classes += " bg-green-600 text-base-200";
          else classes += " text-base-100 bg-primary hover:bg-primary"; // default active

          // Inactive tag colors
        } else {
          if (isLanguage) classes += " text-blue-500 hover:bg-blue-400/30";
          else if (isHighlights)
            classes += " text-green-500 hover:bg-green-400/30";
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

const age = new Date().getFullYear() - 1999;

const experiences: ExperienceItem[] = [
  {
    role: "Freelancer",
    company: "Independent / Remote",
    date: "2025 July – Present",
    description:
      "Geospatial solution architect, Full-stack development, and client projects.",
  },
  {
    role: "Associate GIS Officer",
    company: "GeoEDGE",
    companyUrl: "https://example.com",
    date: "2025 April – 2025 July",
    description:
      "Feature digitization, indices development, cloud data processing(GEE).",
  },
  {
    role: "Intern",
    company: "Natural Resources Managmenet Center (NRMC)",
    companyUrl: "https://example.com",
    date: "2025 April – 2025 July",
    description:
      "contributed to redefine of Sri Lanka's new sensitive area definition by calculating slope factor.",
  },
];

const sidebarContent: Record<string, JSX.Element> = {
  about: (
    <div className="text-center flex flex-col gap-3">
      {/* Profile Card */}
      <div className="profile-card relative pt-24 text-center">
        <div className="avatar w-36 h-36 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="rounded-full bg-base-100 border-4 border-base-300">
            <Image
              className="rounded-full bg-base-300 border-4 border-base-100 shadow transform duration-400 hover:scale-110 hover:shadow-lg"
              // src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              src="/avatar.png"
              alt="Profile image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold sm:text-2xl text-primary leading-snug pb-2">
          {portfolioConfig.name}
        </h2>
        <div className="text-sm text-base-content/70 mb-6 mt-2 font-mono flex flex-wrap justify-center gap-2 leading-relaxed">
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

        <button className="my-primary-btn group relative">
          <span className="">Download Resume</span>
        </button>
      </div>

      {/* Social Links */}
      <div className="profile-card-body flex flex-row justify-center gap-4 ">
        <div className="my-primary-svg-btn">
          <FaGithubAlt className="w-7 h-7 rounded-full" />
        </div>
        <div className="my-primary-svg-btn">
          <FaMedium className="w-7 h-7 rounded-full" />
        </div>
        <div className="my-primary-svg-btn">
          <BiLogoLinkedin className="w-7 h-7 rounded-full" />
        </div>
        <div className="my-primary-svg-btn">
          <BiLogoGmail className="w-7 h-7 rounded-full" />
        </div>
      </div>

      {/* Bio */}
      <div className="profile-card-body">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-right">
          <dt className="font-medium text-primary ">Location</dt>
          <dd className="text-base-content/80 text-left">Sri Lanka</dd>

          <dt className="font-medium text-primary">Age</dt>
          <dd className="text-base-content/80 text-left">{age}</dd>

          <dt className="font-medium text-primary">Education</dt>
          <dd className="text-base-content/80 text-left">B.Sc. (Hons) in GIS</dd>

          <dt className="font-medium text-primary">Personality</dt>
          <dd className="text-base-content/80 text-left">INTJ-A</dd>
        </dl>
      </div>
    </div>
  ),
  projects: (
    <div className="sidebar-content">
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
    <div className="sidebar-content">
      <h3 className="font-bold text-lg mb-2">Experience</h3>
      <Timeline items={experiences} />;
    </div>
  ),
  education: (
    <div className="sidebar-content">
      <h3 className="font-bold text-lg mb-2">Education</h3>
      <p>Degrees, certifications, and continuous learning paths.</p>
    </div>
  ),
  contact: (
    <div className="sidebar-content">
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
