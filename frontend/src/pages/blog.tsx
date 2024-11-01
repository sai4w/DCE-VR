import { Navbar } from "@src/components/Navbar";
import { BlogContent } from "@src/components/blog/blog-content";
import { BlogHero } from "@src/components/blog/blog-hero";
import { Footer } from "@src/components/footer";

const BlogPage = () => {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />

      <section className="h-fit w-full">
        <BlogHero />
        <BlogContent />
      </section>
      <Footer />
    </div>
  );
};
export default BlogPage;
