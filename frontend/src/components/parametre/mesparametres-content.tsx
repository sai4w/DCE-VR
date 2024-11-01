import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/customTabs";
import { MesParametresGenrale } from "./mesparametres-genrale";
import { MesParametresSecurite } from "./mesparametres-securite";

export const MesParametresContent = () => {
  return (
    <div className="flex h-fit w-full bg-white">
      <div className="flex h-fit w-full flex-col gap-8 bg-whiteR pt-12">
        <p className="container text-5xl font-medium">Paramétres</p>
        <Tabs defaultValue="Generale" className="bg-white">
          <TabsList>
            <div className="container flex gap-10">
              <TabsTrigger value="Generale">Générale</TabsTrigger>
              <TabsTrigger value="Securite">Sécurité</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="Generale">
            <MesParametresGenrale />
          </TabsContent>
          <TabsContent value="Securite">
            <MesParametresSecurite />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
