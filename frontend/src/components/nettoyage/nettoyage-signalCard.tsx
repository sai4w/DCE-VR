import clock from "@src/assets/icons/clock.svg";
import { Separator } from "../ui/separator";
import { Signal, User } from "@src/types";
import { avatars } from "@src/assets/avatar/avatar";

interface NettoyageSignalCardProps {
  signal: Signal;
  user: User;
}
export const NettoyageSignalCard = ({
  signal,
  user,
}: NettoyageSignalCardProps) => {
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
    <div className="flex h-fit w-full justify-between gap-8 bg-white p-12">
      <img
        src={signal.images[0]}
        alt="trash"
        className="h-72 w-1/3 object-cover object-center"
      />
      <div className="flex h-72 w-full flex-col justify-between gap-4  p-px">
        <div className="flex h-fit w-fit gap-2 rounded-full border border-stone-300 p-2">
          <img src={clock} alt="clock" />
          <p className="text-stone-300">{formatMongoDate(signal.date)}</p>
        </div>
        <p className="max-h-[75px] min-h-[42px] w-4/5 overflow-hidden text-pretty font-cairo text-3xl font-semibold">
          {signal.title}
        </p>
        <p className="mix-h-full min-h-[58px] overflow-hidden text-pretty text-xl">
          {signal.description}
        </p>
        <Separator />
        <div className="flex h-fit w-full items-center justify-between">
          <div className="flex h-fit w-fit items-center gap-4">
            <img
              src={avatars[Number(user.avatar)]}
              className="size-12 rounded-full border border-primary"
              alt="avatar"
            />
            <p className="text-xl font-bold text-primary">Posté par</p>
            <p className="text-xl font-semibold text-stone-400/70">
              {user.firstname} {user.lastname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
