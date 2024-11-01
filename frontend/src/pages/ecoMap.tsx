import { Navbar } from "@src/components/Navbar";
import { EcoMapContent } from "@src/components/ecomap/ecomap-content";
import { EcoMapHero } from "@src/components/ecomap/ecomap-hero";
import { Footer } from "@src/components/footer";

const EcoMapPage = () => {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <section className="h-fit w-full">
        <EcoMapHero />
        <EcoMapContent />
      </section>
      <Footer />
    </div>
  );
};

export default EcoMapPage;
