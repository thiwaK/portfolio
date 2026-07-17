import { getAssetPath } from "@/utils/basePath";
import Image from "next/image";

interface CardProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CardProject({
  title,
  description,
  imageUrl,
  tags = [],
  buttonText = "View Project",
  onButtonClick,
}: CardProjectProps) {
  const normalizedTags = tags
    .map((t) => t.toLowerCase().trim())
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="my-card h-full flex flex-col overflow-hidden group"
      data-tags={normalizedTags}
    >
      {/* Image + Title Overlay */}
      <div className="relative w-full h-44 overflow-hidden">

        <Image
          src={getAssetPath(imageUrl)}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pattern-background-box"
        />

        {/* Overlay */}
        <div
          className="
        absolute inset-0 
        bg-black/10 
        transition-all duration-300
        group-hover:bg-black/45
      "
        />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center p-5 text-center">
          <h2 className="font-bold text-xl text-primary tracking-wide uppercase drop-shadow-md text-buffer-halo"> {title} </h2>
        </div>

      </div>


      {/* Body */}
      <div className="flex flex-col flex-1 p-5">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
            badge 
            badge-soft 
            badge-dash 
            badge-sm
            text-[0.65rem]
          "
            >
              {tag}
            </span>
          ))}
        </div>


        {/* Description */}
        <p
          className="
        text-secondary
        text-sm
        leading-relaxed
        line-clamp-5
      "
        >
          {description}
        </p>


        {/* Spacer pushes footer down */}
        <div className="flex-1" />


        {/* Footer */}
        <div
          className="
        mt-5
        pt-4
        border-t
        border-dashed
        border-base-content/15
        flex
        items-center
        gap-2
      "
        >

          <button
            onClick={onButtonClick}
            className="
          flex-1
          btn
          btn-sm
          btn-soft
          font-semibold
          rounded-md
          border
          border-accent/20
          bg-accent/5
          text-accent
          transition-all
          duration-300
          hover:border-accent/50
          hover:bg-accent/10
          group/button
        "
          >
            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              {buttonText}
            </span>
          </button>


          <button
            className="
          btn
          btn-sm
          btn-square
          btn-soft
          hover:bg-rose-100
          hover:text-rose-500
          transition-colors
        "
          >
            ❤️
          </button>

        </div>

      </div>

    </div>
  );
}
