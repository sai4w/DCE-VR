import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import WhiteLeaf from "@src/assets/images/bg-white-leaf.png";
export const ProfilePostHoverCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button className="size-12 rounded-full border-2 border-primary bg-transparent text-xl text-primary hover:bg-primary hover:text-white">
          i
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div
          style={{ backgroundImage: `url(${WhiteLeaf})` }}
          className="flex w-fit flex-col gap-4 rounded bg-cover bg-center px-4 py-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-48 rounded-full bg-primary px-6 py-2 text-center text-2xl font-medium uppercase text-white">
              dispo
            </div>
            <p className="text-2xl font-medium">
              Le produit est postulé dans le fil.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 rounded-full bg-[#FFC92E] px-6 py-2 text-center text-2xl font-medium uppercase text-white">
              en cours
            </div>
            <p className="text-2xl font-medium">
              Le produit est en cours de location.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 rounded-full bg-[#EF5533] px-6 py-2 text-center text-2xl font-medium uppercase text-white">
              annuler
            </div>
            <p className="text-2xl font-medium">
              La location n'est plus disponible.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
