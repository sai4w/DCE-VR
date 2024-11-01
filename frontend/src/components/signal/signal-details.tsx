import { SignalContext } from "@src/pages/signal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SignalMoreDetails } from "./signal-moreDetails";
import { useContext } from "react";
import { SignalNettoyage } from "./signal-nettoyage";

const SignalDetails = () => {
  const signal = useContext(SignalContext).signal;
  const isCleaned = signal.cleaning?.findIndex(
    (cleaning) => cleaning.status === "accepté",
  );
  const nettoyage = signal.cleaning?.[isCleaned!];
  return (
    <div className="container h-fit">
      <Tabs defaultValue="details" className="w-full space-y-10">
        <TabsList className="py-6">
          <TabsTrigger className="py-2" value="details">
            Details du signal
          </TabsTrigger>
          <TabsTrigger
            className="py-2"
            value="nettoyage"
            disabled={signal.status != "cleaned" && true}
          >
            Aprés le nettoyage
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <SignalMoreDetails />
        </TabsContent>
        <TabsContent value="nettoyage">
          {nettoyage && <SignalNettoyage nettoyage={nettoyage} />}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignalDetails;
