import Star from "@src/assets/icons/Star";
import { useState } from "react";

interface RatingProps {
  rating: number;
  titled?: boolean;
  size?: string;
  className?: string;
  setRating?: (value: number) => void;
  disableHover?: boolean;
}

export const Rating = ({
  rating,
  titled = false,
  size = "size-4 md:size-6",
  className = "",
  setRating,
  disableHover = true,
}: RatingProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <label key={starIndex} className="flex cursor-pointer items-center">
            <input
              type="radio"
              className="hidden"
              name="rating"
              value={rating}
              onClick={() => setRating && setRating(starIndex)}
            />
            <Star
              onMouseEnter={() => !disableHover && setHover(starIndex)}
              onMouseLeave={() => !disableHover && setHover(null)}
              className={`${size} ${
                starIndex <= (hover || rating)
                  ? "fill-primary text-transparent"
                  : "fill-stone-200 text-transparent"
              }`}
            />
          </label>
        );
      })}
      {titled && <span className="ml-2">{rating}/5</span>}
    </div>
  );
};
