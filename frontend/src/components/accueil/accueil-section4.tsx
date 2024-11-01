import ecoMaterial from "@src/assets/icons/accueil/eco-services/ecomaterial.svg";
import mecanique from "@src/assets/images/accueil/mecanique.png";
import recycle from "@src/assets/images/accueil/recycle.png";
import electronique from "@src/assets/images/accueil/electronique.png";
import livres from "@src/assets/images/accueil/livres.png";
import { Link } from "react-router-dom";
export const AccueilSection4 = () => {
  return (
    <section className="h-full w-full py-16">
      <div className="container h-fit w-full">
        <div className="flex flex-col items-center justify-center text-center text-primary">
          <img
            src={ecoMaterial}
            alt="ecomaterial"
            className="size-16 pb-4 md:size-28"
          />
          <p className="font-integral font-bold md:text-[44px]">
            UNE LARGE GAMME DE PRODUITS INUTILES MAIS UTILES
          </p>
          <p className="font-medium md:text-3xl ">
            Objet par objet , c’est notre idée
          </p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <p className="bg-gradient bg-clip-text font-integral font-bold uppercase text-transparent max-md:hidden md:text-5xl">
            Catégories
            <br /> pour vous
          </p>
          <div className="grid grid-cols-1 gap-4 py-12 md:grid-cols-4">
            <div className="relative flex h-fit w-fit overflow-hidden rounded-xl ">
              <img
                src={mecanique}
                alt="mecanique"
                className="size-full object-cover object-center"
              />
              <Link
                to="/posts"
                className="max-ms:text-lg absolute rounded-3xl bg-primary text-center text-white hover:brightness-90 max-sm:right-1/2 max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:translate-x-1/2 max-sm:px-8 max-sm:py-3 md:bottom-8 md:left-8 md:px-4 md:py-2"
              >
                Mécanique
              </Link>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-xl ">
              <img
                src={recycle}
                alt="mecanique"
                className="size-full object-cover object-center"
              />
              <Link
                to="/posts"
                className="max-ms:text-lg absolute rounded-3xl bg-primary text-center text-white hover:brightness-90 max-sm:right-1/2 max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:translate-x-1/2 max-sm:px-8 max-sm:py-3 md:bottom-8 md:left-8 md:px-4 md:py-2"
              >
                Récyclé
              </Link>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-xl ">
              <img
                src={electronique}
                alt="mecanique"
                className="size-full object-cover object-center"
              />
              <Link
                to="/posts"
                className="max-ms:text-lg absolute rounded-3xl bg-primary text-center text-white hover:brightness-90 max-sm:right-1/2 max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:translate-x-1/2 max-sm:px-8 max-sm:py-3 md:bottom-8 md:left-8 md:px-4 md:py-2"
              >
                Électronique
              </Link>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-xl">
              <img
                src={livres}
                alt="mecanique"
                className="size-full object-cover object-center"
              />
              <Link
                to="/posts"
                className="max-ms:text-lg absolute rounded-3xl bg-primary text-center text-white hover:brightness-90 max-sm:right-1/2 max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:translate-x-1/2 max-sm:px-8 max-sm:py-3 md:bottom-8 md:left-8 md:px-4 md:py-2"
              >
                Livres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
