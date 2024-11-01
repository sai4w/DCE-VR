import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { PostList } from "./posts-list";
import { PostsFilter } from "./posts-filter";

export const PostsContent = () => {
  const path = [
    { path: "/", name: "Accueil" },
    { path: "", name: "Eco Matériel" },
  ];
  return (
    <div className="container my-8 flex justify-between max-lg:flex-wrap max-lg:space-y-4">
      <div className="flex h-full w-full flex-col justify-start gap-8 lg:max-w-[365px]">
        <div className="flex h-10 items-end justify-between">
          <BreadcrumbUI path={path} />
        </div>
        <PostsFilter />
      </div>
      <PostList />
    </div>
  );
};
