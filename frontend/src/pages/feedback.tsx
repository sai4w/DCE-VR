import { Navbar } from "@src/components/Navbar";
import { FeedbackContent } from "@src/components/feedback/feedback-content";
import { Footer } from "@src/components/footer";

const FeedbackPage = () => {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <section className="h-fit w-full">
        <FeedbackContent />
      </section>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
