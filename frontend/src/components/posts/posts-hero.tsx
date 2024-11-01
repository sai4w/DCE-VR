import crossArrow from "@src/assets/icons/crossArrows.svg";
import aroundTheWorld from "@src/assets/icons/aroundTheWorld.svg";
import recycle from "@src/assets/icons/recycle.svg";
import { BannerWrapper } from "../bannerWrapper";
import echangeBanner from "@src/assets/images/echangeBanner.png";
import { AnimatedButton } from "../animatedButton";
export const PostsHero = () => {
  return (
    <BannerWrapper img={echangeBanner}>
      <div className="container flex h-full flex-col items-center justify-between gap-8 py-10 text-center uppercase">
        <p className="text-shadow font-integral text-5xl font-bold text-white xl:text-[74px]">
          Échangez, Partagez, Agissez !
        </p>
        <div className="flex w-full justify-around">
          <img
            src={crossArrow}
            alt="crossArrow"
            className="scale-90 duration-500 hover:rotate-180"
          />
          <img
            src={aroundTheWorld}
            alt="aroundTheWorld"
            className="scale-90 duration-500 hover:rotate-180"
          />
          <img
            src={recycle}
            alt="recycle"
            className="scale-90 duration-1000 hover:rotate-[360deg]"
          />
        </div>
        <p className="text-shadow font-integral text-3xl font-bold text-white xl:text-6xl">
          Éco Matériel : Rendez-vous Vert !
        </p>
        <AnimatedButton href="/poster" label="POSTER UNE ANNONCE" />
      </div>
    </BannerWrapper>
  );
};
