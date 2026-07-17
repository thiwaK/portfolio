import { AppSection } from "@/types/section";
import CIcon from "@coreui/icons-react";
import { cilEducation } from "@coreui/icons";

import EducationContent from "./content";
import EducationSidebar from "./sidebar";

const education: AppSection = {
  id: "education",
  title: "Background",
  subtitle: "Foundations of what I’ve learned and achieved",
  order: 4,

  icon: (
    <CIcon icon={cilEducation} className="w-9 h-9 flip-yoyo-y" />
  ),
  gridCols: "grid-cols-1 md:grid-cols-2",

  Content: EducationContent,
  Sidebar: EducationSidebar,
};

export default education;
