import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import SignalDetails from "@src/components/signal/signal-details";
import { SignalPreview } from "@src/components/signal/signal-preview";
import { useSignal } from "@src/hooks/useSignal";
import { Signal, User } from "@src/types";
import { createContext } from "react";
import { Navigate, useParams } from "react-router-dom";

type signalParams = {
  signal: Signal;
  user: User;
};
export const SignalContext = createContext<signalParams>(undefined!);

const SignalPage = () => {
  const { id } = useParams();
  const { signal, user, loading, error } = useSignal(id!);
  const Signal = { signal, user } as signalParams;
  if (loading) return <div>Loading...</div>;
  if (error) return <Navigate to="/404" replace />;
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <SignalContext.Provider value={{ ...Signal }}>
          <SignalPreview />
          <SignalDetails />
        </SignalContext.Provider>
      </section>
      <Footer />
    </div>
  );
};

export default SignalPage;
