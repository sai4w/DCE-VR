import { Link, useNavigate } from "react-router-dom";
import logo from "@src/assets/dce-vr.svg";
import notif from "@src/assets/icons/notif.svg";
import account from "@src/assets/icons/account.svg";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ButtonGradient } from "./ui/button-gradient";
import Search from "@src/assets/icons/Search";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { avatars } from "@src/assets/avatar/avatar";
import setting from "@src/assets/icons/setting.svg";
import avis from "@src/assets/icons/avis.svg";
import exit from "@src/assets/icons/exit.svg";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import useUserStore from "@src/store/userStore";
import { toast } from "sonner";
import { Cross2Icon, TextAlignRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import MobileMenu from "./mobileMenu";

const education: { title: string; href: string; description: string }[] = [
  {
    title: "TRI-VR",
    href: "/rouevr",
    description:
      "Plongez dans notre VRécif : Explorez un monde virtuel où l'environnement est roi !",
  },
  {
    title: "Eco-blog",
    href: "/blog",
    description:
      "Plongez dans notre Éco-Blog: Des articles verts pour une inspiration durable!",
  },
  {
    title: "Eco-play",
    href: "/playlists",
    description:
      "Écoutez l'écho de la nature: Podcasts et animations pour un monde durable.",
  },
];
const ecoSignal: { title: string; href: string; description: string }[] = [
  {
    title: "Éco-Signalements en Action",
    href: "/signals",
    description:
      "Visualisez les progrès des signalements pour une ville urbaine plus écologique et saine.",
  },
  {
    title: "Ville Propre, Signalez!",
    href: "/signaler",
    description:
      "Participez à notre initiative de signalement pour une ville plus propre et durable.",
  },
  {
    title: "Classement des Éco-Champions",
    href: "/ranking",
    description:
      "Découvrez où vous vous situez dans notre classement et devenez un leader écologique!",
  },
];
const ecoMaterial: { title: string; href: string; description: string }[] = [
  {
    title: "Les Postes Écologiques",
    href: "/posts",
    description:
      "Partagez, Échangez, Contribuez! Découvrez les contributions écologiques de tous les utilisateurs.",
  },
  {
    title: "Partagez pour Prospérer",
    href: "/poster",
    description:
      "Remplissez le formulaire et partagez vos objets pour encourager l'échange écologique.",
  },
  {
    title: "Mon Éco-Inventaire",
    href: "/mesposts",
    description:
      "Gérez vos objets postés pour l'échange et suivez leur statut écologique.",
  },
];
const aPropos: { title: string; href: string; description: string }[] = [
  {
    title: "Qui sommes-nous?",
    href: "/apropos",
    description:
      "Découvrez notre mission, notre vision et notre équipe pour un monde plus vert.",
  },
  {
    title: "Nous Contacter",
    href: "/contact",
    description:
      "Contactez-nous pour toute question, suggestion ou collaboration.",
  },
];
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, clearUser, isLogged } = useUserStore();
  const handleLogout = () => {
    clearUser();
    navigate("/login");
    console.log("logout");
  };
  return (
    <section className="z-20 flex h-fit flex-col bg-black transition-all duration-500 max-md:m-2 max-md:rounded-md max-md:py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center justify-start">
          <img src={logo} alt="logo" className="h-8 flex-none" />
        </Link>

        <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
          <NavigationMenuList className="flex w-full items-center justify-between py-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xl font-semibold text-white">
                À propos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 bg-black p-4 text-whiteR">
                  {aPropos.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      className="hover:bg-whiteR hover:text-black"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
          <NavigationMenuList className="flex w-full items-center justify-between py-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xl font-semibold text-white">
                Éducation
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 bg-black p-4 text-whiteR">
                  {education.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      className="hover:bg-whiteR hover:text-black"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
          <NavigationMenuList className="flex w-full items-center justify-between py-5">
            <NavigationMenuItem>
              <Link to="/ecomap">
                <p
                  className={
                    (navigationMenuTriggerStyle(),
                    " bg-transparent text-xl font-semibold text-white ")
                  }
                >
                  Eco Map
                </p>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
          <NavigationMenuList className="flex w-full items-center justify-between py-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xl font-semibold text-white">
                Eco Signal
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 bg-black p-4 text-whiteR">
                  {ecoSignal.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      className="hover:bg-whiteR hover:text-black"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="flex w-full items-center justify-center max-md:hidden">
          <NavigationMenuList className="flex w-full items-center justify-between py-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-xl font-semibold text-white">
                Eco Matériel
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 bg-black p-4 text-whiteR">
                  {ecoMaterial.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      className="hover:bg-whiteR hover:text-black"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {!isLogged() ? (
          <div className="flex flex-1 items-center justify-end max-md:hidden">
            <ButtonGradient href="/login" title="Connexion" />
          </div>
        ) : (
          <div className="flex w-full flex-1 items-center justify-center gap-x-2 max-md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <button className={`${!isLogged() && "hidden"}`}>
                  <img src={notif} alt="notification" className="m-2 size-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent className=""></PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <button className={`${!isLogged() && "hidden"}`}>
                  <img src={account} alt="account" className="m-2 size-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-fit rounded-2xl bg-[url(./assets/images/bg-leaf.png)] bg-cover p-6">
                <div className="flex flex-col items-center space-y-2">
                  <Link
                    to="/monprofile"
                    className="flex w-full items-center space-x-5"
                  >
                    <img
                      src={avatars[Number(user?.avatar)]}
                      alt="Avatar"
                      className="size-10 rounded-full p-px ring-1 ring-white"
                    />
                    <p className="truncate text-lg font-medium text-white">
                      <span className="mr-1">{user?.firstname}</span>
                      <span>{user?.lastname}</span>
                    </p>
                  </Link>
                  <Separator className="w-full bg-white" />
                  <Link to="/mesparametres" className="w-full">
                    <button className="flex w-full items-center space-x-6 rounded-lg p-1 hover:outline hover:outline-1 hover:outline-white">
                      <img
                        src={setting}
                        alt="setting"
                        className="size-8 text-white "
                      />
                      <p className="text-lg text-white  ">
                        <span>Paramétres</span>
                      </p>
                    </button>
                  </Link>
                  <Link to="/feedback" className="w-full">
                    <button className="flex w-full items-center space-x-6 rounded-lg p-1 hover:outline hover:outline-1 hover:outline-white">
                      <img
                        src={avis}
                        alt="avis"
                        className="size-8 text-white"
                      />
                      <p className="text-lg text-white ">
                        <span>Donner un avis</span>
                      </p>
                    </button>
                  </Link>
                  <button
                    className="flex w-full items-center space-x-6 rounded-lg p-1 hover:outline hover:outline-2 hover:outline-white"
                    onClick={() => (
                      handleLogout(),
                      toast.success("Vous avez été déconnecté avec succès !")
                    )}
                  >
                    <img src={exit} alt="exit" className="size-8 text-white" />
                    <p className="text-lg text-white ">
                      <span>Déconnecter</span>
                    </p>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <button className={`${!isLogged() && "hidden"}`}>
                  <Search className="m-2 h-6 w-6 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-fit rounded-2xl bg-black">
                <Input
                  placeholder="Rechercher"
                  className="bg-black text-stone-50"
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
        <div className="relative flex items-center justify-center gap-x-2 md:hidden">
          <TextAlignRightIcon
            className={`absolute right-2 size-8 text-white ${isMenuOpen ? "invisible -z-20 opacity-0" : "visible z-20 opacity-100"} transition-all duration-300`}
            onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
          />
          <Cross2Icon
            className={`absolute right-2 size-8 text-white ${!isMenuOpen ? "invisible -z-20 opacity-0" : "visible z-20 opacity-100"}`}
            onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
          />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </section>
  );
};
