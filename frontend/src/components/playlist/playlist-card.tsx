import { Button } from "../ui/button";
import { ArrowRightIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import vidPlaylist from "@src/assets/images/accueil/vid-playlist.png";

export const PlaylistCard = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 border border-stone-300 p-4">
      <div className="relative pr-2">
        <img
          src={vidPlaylist}
          alt="img"
          className="aspect-video h-full w-full select-none object-cover object-center"
        />
        <button className="absolute right-1/2 top-1/2 flex size-24 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-stone-100/80 max-md:scale-50">
          <div className="animate-ping-vari absolute inset-0 rounded-full border border-white/50"></div>
          <div className="animate-ping-vari absolute inset-0 rounded-full border border-white/50 delay-1000"></div>

          <TriangleRightIcon className="size-20 text-primary" />
        </button>
      </div>{" "}
      <div className="flex flex-col gap-2">
        <div className="flex h-fit w-full justify-between">
          <p className="font-cairo text-xl font-bold">
            تصور آخر لإدارة المحميات الطبيعية في تونس | مع السيد زاخر بورڤعاوي
          </p>
          <p className="text-xl font-light text-stone-500">22/05/2024</p>
        </div>
        <div className="flex h-fit w-full items-center justify-between gap-24">
          <p className="text-xl font-light text-stone-500">
            Et si nous imaginions des approches différentes et innovantes pour
            gérer nos réserves naturelles ? .....
          </p>
          <Button className="border-2 border-primary bg-primary px-2.5 py-5 hover:bg-transparent hover:text-primary">
            <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
