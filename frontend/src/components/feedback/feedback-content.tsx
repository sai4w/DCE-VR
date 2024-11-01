import { BreadcrumbUI } from "../BreadcrumbUI";
import { FeedbackReview } from "./feedback-review";

export const FeedbackContent = () => {
  const path = [
    { name: "Accueil", path: "/" },
    { name: "Feedback", path: "" },
  ];
  return (
    <div className="container my-8 flex w-full flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex justify-between gap-10">
        <div className="flex h-full w-full flex-col justify-start gap-y-8">
          <div className="flex items-center gap-2">
            <div className="h-[3px] w-6 rounded-full bg-primary" />
            <p className="text-2xl font-bold uppercase text-primary">
              Évaluez nos services
            </p>
          </div>
          <p className="text-6xl font-bold leading-[70px]">
            Remplissez le formulaire pour soumettre votre feedback
          </p>
          <p className="w-[550px] text-xl leading-relaxed text-stone-500">
            Partagez votre expérience avec nous ! Votre avis compte. Nous sommes
            déterminés à offrir un service de qualité et votre feedback nous
            aide à nous améliorer.
          </p>
        </div>
        <FeedbackReview />
      </div>
    </div>
  );
};
