import { useContext } from "react";
import { avatars } from "@src/assets/avatar/avatar";
import { Button } from "@src/components/ui/button";
import { SignalContext } from "@src/pages/signal";

export const SignalMoreDetails = () => {
  const signal = useContext(SignalContext).signal;
  const user = useContext(SignalContext).user;
  return (
    <div className="my-10 flex h-fit w-full gap-10">
      <div className="h-fit w-1/2 space-y-4">
        <p className="text-3xl font-semibold">Description</p>
        <p className="text-xl font-light">{signal.description}</p>
      </div>
      <div className="h-full w-1/2 space-y-4">
        <p className="text-3xl font-semibold">
          Signalement faite par {user.firstname} {user.lastname}
        </p>
        <div className="flex items-center gap-4">
          <img
            src={avatars[Number(user.avatar)]}
            alt="avatar"
            className="size-20"
          />
          <Button className="rounded-lg bg-primary px-6 py-8 text-lg font-medium hover:bg-primary hover:brightness-90">
            Voir le profil de {user.firstname}
          </Button>
        </div>
      </div>
    </div>
  );
};
