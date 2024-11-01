import { BannerWrapper } from "@components/bannerWrapper";
import echangeBanner from "@src/assets/images/echangeBanner.png";
export const PosterHero = () => {
  return (
    <BannerWrapper img={echangeBanner}>
      <div className="container flex h-full flex-col items-center justify-between gap-8 py-10 text-center uppercase">
        <p className="text-shadow py-24 font-integral text-5xl font-bold text-white xl:text-8xl">
          Nouveau Poste
        </p>
      </div>
    </BannerWrapper>
  );
};
