import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { PosterForm } from "./poster-form";

export const PosterContent = () => {
  const path = [
    { path: "/", name: "Accueil" },
    { path: "/posts", name: "Eco Matériel" },
    { path: "", name: "Nouveau Poste" },
  ];
  return (
    <div className="container my-8 flex max-w-5xl flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <PosterForm />
    </div>
  );
};
