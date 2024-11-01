import { avatars } from "@src/assets/avatar/avatar";
import useUserStore from "@src/store/userStore";
import { MesParametresAvatar } from "./mesparametres-avatar";
export const MesParametresMaininfo = () => {
  const { user } = useUserStore();

  return (
    <div className="flex h-full w-2/5 flex-col items-center justify-between gap-8 border-r border-stone-300">
      <p className="text-3xl text-stone-500">Profile</p>
      <img
        src={avatars[Number(user.avatar)]}
        alt="avatar"
        className="size-40 rounded-full border-4 border-stone-300 object-cover"
      />
      <p className="text-4xl font-bold">
        {user.firstname} {user.lastname}
      </p>
      <p className="text-2xl font-light text-stone-500">{user.proffesional}</p>
      <MesParametresAvatar />
      <p className="text-2xl font-light text-stone-500">{user.region}</p>
    </div>
  );
};
