import bgsection6 from "@src/assets/images/accueil/bg-playlist.png";
import vidPlaylist from "@src/assets/images/accueil/vid-playlist.png";
import edu from "@src/assets/icons/accueil/eco-services/edu.svg";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useState } from "react";
import {
  CaretRightIcon,
  CaretLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import Autoplay from "embla-carousel-autoplay";

const playlist: {
  title: string;
  description: string;
  auther: string;
  img: string;
}[] = [
  {
    title:
      "”Une vision alternative pour la gestion des réserves naturelles en Tunisie”",
    auther: "Avec M. Zakher Bouraoui",
    description:
      "Et si nous imaginions des approches différentes et innovantes pour gérer nos réserves naturelles ?Est-il possible que cette vision contribue à créer une dynamique sérieuse et complémentaire dans le paysage scientifique et économique en Tunisie ? Aujourd'hui, dans le quarante-quatrième épisode d'Ecologia Podcast, nous avons le plaisir d'accueillir M. Zakher Bouraoui pour discuter de cette question. Vous pouvez également écouter cet épisode sur Google Podcasts et Spotify. Nous vous souhaitons une agréable écoute !",
    img: vidPlaylist,
  },
  {
    title:
      "”Une vision alternative pour la gestion des réserves naturelles en Tunisie”",
    auther: "Avec M. Zakher Bouraoui",
    description:
      "Et si nous imaginions des approches différentes et innovantes pour gérer nos réserves naturelles ?Est-il possible que cette vision contribue à créer une dynamique sérieuse et complémentaire dans le paysage scientifique et économique en Tunisie ? Aujourd'hui, dans le quarante-quatrième épisode d'Ecologia Podcast, nous avons le plaisir d'accueillir M. Zakher Bouraoui pour discuter de cette question. Vous pouvez également écouter cet épisode sur Google Podcasts et Spotify. Nous vous souhaitons une agréable écoute !",
    img: vidPlaylist,
  },
];
export const AccueilSection6 = () => {
  const [api1, setApi1] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const onNext = () => {
    api1?.scrollNext();
    api2?.scrollNext();
  };
  const onPrev = () => {
    api1?.scrollPrev();
    api2?.scrollPrev();
  };
  return (
    <section
      className="my-8 h-full w-full bg-cover bg-left-top bg-no-repeat md:py-24"
      style={{ backgroundImage: `url(${bgsection6})` }}
    >
      <div className="flex h-full w-full gap-8 max-md:flex-col-reverse max-md:px-2">
        <Carousel
          setApi={setApi2}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {playlist.map((vid, index) => (
              <CarouselItem className="relative pr-2">
                <img
                  src={vid.img}
                  alt={index + "img"}
                  className="h-full w-full select-none object-cover object-center"
                />
                <button className="absolute right-1/2 top-1/2 flex size-24 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-stone-100/80 max-md:scale-50">
                  <div className="animate-ping-vari absolute inset-0 rounded-full border border-white/50"></div>
                  <div className="animate-ping-vari absolute inset-0 rounded-full border border-white/50 delay-1000"></div>

                  <TriangleRightIcon className="size-20 text-primary" />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex w-full flex-col justify-between gap-4">
          <div className="flex flex-col gap-y-4">
            <div className="flex w-full items-center gap-2">
              <img src={edu} alt="education" className="size-12" />
              <p className="font-extrabold uppercase text-primary md:text-4xl">
                nos derniers videos :
              </p>
            </div>
            <Carousel
              setApi={setApi1}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {playlist.map((vid, index) => (
                  <CarouselItem className="w-fit">
                    <div
                      key={index}
                      className="flex w-4/5 flex-col gap-4 overflow-hidden"
                    >
                      <p className="font-extrabold uppercase md:text-4xl">
                        {vid.title}
                      </p>
                      <p className="uppercase text-primary md:text-4xl md:font-bold">
                        {vid.auther}
                      </p>
                      <p className="h-48 max-md:h-24 md:text-lg">
                        {vid.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex w-full items-center gap-4">
            <button
              className="flex size-16 items-center justify-center rounded-full border border-stone-300"
              onClick={onPrev}
            >
              <CaretLeftIcon className="size-10 text-stone-300" />
            </button>
            <button
              className="flex size-16 items-center justify-center rounded-full border border-primary bg-primary"
              onClick={onNext}
            >
              <CaretRightIcon className="size-10 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
