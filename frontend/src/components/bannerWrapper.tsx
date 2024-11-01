interface BannerWrapperProps {
  children: React.ReactNode;
  img: string;
  filter?: string;
}
export const BannerWrapper = ({
  children,
  img,
  filter = "filter-gradient",
}: BannerWrapperProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="relative flex h-full flex-col items-center justify-center bg-cover bg-center shadow-lg"
    >
      <div className={`h-full w-full ${filter}`}>{children}</div>
    </div>
  );
};
