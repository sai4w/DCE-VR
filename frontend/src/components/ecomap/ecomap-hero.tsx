import { BannerWrapper } from "../bannerWrapper";
import ecomapBanner from "@src/assets/images/ecomapBanner.png";
import spreyBoy from "@src/assets/icons/spreyBoy.svg";
import questioning from "@src/assets/icons/questioning.svg";
import outlineMarker from "@src/assets/icons/outlineMarker.svg";
export const EcoMapHero = () => {
  return (
    <BannerWrapper img={ecomapBanner}>
      <div className="container flex h-full flex-col items-center justify-between gap-4 py-10 text-center uppercase">
        <p className="text-shadow font-integral text-5xl font-bold text-white xl:text-7xl">
          Explorez notre carte
        </p>
        <div className="flex w-full items-center justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <img
              src={spreyBoy}
              alt="spreyBoy"
              className="size-36 transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={questioning}
              alt="questioning"
              className="size-40 transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={outlineMarker}
              alt="outlineMarker"
              className="size-36 transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
        <p className="text-shadow pb-4 font-integral text-5xl font-bold text-white xl:text-7xl">
          découvrez un monde durable
        </p>
      </div>
    </BannerWrapper>
  );
};
