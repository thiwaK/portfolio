import { AppSection } from "@/types/section";
import CIcon from "@coreui/icons-react";
import { cilCompass } from "@coreui/icons";

import AboutContent from "./content";
import AboutSidebar from "./sidebar";

const about: AppSection = {
  id: "about",
  title: "About",
  subtitle: "Bridging spatial data and software automation",
  order: 1,

  icon: (
    <CIcon icon={cilCompass} className="w-9 h-9 rotate-yoyo rotate-yoyo-180" />
  ),
  gridCols: "grid-cols-1",

  Content: AboutContent,
  Sidebar: AboutSidebar,
};

export default about;
