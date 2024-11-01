import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { NettoyageForm } from "@src/components/nettoyage/nettoyage-form";
import { NettoyageSignalCard } from "@src/components/nettoyage/nettoyage-signalCard";
import { useSignal } from "@src/hooks/useSignal";
import { Navigate, useParams } from "react-router-dom";
const NettoyagePage = () => {
  const { id } = useParams();
  const { signal, user, loading, error } = useSignal(id!);
  console.log(signal, user, loading, error);
  if (loading) return <div>Loading...</div>;
  if (error) return <Navigate to="/404" replace />;
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <div className="container my-8 flex flex-1 flex-col justify-start gap-8 px-2">
          <div className="flex flex-col items-center justify-between gap-8 py-4">
            <p className="w-full py-2 text-4xl font-bold text-stone-600">
              Un nettoyage de signalement “ {signal?.title} ” :
            </p>
            <NettoyageSignalCard signal={signal!} user={user!} />
          </div>
          <NettoyageForm signal={signal!} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NettoyagePage;
