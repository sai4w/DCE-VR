import { BreadcrumbUI } from "../BreadcrumbUI";
import { PlaylistCard } from "./playlist-card";
import { Sidebar } from "./playlist-sidebar";

export const PlaylistContent = () => {
  const path = [
    { path: "/", name: "Accueil" },
    { path: "/playlists", name: "Playlists" },
    { path: "", name: "Podcast" },
  ];
  return (
    <div className="container my-8 flex w-full flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex gap-20 py-4">
        <div className="flex flex-col gap-16">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
