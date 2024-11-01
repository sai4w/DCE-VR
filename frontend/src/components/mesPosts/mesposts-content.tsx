import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@src/components/mesPosts/customTabs";
import { MyPostsMoreDetail } from "@src/components/mesPosts/mesposts-moreDetail";
import { useMyPosts } from "@src/hooks/useMyPosts";
import useUserStore from "@src/store/userStore";
import { useState } from "react";
import { MesPostsDemandes } from "./mesposts-demandes";
import { MesPostsEnCours } from "./mesposts-encours";
import { MesPostsExpirees } from "./mesposts-expirees";
import { useParams } from "react-router-dom";
import { MesPostsList } from "./mesposts-list";

export const MesPostsContent = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useUserStore();
  const { myPosts, updatePost, error, loading } = useMyPosts(user._id);
  const [postIndex, setPostIndex] = useState<number>(Number(id) || 0);
  const [reservIndex, setReservIndex] = useState<number>(
    myPosts[postIndex]?.reservation.length - 1 ||
      myPosts[postIndex]?.reservation
        .map((reserv) => reserv.disponibility === "attendant")
        .indexOf(true),
  );

  const handlePostChange = (newIndex: number) => {
    if (newIndex === postIndex) return;
    if (reservIndex !== -1) setReservIndex(-1);
    setPostIndex(newIndex);
  };

  const accepter = () => {
    const post = myPosts[postIndex];
    if (!post) return;
    post.reservation[reservIndex].disponibility = "en cours";
    updatePost(post._id, post.reservation);
  };

  const refuse = () => {
    const post = myPosts[postIndex];
    if (!post) return;
    post.reservation[reservIndex].disponibility = "refusé";
    updatePost(post._id, post.reservation);
  };

  const path = [
    { name: "Accueil", path: "/" },
    { name: "Profile", path: "/monprofile" },
    { name: "Mes Posts", path: "/meseposts" },
  ];

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container my-8 flex h-full flex-col justify-start gap-4 px-2">
      <BreadcrumbUI path={path} />

      {loading ? (
        <p>Loading...</p>
      ) : myPosts.length > 0 ? (
        <div className="flex h-fit justify-between gap-4">
          <MesPostsList
            handlePostChange={handlePostChange}
            myPosts={myPosts}
            postIndex={postIndex}
          />
          <div className="h- flex w-4/12 overflow-hidden rounded-lg bg-white">
            <div className="h-full w-full">
              <Tabs
                onChange={() => setReservIndex(-1)}
                defaultValue="demandes"
                className="h-full"
              >
                <TabsList>
                  <TabsTrigger value="demandes">Demandes</TabsTrigger>
                  <TabsTrigger value="encours">En Cours</TabsTrigger>
                  <TabsTrigger value="expirees">Expirées</TabsTrigger>
                </TabsList>
                <TabsContent value="demandes">
                  <MesPostsDemandes
                    post={myPosts[postIndex]}
                    isSelected={reservIndex || 0}
                    setSelected={setReservIndex}
                  />
                </TabsContent>
                <TabsContent value="encours">
                  <MesPostsEnCours
                    post={myPosts[postIndex]}
                    isSelected={reservIndex || 0}
                    setSelected={setReservIndex}
                  />
                </TabsContent>
                <TabsContent value="expirees">
                  <MesPostsExpirees
                    post={myPosts[postIndex]}
                    isSelected={reservIndex || 0}
                    setSelected={setReservIndex}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <MyPostsMoreDetail
            post={myPosts[postIndex]}
            reservIndex={reservIndex}
            accepter={accepter}
            refuse={refuse}
          />
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>Vous n'avez pas encore de posts</p>
        </div>
      )}
    </div>
  );
};
