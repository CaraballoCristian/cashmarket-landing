import { StarIcon } from "lucide-react";

const Stars = ({ count = 5 }) => {
  const starsArray = Array.from({ length: count });

  return (
    <div className="flex gap-2">
      {starsArray.map((_, i) => (
        <StarIcon
          key={i}
          className="text-yellow-500 fill-current size-3 md:size-5"
        />
      ))}
    </div>
  );
};

export default Stars;
