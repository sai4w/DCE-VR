import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import WhiteLeaf from "@src/assets/images/bg-white-leaf.png";

export const ProfileRentHoverCard = () => {
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
              actif
            </div>
            <p className="text-2xl font-medium">
              Le produit est en cours de location.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 rounded-full bg-[#FFC92E] px-6 py-2 text-center text-lg font-medium uppercase text-white">
              en attendant
            </div>
            <p className="text-2xl font-medium">
              En attendant la confirmation de loeur.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 rounded-full bg-[#2D77AD] px-6 py-2 text-center text-2xl font-medium uppercase text-white">
              arrivage
            </div>
            <p className="text-2xl font-medium">
              Le produit est en cours d'arrivée.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 rounded-full bg-[#EF5533] px-6 py-2 text-center text-2xl font-medium uppercase text-white">
              expiré
            </div>
            <p className="text-2xl font-medium">La location est terminée.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
