import { avatars } from "@src/assets/avatar/avatar";
import cover from "@src/assets/images/profileCover.png";
import badge1 from "@src/assets/icons/badge1.svg";
import badge2 from "@src/assets/icons/badge2.svg";
import badge3 from "@src/assets/icons/badge3.svg";
import success from "@src/assets/icons/success.svg";
import useUserStore from "@src/store/userStore";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useMesSignaux } from "@src/hooks/useMesSignaux";
import { useSignals } from "@src/hooks/useSignals";
import { useMyPosts } from "@src/hooks/useMyPosts";
export const ProfileHero = () => {
  const { user } = useUserStore();
  const { signaux } = useMesSignaux(user._id);
  const { signals } = useSignals();
  const { myPosts } = useMyPosts(user._id);
  const myNettoyages = signals?.filter((signal) =>
    signal.cleaning?.map((cleaning) => cleaning.id_cleaner).includes(user._id),
  );
  return (
    <div className="flex h-fit w-full flex-col">
      <img src={cover} alt="profile-cover" className="h-72 object-cover" />
      <div className="container mx-auto flex h-fit w-full -translate-y-16 items-center px-8">
        <img
          src={avatars[Number(user.avatar)]}
          alt="profile-avatar"
          className="size-72 rounded-full border-4 border-white bg-white"
        />
        <div className="ml-4 mt-8">
          <div className="flex items-center">
            <p className="text-7xl font-bold">
              {user.firstname}
              {user.lastname}
            </p>
            <img src={success} alt="success" className="ml-4 size-20" />
            <img src={badge1} alt="badge" className="ml-2 size-12" />
            <img src={badge2} alt="badge" className="ml-2 size-12" />
            <img src={badge3} alt="badge" className="ml-2 size-12" />

            <Button
              asChild
              className="mx-8 rounded-2xl border-2 border-primary bg-transparent px-8 py-6 text-xl text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/mesparametres">Edit Profile</Link>
            </Button>
          </div>
          <p className="text-4xl font-bold text-stone-400">
            {user.proffesional}
          </p>
        </div>
      </div>
      <div className="container flex w-full -translate-y-12 justify-center gap-6">
        <div className="flex flex-col items-center">
          <p className="mb-6 text-7xl font-semibold text-primary">
            {signaux?.length}
          </p>
          <p className="text-center text-4xl font-medium text-stone-600">
            N° des signalements
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-6 text-7xl font-semibold text-primary">
            {myNettoyages?.length}
          </p>
          <p className="text-center text-4xl font-medium text-stone-600">
            N° des places nettoyées
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-6 text-7xl font-semibold text-primary">
            {myPosts.length}
          </p>
          <p className="text-center text-4xl font-medium text-stone-600">
            N° des objects postulés
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-6 text-7xl font-semibold text-primary">02</p>
          <p className="text-center text-4xl font-medium text-stone-600">
            Classement régional
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-6 text-7xl font-semibold text-primary">10</p>
          <p className="text-center text-4xl font-medium text-stone-600">
            Classement Total
          </p>
        </div>
      </div>
    </div>
  );
};
