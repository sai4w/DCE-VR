import bgsection7 from "@src/assets/images/accueil/bg-testemonial.png";
import testemonial from "@src/assets/icons/accueil/testimonials.svg";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { avatars } from "@src/assets/avatar/avatar";
import { useState } from "react";
import { DotButton, useDotButton } from "../ui/dotButton";
import Autoplay from "embla-carousel-autoplay";

const testemonials: {
  nom: string;
  profession: string;
  avatar: number;
  comment: string;
}[] = [
  {
    nom: "Ameni Ben Amor",
    avatar: 0,
    profession: "Eco Student",
    comment:
      "La plateforme DCE VR offre une expérience immersive qui permet aux utilisateurs de se sentir réellement transportés dans des environnements naturels. Cela rend la sensibilisation à l'écologie beaucoup plus impactante, car les utilisateurs peuvent voir et ressentir les conséquences des actions humaines sur la nature en temps réel.",
  },
  {
    nom: "Khalil Amri",
    avatar: 3,
    profession: "Eco Student",
    comment:
      "La plateforme est conçue pour être accessible à un large public, y compris les jeunes et les personnes non initiées aux technologies VR. Elle propose des modules éducatifs adaptés à différents niveaux de connaissance, rendant l'apprentissage de l'écologie à la fois amusant et informatif.",
  },
  {
    nom: "houda ben younes",
    avatar: 6,
    profession: "Eco Student",
    comment:
      "DCE VR est une plateforme évolutive qui peut être mise à jour régulièrement avec de nouveaux contenus et fonctionnalités. Cela permet de garder les utilisateurs intéressés et informés des dernières actualités et innovations en matière d'écologie.",
  },
  {
    nom: "Mohamed Ben Amor",
    avatar: 4,
    profession: "Eco Student",
    comment:
      "La possibilité d'interagir avec l'environnement virtuel est un atout majeur de DCE VR. Les utilisateurs peuvent participer à des activités telles que la plantation d'arbres, le nettoyage de plages ou la gestion de ressources naturelles, ce qui renforce leur compréhension des défis écologiques.",
  },
  {
    nom: "jamila ben younes",
    avatar: 5,
    profession: "Eco Student",
    comment:
      "La plateforme est conçue pour être accessible à un large public, y compris les jeunes et les personnes non initiées aux technologies VR. Elle propose des modules éducatifs adaptés à différents niveaux de connaissance, rendant l'apprentissage de l'écologie à la fois amusant et informatif.",
  },
  {
    nom: "jamil ben brahim",
    avatar: 7,
    profession: "Eco Student",
    comment:
      "La possibilité d'interagir avec l'environnement virtuel est un atout majeur de DCE VR. Les utilisateurs peuvent participer à des activités telles que la plantation d'arbres, le nettoyage de plages ou la gestion de ressources naturelles, ce qui renforce leur compréhension des défis écologiques.",
  },
];
export const AccueilSection7 = () => {
  const [api, setApi] = useState<CarouselApi>();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <section
      className="h-full w-full bg-cover bg-no-repeat py-12 md:py-24"
      style={{ backgroundImage: `url(${bgsection7})` }}
    >
      <div className="container h-full w-full max-w-5xl space-y-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <img src={testemonial} alt="testemonial" />
            <p className="font-extrabold uppercase text-white md:text-4xl">
              nos clients feedback
            </p>
          </div>
          <div className="flex w-fit items-center justify-between gap-3 pr-5">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${
                  index === selectedIndex
                    ? "outline outline-1 outline-offset-4 outline-white"
                    : " outline-0"
                } size-2 rounded-full bg-white`}
              />
            ))}
          </div>
        </div>
        <p className="text-xl text-white">
          Partagez votre Éco-Avis et aidez-nous à cultiver un avenir plus vert
          ensemble!
        </p>
        <div className="flex items-center justify-between">
          <Carousel
            className="w-full"
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            opts={{
              slidesToScroll: "auto",
            }}
          >
            <CarouselContent className="mt-8 flex">
              {testemonials.map((t, index) => (
                <CarouselItem key={index} className="pr-2 md:basis-[50%]">
                  <div className="flex h-full w-full flex-col gap-4 divide-y bg-white py-8">
                    <div className="flex items-center gap-2 px-8">
                      <img
                        src={avatars[t.avatar]}
                        alt="ava"
                        className="size-20"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold">{t.nom}</p>
                        <p className="text-sm font-medium text-primary">
                          {t.profession}
                        </p>
                      </div>
                    </div>
                    <p className="px-8 py-4 text-sm font-medium antialiased">
                      {t.comment}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
