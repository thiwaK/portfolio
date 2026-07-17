import { AppSection } from "@/types/section";
import CIcon from "@coreui/icons-react";
import { cilCasino } from "@coreui/icons";

import ExperienceContent from "./content";
import ExperienceSidebar from "./sidebar";

const experience: AppSection = {
  id: "experience",
  title: "Experience",
  subtitle: "An overview of my professional journey",
  order: 3,

  icon: <CIcon icon={cilCasino} className="w-9 h-9 rotate-yoyo rotate-yoyo-90" />,
  gridCols: "grid-cols-1 md:grid-cols-2",

  Content: ExperienceContent,
  Sidebar: ExperienceSidebar,
};

export default experience;

// export default {
//   id: "experience",
//   title: "Experience",
//   subtitle: "An overview of my professional journey",
//   gridCols: "grid-cols-1",
//   icon: <CIcon icon={cilCasino} className="w-9 h-9 rotate-yoyo rotate-yoyo-90" />,
//   order: 3,
//   component: content,
// };
