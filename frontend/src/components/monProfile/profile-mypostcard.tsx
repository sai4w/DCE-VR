import { Rating } from "@components/Rating";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Post } from "@src/types";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
interface ProductProps {
  post: Post;
  index: number;
}
export const MyPostCard = ({ post, index }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-80 w-full flex-col justify-between overflow-hidden border-2 border-stone-300 bg-white">
        <img
          src={post.images[0]}
          alt={post.title}
          className="mx-auto h-3/5 w-full select-none object-scale-down object-center duration-150 hover:scale-105"
          onClick={() => navigate(`/post/${post._id}`)}
        />
        <div className="flex flex-col justify-between space-y-1 px-5 py-4">
          <h1 className="h-8 overflow-hidden text-ellipsis text-xl font-semibold">
            {post.title}
          </h1>
          <Rating rating={0} titled />
          <p className="text-2xl font-semibold">{post.price.day}/J</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between border-x-2 border-b-2 border-stone-300 bg-white px-5 py-2">
        {post.status === "dispo" ? (
          <div className="rounded-full bg-primary px-6 py-2 text-3xl font-medium text-white">
            {post.status}
          </div>
        ) : post.status === "annulé" ? (
          <div className="rounded-full bg-[#EF5533] px-6 py-2 text-3xl font-medium text-white">
            {post.status}
          </div>
        ) : (
          <div className="rounded-full bg-[#FFC92E] px-6 py-2 text-3xl font-medium text-white">
            {post.status}
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <DotsHorizontalIcon className="size-12 text-stone-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link to={"/mesposts/" + index}>
              <DropdownMenuItem>suivi</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>annuler</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
