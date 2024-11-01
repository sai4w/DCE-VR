import { Rating } from "@components/Rating";
import { Post } from "@src/types";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
interface ProductProps {
  post: Post;
}
export const MyRentCard = ({ post }: ProductProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-80 w-full flex-col justify-between overflow-hidden border-2 border-stone-300 bg-white">
        <img
          src={post.images[0]}
          alt={post.title}
          className="mx-auto h-3/5 w-full select-none object-cover object-center  duration-150 hover:scale-105"
          onClick={() => navigate(`/post/${post._id}`)}
        />
        <div className="flex h-2/5 flex-col justify-between space-y-1 px-5 py-4">
          <h1 className="w-full overflow-hidden text-ellipsis text-xl font-semibold">
            {post.title}
          </h1>
          <Rating rating={0} titled />
          <p className="text-2xl font-semibold">{post.price.day}/J</p>
        </div>
      </div>
      <div className="flex w-full justify-between border-x-2 border-b-2 border-stone-300 bg-white px-5 py-2">
        {post.status === "actif" ? (
          <div className="rounded-full bg-primary px-6 py-2 text-3xl font-medium text-white">
            {post.status}
          </div>
        ) : post.reservation[0].disponibility === "attendant" ? (
          <div className="rounded-full bg-[#FFC92E] px-6 py-2 text-3xl font-medium text-white">
            {post.reservation[0].disponibility}
          </div>
        ) : post.reservation[0].disponibility === "arrivage" ? (
          <div className="rounded-full bg-[#2D77AD] px-6 py-2 text-3xl font-medium text-white">
            {post.reservation[0].disponibility}
          </div>
        ) : (
          <div className="rounded-full bg-[#EF5533] px-6 py-2 text-3xl font-medium text-white">
            {post.reservation[0].disponibility}
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <DotsHorizontalIcon className="size-12 text-stone-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>suivi</DropdownMenuItem>
            <DropdownMenuItem>annuler</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
