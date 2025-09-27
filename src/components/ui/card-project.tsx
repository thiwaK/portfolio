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
      className={`card bg-info/5 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[101%] flex flex-col`}
      data-tags={normalizedTags} // IMPORTANT for filtering
    >
      {/* Image */}
      <Image src={imageUrl} alt={title} width={500} height={500} className="w-full h-40 object-cover" />

      {/* Body */}
      <div className="p-4 flex-1">
        {/* Dynamic Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[0.6rem] whitespace-nowrap badge badge-soft badge-dash badge-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-semibold text-primary">{title}</h2>

        {/* Description */}
        <p className="text-primary text-sm mt-1 line-clamp-3">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 p-4 bg-base-300/30 leading-0">
        <button
          onClick={onButtonClick}
          className="flex-1 btn btn-sm btn-neutral btn-soft border-2 rounded group"
        >
          <span className="group-hover:text-gray-100 text-[color-mix(in_oklch,_var(--color-primary)_90%,_black)]">
            {buttonText}
          </span>
        </button>

        <button className="btn btn-sm btn-soft btn-neutral border-2 rounded group hover:bg-rose-100 hover:border-rose-200">
          <span className="group-hover:hidden">❤️</span>
          <span className="hidden group-hover:inline-flex">💖</span>
        </button>
      </div>
    </div>
  );
}
