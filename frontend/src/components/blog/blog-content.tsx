import { BreadcrumbUI } from "../BreadcrumbUI";
import { BlogCard } from "./blog-card";
import { Sidebar } from "./blog-sidebar";

export const BlogContent = () => {
  const path = [
    { path: "/", name: "Accueil" },
    { path: "", name: "Blog" },
  ];
  return (
    <div className="container my-8 flex w-full flex-1 flex-col justify-start gap-8 px-2">
      <BreadcrumbUI path={path} />
      <div className="flex gap-20 py-4">
        <div className="flex flex-col gap-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
