
FilterControls
import CardProject from "./ui/card-project";
import { FilterControls } from "./ui/card-project-filter";

interface ProjectGalleryProps {
  projects: CardProjectProps[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <div className="relative bg-base-100 rounded-lg shadow-md p-6 pt-24 text-center">
      <h3 className="font-bold text-lg mb-2">Projects</h3>

      {/* Filters */}
      <FilterControls />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cards-container">
        {projects.map((p) => (
          <CardProject key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}