import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { PosterContent } from "../components/poster/poster-content";
import { PosterHero } from "../components/poster/poster-hero";

const PosterPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <PosterHero />
        <PosterContent />
      </section>
      <Footer />
    </div>
  );
};

export default PosterPage;
