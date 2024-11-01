import { PaginationUI } from "@src/components/PaginationUI";
import { Post } from "@src/types";
import { usePosts } from "@src/hooks/usePosts";
import { PostCard } from "./postCard";

export const PostList = () => {
  const { posts, error, loading } = usePosts();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <div className="flex flex-1 flex-col justify-between gap-8 px-2">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between truncate">
            <h1 className="text-4xl font-bold">Electronique</h1>
            <p className="text-xl font-medium tracking-wide text-stone-500">
              1-{posts.length} du {posts.length} produits
            </p>
          </div>
          <div className="grid grid-cols-1 items-center justify-evenly gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post: Post, i) => (
              <PostCard key={i} post={post} />
            ))}
          </div>
        </div>
        <PaginationUI />
      </div>
    </>
  );
};
