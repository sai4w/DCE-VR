import { Rating } from "@components/Rating";
import { Post } from "@src/types";
import { useNavigate } from "react-router-dom";
interface ProductProps {
  post: Post;
}
export const PostCard = ({ post }: ProductProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-80 w-fit flex-col justify-between overflow-hidden border-2 border-stone-300 bg-white">
      <img
        src={post.images[0]}
        alt={post.title}
        className="mx-auto h-3/5 w-full select-none object-cover object-center  duration-150 hover:scale-105"
        onClick={() => navigate(`/post/${post._id}`)}
      />
      <div className="flex h-2/5 flex-col justify-between space-y-1 px-5 py-4">
        <h1 className="w-48 overflow-hidden text-ellipsis text-xl font-semibold">
          {post.title}
        </h1>
        <Rating
          rating={post.rating}
          titled
          disableHover
          size="size-5 md:size-6"
        />
        <p className="text-2xl font-semibold">{post.price.day}/J</p>
      </div>
    </div>
  );
};
