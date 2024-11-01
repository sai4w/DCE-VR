import { ArrowRightIcon } from "@radix-ui/react-icons";
import blog from "@src/assets/icons/accueil/blog.svg";
import blogImg from "@src/assets/images/accueil/blog-img.png";
import blogImg2 from "@src/assets/images/accueil/blog-img2.png";
import blogImg3 from "@src/assets/images/accueil/blog-img3.png";
import blogFixed from "@src/assets/images/accueil/blog-fixed.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useState } from "react";
import { DotButton, useDotButton } from "../ui/dotButton";
import Autoplay from "embla-carousel-autoplay";

const blogs: {
  title: string;
  image: string;
  description: string;
  auther: string;
  profession: string;
  publishedAt: string;
}[] = [
  {
    title:
      "Handicap : le « Petit Plus » de La Corbeille Bleue pour l`insertion",
    image: blogImg,
    description:
      "hektools Leader de l`outillage en Algérie vous Propose le produit: Perceuse Chignole a percussion 780W 13mm Sans clé CROWN | CT10066P.",
    auther: "Par Fernando Araujo",
    profession: "Eco Professor",
    publishedAt: "2 dérniers jours",
  },
  {
    title: "Les bienfaits de la nature",
    image: blogImg2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est auctor, lacinia nunc nec, tincidunt nunc. Donec nec.",
    auther: "John Doe",
    profession: "Agriculteur",
    publishedAt: "1 semaine",
  },
  {
    title: "Les bienfaits de la nature",
    image: blogImg3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est auctor, lacinia nunc nec, tincidunt nunc. Donec nec.",
    auther: "John Doe",
    profession: "Agriculteur",
    publishedAt: "1 semaine",
  },
];
export const AccueilSection8 = () => {
  const [api, setApi] = useState<CarouselApi>();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  return (
    <section className="h-full w-full py-16">
      <div className="container h-fit w-full space-y-4">
        <div className="flex justify-between gap-2 max-md:flex-col md:items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={blog} alt="blog" className="size-12" />
              <p className="font-extrabold uppercase text-primary md:text-5xl">
                Les derniers blogs
              </p>
            </div>
            <p className="font-medium md:text-xl">
              Cultivez votre savoir vert avec nos dernières pépites écologiques!
            </p>
          </div>
          <button className="flex w-fit items-center gap-2 rounded-lg border-[3px] border-primary px-6 py-2 font-semibold uppercase text-primary md:py-4 md:text-2xl">
            Tous Ici <ArrowRightIcon className="size-6" />
          </button>
        </div>
        <div className="flex h-full w-full gap-8 max-md:flex-col">
          <Carousel
            className="relative flex h-full w-full flex-col gap-4 bg-stone-100 p-8 md:h-[450px]"
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent>
              {blogs.map((blog, index) => (
                <CarouselItem key={index} className="pr-4">
                  <div className="flex h-full w-full gap-4 max-md:flex-col md:h-[450px]">
                    <div className="flex h-full w-3/4 flex-col gap-8">
                      <div className="flex flex-col">
                        <p className="text-sm font-bold ">{blog.auther}</p>
                        <p className="text-sm font-medium text-primary">
                          {blog.profession}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-2xl font-bold">{blog.title}</p>
                        <p className="text-sm font-medium">
                          {blog.description}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          {blog.publishedAt}
                        </p>
                      </div>
                    </div>
                    <img
                      src={blog.image}
                      alt="blog"
                      className="h-full w-2/3 flex-1 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-10 flex w-fit items-center justify-between gap-3 pr-5 max-md:hidden">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`${
                    index === selectedIndex
                      ? "bg-primary outline outline-1 outline-offset-4 outline-primary"
                      : " bg-stone-500 outline-0"
                  } size-2 rounded-full `}
                />
              ))}
            </div>
          </Carousel>
          <div className="flex h-[450px] w-full flex-col gap-4 bg-stone-100 p-8 md:w-1/2">
            <img
              src={blogFixed}
              alt="blog"
              className="h-6/12 w-full object-cover"
            />
            <div className=" w-full">
              <p className="text-2xl font-bold">
                Handicap : le « Petit Plus » de La Corbeille Bleue pour
                l`insertion
              </p>
              <p className="text-sm font-bold ">Par Fernando Araujo</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-primary">
                  Eco Professor
                </p>
                <p className="text-sm font-medium text-primary">
                  2 dérniers jours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
