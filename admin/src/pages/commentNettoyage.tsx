import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { Comment } from "@src/components/commentNettoyage/comment";
import { useLocation } from "react-router-dom";

const CommentNettoyage = () => {
  const location = useLocation();
  const { nettoyage } = location.state;
  const path = [
    { name: "Les postes", path: "" },
    { name: "Les Postes de signalement", path: "" },
    { name: "nettoyage", path: "" },
  ];
  return (
    <div className="flex-grow bg-[#FAFBFA] p-4 flex gap-y-4 flex-col justify-between">
      <div className="p-4">
        <BreadcrumbUI path={path} />
        <Comment nettoyage={nettoyage} />
      </div>
      <p className="text-stone-500">© 2024. DCE VR All rights reserved.</p>
    </div>
  );
};

export default CommentNettoyage;
