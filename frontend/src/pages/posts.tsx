import { Footer } from "@components/footer";
import { Navbar } from "@src/components/Navbar";
import { PostsContent } from "@src/components/posts/posts-content";
import { PostsHero } from "@src/components/posts/posts-hero";

const PostsPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <PostsHero />
        <PostsContent />
      </section>
      <Footer />
    </div>
  );
};
export default PostsPage;
