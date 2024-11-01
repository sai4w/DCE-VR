import { useMyPosts } from "@src/hooks/useMyPosts";
import { Button } from "../ui/button";
import useUserStore from "@src/store/userStore";
import { MyPostCard } from "./profile-mypostcard";
import { useMyRents } from "@src/hooks/useMyRents";
import { MyRentCard } from "./profile-myrentcard";
import { Link } from "react-router-dom";
import { ProfileRentHoverCard } from "./profile-renthovercard";
import { ProfilePostHoverCard } from "./profile-posthovercard";
export const ProfileEchange = () => {
  const { user } = useUserStore();
  const { myPosts, error, loading } = useMyPosts(user._id);
  const {
    myRents,
    error: errorRents,
    loading: loadingRents,
  } = useMyRents(user._id);
  if (loading || loadingRents) {
    return <p>Loading...</p>;
  }
  if (error || errorRents) {
    return <p>{error}</p>;
  } else {
    return (
      <div className="flex h-fit w-full flex-col gap-8 py-6">
        {myRents.length == 0 ? (
          <>
            <p className="text-4xl font-bold text-stone-700">
              Mes échanges faites :
            </p>
            <p className="text-xl text-stone-700">
              Vous n'avez pas encore fait d'échange
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="text-4xl font-bold text-stone-700">
                Mes échanges faites :
              </p>
              <div className="flex items-center gap-2">
                <ProfileRentHoverCard />
                <Link to="/mesechanges">
                  <Button className="rounded-2xl border-2 border-primary bg-transparent p-6 text-xl text-primary hover:bg-primary hover:text-white">
                    Voir Tous &gt;&gt;
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {myRents.slice(0, 4).map((post, i) => (
                <MyRentCard key={i} post={post} />
              ))}
            </div>
          </>
        )}
        {myPosts.length == 0 ? (
          <>
            <p className="text-4xl font-bold text-stone-700">
              Mes objects postulés :
            </p>
            <p className="text-xl text-stone-700">
              Vous n'avez pas encore postulé à un objet
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="text-4xl font-bold text-stone-700">
                Mes objects postulés :
              </p>
              <div className="flex items-center gap-2">
                <ProfilePostHoverCard />
                <Link to="/mesposts">
                  <Button className="rounded-2xl border-2 border-primary bg-transparent p-6 text-xl text-primary hover:bg-primary hover:text-white">
                    Voir Tous &gt;&gt;
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {myPosts.slice(0, 4).map((post, i) => (
                <MyPostCard key={i} post={post} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
};
