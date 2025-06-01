import { Star } from "lucide-react";

const CardRatings = ({ rating }) => {
  // Validate and clamp rating between 0 and 5
  const safeRating = Math.min(Math.max(Number(rating) || 0, 0), 5);

  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 mb-2">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={"full-" + i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={"empty-" + i} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

export default CardRatings;
