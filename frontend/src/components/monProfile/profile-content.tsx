import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ProfileEchange } from "./profile-echange";
import { ProfileSignaux } from "./profile-signaux";

export const ProfileContent = () => {
  return (
    <div className="flex h-fit w-full flex-col">
      <div className="container h-fit">
        <Tabs defaultValue="signaux" className="w-full space-y-10">
          <TabsList className="py-6">
            <TabsTrigger className="py-2 " value="signaux">
              Historique des Signaux
            </TabsTrigger>
            <TabsTrigger className="py-2" value="echange">
              Historique des Échanges
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signaux">
            <ProfileSignaux />
          </TabsContent>
          <TabsContent value="echange">
            <ProfileEchange />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
