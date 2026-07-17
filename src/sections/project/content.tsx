import CIcon from "@coreui/icons-react";

import { cilPuzzle } from "@coreui/icons";
import CardProject from "@/components/ui/card-project";
import { portfolioConfig } from "@/config/portfolio.config";

export default function ProjectContent() {
  return (
    <>
      {portfolioConfig.projects.map((project) => (
        <CardProject
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          tags={project.tags}
          buttonText={project.buttonText}
          onButtonClick={project.onButtonClick}
        />
      ))}
      {/* <CardProject
        title="Card Title"
        description="A card component has a figure, a body part, and inside body there are title and actions parts."
        imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        tags={["featured", "in-progress"]}
        buttonText="Show More"
        onButtonClick={() => alert("Button clicked!")}
      />
      <CardProject
        title="Card Title"
        description="A card component has a figure, a body part, and inside body there are title and actions parts."
        imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        tags={["backend", "in-progress", "api"]}
        buttonText="Show More"
        onButtonClick={() => alert("Button clicked!")}
      />
      <CardProject
        title="Card Title"
        description="A card component has a figure, a body part, and inside body there are title and actions parts."
        imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        buttonText="Show More"
        onButtonClick={() => alert("Button clicked!")}
      />
      <CardProject
        title="Card Title"
        description="A card component has a figure, a body part, and inside body there are title and actions parts."
        imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        buttonText="Show More"
        onButtonClick={() => alert("Button clicked!")}
      /> */}
    </>
  );
};

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

