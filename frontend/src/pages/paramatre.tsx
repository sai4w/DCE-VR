import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { MesParametresContent } from "@src/components/parametre/mesparametres-content";

const MesParametresPage = () => {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <section className="h-fit w-full">
        <MesParametresContent />
      </section>
      <Footer />
    </div>
  );
};

export default MesParametresPage;
