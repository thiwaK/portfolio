import Image from "next/image";

interface CardFocusProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CardFocus({
  title,
  description,
  imageUrl,
  buttonText = "Show More",
  onButtonClick,
}: CardFocusProps) {
  return (
    <div
      className="card h-40 rounded-lg shadow bg-info/5 transition-all duration-400 
                 border hover:scale-[101%] p-0 
                 hover:shadow-lg border-primary/10 border-b-0"
    >
      <div className="flex h-full">
        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="w-1/3 h-full object-cover rounded-l-lg"
        />

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-primary">{title}</h2>
            <p className="text-primary/90 line-clamp-3">{description}</p>
          </div>

          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-xs btn-outline rounded 
                         dark:hover:text-primary-content group"
              onClick={onButtonClick}
            >
              <span className="group-hover:text-base-100">{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
