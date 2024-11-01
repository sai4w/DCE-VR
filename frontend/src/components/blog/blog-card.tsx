import imgBlog from "@src/assets/images/blog.png";
import { Button } from "../ui/button";
import { ArrowRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
export const BlogCard = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 border border-stone-300 p-4">
      <img src={imgBlog} alt="pod" />
      <div className="flex flex-col gap-2">
        <div className="flex h-fit w-full gap-4">
          <p className="text-xl font-light text-stone-500">
            Ecrit par : Grégory Tournay
          </p>
          <p className="text-xl font-light text-stone-400">
            <DotFilledIcon className="size-8" />
          </p>
          <p className="text-xl font-light text-stone-500">22/05/2024</p>
        </div>
        <p className="font-cairo text-xl font-bold">
          Handicap : le « Petit Plus » de La Corbeille Bleue pour l'insertion
        </p>
        <div className="flex h-fit w-full items-center justify-between gap-24">
          <p className="text-xl font-light text-stone-500">
            Avec sa filiale Le Petit Plus, La Corbeille Bleue s'engage en faveur
            de l'insertion professionnelle des personnes en situation de
            handicap...
          </p>
          <Button className="border-2 border-primary bg-primary px-2.5 py-5 hover:bg-transparent hover:text-primary">
            <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
