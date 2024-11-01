import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { Table } from "@src/components/signalPosts/table";

const SignalPosts = () => {
  const path = [
    { name: "Les postes", path: "" },
    { name: "Les Postes de signalement", path: "" },
    { name: "Gérer les postes", path: "" },
  ];
  return (
    <div className="flex-grow bg-[#FAFBFA] p-4 flex gap-y-4 flex-col justify-between">
      <div className="p-4">
        <BreadcrumbUI path={path} />
        <Table />
      </div>
      <p className="text-stone-500">© 2024. DCE VR All rights reserved.</p>
    </div>
  );
};

export default SignalPosts;
