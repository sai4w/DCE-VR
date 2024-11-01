import { Navbar } from "@src/components/Navbar";
import { AproposContent } from "@src/components/apropos/apropos-content";
import { AproposHero } from "@src/components/apropos/apropos-hero";
import { Copyright } from "@src/components/footer/copyright";
import { FooterContent } from "@src/components/footer/footerContent";

const AproposPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <section className="h-fit w-full">
        <AproposHero />
        <AproposContent />
      </section>
      <div className="h-fit w-full">
        <FooterContent />
        <Copyright />
      </div>
    </div>
  );
};

export default AproposPage;
