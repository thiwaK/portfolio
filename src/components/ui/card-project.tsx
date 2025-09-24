interface CardProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CardProject({
  title,
  description,
  imageUrl,
  buttonText = "View Project",
  onButtonClick,
}: CardProjectProps) {
  return (
    <div className="card bg-info/5 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[101%]">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />

      {/* Body */}
      <div className="p-4">
        {/* Tags (example for project, adjust as needed) */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-[0.6rem] whitespace-nowrap badge  badge-soft badge-dash badge-sm">
            featured
          </span>
          <span className="px-2 py-1 text-[0.6rem] whitespace-nowrap badge badge-soft badge-dash badge-sm">
            in-progress
          </span>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-primary">{title}</h2>

        {/* Description */}
        <p className="text-primary text-sm mt-1 line-clamp-3">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 p-4 bg-base-300/30">
        <button
          onClick={onButtonClick}
          className="flex-1 btn btn-sm btn-soft btn-neutral border-2 rounded group">
          <span className="text-gray-800 group-hover:text-gray-100 dark:text-gray-100">{buttonText}</span>
        </button>
        <button className="btn btn-sm btn-soft btn-neutral border-2 rounded group hover:bg-rose-100 hover:border-rose-200">
          <span className="group-hover:hidden">❤️</span>
          <span className="hidden group-hover:inline-flex">💖</span>
          
        </button>
      </div>
    </div>
  );
}
