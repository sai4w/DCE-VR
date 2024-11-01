import { Post } from "@src/types";
import { MyPostCard } from "./mesposts-myPostCard";

interface MesPostsListProps {
  myPosts: Post[];
  postIndex: number;
  handlePostChange: (newIndex: number) => void;
}
export const MesPostsList = ({
  handlePostChange,
  myPosts,
  postIndex,
}: MesPostsListProps) => {
  return (
    <div className="h-fit max-h-[calc(100vh-100px)] w-3/12 flex-none space-y-4 overflow-y-auto rounded-lg  bg-whiteR p-1 scrollbar-thin scrollbar-track-primary/10 scrollbar-thumb-primary/60 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-corner-rounded-full">
      {myPosts.map((post, index) => (
        <MyPostCard
          key={index}
          post={post}
          isSelected={postIndex === index}
          setSelected={() => handlePostChange(index)}
        />
      ))}
    </div>
  );
};
