import { BreadcrumbUI } from "../BreadcrumbUI";
import { SignalerForm } from "./signaler-form";

export const SignalerContent = () => {
  const path = [
    { name: "Accueil", path: "/" },
    { name: "Signaler", path: "" },
  ];
  return (
    <div className="container my-8 flex max-w-6xl flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <SignalerForm />
    </div>
  );
};
