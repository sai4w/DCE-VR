import logo from "@src/assets/icons/logo-sign.svg";
import { SocialButtons } from "./socialButtons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface AuthWrapperProps {
  headerLabel: string;
  backButtonHref: string;
  backButtonLabel: string;
  description: string;
  showSocial: boolean;
  loading?: boolean;
  cover: string;
  children: React.ReactNode;
  formPosition: string;
}
export const AuthWrapper = ({ ...data }: AuthWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex h-screen w-full bg-whiteR transition-all duration-1000 md:items-center md:justify-between`}
    >
      <div
        className={`flex h-full w-full  overflow-auto py-12 transition-all duration-1000 md:w-1/2 md:items-center ${
          data.formPosition === "right"
            ? "md:translate-x-[100%]"
            : "md:translate-x-0"
        }`}
      >
        <div className="mx-auto flex w-4/5 flex-col justify-start space-y-4 md:my-auto md:w-3/5">
          <Link to="/" className="flex w-full justify-center">
            <img src={logo} alt="logo" className="h-16 md:h-24" />
          </Link>
          <div className="space-y-4">
            <p className="text-center text-xl font-semibold capitalize text-stone-700 md:text-4xl">
              {data.headerLabel}
            </p>
            <div className="flex justify-center space-x-2 text-center text-xs text-stone-500 md:text-base ">
              <p>{data.description}</p>
              <Link
                to={data.backButtonHref}
                className="text-xs font-bold text-primary md:text-base"
              >
                {data.backButtonLabel}
              </Link>
            </div>
          </div>
          {data.children}
          {data.showSocial && (
            <div className="flex flex-col justify-evenly space-y-6 pt-8">
              <div className="flex w-full items-center">
                <div className="mr-4 h-px w-full bg-stone-400" />
                <p>OU</p>
                <div className="ml-4 h-px w-full bg-stone-400" />
              </div>
              <SocialButtons loading={data.loading} />
            </div>
          )}
        </div>
      </div>
      <motion.img
        src={data.cover}
        loading="lazy"
        alt="logo"
        className={`z-10 hidden h-screen w-1/2 flex-shrink object-cover object-center transition-all duration-1000 md:flex ${
          data.formPosition === "right"
            ? "md:-translate-x-[100%]"
            : "md:translate-x-0"
        }`}
      />
    </motion.div>
  );
};
