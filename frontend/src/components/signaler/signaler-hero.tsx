import { BannerWrapper } from "../bannerWrapper";
import signalBanner from "@src/assets/images/signalBanner.png";
import { motion } from "framer-motion";
export const SignalerHero = () => {
  return (
    <BannerWrapper
      img={signalBanner}
      filter="bg-gradient-to-b from-[#19E891]/90 to-[#18C8C8]/50 to-100% backdrop-blur-[1px] backdrop-brightness-50"
    >
      <div className="container flex h-full flex-col items-center justify-between gap-8 py-16 text-center uppercase ">
        <p className="text-shadow font-integral text-5xl font-bold text-white xl:text-[80px]">
          Nouveau signalement
        </p>
        <div className="my-4 flex w-full items-start justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.div
              animate={{ backgroundColor: "#ffffff" }}
              transition={{ duration: 0.5 }}
              className="shadow-xxl flex size-8 items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium text-primary"
            >
              <motion.p
                animate={{ color: "#2DAD82" }}
                transition={{ duration: 0.5 }}
                className="text-lg font-medium text-white "
              >
                1
              </motion.p>
            </motion.div>
            <motion.p
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              className="text-shadow font-medium text-white"
            >
              capturer
            </motion.p>
          </div>
          <motion.div
            animate={{ backgroundColor: "#ffffff" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="shadow-xxl mt-4 h-2 w-24 rounded-full border border-white bg-transparent"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.div
              animate={{ backgroundColor: "#ffffff" }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="shadow-xxl flex size-8 items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium text-primary"
            >
              <motion.p
                animate={{ color: "#2DAD82" }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-lg font-medium text-white"
              >
                2
              </motion.p>
            </motion.div>
            <motion.p
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-shadow font-medium text-white"
            >
              signaler
            </motion.p>
          </div>
          <motion.div
            animate={{ backgroundColor: "#ffffff" }}
            transition={{ duration: 0.5, delay: 2 }}
            className="shadow-xxl mt-4 h-2 w-24 rounded-full border border-white bg-transparent"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.div
              animate={{ backgroundColor: "#ffffff" }}
              transition={{ duration: 0.5, delay: 3 }}
              className="shadow-xxl flex size-8 items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium text-primary"
            >
              <motion.p
                animate={{ color: "#2DAD82" }}
                transition={{ duration: 0.5, delay: 3 }}
                className="text-lg font-medium text-white"
              >
                3
              </motion.p>
            </motion.div>
            <motion.p
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 3 }}
              className="text-shadow font-medium text-white"
            >
              localiser
            </motion.p>
          </div>
          <motion.div
            animate={{ backgroundColor: "#ffffff" }}
            transition={{ duration: 0.5, delay: 3.5 }}
            className="shadow-xxl mt-4 h-2 w-24 rounded-full border border-white bg-transparent"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.div
              animate={{ backgroundColor: "#ffffff" }}
              transition={{ duration: 0.5, delay: 4.5 }}
              className="shadow-xxl flex size-8 items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium text-primary"
            >
              <motion.p
                animate={{ color: "#2DAD82" }}
                transition={{ duration: 0.5, delay: 4.5 }}
                className="text-lg font-medium text-white"
              >
                4
              </motion.p>
            </motion.div>
            <motion.p
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 4.5 }}
              className="text-shadow font-medium text-white"
            >
              nettoyer
            </motion.p>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};
