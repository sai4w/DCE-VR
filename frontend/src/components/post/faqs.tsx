import { CustomAccordion } from "../customAccordion";
import faqs from "@src/assets/images/FAQS.png";
export const Faqs = () => {
  const accordion: { title: string; content: string }[] = [
    {
      title: "Comment se déroule le processus de demande ?",
      content:
        " Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA des pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Quelle est la politique d'annulation?",
      content:
        " Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA des pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Suis-je assuré en tant qu'emprunteur ?",
      content:
        " Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA des pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Comment fonctionne la vérification ?",
      content:
        " Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA des pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];
  return (
    <div className="my-10 flex h-fit w-full gap-10">
      <div className="h-fit w-1/2">
        <CustomAccordion items={accordion} />
      </div>
      <div className="h-full w-1/2">
        <img src={faqs} alt="faqs" />
      </div>
    </div>
  );
};
