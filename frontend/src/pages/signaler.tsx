import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { SignalerContent } from "@src/components/signaler/signaler-content";
import { SignalerHero } from "@src/components/signaler/signaler-hero";

const SignalerPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <SignalerHero />
        <SignalerContent />
      </section>
      <Footer />
    </div>
  );
};

export default SignalerPage;
