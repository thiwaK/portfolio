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
    <article
      className="
        group
        overflow-hidden
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
        my-card
      "
    >

      <div className="flex flex-col md:flex-row h-full">

        {/* Image */}
        <div
          className="
            relative
            h-52
            md:h-auto
            md:w-[38%]
            overflow-hidden
            
          "
        >

          <div className="relative h-full w-full pattern-background group-hover:scale-110 duration-200">

          </div>
          {/* <Image
            src={imageUrl}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          /> */}
        </div>

        {/* Content */}
        <div
          className="
            flex
            flex-1
            flex-col
            justify-between
            p-6
          "
        >

          <div>

            {/* <div
              className="
                mb-3
                inline-flex
                rounded-full
                bg-primary/10
                px-3
                py-1
                text-xs
                font-medium
                text-primary
              "
            >
              Primary Focus
            </div> */}

            <h2
              className="
                text-xl
                font-semibold
                tracking-tight
                text-base-content
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-relaxed
                text-base-content/70
                line-clamp-4
              "
            >
              {description}
            </p>

          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">

            <button
              className="
                text-xs
                font-mono
                font-semibold
                px-3
                py-1.5
                rounded-md
                border
                border-accent/20
                bg-accent/5
                text-accent
                transition-all
                duration-300
                hover:border-accent/55
                hover:bg-accent/10
                cursor-pointer
                inline-flex
                items-center
                gap-1
              "
              onClick={onButtonClick}
            >
              {buttonText}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>

          </div>

        </div>

      </div>

    </article>
  );
}