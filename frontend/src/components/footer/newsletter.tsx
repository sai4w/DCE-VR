import mail from "@src/assets/icons/mail.svg";
import paperPlane from "@src/assets/icons/paperPlane.svg";
import { Link } from "react-router-dom";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import logo from "@src/assets/dce-vr.svg";
import instagram from "@src/assets/icons/instagram-outline.svg";
import facebook from "@src/assets/icons/facebook-outline.svg";
import twitter from "@src/assets/icons/twitter-outline.svg";

const socials: { icon: string; link: string }[] = [
  {
    icon: instagram,
    link: "https://www.instagram.com",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com",
  },
  {
    icon: twitter,
    link: "https://www.twitter.com",
  },
];

export const Newsletter = () => {
  return (
    <div className="h-fit w-full bg-[url(./assets/images/bg-footer.png)] bg-cover py-8">
      <div className="container mx-auto flex justify-between py-16 max-md:flex-col max-md:items-center max-md:gap-8">
        <img src={logo} alt="logo" className="h-14 " />
        <div className="relative h-fit">
          <img src={mail} alt="mail" className="absolute left-3 top-3 h-6" />
          <Input
            placeholder="entrer your email"
            className="rounded-md px-12 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:w-[500px]"
          />
          <Button
            asChild
            className="h-6 bg-transparent p-0 shadow-none hover:bg-transparent active:scale-110"
          >
            <img
              src={paperPlane}
              alt="send"
              className="absolute right-4 top-3 h-6 text-primary"
            />
          </Button>
        </div>
        <div className="flex items-center gap-x-16 md:gap-x-10 ">
          {socials.map((social) => (
            <Link to={social.link} key={social.link}>
              <img src={social.icon} alt="social" className="h-8 md:h-12" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
