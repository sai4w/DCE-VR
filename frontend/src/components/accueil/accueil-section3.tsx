import { ArrowRightIcon } from "@radix-ui/react-icons";
import bgsection3 from "@src/assets/images/accueil/bg-section3.png";
import first from "@src/assets/icons/accueil/ranking/first.svg";
import second from "@src/assets/icons/accueil/ranking/second.svg";
import third from "@src/assets/icons/accueil/ranking/third.svg";
import { Button } from "../ui/button";
import { avatars } from "@src/assets/avatar/avatar";
import { motion } from "framer-motion";
export const AccueilSection3 = () => {
  return (
    <section
      className="h-full w-full bg-cover bg-bottom bg-no-repeat py-16 shadow-[0_35px_35px_-10px_rgba(0,0,0,0.3)]"
      style={{ backgroundImage: `url(${bgsection3})` }}
    >
      <div className="container flex h-fit w-full items-center  gap-12 max-md:flex-col">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { ease: "linear", duration: 1 },
            opacity: { ease: "linear", duration: 1 },
          }}
          className="flex w-full flex-col gap-4 max-md:items-center"
        >
          <Button className="w-fit gap-2 bg-primary px-6 font-semibold uppercase hover:bg-primary/70">
            Voir Tous <ArrowRightIcon />
          </Button>
          <p className="text-2xl font-bold uppercase leading-none text-white max-md:text-center md:text-[45px]">
            Top Pollueurs Actifs :<br /> Les Trois As du Nettoyage Urbain !
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { ease: "linear", duration: 1, delay: 0.25 },
            opacity: { ease: "linear", duration: 1, delay: 0.25 },
          }}
          className="flex h-fit w-full items-center justify-evenly border-stone-300 max-md:flex-col max-md:gap-24 md:border-x-2"
        >
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              y: { ease: "linear", duration: 1, delay: 0.5 },
              opacity: { ease: "linear", duration: 1, delay: 0.5 },
            }}
            className="relative h-full w-fit"
          >
            <img
              src={avatars[0]}
              alt="first"
              className="h-32 w-32 rounded-full border-2 border-stone-300 object-cover"
            />
            <img
              src={first}
              alt="first"
              className="absolute -left-10 -top-10 scale-90"
            />
            <label className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform text-nowrap rounded-lg bg-primary px-2 py-1 text-sm font-bold text-white">
              Fernando Araujo
            </label>
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              y: { ease: "linear", duration: 1, delay: 0.75 },
              opacity: { ease: "linear", duration: 1, delay: 0.75 },
            }}
            className="relative h-full w-fit"
          >
            <img
              src={avatars[6]}
              alt="first"
              className="h-32 w-32 rounded-full border-2 border-stone-300 object-cover"
            />
            <img src={second} alt="first" className="absolute -left-8 -top-6" />
            <label className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform text-nowrap rounded-lg bg-primary px-2 py-1 text-sm font-bold text-white">
              Antonia Lima
            </label>
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              y: { ease: "linear", duration: 1, delay: 1 },
              opacity: { ease: "linear", duration: 1, delay: 1 },
            }}
            className="relative h-full w-fit"
          >
            <img
              src={avatars[2]}
              alt="first"
              className="h-32 w-32 rounded-full border-2 border-stone-300 object-cover"
            />
            <img src={third} alt="first" className="absolute -left-8 -top-6" />
            <label className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform text-nowrap rounded-lg bg-primary px-2 py-1 text-sm font-bold text-white">
              Valdilene Carvalho
            </label>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
