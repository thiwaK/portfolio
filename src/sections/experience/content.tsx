import CIcon from "@coreui/icons-react";

import { cilCasino } from "@coreui/icons";
import CardExperience from "@/components/ui/card-experience";
import { portfolioConfig } from "@/config/portfolio.config";

export default function ExperienceContent() {
  return (
    <>
      {portfolioConfig.experiences.map((experience, index) => (
        <CardExperience
          // key={experience.id}
          role={experience.role}
          company={experience.company}
          date={experience.date}
          description={experience.description}
          companyUrl={experience.companyUrl}
          bullets={experience.bullets}
          tools={experience.tools}
        />
      ))}
    </>
  );
};

// export default {
//   id: "experience",
//   title: "Experience",
//   subtitle: "An overview of my professional journey",
//   gridCols: "grid-cols-1",
//   icon: <CIcon icon={cilCasino} className="w-9 h-9 rotate-yoyo rotate-yoyo-90" />,
//   order: 3,
//   component: content,
// };
