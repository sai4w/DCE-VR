import { BreadcrumbUI } from "../BreadcrumbUI";
import tounes from "@src/assets/images/tounes.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import mapMarker from "@src/assets/icons/markerMap.svg";
import miniMarker from "@src/assets/icons/miniMarker.svg";
import house from "@src/assets/icons/house.svg";
import location from "@src/assets/icons/location.svg";
import flyer from "@src/assets/icons/flyer.svg";
import call from "@src/assets/icons/call.svg";
import share from "@src/assets/icons/share.svg";
import assos3 from "@src/assets/images/assos3.png";
import assos1 from "@src/assets/images/assos1.png";
import assos2 from "@src/assets/images/assos2.png";
import nabeul from "@src/assets/images/nabeul.png";
import { Button } from "../ui/button";
import { EcoMapFilter } from "./ecomap-filter";
import { Link } from "react-router-dom";

export const EcoMapContent = () => {
  const path = [
    { path: "/", name: "Accueil" },
    { path: "", name: "EcoMap" },
  ];
  const listMarker: {
    x: string;
    y: string;
    img: string;
    region: string;
    location: string;
    title: string;
    type: string;
    tel: string;
    link: string;
  }[] = [
    {
      x: "31%",
      y: "3%",
      img: assos1,
      region: "Tunis",
      location: "Corniche, Marsa",
      tel: "+21625847811",
      link: "https://www.facebook.com/INDINYA",
      title: "Indinya - Centre de recyclage",
      type: "Centre",
    },
    {
      x: "22%",
      y: "8%",
      img: nabeul,
      region: "Nabeul",
      location: "HGHH+66Q, Turki 8084",
      tel: "23389120",
      link: "https://www.facebook.com/fermetunisosuisse",
      title: "Ferme Agricole Tuniso-Suisse",
      type: "Ferme",
    },
    {
      x: "26.5%",
      y: "13%",
      img: assos3,
      region: "Sousse",
      location: "Km 4 route de sousse, BP:27, P1, 4010",
      tel: "+21623236009",
      link: "https://www.facebook.com/vpmeubles.sarl/",
      title: "VP Meubles Sarl",
      type: "Association",
    },
    {
      x: "27%",
      y: "17%",
      img: assos2,
      region: "Sousse",
      location: "7C2Q+5M Ain Errahma",
      tel: "+21698209960",
      link: "https://www.facebook.com/le.village.ken/",
      title: "Le Village Kèn",
      type: "Parc , Maison d'hôte",
    },
  ];
  return (
    <div className="container my-8 flex w-full flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex items-start justify-between gap-8 border-2 border-stone-300 p-4">
        <EcoMapFilter />
        <div className="flex w-full justify-center">
          <div className="items-starts relative flex w-[35%] flex-none justify-center">
            <img src={tounes} alt="ecomap" className="h-fit w-full" />
            {listMarker.map((marker, index) => (
              <div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <img
                      src={mapMarker}
                      alt={"mapMarker" + index}
                      style={{ top: marker.y, right: marker.x }}
                      className="absolute size-8"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent
                    style={{ top: marker.y, right: marker.x }}
                    className="z-50 flex h-fit w-96 flex-col overflow-hidden rounded-2xl"
                  >
                    <img
                      src={marker.img}
                      alt={"img" + marker.x + marker.y}
                      className="h-36 w-96 object-cover"
                    />
                    <div className="flex flex-col bg-primary p-4">
                      <div className="flex justify-between">
                        <p className="font font-bold text-white">
                          {marker.title}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={miniMarker} />
                        <p className="text-xs text-white">{marker.location}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={house} />
                        <p className="text-xs text-white">{marker.type}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={location} />
                        <p className="text-xs text-white">{marker.region}</p>
                      </div>
                      <div className="flex items-center gap-1 pt-1">
                        <Button className="h-7 gap-1 rounded-xl bg-white px-2 text-primary hover:bg-white/80">
                          <img src={flyer} alt="flyer" />
                          <p>Itinéraires</p>
                        </Button>

                        <Button className="h-7 gap-1 rounded-xl border border-white bg-primary px-2 text-white hover:bg-primary hover:brightness-90">
                          <img src={call} alt="call" />
                          <p>Appeler</p>
                        </Button>
                        <Link to={marker.link}>
                          <Button className="h-7 gap-1 rounded-xl border border-white bg-primary px-2 text-white hover:bg-primary hover:brightness-90">
                            <img src={share} alt="share" />
                            <p>Lien</p>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
