import { JSX } from "react";

import { portfolioConfig } from "@/config/portfolio.config";

import { CIcon } from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";

const sidebarContent: Record<string, JSX.Element> = {
  focus: (
    <div className="text-center flex flex-col gap-5">
      {/* Profile Card */}
      <div className="relative bg-indigo-50 rounded-lg shadow-md p-6 pt-24 text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md border-4 border-white" />
        </div>

        <h2 className="mt-4 text-lg font-semibold">{portfolioConfig.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{portfolioConfig.title}</p>

        <button className="group bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow relative overflow-hidden">
          {/* Text */}
          <span className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            Resume
          </span>
          {/* Icon */}
          <CIcon
            icon={cilCloudDownload}
            className="w-7 h-7 absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <div className="w-8 h-8 rounded-full bg-white shadow" />
        <div className="w-8 h-8 rounded-full bg-white shadow" />
        <div className="w-8 h-8 rounded-full bg-white shadow" />
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

const Sidebar2 = ({ activeSection }: { activeSection: string }) => {
  return (
    <aside className="flex flex-col gap-6 p-3 z-100 self-start h-screen">
      {/* Profile Card */}
      <div className="relative bg-indigo-50 rounded-lg shadow-md p-6 pt-24 text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md border-4 border-white" />
        </div>

        <h2 className="mt-4 text-lg font-semibold">{portfolioConfig.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{portfolioConfig.title}</p>

        <button className="group bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow relative overflow-hidden">
          {/* Text */}
          <span className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            Resume
          </span>
          {/* Icon */}
          <CIcon
            icon={cilCloudDownload}
            className="w-7 h-7 absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <div className="w-8 h-8 rounded-full bg-white shadow" />
        <div className="w-8 h-8 rounded-full bg-white shadow" />
        <div className="w-8 h-8 rounded-full bg-white shadow" />
      </div>

      {/* Bio */}
      <div className="bg-white p-4 rounded-md shadow">
        <p className="text-sm text-gray-600">
          Short bio goes here. Describe yourself in a few lines.
        </p>
      </div>
    </aside>
  );
};

const Sidebar = ({ activeSection }: { activeSection: string }) => {
  return (
    <aside className="sticky top-33 flex flex-col gap-6 h-fit">
      {sidebarContent[activeSection] || (
        <div className="">
          <h3 className="font-bold text-lg mb-2">Hello!</h3>
          <p>Scroll to see more info.</p>
        </div>
      )}
    </aside>
  );
};
export default Sidebar;
