import { BreadcrumbUI } from "../BreadcrumbUI";
import bigimg from "@src/assets/images/apropos/bigimg-apropos.png";
import secondimg from "@src/assets/images/apropos/second-apropos.png";
import img1 from "@src/assets/images/apropos/img1-apropos.png";
import img2 from "@src/assets/images/apropos/img2-apropos.png";
import leaf from "@src/assets/icons/leaf.svg";
import call from "@src/assets/icons/call-outline.svg";
import bg from "@src/assets/images/apropos/bg-apropos.png";
import equipe from "@src/assets/images/apropos/equipe.png";
import ramzy from "@src/assets/images/apropos/ramzy.png";
import radhi from "@src/assets/images/apropos/radhi.png";
import { Button } from "../ui/button";
import { CustomAccordion } from "../customAccordion";
import { AccueilSection7 } from "../accueil/accueil-section7";

export const AproposContent = () => {
  const path = [
    { path: "/", name: "Accueil" },
    { path: "", name: "À Propos" },
  ];
  const aspects = [
    "échange d`objet",
    "map écologique",
    "Jeux en realité virtuelle",
    "Signal des déchets",
    "Podcast et animations",
    "actualités et blogs",
  ];
  const faqs: { title: string; content: string }[] = [
    {
      title: "Réduction du gaspillage",
      content:
        "En facilitant l'échange et la location d'objets, la plateforme encourage la réutilisation et diminue la consommation de nouveaux produits, réduisant ainsi les déchets.",
    },
    {
      title: "Diminution de l'empreinte carbone",
      content:
        "La promotion de la location d'objets au lieu de l'achat neuf contribue à une moindre production industrielle et une réduction des émissions de carbone.",
    },
    {
      title: "Promotion des initiatives locales",
      content:
        "La carte interactive aide les utilisateurs à découvrir et soutenir les initiatives écologiques locales, renforçant ainsi les communautés et les efforts environnementaux régionaux.",
    },
    {
      title: "Amélioration de la gestion des déchets",
      content:
        "Le signalement des déchets urbains permet une intervention rapide et efficace pour leur nettoyage, contribuant à un environnement plus propre.",
    },
    {
      title: "Sensibilisation et éducation",
      content:
        "Les animations, podcasts, articles pédagogiques et jeux de réalité virtuelle fournissent des outils éducatifs pour informer et sensibiliser les utilisateurs sur les pratiques écologiques et le tri sélectif.",
    },
    {
      title: "Engagement communautaire",
      content:
        " En offrant des moyens interactifs pour participer à des initiatives écologiques, la plateforme renforce l'engagement des citoyens dans la protection de l'environnement.",
    },
  ];
  return (
    <>
      <div className="container my-12 flex w-full flex-1 flex-col justify-start gap-16 bg-transparent px-2">
        <div
          className="absolute right-0 -z-10 h-full w-full bg-cover object-scale-down"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <BreadcrumbUI path={path} />
        <div className="flex gap-4 py-4">
          <div className="relative w-full">
            <img src={bigimg} alt="bigimg" className="w-[90%]" />
            <img
              src={img1}
              alt="img1"
              className="absolute right-0 top-16 w-1/3"
            />
            <div className="absolute bottom-0 left-0 w-2/5">
              <img src={img2} alt="img2" />
              <div className="absolute bottom-0 left-0 flex h-full w-full flex-col  justify-center  p-5 text-white">
                <p className="text-5xl font-bold">+5000</p>
                <p className="text-xl">Éco-responsables</p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <p className="specialtext rotate-180 text-6xl font-bold text-stone-600 transition-all duration-500 [writing-mode:vertical-lr]">
                NOUVEAU 2025
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between pt-4">
            <div className="flex items-center gap-2">
              <img src={leaf} alt="leaf" className="w-10" />
              <p className="text-lg font-bold text-primary">À Propos de nous</p>
            </div>
            <p className="text-[40px] font-bold leading-tight">
              Nous Sommes Ici pour des Habitudes Écologiques Modernes
            </p>
            <p>
              Nous nous engageons fermement à améliorer votre vie moderne en
              intégrant des habitudes écologiques. Notre mission est de vous
              fournir des solutions pratiques, innovantes et durables qui
              s'intègrent harmonieusement dans votre routine quotidienne. Que ce
              soit à travers des produits respectueux de l'environnement, des
              conseils pour réduire votre empreinte carbone, ou des initiatives
              visant à promouvoir un mode de vie plus vert. Nous nous engageons
              fermement à améliorer votre vie moderne en intégrant des habitudes
              écologiques. Notre mission est de vous fournir des solutions
              pratiques, innovantes et durables qui s'intègrent harmonieusement
              dans votre routine quotidienne. Que ce soit à travers des produits
              respectueux de l'environnement, des conseils pour réduire votre
              empreinte carbone, ou des initiatives visant à promouvoir un mode
              de vie plus vert.
            </p>
            <p className="text-2xl font-semibold">
              Voici Quelques Aspects Clés de{" "}
              <span className="text-primary">DCE VR</span>
            </p>
            <div className="grid grid-cols-3 gap-4">
              {aspects.map((aspect, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img src={leaf} alt="leaf" className="w-10" />
                  <p className="text-sm font-bold text-primary">{aspect}</p>
                </div>
              ))}
            </div>
            <p>
              Il est important de reconnaître que l'adoption d'habitudes
              écologiques peut transformer notre vie moderne de manière
              significative.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border-2 border-primary bg-transparent px-4 py-6 text-sm font-semibold text-primary hover:bg-transparent hover:text-primary hover:brightness-75 md:px-6 md:text-2xl">
                CONTACTER NOUS
              </Button>
              <div className="h-full w-0.5 bg-stone-300" />
              <div className="flex gap-2">
                <Button className="overflow-visible rounded-full border-2 border-primary bg-transparent px-3 py-6 text-sm font-semibold text-primary hover:bg-transparent hover:text-primary hover:brightness-75  md:text-2xl">
                  <img src={call} alt="call" className="animate-ring size-6" />
                </Button>
                <div className="flex flex-col ">
                  <p className="font-light capitalize text-stone-500">
                    appeler à tous moments
                  </p>
                  <p className="font-light capitalize ">+216 25934901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full gap-6">
          <div className="flex w-full flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src={leaf} alt="leaf" className="w-10" />
                <p className="text-lg font-bold text-primary">
                  À Propos de nous
                </p>
              </div>
              <p className="text-[40px] font-bold leading-tight">
                Comment vous pouvez aider{" "}
              </p>
              <p>
                Explorez les moyens par lesquels vous pouvez contribuer à
                préserver notre planète et à créer un avenir plus durable. notre
                plateforme favorise la réduction du gaspillage, la diminution de
                l'empreinte carbone, la promotion des initiatives locales,
                l'amélioration de la gestion des déchets, la sensibilisation à
                l'environnement et l'engagement communautaire.
              </p>
            </div>
            <CustomAccordion items={faqs} />
          </div>
          <div className="w-4/5">
            <img
              src={secondimg}
              alt="secondimg"
              className="h-auto w-full flex-none"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-12 p-16">
        <div
          className="absolute right-0 -z-10 h-full w-full bg-cover object-scale-down"
          style={{ backgroundImage: `url(${equipe})` }}
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <img src={leaf} alt="leaf" className="w-10" />
            <p className="text-lg font-bold text-primary">
              Notre équipe membres
            </p>
          </div>
          <p className="text-[40px] font-bold leading-tight">
            L`équipe de <span className="text-primary">DCE VR</span>
          </p>
        </div>
        <div className="flex h-full w-fit gap-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={ramzy} alt="ramzy" className="size-80 rounded-full" />
            <p className="text-2xl font-semibold">Ramzy Cherif</p>
            <p className="text-lg font-semibold text-primary">
              chef d'entreprise
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={radhi} alt="ramzy" className="size-80 rounded-full" />
            <p className="text-2xl font-semibold">Werghemmi Radhi</p>
            <p className="text-lg font-semibold text-primary">
              chef d'entreprise
            </p>
          </div>
        </div>
      </div>
      <AccueilSection7 />
    </>
  );
};
