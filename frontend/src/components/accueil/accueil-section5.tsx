import bgsection5 from "@src/assets/images/accueil/bg-section5.png";
import rouvr from "@src/assets/icons/accueil/rouvr.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const AccueilSection5 = () => {
  return (
    <Link to="/rouevr">
      <section
        className="flex h-full w-full items-center justify-between bg-cover bg-center bg-no-repeat p-8 shadow-[0_35px_35px_-10px_rgba(0,0,0,0.3)] md:p-24"
        style={{ backgroundImage: `url(${bgsection5})` }}
      >
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[450px] text-5xl font-extrabold uppercase text-white max-md:hidden"
        >
          Plongez dans l'Éco-Univers avec ROUVR :<br /> Tri et recyclage en VR!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex w-full flex-col items-center md:w-2/5 md:items-end"
        >
          <img src={rouvr} alt="rouvr" className="w-full" />
          <p className="font-integral text-xl text-white md:text-[26px]">
            éssayer maintenant!
          </p>
        </motion.div>
      </section>
    </Link>
  );
};
