import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Faqs } from "./faqs";
import { PostMoreDetails } from "./post-moreDetails";

export const PostDetails = () => {
  return (
    <div className="container h-fit">
      <Tabs defaultValue="details" className="w-full space-y-10">
        <TabsList className="py-6">
          <TabsTrigger className="py-2" value="details">
            Details du produit
          </TabsTrigger>
          <TabsTrigger className="py-2" value="review">
            Évaluations et commentaires
          </TabsTrigger>
          <TabsTrigger className="py-2" value="faqs">
            FAQs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <PostMoreDetails />
        </TabsContent>
        <TabsContent value="review">review</TabsContent>
        <TabsContent value="faqs">
          <Faqs />
        </TabsContent>
      </Tabs>
    </div>
  );
};
