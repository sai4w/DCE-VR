import { BreadcrumbUI } from "../BreadcrumbUI";
import { ImagePreview } from "../imagePreview";
import { Rating } from "../Rating";
import { avatars } from "@src/assets/avatar/avatar";
import { Button } from "../ui/button";
import { useContext } from "react";
import { PostContext } from "@src/pages/post";
import { Dialog, DialogTrigger } from "../ui/dialog";

import { Reserve } from "./reserve";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import useUserStore from "@src/store/userStore";

export const PostPreview = () => {
  const post = useContext(PostContext);
  const user = useContext(PostContext);
  const { isLogged } = useUserStore();
  const path = [
    { path: "/", name: "Accueil" },
    { path: "/posts", name: "Eco Matériel" },
    { path: "", name: post.title },
  ];
  return (
    <div className="container my-8 flex flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex w-full gap-10">
        <ImagePreview images={post.images} />
        <div className="flex w-1/2 flex-col gap-y-4">
          <p className="h-fit overflow-hidden text-ellipsis py-2 text-5xl font-bold">
            {post.title}
          </p>
          <Rating rating={post.rating} titled />
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

            <div className="flex items-center justify-between gap-x-4">
              <div className="flex flex-col border-2 border-stone-300 bg-white p-4">
                <p className="text-center text-xl font-bold text-stone-500">
                  Tous les Jours
                </p>
                <p className="text-center text-2xl font-bold text-stone-500">
                  <span className="text-2xl font-bold text-primary">
                    {post.price.day} DT
                  </span>
                  <span className="text-2xl font-bold text-stone-500">
                    {" "}
                    / Jour
                  </span>
                </p>
              </div>
              <div className="flex flex-col border-2 border-stone-300 bg-white p-4">
                <p className="text-center text-xl font-bold text-stone-500">
                  7 Jours +
                </p>
                <p className="text-center text-2xl font-bold text-stone-500">
                  <span className="text-2xl font-bold text-primary">
                    {post.price.week} DT
                  </span>
                  <span className="text-2xl font-bold text-stone-500">
                    {" "}
                    / Jour
                  </span>
                </p>
              </div>
              <div className="flex flex-col border-2 border-stone-300 bg-white p-4">
                <p className="text-center text-xl font-bold text-stone-500">
                  31 Jours +
                </p>
                <p className="text-2xl font-bold text-stone-500">
                  <span className="text-2xl font-bold text-primary">
                    {post.price.month} DT
                  </span>
                  <span className="text-2xl font-bold text-stone-500">
                    {" "}
                    / Jour
                  </span>
                </p>
              </div>
            </div>
            {isLogged() ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-primary py-6 text-lg font-medium text-white hover:bg-primary hover:brightness-90">
                    Vérifier le prix et la disponibilité
                  </Button>
                </DialogTrigger>
                <Reserve />
              </Dialog>
            ) : (
              <Button
                asChild
                className="w-full bg-primary py-6 text-lg font-medium text-white hover:bg-primary hover:brightness-90"
              >
                <Link
                  to="/login"
                  onClick={() =>
                    toast.error(
                      "Vous devez vous connecter pour accéder à cette page",
                    )
                  }
                >
                  Vérifier le prix et la disponibilité
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
