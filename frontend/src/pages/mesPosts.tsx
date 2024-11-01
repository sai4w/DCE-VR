import { Footer } from "@src/components/footer";
import { MesPostsContent } from "@src/components/mesPosts/mesposts-content";
import { Navbar } from "@src/components/Navbar";

const MesPostsPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="h-full w-full">
        <MesPostsContent />
      </section>
      <Footer />
    </div>
  );
};

export default MesPostsPage;
