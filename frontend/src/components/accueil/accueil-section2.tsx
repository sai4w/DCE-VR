import { AccueilListEcoServices } from "./accueil-listEcoServices";

export const AccueilSection2 = () => {
  return (
    <section className="h-full w-full py-16">
      <div className="container h-fit w-full">
        <p className="w-full font-integral text-2xl font-bold leading-tight text-stone-800 md:w-1/2 md:text-[46.8px]">
          Créez un impact positif avec nos{" "}
          <span className="text-primary">eco - services</span>
        </p>
        <AccueilListEcoServices />
      </div>
    </section>
  );
};
