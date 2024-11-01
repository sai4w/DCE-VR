import { BannerWrapper } from "../bannerWrapper";
import pod from "@src/assets/images/bg-footer.png";

export const BlogHero = () => {
  return (
    <BannerWrapper img={pod}>
      <div className="container flex h-full flex-col items-center justify-between gap-8 py-10 text-center uppercase">
        <p className="text-shadow py-16 font-integral text-5xl font-bold text-white xl:text-7xl">
          Blog
        </p>
      </div>
    </BannerWrapper>
  );
};
