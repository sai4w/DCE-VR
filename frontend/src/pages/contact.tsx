import { Navbar } from "@src/components/Navbar";
import { ContactContent } from "@src/components/contact/contact-content";
import { ContactHero } from "@src/components/contact/contact-hero";
import { Footer } from "@src/components/footer";

const ContactPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <section className="h-fit w-full">
        <ContactHero />
        <ContactContent />
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
