import { BreadcrumbUI } from "../BreadcrumbUI";
import { PlaylistCard } from "./playlist-card";
import podcastThumbnail from "@src/assets/images/podcastThumbnail.png";
import animaionThumnail from "@src/assets/images/animationThumbnail.png";
const PlaylistsContent = () => {
  const path = [
    { name: "Accueil", path: "/" },
    { name: "Playlists", path: "" },
  ];
  return (
    <div className="container my-8 flex w-full flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />

      <PlaylistCard
        img={podcastThumbnail}
        href="/playlist/podcast"
        label="podcast"
      />
      <PlaylistCard
        img={animaionThumnail}
        href="/animation"
        label="animation"
        oriontation="rtl"
      />
    </div>
  );
};

export default PlaylistsContent;
