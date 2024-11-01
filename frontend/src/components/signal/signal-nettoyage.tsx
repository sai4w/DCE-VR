import success from "@src/assets/icons/success.svg";
import badge from "@src/assets/icons/badge1.svg";
import { useUser } from "@src/hooks/useUser";
import { formatDate } from "@src/lib/formatDate";
import { Cleaning } from "@src/types";
interface SignalNettoyageProps {
  nettoyage: Cleaning;
}
export const SignalNettoyage = ({ nettoyage }: SignalNettoyageProps) => {
  const { user } = useUser({ id: nettoyage.id_cleaner });
  if (user === undefined) return null;
  
  return (
    <div className="relative my-8 flex h-fit w-full justify-between gap-8 border border-stone-300 p-8">
      <div className=" flex w-[92%] items-center gap-24">
        <div className="flex flex-1  flex-col gap-4">
          <p className="flex items-center text-2xl font-bold">
            {user.firstname} {user.lastname}
            <img src={success} alt="success" className="size-8 p-1" />
          </p>

          <p className="text-xl text-stone-500">{nettoyage.description}</p>
          <p className="text-xl text-stone-500">
            Posté à {formatDate(nettoyage.date)}
          </p>
        </div>
        <div className="relative flex size-72">
          <img
            src={nettoyage.images[0]}
            alt="signal"
            className="size-72 object-cover object-center brightness-50"
          />
          <div className="absolute right-0 top-0 flex size-72 items-center justify-center text-9xl font-black text-stone-50/70">
            +{nettoyage.images.length}
          </div>
        </div>
      </div>
      <img src={badge} alt="badge" className="absolute right-7 top-0 size-20" />
    </div>
  );
};
