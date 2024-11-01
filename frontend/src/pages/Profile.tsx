import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { ProfileContent } from "@src/components/monProfile/profile-content";
import { ProfileHero } from "@src/components/monProfile/profile-hero";
import { useUser } from "@src/hooks/useUser";
import { Navigate, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useUser(id ? { id } : { id: "" });
  if (!user) {
    return <Navigate to="/404" />;
  }
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

export default ProfilePage;
