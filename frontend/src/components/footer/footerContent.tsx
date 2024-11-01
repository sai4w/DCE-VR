import { Link } from "react-router-dom";
import mapMarker from "@src/assets/icons/mapMarker.svg";
import phone from "@src/assets/icons/phone.svg";
import envelope from "@src/assets/icons/envelope.svg";
import blogfooter from "@src/assets/images/blog-footer.png";
export const FooterContent = () => {
  return (
    <div className="container flex w-full items-center justify-between py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between space-y-2">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">À Propos DCE VR</p>
            <div className="h-0.5 w-24 rounded-full bg-primary" />
          </div>
          <p className="text-xl font-light">
            RoueVR sensibilise à l'environnement et encourage l'action durable
            grâce à des outils interactifs et éducatifs.
          </p>
          <Link to="/apropos">
            <p className="text-xl font-light text-primary">Voir plus -&gt;</p>
          </Link>
        </div>
        <div className="flex flex-col justify-between space-y-2">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Prenez notre contact</p>
            <div className="h-0.5 w-24 rounded-full bg-primary" />
          </div>
          <p className="flex text-xl font-light">
            <img
              src={mapMarker}
              alt="map marker"
              className="mr-4 mt-1 h-6 w-6"
            />
            Q5WF+H93, Rue Kouttab Ouazir, Tunis
          </p>
          <p className="text-xl font-light">
            <img src={phone} alt="phone" className="inline-flex h-6 w-6" /> +216
            25934901
          </p>
          <p className="text-xl font-light">
            <img
              src={envelope}
              alt="envelope"
              className="inline-flex h-6 w-6"
            />{" "}
            dcevr.v1@gmail.com
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Liens rapides</p>
            <div className="h-0.5 w-24 rounded-full bg-primary" />
          </div>
          <div className="flex flex-col gap-y-2">
            <Link to="/playlists">
              <p className="text-xl font-light">
                <span className="text-primary">⮞</span> Playlists
              </p>
            </Link>
            <Link to="/ecomap">
              <p className="text-xl font-light ">
                <span className="text-primary">⮞</span> Eco map
              </p>
            </Link>
            <Link to="/blog">
              <p className="text-xl font-light ">
                <span className="text-primary">⮞</span> Blog
              </p>
            </Link>
            <Link to="/signaler">
              <p className="text-xl font-light ">
                <span className="text-primary">⮞</span> signaler un problème
              </p>
            </Link>
            <Link to="/apropos">
              <p className="text-xl font-light ">
                <span className="text-primary">⮞</span> À Propos
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Nos Derniers Blogs</p>
            <div className="h-0.5 w-24 rounded-full bg-primary" />
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-2">
                <img src={blogfooter} alt="blog" className="size-24" />
                <p className="text-xl font-light">
                  {" "}
                  importance de
                  <br />
                  recyclage en tunisie
                  <br />
                  <span className="text-primary">il ya 2 semaines</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={blogfooter} alt="blog" className="size-24" />
                <p className="text-xl font-light">
                  {" "}
                  importance de
                  <br />
                  recyclage en tunisie
                  <br />
                  <span className="text-primary">il ya 2 semaines</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
