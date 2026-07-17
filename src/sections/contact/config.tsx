import { AppSection } from "@/types/section";
import CIcon from "@coreui/icons-react";
import { cilChatBubble } from "@coreui/icons";

import ContactContent from "./content";
import ContactSidebar from "./sidebar";

const contact: AppSection = {
  id: "contact",
  title: "Contact",
  subtitle: "Let’s connect and collaborate",
  order: 5,
  icon: (
    <CIcon icon={cilChatBubble} className="w-9 h-9 flip-yoyo-y" />
  ),
  gridCols: "grid-cols-1 md:grid-cols-2",

  Content: ContactContent,
  Sidebar: ContactSidebar,
};

export default contact;


// export default {
//   id: "contact",
//   title: "Contact",
//   subtitle: "Let’s connect and collaborate",
//   gridCols: "grid-cols-1 md:grid-cols-2",
//   icon: (
//     <CIcon icon={cilChatBubble} className="w-9 h-9 flip-yoyo-y" />
//   ),
//   order: 5,
//   component: content,
// };