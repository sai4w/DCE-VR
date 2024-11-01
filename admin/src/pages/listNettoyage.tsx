import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { Table } from "@src/components/listNettoyage/table";
import { useLocation } from "react-router-dom";

const ListNettoyage = () => {
  const location = useLocation();
  const { signal } = location.state || {};
  console.log(signal);
  const path = [
    { name: "Les postes", path: "" },
    { name: "Les Postes de signalement", path: "" },
    { name: "Contrôle nettoyage", path: "" },
  ];
  return (
    <div className="flex-grow bg-[#FAFBFA] p-4 flex gap-y-4 flex-col justify-between">
      <div className="p-4">
        <BreadcrumbUI path={path} />
        <Table signal={signal} />
      </div>
      <p className="text-stone-500">© 2024. DCE VR All rights reserved.</p>
    </div>
  );
};

export default ListNettoyage;
