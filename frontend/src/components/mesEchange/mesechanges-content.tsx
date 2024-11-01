import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import useUserStore from "@src/store/userStore";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { MyRentCard } from "./mesechange-myRentCard";
import { useMyRents } from "@src/hooks/useMyRents";
import { MesEchangesMoreDetail } from "./mesechanges-moreDetail";
import { MesEchangeReview } from "./review";

export const MesEchangesContent = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useUserStore();
  const { myRents, error, loading } = useMyRents(user._id);
  const [rentIndex, setRentIndex] = useState<number>(Number(id) || 0);
  const handleRentChange = (newIndex: number) => {
    if (newIndex === rentIndex) return;
    setRentIndex(newIndex);
  };
  const path = [
    { name: "Accueil", path: "/" },
    { name: "Profile", path: "/monprofile" },
    { name: "Mes Echange Faites", path: "" },
  ];
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="container my-8 flex h-full flex-col justify-start gap-4 px-2">
      <BreadcrumbUI path={path} />

      {loading ? (
        <p>Loading...</p>
      ) : myRents.length > 0 ? (
        <div className="flex h-full gap-4">
          <div className="h-fit max-h-[calc(100vh-100px)] w-3/12 flex-none space-y-4 overflow-y-auto rounded-lg  bg-whiteR p-1 scrollbar-thin scrollbar-track-primary/10 scrollbar-thumb-primary/60 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-corner-rounded-full">
            {myRents.map((rent, index) => (
              <MyRentCard
                key={index}
                rent={rent}
                isSelected={rentIndex === index}
                setSelected={() => handleRentChange(index)}
              />
            ))}
          </div>
          <MesEchangesMoreDetail rent={myRents[rentIndex]} />

          {rentIndex != -1 &&
            (myRents[rentIndex].reservation[0].disponibility === "expiree" ||
              myRents[rentIndex].reservation[0].disponibility === "actif") && (
              <MesEchangeReview rent={myRents[rentIndex]} />
            )}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>Vous n'avez pas encore fait d'echange</p>
        </div>
      )}
    </div>
  );
};
