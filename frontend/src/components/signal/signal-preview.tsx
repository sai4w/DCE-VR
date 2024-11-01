import { BreadcrumbUI } from "../BreadcrumbUI";
import { useContext } from "react";
import { SignalContext } from "@src/pages/signal";
import { avatars } from "@src/assets/avatar/avatar";
import { ImagePreview } from "../imagePreview";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import cross from "@src/assets/icons/cross.svg";
import success from "@src/assets/icons/success.svg";
import { Map } from "../map";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import useUserStore from "@src/store/userStore";
import { toast } from "sonner";

export const SignalPreview = () => {
  const signal = useContext(SignalContext).signal;
  const user = useContext(SignalContext).user;
  console.log(signal);
  const { isLogged } = useUserStore();

  const path = [
    { path: "/", name: "Accueil" },
    { path: "/signals", name: "Eco Signal" },
    { path: "", name: signal.title },
  ];
  return (
    <div className="container my-8 flex flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex w-full gap-10">
        <ImagePreview images={signal.images} />
        <div className="flex w-1/2 flex-col justify-between gap-y-4 ">
          <div className="flex items-center justify-between">
            <p className="py-2 text-5xl font-bold">{signal.title}</p>
            <img
              src={signal.status == "cleaned" ? success : cross}
              alt="cross"
              className="size-24"
            />
          </div>
          <div className="h-fit w-full space-y-4 border-2 border-stone-300 bg-primary/30 p-8">
            <div className="flex items-center justify-center gap-x-4">
              <img
                src={avatars[Number(user.avatar)]}
                alt="avatar"
                className="size-20"
              />
              <p className="text-3xl font-black">
                {user.firstname} {user.lastname}
              </p>
            </div>
            <div className="h-64">
              <Map />
            </div>
          </div>
          {signal.status == "cleaned" ? (
            <div className="flex space-x-2">
              <Button
                type="reset"
                variant={"outline"}
                className="w-full self-end border-primary py-6 text-lg text-primary hover:bg-primary hover:text-white"
              >
                + Google map
              </Button>
              <Button
                disabled={true}
                type="submit"
                className="relative w-full self-end border bg-primary py-6 text-lg text-white hover:border-primary hover:bg-white hover:text-primary"
              >
                déjà nettoyé
                <ArrowRightIcon className="absolute right-4 h-6 w-6" />
              </Button>
            </div>
          ) : !isLogged() ? (
            <div className="flex space-x-2">
              <Button
                type="reset"
                variant={"outline"}
                className="w-full self-end border-primary py-6 text-lg text-primary hover:bg-primary hover:text-white"
              >
                + Google map
              </Button>
              <Button
                asChild
                type="submit"
                className="relative w-full self-end border bg-primary py-6 text-lg text-white hover:border-primary hover:bg-white hover:text-primary"
              >
                <Link
                  to={"/login"}
                  onClick={() =>
                    toast.error(
                      "Vous devez vous connecter pour accéder à cette page",
                    )
                  }
                >
                  Nettoyer
                  <ArrowRightIcon className="absolute right-4 h-6 w-6" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Button
                type="reset"
                variant={"outline"}
                className="w-full self-end border-primary py-6 text-lg text-primary hover:bg-primary hover:text-white"
              >
                + Google map
              </Button>
              <Button
                asChild
                type="submit"
                className="relative w-full self-end border bg-primary py-6 text-lg text-white hover:border-primary hover:bg-white hover:text-primary"
              >
                <Link to={"/signal/nettoyage/" + signal._id}>
                  Nettoyer
                  <ArrowRightIcon className="absolute right-4 h-6 w-6" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
