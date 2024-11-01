import { Rating } from "@components/Rating";
import { Post } from "@src/types";
interface ProductProps {
  rent: Post;
  setSelected: () => void;
  isSelected: boolean;
}
export const MyRentCard = ({ rent, setSelected, isSelected }: ProductProps) => {
  return (
    <div
      onClick={() => setSelected()}
      className={`flex h-48 w-full cursor-pointer select-none items-center justify-between overflow-hidden rounded-lg bg-white p-2 hover:ring-2 hover:ring-primary ${isSelected && "ring-2 ring-primary"}`}
    >
      <img
        src={rent.images[0]}
        alt={rent.title}
        className="mx-auto h-fit w-2/5 select-none rounded-s-lg object-scale-down object-center transition-transform duration-150 "
      />
      <div className="flex w-3/5 flex-col justify-between gap-y-px space-y-1 px-5 py-4">
        <h1 className="h-fit w-full overflow-hidden truncate text-ellipsis text-lg font-semibold">
          {rent.title}
        </h1>
        <Rating
          rating={rent.rating}
          titled
          disableHover
          size="size-5 md:size-6"
        />
        <p className="text-xl font-semibold">{rent.price.day}/J</p>

        {rent.reservation[0].disponibility === "actif" ? (
          <div className="rounded-full bg-primary px-4 py-1.5 text-center text-xl font-medium text-white">
            {rent.reservation[0].disponibility}
          </div>
        ) : rent.reservation[0].disponibility === "attendant" ? (
          <div className="rounded-full bg-[#FFC92E] px-4 py-1.5 text-center text-xl font-medium text-white">
            {rent.reservation[0].disponibility}
          </div>
        ) : rent.reservation[0].disponibility === "arrivage" ? (
          <div className="rounded-full bg-[#2D77AD] px-4 py-1.5 text-center text-xl font-medium text-white">
            {rent.reservation[0].disponibility}
          </div>
        ) : (
          <div className="rounded-full bg-[#EF5533] px-4 py-1.5 text-center text-xl font-medium text-white">
            {rent.reservation[0].disponibility}
          </div>
        )}
      </div>
    </div>
  );
};
