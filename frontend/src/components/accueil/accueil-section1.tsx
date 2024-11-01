import bgsection1 from "@src/assets/images/accueil/bg-section1.png";
import section1 from "@src/assets/images/accueil/accueil_section1.png";
import globe from "@src/assets/icons/globe.svg";
import { Button } from "@src/components/ui/button";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import ecosummit from "@src/assets/icons/accueil/partners/ecosummit.svg";
import nexwafe from "@src/assets/icons/accueil/partners/nexwafe.svg";
import innoenergy from "@src/assets/icons/accueil/partners/innoEnergy.svg";
import encevo from "@src/assets/icons/accueil/partners/encevo.svg";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const AccueilSection1 = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-fit w-full overflow-hidden">
      <div
        className="absolute -z-50 -mr-2 flex h-full w-3/5 items-center justify-center bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${bgsection1})` }}
      />
      <div className="container flex h-fit w-full py-16 max-md:flex-col">
        <div className="flex h-fit flex-none flex-col justify-between gap-y-4 lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex items-start gap-2"
          >
            <img src={globe} alt="globe" className="size-6 md:size-12" />
            <p className="mt-1 text-pretty font-integral text-[11.5px] font-bold text-primary md:text-2xl">
              Découvrez nos trouvailles éco-responsables !
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "linear", delay: 0.5 }}
            className="text-5xl font-bold uppercase leading-none md:text-[75px]"
          >
            Explorez un monde durable avec{" "}
            <span className="text-primary">DCEVR</span> !
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.75 }}
            className="text-pretty text-[25.5px] font-medium  uppercase max-md:text-xs"
          >
            notre plateforme collaborative dédiée à l'environnement. Échangez
            des objets, réduisez votre empreinte carbone, jouez à des jeux VR
            éducatifs et plus encore. Ensemble, créons un avenir plus vert et
            durable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 1 }}
            className="flex items-center gap-2 md:gap-4"
          >
            <Button
              className="border-2 border-primary bg-transparent px-4 py-6 text-sm font-semibold text-primary hover:bg-transparent hover:text-primary hover:brightness-75 md:px-8 md:text-2xl"
              onClick={() => navigate("/apropos")}
            >
              Découvrez Nous
            </Button>
            <button className="relative flex size-12 cursor-pointer items-center justify-center rounded-full border-opacity-60 bg-transparent text-center after:absolute after:left-0 after:top-0 after:h-full after:w-full after:animate-spin-vari after:rounded-full after:border-4 after:border-transparent after:border-l-primary">
              <div className="size-fit rounded-full bg-white shadow-md">
                <TriangleRightIcon className="size-10 text-black" />
              </div>
            </button>
            <p className="font-semibold">Comment faire</p>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 25 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 1.5 }}
          src={section1}
          className="h-full w-[53%] flex-none rounded-[50px] max-md:hidden"
        />
      </div>
      <Marquee className="flex h-24 w-full items-center justify-between bg-primary md:h-48">
        <img
          src={ecosummit}
          className="ml-24 size-fit object-cover object-center max-md:scale-50"
        />
        <img
          src={nexwafe}
          className="ml-24 size-fit object-cover object-center max-md:scale-50"
        />
        <img
          src={innoenergy}
          className="ml-24 size-fit object-cover object-center max-md:scale-50"
        />
        <img
          src={encevo}
          className="ml-24 size-fit object-cover object-center max-md:scale-50"
        />
      </Marquee>
    </section>
  );
};
