import { Navbar } from "@src/components/Navbar";
import { AccueilSection1 } from "@src/components/accueil/accueil-section1";
import { AccueilSection2 } from "@src/components/accueil/accueil-section2";
import { AccueilSection3 } from "@src/components/accueil/accueil-section3";
import { AccueilSection4 } from "@src/components/accueil/accueil-section4";
import { AccueilSection5 } from "@src/components/accueil/accueil-section5";
import { AccueilSection6 } from "@src/components/accueil/accueil-section6";
import { AccueilSection7 } from "@src/components/accueil/accueil-section7";
import { AccueilSection8 } from "@src/components/accueil/accueil-section8";
import { Footer } from "@src/components/footer";

const AccueilPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <AccueilSection1 />
      <AccueilSection2 />
      <AccueilSection3 />
      <AccueilSection4 />
      <AccueilSection5 />
      <AccueilSection6 />
      <AccueilSection7 />
      <AccueilSection8 />
      <Footer />
    </div>
  );
};

export default AccueilPage;
