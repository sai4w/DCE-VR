import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/footer";
import { PostDetails } from "@src/components/post/post-details";
import { PostPreview } from "@src/components/post/post-preview";
import { usePost } from "@src/hooks/usePost";
import { User, Post } from "@src/types";
import { createContext } from "react";
import { Navigate, useParams } from "react-router-dom";

export const PostContext = createContext<User & Post>(undefined!);
const PostPage = () => {
  const { id } = useParams();
  const { user, post, error, loading } = usePost(id!);

  if (loading) return <div>Loading...</div>;
  if (error) return <Navigate to="/404" replace />;
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <PostContext.Provider value={{ ...user!, ...post! }}>
          <PostPreview />
          <PostDetails />
        </PostContext.Provider>
      </section>
      <Footer />
    </div>
  );
};

export default PostPage;
