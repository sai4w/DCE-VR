import { Rating } from "../Rating";
import { Textarea } from "../ui/textarea";
import { ButtonGradient } from "../ui/button-gradient";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

export const FeedbackReview = () => {
  const [rating, setRating] = useState<number>(3);
  return (
    <div className="flex h-full w-1/2 flex-none flex-col gap-4 overflow-hidden rounded-3xl bg-white p-10 shadow-2xl">
      <p className="text-xl font-bold text-blue-950">Votre note de service</p>
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
        className="h-48 max-h-48 min-h-48 w-full rounded-2xl p-4 text-xl shadow-md placeholder:text-xl placeholder:font-medium placeholder:text-stone-500 focus-visible:ring-1 focus-visible:ring-stone-300"
        placeholder="Si vous avez des commentaires, veuillez les saisir ici..."
      />
      <div className="flex items-center space-x-2 p-4">
        <Checkbox id="termsAndConditions" className="size-6" />
        <label htmlFor="termsAndConditions">
          J'accepte les termes et conditions{" "}
        </label>
      </div>
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
