import Search from "@src/assets/icons/Search";
import { Link } from "react-router-dom";
import imgPod from "@src/assets/images/podcast.png";

export const Sidebar = () => {
  return (
    <div className="flex h-fit w-5/12 flex-col gap-y-6 bg-[#F5F5F5] p-10">
      <p className="text-2xl font-bold">Recherche</p>
      <div className="relative">
        <input
          type="text"
          className="h-12 w-full px-16 placeholder:uppercase placeholder:text-stone-300"
          placeholder="Rechercher ici"
        />
        <Search className="absolute left-8 top-3.5 size-5 text-stone-800" />
      </div>
      <p className="text-xl font-bold">Catégories</p>
      <ul className="flex list-inside list-disc flex-col gap-4 px-2">
        <Link to="/podcast">
          <li className="text-stone-700">Podcasts</li>
        </Link>
        <Link to="/animation">
          <li className="text-stone-700">Animations</li>
        </Link>
      </ul>
      <p className="text-xl font-bold">Les Derniers Videos</p>
      {[1, 2, 3, 4].map((_, i) => (
        <div key={i} className="flex h-20 gap-4 overflow-hidden text-ellipsis">
          <img
            src={imgPod}
            alt="video"
            className="size-20 object-cover object-center"
          />
          <div className="max-h-full">
            <p className="font-light text-stone-500">22/05/2024</p>
            <p className="w-full font-cairo text-xl font-bold text-stone-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis libero esse quia maxime totam sint quos, sit magni
              minima voluptas fugiat. Qui illo iusto harum corporis totam odio
              officia aperiam?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
