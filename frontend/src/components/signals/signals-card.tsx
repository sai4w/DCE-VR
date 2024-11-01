import clock from "@src/assets/icons/clock.svg";
import { Separator } from "../ui/separator";
import { ButtonGradient } from "../ui/button-gradient";
import { Button } from "../ui/button";
import cross from "@src/assets/icons/cross.svg";
import success from "@src/assets/icons/success.svg";
import { Signal } from "@src/types";
import { avatars } from "@src/assets/avatar/avatar";

interface SignalCardProps {
  signal: Signal;
}
export const SignalCard = ({ signal }: SignalCardProps) => {
  function formatMongoDate(mongoDate: Date): string {
    const date = new Date(mongoDate);
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const time = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} à ${time}`;
  }

  return (
    <div className="relative flex h-fit w-full justify-between gap-8 bg-white p-12">
      <img
        src={signal.images[0]}
        alt="trash"
        className="h-72 w-[450px] flex-none object-scale-down object-center"
      />
      <div className="flex h-72 w-full flex-col justify-between gap-4 p-px">
        <div className="flex h-fit w-fit gap-2 rounded-full border border-stone-300 p-2">
          <img src={clock} alt="clock" />
          <p className="text-stone-300">{formatMongoDate(signal.date)}</p>
        </div>
        <p className="max-h-[75px] min-h-[42px] w-full overflow-hidden text-pretty font-cairo text-3xl font-semibold">
          {signal.title}
        </p>
        <p className="h-full min-h-[58px] overflow-hidden break-words text-xl">
          {signal.description}
        </p>
        <Separator />
        <div className="flex h-fit w-full items-center justify-between">
          <div className="flex h-fit w-fit items-center gap-4">
            <img
              src={avatars[Number(signal.user.avatar)]}
              className="size-12 rounded-full border border-primary"
              alt="avatar"
            />
            <p className="text-xl font-bold text-primary">Posté par</p>
            <p className="text-xl font-semibold text-stone-400/70">
              {signal.user.firstname} {signal.user.lastname}
            </p>
          </div>
          <div className="flex h-full w-fit items-center gap-8">
            <Button className="hover:shadow-neon hover:bg-gradient border border-primary bg-transparent p-6 text-xl font-medium text-primary hover:text-white">
              + Google Map
            </Button>
            <ButtonGradient
              href={`/signal/${signal._id}`}
              title={signal.status == "cleaned" ? "Voir plus" : "Nettoyer"}
              className="px-10 py-6 text-xl font-medium tracking-normal"
            />
          </div>
        </div>
      </div>
      <img
        src={signal.status == "cleaned" ? success : cross}
        alt="cross"
        className="absolute right-12 size-24"
      />
    </div>
  );
};
