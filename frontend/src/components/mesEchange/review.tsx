import { Rating } from "../Rating";
import { Textarea } from "../ui/textarea";
import { ButtonGradient } from "../ui/button-gradient";
import { useState } from "react";
import { Post } from "@src/types";

interface MesEchangeReviewProps {
  rent: Post;
}
export const MesEchangeReview = ({ rent }: MesEchangeReviewProps) => {
  const [rating, setRating] = useState<number>(3);
  console.log(rent);
  return (
    <div className="flex h-full w-[30%] flex-col gap-4 overflow-hidden rounded-lg bg-white p-10">
      <p className="text-xl font-bold text-blue-950">
        Donnez une note au produit
      </p>
      <Rating
        rating={rating}
        size="size-8 md:size-12"
        setRating={setRating}
        disableHover={false}
        className="gap-4"
      />
      <p className="tex-blue-950 mt-8 text-xl font-bold">
        Commentaire supplémentaires
      </p>
      <Textarea
        className="h-48 max-h-48 min-h-48 w-full rounded-2xl  p-4 shadow-md placeholder:text-base placeholder:font-light placeholder:text-stone-500 focus-visible:ring-1 focus-visible:ring-stone-300"
        placeholder="Si vous avez des commentaires supplémentaires, veuillez les saisir ici.."
      />
      <ButtonGradient
        className="w-fit rounded-[90px] px-12 py-10 text-xl font-bold tracking-normal"
        title="Soumettre"
        onClick={() => {
          console.log("submit");
        }}
      />
    </div>
  );
};
