import { Navbar } from "@src/components/Navbar";
import { Copyright } from "@src/components/footer/copyright";
import { FooterContent } from "@src/components/footer/footerContent";
import { NotFound } from "@src/components/notFound";

const NotFoundPage = () => {
  return (
    <div className="h-full w-full bg-whiteR">
      <Navbar />
      <section className="flex h-fit w-full flex-col">
        <NotFound />
      </section>
      <div className="h-fit w-full">
        <FooterContent />
        <Copyright />
      </div>
    </div>
  );
};

export default NotFoundPage;
