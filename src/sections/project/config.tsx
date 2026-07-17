import { AppSection } from "@/types/section";
import CIcon from "@coreui/icons-react";
import { cilPuzzle } from "@coreui/icons";

import ProjectContent from "./content";
import ProjectSidebar from "./sidebar";

const projects: AppSection = {
  id: "projects",
  title: "Projects",
  subtitle: "Highlights of what I’ve built and delivered",
  order: 2,

  icon: <CIcon icon={cilPuzzle} className="w-9 h-9 flip-yoyo-y" />,
  gridCols: "grid-cols-1 md:grid-cols-3 card-container",

  Content: ProjectContent,
  Sidebar: ProjectSidebar,
};

export default projects;

// export default {
//   id: "projects",
//   title: "Projects",
//   subtitle: "Highlights of what I’ve built and delivered",
//   gridCols: "grid-cols-1 md:grid-cols-3 card-container",
//   icon: (
//     <CIcon icon={cilPuzzle} className="w-9 h-9 flip-yoyo-y" />
//   ),
//   order: 2,
//   component: content,
// };

