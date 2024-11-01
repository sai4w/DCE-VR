import { Button } from "@components/ui/button";
import google from "@src/assets/icons/google.svg";
import facebook from "@src/assets/icons/facebook.svg";
interface SocialButtonsProps {
  loading?: boolean;
}
export const SocialButtons = ({ loading }: SocialButtonsProps) => {
  return (
    <div className="flex justify-evenly">
      <Button
        type="button"
        variant={"secondary"}
        className="py-8 px-6 rounded-xl bg-white shadow-lg"
        disabled={loading}
      >
        <img src={google} alt="google" className="scale-110" />
      </Button>
      <Button
        type="button"
        variant={"secondary"}
        className="py-8 px-6 rounded-xl bg-white shadow-lg"
        disabled={loading}
      >
        <img src={facebook} alt="facebook" className="scale-125" />
      </Button>
    </div>
  );
};
