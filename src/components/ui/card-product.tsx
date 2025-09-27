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
    <div className="card w-72 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <Image src={imageUrl} alt={title} width={288} height={288} className="w-full h-40 object-cover" />

      {/* Body */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-semibold text-gray-800">{title}</h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-gray-900">
            Rp {price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              Rp {oldPrice.toLocaleString()}
            </span>
          )}
          {discount && (
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
              {discount}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2 text-yellow-500 text-sm">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
          <span className="ml-2 text-gray-500">{reviews} reviews</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 p-4 border-t">
        <button
          onClick={onButtonClick}
          className="flex-1 btn btn-sm bg-primary text-white hover:bg-primary/90 rounded"
        >
          {buttonText}
        </button>
        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 rounded">
          ♥
        </button>
        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 rounded">
          👁
        </button>
      </div>
    </div>
  );
}
