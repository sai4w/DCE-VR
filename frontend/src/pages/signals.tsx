import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { SignalsContent } from "@src/components/signals/signals-content";
import { SignalsHero } from "@src/components/signals/signals-hero";

const SignalsPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <SignalsHero />
        <SignalsContent />
      </section>
      <Footer />
    </div>
  );
};

export default SignalsPage;
