import { portfolioConfig } from "@/config/portfolio.config";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 p-3 z-100 self-start h-screen">
      {/* Profile Card */}
      <div className="relative bg-indigo-50 rounded-lg shadow-md p-6 pt-24 text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md border-4 border-white" />
        </div>

        <h2 className="mt-4 text-lg font-semibold">{portfolioConfig.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{portfolioConfig.title}</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
          Resume
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

export default Sidebar;
