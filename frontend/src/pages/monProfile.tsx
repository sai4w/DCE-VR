import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { ProfileContent } from "@src/components/profile/profile-content";
import { ProfileHero } from "@src/components/profile/profile-hero";

const MonProfilePage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <ProfileHero />
        <ProfileContent />
      </section>
      <Footer />
    </div>
  );
};

export default MonProfilePage;
