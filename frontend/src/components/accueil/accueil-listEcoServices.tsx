import education from "@src/assets/icons/accueil/eco-services/edu.svg";
import ecoMap from "@src/assets/icons/accueil/eco-services/ecomap.svg";
import ecoSignal from "@src/assets/icons/accueil/eco-services/ecosignal.svg";
import ecoMaterial from "@src/assets/icons/accueil/eco-services/ecomaterial.svg";
import leaf from "@src/assets/icons/accueil/eco-services/leaf.svg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const EcoServices: {
  title: string;
  description: string;
  link: string;
  img: string;
}[] = [
  {
    title: "éducation",
    description:
      " Plongez dans le monde de la durabilité avec des animations, des articles et des jeux interactifs.",
    link: "/blog",
    img: education,
  },
  {
    title: "eco Map",
    description:
      "visualisez vos impacts environnementaux et adoptez des actions durables pour un avenir plus vert. contribuez à la préservation de notre planète.",
    link: "/ecomap",
    img: ecoMap,
  },
  {
    title: "eco Signal",
    description:
      "Participez à la surveillance des déchets urbains. Signalez, agissez et transformez votre communauté en un environnement plus propre.",
    link: "/signals",
    img: ecoSignal,
  },
  {
    title: "Eco Matériel",
    description:
      "Échangez et réutilisez pour un impact environnemental positif. Trouvez de nouveaux trésors électroniques et participez à la durabilité.",
    link: "/posts",
    img: ecoMaterial,
  },
];

export const AccueilListEcoServices = () => {
  return (
    <div className="grid h-full grid-cols-1 justify-between gap-8 py-16 md:grid-cols-4">
      {EcoServices.map((obj, index) => {
        return (
          <Card
            key={index}
            i={index + 1}
            title={obj.title}
            description={obj.description}
            link={obj.link}
            img={obj.img}
          />
        );
      })}
    </div>
  );
};
const Card = ({
  title,
  description,
  link,
  img,
  i,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
  i: number;
}) => {
  return (
    <motion.div
      initial={{ y: -35, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        y: { ease: "linear", duration: 0.5, delay: 0.125 * i },
        opacity: { ease: "linear", duration: 1, delay: 0.125 * i },
      }}
      className="group relative flex flex-col justify-between gap-4 overflow-hidden p-6 ring-1 ring-stone-300 duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:ring-0"
    >
      <div className="flex w-full items-center justify-between duration-1000">
        <img src={img} alt={title} className="size-24" />
        <p className="specialtext group-hover:normaltext text-6xl font-bold text-stone-300 transition-all duration-500">
          0{i}
        </p>
      </div>
      <p className="text-2xl font-semibold capitalize">{title}</p>
      <p className="overflow-hidden text-ellipsis text-lg font-medium">
        {description}
      </p>
      <Link to={link}>
        <button className="flex -translate-x-16 items-center gap-2 transition-all duration-500 group-hover:translate-x-0">
          <p className="opacity-0 duration-500 group-hover:text-primary group-hover:opacity-100">
            Voir plus
          </p>
          <ArrowRightIcon className="size-8 duration-500 group-hover:text-primary" />
        </button>
      </Link>
      <img
        src={leaf}
        alt="leaf"
        className="absolute bottom-0 right-0 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      />
    </motion.div>
  );
};
