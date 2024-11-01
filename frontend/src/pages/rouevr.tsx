import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { RouevrContent } from "@src/components/rouevr/rouevr-content";

const RouevrPage = () => {
  return (
    <div className="h-full w-full bg-[#FAFAFA]">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <RouevrContent />
      </section>
      <Footer />
    </div>
  );
};

export default RouevrPage;
