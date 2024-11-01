import { useContext } from "react";
import { PostContext } from "@src/pages/post";
import { avatars } from "@src/assets/avatar/avatar";
import { Button } from "@src/components/ui/button";

export const PostMoreDetails = () => {
  const post = useContext(PostContext);
  const user = useContext(PostContext);
  return (
    <div className="my-10 flex h-fit w-full gap-10">
      <div className="h-fit w-1/2 space-y-4">
        <p className="text-3xl font-semibold">Description</p>
        <p className="overflow-hidden text-ellipsis text-xl font-light">
          {post.description}
        </p>
      </div>
      <div className="h-full w-1/2 space-y-4">
        <p className="text-3xl font-semibold">
          Objets appartenant à {user.firstname} {user.lastname}
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
