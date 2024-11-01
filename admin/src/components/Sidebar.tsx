import home from "@src/assets/icons/home.svg";
import logo from "@src/assets/icons/logo.svg";
import posts from "@src/assets/icons/posts.svg";
import signal from "@src/assets/icons/signal.svg";
import blog from "@src/assets/icons/blog.svg";
import envelope from "@src/assets/icons/envelope.svg";
import playlist from "@src/assets/icons/playlist.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-60 bg-[#081A1A]">
      <img src={logo} alt="logo" className="py-4 mx-auto object-cover" />
      <div className="flex flex-col py-4 items-center gap-4">
        <button
          className="flex items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12"
          onClick={() => navigate("/")}
        >
          <img src={home} alt="home" />
          <span className="text-xs font-semibold">Dashboard</span>
        </button>
        <div className="bg-[#495759] flex items-center w-full px-5 py-2">
          <span className="text-xs font-semibold text-white">APPS</span>
        </div>
        <Accordion type="single" collapsible className="w-11/12">
          <AccordionItem value="item-1" className="w-full border-0">
            <AccordionTrigger className="flex space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12">
              <div className="flex space-x-2 items-center">
                <img src={posts} alt="posts" />
                <span className="text-xs font-semibold">Les postes</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-end space-y-1 py-2">
              <Accordion type="single" collapsible className="w-11/12">
                <AccordionItem value="item-1" className="w-full border-0">
                  <AccordionTrigger className="flex space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12">
                    <div className="flex space-x-2 items-center">
                      <img src={signal} alt="signal" />
                      <span className="text-xs font-semibold text-left">
                        Les Postes de signalement
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex items-center pl-8">
                    <div className="flex flex-col w-full">
                      <button
                        className="flex text-xs items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12"
                        onClick={() => navigate("/signalPosts")}
                      >
                        - Gérer les postes
                      </button>
                      <button
                        className="flex text-xs items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12"
                        onClick={() => navigate("/nettoyagePosts")}
                      >
                        - Contrôle nettoyage
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <button className="flex items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12">
                <div className="flex space-x-2 items-center">
                  <img src={posts} alt="posts" />
                  <span className="text-xs font-semibold">
                    Les Postes d’échange
                  </span>
                </div>
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <button className="flex items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12">
          <img src={blog} alt="home" />
          <span className="text-xs font-semibold">blogs</span>
        </button>
        <button className="flex items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12">
          <img src={playlist} alt="home" />
          <span className="text-xs font-semibold">Playlists</span>
        </button>
        <button className="flex items-center space-x-2 px-2 py-1.5 text-white hover:bg-[#1C2C2C] rounded w-11/12">
          <img src={envelope} alt="home" />
          <span className="text-xs font-semibold">Contactez-Nous</span>
        </button>

        <button></button>
      </div>
    </div>
  );
};
