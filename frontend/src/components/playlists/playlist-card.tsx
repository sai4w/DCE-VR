import { cn } from "@src/lib/utils";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

interface PlaylistCardProps {
  img: string;
  label: string;
  href: string;
  oriontation?: "ltr" | "rtl";
}
export const PlaylistCard = ({
  img,
  label,
  href,
  oriontation = "ltr",
}: PlaylistCardProps) => {
  const bg =
    oriontation == "ltr" ? "bg-gradient-to-r" : "bg-gradient-to-l items-end";

  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="relative flex h-fit w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-lg"
    >
      <div
        className={cn(
          "flex h-full w-full flex-col bg-opacity-90 from-[#0BBA72] to-[#18C8C8]/30 px-24 py-40",
          bg,
        )}
      >
        <span className="font-integral text-[110px] font-bold text-white">
          {label}
        </span>
        <Button
          className="relative w-fit rounded-lg border bg-transparent px-28 py-6 text-lg font-medium hover:bg-white hover:text-primary"
          asChild
        >
          <Link to={href}>
            Consulter
            <ArrowRightIcon className="absolute right-4 h-6 w-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
