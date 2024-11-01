import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import PlaylistsContent from "@src/components/playlists/playlists-content";

const PlaylistsPage = () => {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <section className="h-fit w-full">
        <PlaylistsContent />
      </section>
      <Footer />
    </div>
  );
};

export default PlaylistsPage;
