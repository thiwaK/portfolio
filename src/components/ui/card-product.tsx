import Image from "next/image";

interface CardProductProps {
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  imageUrl: string;
  tags?: string[];
  rating?: number;
  reviews?: number;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CardProduct({
  title,
  price,
  oldPrice,
  discount,
  imageUrl,
  tags = [],
  rating = 4.5,
  reviews = 0,
  buttonText = "Add to cart",
  onButtonClick,
}: CardProductProps) {
  return (
    <div className="my-card h-full flex flex-col overflow-hidden rounded-box border border-base-content/10 shadow-sm transition-all duration-300 hover:scale-[101%] group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={288}
          height={288}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 right-3">
            <span className="badge badge-success badge-sm font-semibold shadow">
              {discount}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-soft badge-dash badge-sm text-[0.7rem]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-primary leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-2xl font-bold text-base-content">
            Rp {price.toLocaleString()}
          </span>

          {oldPrice && (
            <span className="text-sm line-through text-base-content/40">
              Rp {oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="text-warning tracking-wide">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>

          <span className="text-base-content/60">
            ({reviews} reviews)
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-dashed border-base-content/15 flex items-center gap-2">

          <button
            onClick={onButtonClick}
            className="btn btn-primary btn-sm flex-1 rounded-lg"
          >
            {buttonText}
          </button>

          <button className="btn btn-soft btn-square btn-sm">
            ❤️
          </button>

          <button className="btn btn-soft btn-square btn-sm">
            👁
          </button>

        </div>

      </div>

    </div>
  );
}
