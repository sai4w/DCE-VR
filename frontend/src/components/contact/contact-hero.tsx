import { BannerWrapper } from "../bannerWrapper";
import apropos from "@src/assets/images/apropos/aproposBanner.png";

export const ContactHero = () => {
  return (
    <BannerWrapper img={apropos}>
      <div className="container flex h-full flex-col items-center justify-between gap-8 py-10 text-center uppercase">
        <p className="text-shadow py-16 font-integral text-5xl font-bold text-white xl:text-7xl">
          Contact
        </p>
      </div>
    </BannerWrapper>
  );
};
