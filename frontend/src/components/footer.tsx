import { Copyright } from "./footer/copyright";
import { FooterContent } from "./footer/footerContent";
import { Newsletter } from "./footer/newsletter";

export const Footer = () => {
  return (
    <div className="h-fit w-full">
      <Newsletter />
      <FooterContent />
      <Copyright />
    </div>
  );
};
