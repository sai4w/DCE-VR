import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { MesEchangesContent } from "@src/components/mesEchange/mesechanges-content";

const MesEchangesPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="h-fit w-full">
        <MesEchangesContent />
      </section>
      <Footer />
    </div>
  );
};

export default MesEchangesPage;
