import { BannerWrapper } from "../bannerWrapper";
import signalBanner from "@src/assets/images/signalBanner.png";
import spreyBoy from "@src/assets/icons/spreyBoy.svg";
import questioning from "@src/assets/icons/questioning.svg";
import outlineMarker from "@src/assets/icons/outlineMarker.svg";
import cleaner from "@src/assets/icons/cleaner.svg";
import { AnimatedButton } from "../animatedButton";
export const SignalsHero = () => {
  return (
    <BannerWrapper img={signalBanner}>
      <div className="container flex h-full flex-col items-center justify-between gap-8 py-16 text-center uppercase">
        <p className="text-shadow font-integral text-5xl font-bold text-white xl:text-[62px]">
          votre quartier fait LA différence !
        </p>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-shadow font-integral text-4xl font-bold text-white xl:text-5xl">
              Capturez
            </p>
            <img
              src={spreyBoy}
              alt="spreyBoy"
              className="transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-shadow font-integral text-4xl font-bold text-white xl:text-5xl">
              Signaler
            </p>
            <img
              src={questioning}
              alt="questioning"
              className="transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-shadow font-integral text-4xl font-bold text-white xl:text-5xl">
              Localizer
            </p>
            <img
              src={outlineMarker}
              alt="outlineMarker"
              className="transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-shadow font-integral text-4xl font-bold text-white xl:text-5xl">
              Nettoyer
            </p>
            <img
              src={cleaner}
              alt="cleaner"
              className="transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
        <AnimatedButton href="/signaler" label="Signaler un dechet" />
      </div>
    </BannerWrapper>
  );
};
