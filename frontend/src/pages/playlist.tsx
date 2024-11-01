import { Navbar } from "@components/Navbar";
import { Footer } from "@components/footer";
import { PlaylistContent } from "@src/components/playlist/playlist-content";
import { PlaylistHero } from "@src/components/playlist/playlist-hero";
import { Playlist } from "@src/types";
import { createContext } from "react";
import { useParams } from "react-router-dom";
export const PlaylistContext = createContext<Playlist>(undefined!);

const PlaylistPage = () => {
  const { id } = useParams();

  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <section className="h-fit w-full">
        <PlaylistHero pageTitle={id!} />
        <PlaylistContent />
      </section>
      <Footer />
    </div>
  );
};
export default PlaylistPage;
