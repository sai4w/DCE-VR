interface EcoMapHoverCardProps {
  img: string;
  style: {
    top: string;
    right: string;
  };
}
export const EcoMapHoverCard = ({ style }: EcoMapHoverCardProps) => {
  return (
    <div
      style={{ top: style.top, right: style.right }}
      className="absolute z-50 hidden h-36 w-80 -translate-y-1/2 translate-x-full transition-all delay-500 duration-1000 peer-hover:block"
    ></div>
  );
};
